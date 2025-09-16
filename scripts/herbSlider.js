// --- Modern 2-card Herb Slider using herbs from shop.js ---

// Pick 5+ herbs from shop.js (update image paths if needed)
const herbs = [
    {
        headline: "Cure for Diabetes",
        img: "images/Ha2XcQG3RDu5mXpqJgq4gn-1600-80.webp",
        desc: "Bitter Leaf helps lower blood sugar and fights inflammation. Trusted for diabetes management.",
        link: "shop.html#bitter-leaf"
    },
    {
        headline: "Immunity & Viral Defense",
        img: "images/irish-moss-2.webp",
        desc: "Irish Moss boosts immunity and helps fight viruses. Perfect for overall wellness.",
        link: "shop.html#irish-moss"
    },
    {
        headline: "Skin & Detox Remedy",
        img: "images/Neem_tree_leaves.webp",
        desc: "Neem Leaves clear skin and detox the body. Used for infections and skin health.",
        link: "shop.html#neem-leaves"
    },
    {
        headline: "Total Body Nutrition",
        img: "images/moringa-870x455.webp",
        desc: "Moringa is packed with nutrients and antioxidants. Supports energy and immune health.",
        link: "shop.html#moringa"
    },
    {
        headline: "Cure for Inflammation",
        img: "images/Curcuma_longa_roots.webp",
        desc: "Turmeric reduces inflammation and supports liver health. Great for joint pain.",
        link: "shop.html#turmeric"
    },
    {
        headline: "Digestive Remedy",
        img: "images/Pfefferminze_natur_peppermint3.webp",
        desc: "Peppermint soothes digestion and relieves bloating. Ideal after meals.",
        link: "shop.html#peppermint"
    }
];

let herbCurrent = 0;
let herbInterval;

function showHerbs(startIndex, transition = true) {
    const slider = document.getElementById('herb-slider');
    const cards = [];
    for (let i = 0; i < 2; i++) {
        const idx = (startIndex + i) % herbs.length;
        const h = herbs[idx];
        cards.push(`
            <div class="herb-slide-card${transition ? ' slide-in' : ''}">
                <h3 class="herb-slide-headline">${h.headline}</h3>
                <img src="${h.img}" alt="${h.headline}">
                <p>${h.desc}</p>
                <a href="${h.link}" class="shop-now-btn">Shop Now</a>
            </div>
        `);
    }
    slider.innerHTML = cards.join('');
}

function nextHerb() {
    herbCurrent = (herbCurrent + 2) % herbs.length;
    showHerbs(herbCurrent);
}

function prevHerb() {
    herbCurrent = (herbCurrent - 2 + herbs.length) % herbs.length;
    showHerbs(herbCurrent);
}

function startHerbAutoSlide() {
    herbInterval = setInterval(nextHerb, 5000);
}

function stopHerbAutoSlide() {
    clearInterval(herbInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    showHerbs(herbCurrent);

    document.getElementById('prevHerb').onclick = () => {
        stopHerbAutoSlide();
        prevHerb();
        startHerbAutoSlide();
    };
    document.getElementById('nextHerb').onclick = () => {
        stopHerbAutoSlide();
        nextHerb();
        startHerbAutoSlide();
    };

    startHerbAutoSlide();
});