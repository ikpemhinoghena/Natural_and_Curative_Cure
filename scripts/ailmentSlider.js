const ailments = [
    {
        img: "imgs/herbs/lupus-remedy.jpg",
        title: "Natural Support for Lupus",
        desc: "Our specially formulated turmeric and ginger blend helps reduce inflammation and support immune system balance for those managing lupus symptoms.",
        link: "shop.html#lupus-blend"
    },
    {
        img: "imgs/herbs/digestive-aid.jpg",
        title: "Digestive Comfort Blend",
        desc: "Peppermint, fennel, and ginger work in harmony to soothe digestive discomfort, reduce bloating, and promote healthy digestion.",
        link: "shop.html#digestive-blend"
    },
    {
        img: "imgs/herbs/sleep-support.jpg",
        title: "Restful Sleep Formula",
        desc: "Our chamomile, lavender, and valerian root combination promotes relaxation and supports healthy sleep patterns without side effects.",
        link: "shop.html#sleep-blend"
    }
];

let ailmentCurrent = 0;
let ailmentInterval;

function showAilment(index, transition = true) {
    const slider = document.getElementById('ailment-slider');
    const a = ailments[index];
    slider.innerHTML = `
        <div class="ailment-slide${transition ? ' slide-in' : ''}">
            <div class="slide-image">
                <img src="${a.img}" alt="${a.title}">
            </div>
            <div class="slide-content">
                <h3>${a.title}</h3>
                <p>${a.desc}</p>
                <a href="${a.link}" class="btn btn-secondary">View Remedy</a>
            </div>
        </div>
    `;
}

function nextAilment() {
    ailmentCurrent = (ailmentCurrent + 1) % ailments.length;
    showAilment(ailmentCurrent);
}

function prevAilment() {
    ailmentCurrent = (ailmentCurrent - 1 + ailments.length) % ailments.length;
    showAilment(ailmentCurrent);
}

function startAilmentAutoSlide() {
    ailmentInterval = setInterval(() => {
        nextAilment();
    }, 4000); // 4 seconds per slide
}

function stopAilmentAutoSlide() {
    clearInterval(ailmentInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showAilment(ailmentCurrent);

    document.getElementById('prevAilment').onclick = () => {
        stopAilmentAutoSlide();
        prevAilment();
        startAilmentAutoSlide();
    };
    document.getElementById('nextAilment').onclick = () => {
        stopAilmentAutoSlide();
        nextAilment();
        startAilmentAutoSlide();
    };

    startAilmentAutoSlide();
});