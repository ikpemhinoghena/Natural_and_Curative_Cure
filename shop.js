document.addEventListener('DOMContentLoaded', () => {
  const herbs = [
    {
      name: "Soursop (Graviola)",
      image: "images/soursop.jpg",
      bio: "Rich in antioxidants, traditionally used for immune support. Studied for potential cancer-fighting properties (not clinically approved).",
      cures: ["Inflammation", "Immune weakness", "Cellular health"]
    },
    {
      name: "Neem Leaves",
      image: "images/neem-leaves.jpg",
      bio: "Powerful antibacterial and antiviral herb supporting detox and skin health.",
      cures: ["Skin infections", "Liver detox", "Parasitic infections"]
    },
    {
      name: "Garlic",
      image: "images/garlic.jpg",
      bio: "Natural antibiotic and immune booster, supporting cardiovascular health.",
      cures: ["High blood pressure", "Infections", "Heart disease prevention"]
    },
    {
      name: "Turmeric",
      image: "images/turmeric.jpg",
      bio: "High in curcumin, reducing inflammation and supporting joint and liver health.",
      cures: ["Arthritis", "Liver issues", "Heart disease risk"]
    },
    {
      name: "Milk Thistle",
      image: "images/milk-thistle.jpg",
      bio: "Protects liver cells, promotes detoxification, and aids gallbladder health.",
      cures: ["Hepatitis", "Cirrhosis", "Liver detox"]
    },
    {
      name: "Irish Moss",
      image: "images/irish-moss.jpg",
      bio: "Nutrient-rich seaweed that supports thyroid and gut health, replenishing minerals.",
      cures: ["Thyroid imbalance", "Digestive disorders", "Inflammation"]
    },
    {
      name: "Echinacea",
      image: "images/echinacea.jpg",
      bio: "Immune-boosting flower known to reduce cold symptoms and fight infections.",
      cures: ["Colds", "Flu", "Respiratory infections"]
    },
    {
      name: "Moringa",
      image: "images/moringa.jpg",
      bio: "The 'miracle tree' packed with nutrients and antioxidants for overall health.",
      cures: ["Malnutrition", "Fatigue", "Blood sugar imbalance"]
    },
    {
      name: "Ashwagandha",
      image: "images/ashwagandha.jpg",
      bio: "Adaptogenic root that reduces stress and supports hormone balance.",
      cures: ["Stress", "Anxiety", "Low energy"]
    },
    {
      name: "Ginseng",
      image: "images/ginseng.jpg",
      bio: "Energy-boosting root used to enhance stamina and immunity.",
      cures: ["Chronic fatigue", "Low immunity", "Mental fog"]
    },
    {
      name: "Holy Basil (Tulsi)",
      image: "images/holy-basil.jpg",
      bio: "Sacred plant in Ayurveda known for reducing stress and improving respiratory health.",
      cures: ["Asthma", "Cough", "Stress"]
    },
    {
      name: "Licorice Root",
      image: "images/licorice-root.jpg",
      bio: "Soothes sore throat, aids digestion, and supports adrenal health.",
      cures: ["Sore throat", "Heartburn", "Adrenal fatigue"]
    },
    {
      name: "Ginkgo Biloba",
      image: "images/ginkgo-biloba.jpg",
      bio: "Improves circulation, boosts brain function, and supports memory.",
      cures: ["Memory loss", "Poor circulation", "Cognitive decline"]
    },
    {
      name: "Oregano",
      image: "images/oregano.jpg",
      bio: "Aromatic herb with antiviral and antibacterial properties.",
      cures: ["Viral infections", "Cold sores", "Bronchitis"]
    },
    {
      name: "Peppermint",
      image: "images/peppermint.jpg",
      bio: "Cooling herb that aids digestion and relieves headaches.",
      cures: ["Indigestion", "Migraines", "Sinus congestion"]
    },
    {
      name: "Black Seed (Nigella Sativa)",
      image: "images/black-seed.jpg",
      bio: "Powerful seed used traditionally for a wide range of health conditions.",
      cures: ["Asthma", "Hypertension", "Immune weakness"]
    }
  ];

  const container = document.getElementById('shopContainer');

  herbs.forEach(herb => {
    const card = document.createElement('div');
    card.className = 'shop-card';
    card.innerHTML = `
      <img src="${herb.image}" alt="${herb.name}" class="shop-image" />
      <div class="shop-info">
        <h2>${herb.name}</h2>
        <p>${herb.bio}</p>
        <ul class="herb-cures">
          ${herb.cures.map(cure => `<li>${cure}</li>`).join('')}
        </ul>
        <button class="btn-cart" data-herb='${JSON.stringify(herb)}'>Add to Cart</button>
      </div>
    `;
    container.appendChild(card);
  });

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElem = document.getElementById('cartCount');
    if (cartCountElem) cartCountElem.textContent = cart.length;
  }

  document.addEventListener('click', e => {
    if (e.target.classList.contains('btn-cart')) {
      const herb = JSON.parse(e.target.dataset.herb);
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(herb);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount();
      alert(`${herb.name} added to cart!`);
    }
  });

  updateCartCount();
});
