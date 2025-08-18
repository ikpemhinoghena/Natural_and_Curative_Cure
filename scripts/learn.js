// document.addEventListener('DOMContentLoaded', () => {
//   const herbs = [
//     {
//       name: "Aloe Vera",
//       image: "images/bellpepper.jpg",
//       bio: "Aloe Vera is a succulent plant known for its healing properties, especially for skin and digestive health.",
//       uses: ["Soothes burns", "Aids digestion", "Improves skin health"]
//     },
//     {
//       name: "Ginger",
//       image: "images/ginger.jpg",
//       bio: "Ginger is a flowering plant whose root is widely used as a spice and herbal medicine.",
//       uses: ["Reduces nausea", "Boosts immunity", "Relieves inflammation"]
//     },
//     {
//       name: "Turmeric",
//       image: "images/turmeric.jpg",
//       bio: "Turmeric is a spice from the root of the Curcuma longa plant, rich in curcumin with strong anti-inflammatory properties.",
//       uses: ["Reduces joint pain", "Improves brain function", "Boosts heart health"]
//     },
//     {
//       name: "Peppermint",
//       image: "images/peppermint.jpg",
//       bio: "Peppermint is an aromatic herb that aids digestion and provides a refreshing flavor.",
//       uses: ["Relieves headaches", "Aids digestion", "Soothes sore throat"]
//     },
//     {
//       name: "Chamomile",
//       image: "images/chamomile.jpg",
//       bio: "Chamomile is a daisy-like plant used for centuries as a natural remedy for various ailments.",
//       uses: ["Improves sleep", "Reduces stress", "Aids digestion"]
//     }
//   ];

//   const container = document.getElementById('herbsContainer');

//   herbs.forEach(herb => {
//     const card = document.createElement('div');
//     card.className = 'herb-card';
//     card.innerHTML = `
//       <img src="${herb.image}" alt="${herb.name}" class="herb-image" />
//       <div class="herb-info">
//         <h2>${herb.name}</h2>
//         <p>${herb.bio}</p>
//         <ul class="herb-uses">
//           ${herb.uses.map(use => `<li>${use}</li>`).join('')}
//         </ul>
//         <div class="herb-buttons">
//           <a href="herb-details.html?name=${encodeURIComponent(herb.name)}" class="btn-learn">Learn More</a>
//           <button class="btn-cart" data-herb="${herb.name}">Add to Cart</button>
//         </div>
//       </div>
//     `;
//     container.appendChild(card);
//   });

//   // Example Add to Cart functionality
//   document.querySelectorAll('.btn-cart').forEach(button => {
//     button.addEventListener('click', () => {
//       alert(`${button.dataset.herb} added to cart!`);
//       // Here we’ll later connect it to localStorage cart system
//     });
//   });
// });
// l




document.addEventListener('DOMContentLoaded', () => {
  const herbs = [
    {
      name: "Irish Moss",
      image: "images/bellpepper.jpg",
      bio: "Irish Moss, a nutrient-dense seaweed, supports thyroid and gut health. Cures inflammation and may help with joint pain and digestive disorders. Traditionally used for hydration and mineral replenishment.",
      uses: ["Boosts immunity", "Supports thyroid", "Promotes healthy skin"]
    },
    {
      name: "Soursop (Graviola)",
      image: "images/soursop.jpg",
      bio: "Soursop, also called Graviola, is rich in antioxidants and used in folk medicine. Cures inflammation and is studied for potential cancer-fighting properties in labs (not approved clinically).",
      uses: ["Reduces inflammation", "Antioxidant support", "May support immunity"]
    },
    {
      name: "Turmeric",
      image: "images/turmeric.jpg",
      bio: "Turmeric is a golden spice high in curcumin, known for anti-inflammatory effects. Cures joint stiffness and may aid in the management of liver or heart conditions.",
      uses: ["Reduces inflammation", "Supports heart health", "Promotes brain function"] /* :contentReference[oaicite:3]{index=3} */
    },
    {
      name: "Neem Leaves",
      image: "images/neem-leaves.jpg",
      bio: "Neem Leaf is a traditional antibacterial and antifungal herb with a long history. Cures skin infections and supports oral health and detoxification.",
      uses: ["Purifies blood", "Enhances dental hygiene", "Supports detox"]
    },
    {
      name: "Moringa",
      image: "images/moringa.jpg",
      bio: "Moringa, known as the 'miracle tree', is nutrient-rich and loaded with antioxidants. Cures fatigue and may assist in cholesterol or blood sugar regulation.",
      uses: ["Boosts energy", "Supports metabolism", "Rich in antioxidants"]
    },
    {
      name: "Ashwagandha",
      image: "images/ashwagandha.jpg",
      bio: "Ashwagandha is a powerful adaptogenic root used in Ayurvedic medicine. Cures stress-related fatigue and supports hormonal and immune balance.",
      uses: ["Reduces stress", "Enhances stamina", "Supports sleep"] /* :contentReference[oaicite:4]{index=4} */
    },
    {
      name: "Echinacea",
      image: "images/echinacea.jpg",
      bio: "Echinacea is a popular herb used to support immune function. Cures seasonal immune weakness and may reduce duration of colds.",
      uses: ["Boosts immunity", "Speeds recovery", "Reduces inflammation"]
    },
    {
      name: "Garlic",
      image: "images/garlic.jpg",
      bio: "Garlic is known for potent antimicrobial and cardiovascular benefits. Cures high blood pressure and may support liver health and infection resistance.",
      uses: ["Lowers blood pressure", "Anti‑infection", "Supports heart health"] /* :contentReference[oaicite:5]{index=5} */
    },
    {
      name: "Ginseng",
      image: "images/ginseng.jpg",
      bio: "Ginseng (Panax) is a traditional adaptogen prized for energy and immune boosting. Cures fatigue and enhances resistance to stress and viral infections.",
      uses: ["Boosts energy", "Improves immunity", "Supports mental clarity"] /* :contentReference[oaicite:6]{index=6} */
    },
    {
      name: "Oregano",
      image: "images/oregano.jpg",
      bio: "Oregano is a fragrant kitchen herb with antiviral compounds like carvacrol. Cures viral discomfort and may help with respiratory infections.",
      uses: ["Antiviral support", "Anti‑inflammatory", "Soothes respiratory issues"] /* :contentReference[oaicite:7]{index=7} */
    },


        {
      name: "Licorice Root",
      image: "images/licorice-root.jpg",
      bio: "Licorice Root is a sweet-tasting herb used in traditional medicine for centuries. Cures sore throats, eases digestive discomfort, and supports adrenal health.",
      uses: ["Soothes sore throat", "Aids digestion", "Supports adrenal glands"]
    },
    {
      name: "Milk Thistle",
      image: "images/milk-thistle.jpg",
      bio: "Milk Thistle contains silymarin, a compound known for protecting and repairing the liver. Cures toxin-related liver stress and supports gallbladder function.",
      uses: ["Protects liver", "Aids detox", "Supports gallbladder health"]
    },
    {
      name: "Holy Basil (Tulsi)",
      image: "images/holy-basil.jpg",
      bio: "Holy Basil, or Tulsi, is a sacred plant in Ayurveda. Cures respiratory issues, reduces stress, and supports immune resilience.",
      uses: ["Relieves respiratory issues", "Reduces stress", "Boosts immunity"]
    },
    {
      name: "Ginkgo Biloba",
      image: "images/ginkgo-biloba.jpg",
      bio: "Ginkgo Biloba is valued for its ability to improve circulation and brain function. Cures poor memory and supports healthy blood flow to extremities.",
      uses: ["Improves memory", "Enhances circulation", "Supports brain health"]
    },
    {
      name: "Peppermint",
      image: "images/peppermint.jpg",
      bio: "Peppermint is a cooling herb that soothes digestion and relaxes muscles. Cures indigestion, relieves headaches, and eases nasal congestion.",
      uses: ["Soothes digestion", "Relieves headaches", "Clears sinuses"]
    }

    // ... continue same pattern up to 50 items ...
  ];

  const container = document.getElementById('herbsContainer');
  herbs.forEach(herb => {
    const card = document.createElement('div');
    card.className = 'herb-card';
    card.innerHTML = `
      <img src="${herb.image}" alt="${herb.name}" class="herb-image" />
      <div class="herb-info">
        <h2>${herb.name}</h2>
        <p>${herb.bio}</p>
        <ul class="herb-uses">
          ${herb.uses.map(use => `<li>${use}</li>`).join('')}
        </ul>
        <div class="herb-buttons">
          <a href="herb-details.html?name=${encodeURIComponent(herb.name)}" class="btn-learn">Learn More</a>
          <button class="btn-cart" data-herb="${herb.name}">Add to Cart</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll('.btn-cart').forEach(button => {
    button.addEventListener('click', () => {
      alert(`${button.dataset.herb} added to cart!`);
    });
  });

  
});