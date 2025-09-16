const herbs = [
    {
        img: "images/apple.jpg",
        name: "Bitter Leaf",
        info: "Cure for diabetes, malaria, and high blood pressure."
    },
    {
        img: "images/herb2.jpg",
        name: "Soursop",
        info: "Effective for lupus, cancer, and boosting immunity."
    },
    {
        img: "images/herb3.jpg",
        name: "Neem Leaf",
        info: "Treats skin infections, ulcers, and detoxifies the body."
    },
    {
        img: "images/herb4.jpg",
        name: "Moringa",
        info: "Cure for diabetes, inflammation, and improves energy."
    },
    {
        img: "images/herb5.jpg",
        name: "Garlic",
        info: "Lowers cholesterol, fights infections, and supports heart health."
    },
    {
        img: "images/herb6.jpg",
        name: "Turmeric",
        info: "Reduces inflammation, supports joint health, and boosts immunity."
    },
    {
        img: "images/herb7.jpg",
        name: "Ginger",
        info: "Aids digestion, relieves nausea, and fights infections."
    },
    {
        img: "images/herb8.jpg",
        name: "Aloe Vera",
        info: "Heals skin, aids digestion, and boosts immune system."
    }
];

let current = 0;
let autoSlideInterval;

function showHerb(index, transition = true) {
    const slider = document.getElementById('herb-slider');
    const herb = herbs[index];
    slider.innerHTML = `
        <div class="herb-slide-card${transition ? ' slide-in' : ''}">
            <img src="${herb.img}" alt="${herb.name}">
            <h3>${herb.name}</h3>
            <p>${herb.info}</p>
            <a href="shop.html" class="shop-now-btn">Shop Now</a>
        </div>
    `;
}

function nextHerb() {
    current = (current + 1) % herbs.length;
    showHerb(current);
}

function prevHerb() {
    current = (current - 1 + herbs.length) % herbs.length;
    showHerb(current);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextHerb();
    }, 3500); // 3.5 seconds per slide
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showHerb(current);

    document.getElementById('prevHerb').onclick = () => {
        stopAutoSlide();
        prevHerb();
        startAutoSlide();
    };
    document.getElementById('nextHerb').onclick = () => {
        stopAutoSlide();
        nextHerb();
        startAutoSlide();
    };

    startAutoSlide();
});