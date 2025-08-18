document.addEventListener('DOMContentLoaded', () => {
  const herbs = [
    {
      name: "Irish Moss",
      image: "images/bellpepper.jpg",
      bio: "Irish Moss, a nutrient-dense seaweed, supports thyroid and gut health. Traditionally used for hydration and mineral replenishment.",
      uses: ["Boosts immunity", "Supports thyroid", "Promotes healthy skin"],
      benefit: "immunity"
    },
    {
      name: "Soursop (Graviola)",
      image: "images/soursop.jpg",
      bio: "Soursop is rich in antioxidants and studied for potential cancer-fighting properties in labs (not approved clinically).",
      uses: ["Reduces inflammation", "Antioxidant support", "May support immunity"],
      benefit: "immunity"
    },
    {
      name: "Turmeric",
      image: "images/turmeric.jpg",
      bio: "Turmeric is a golden spice high in curcumin, known for anti-inflammatory effects.",
      uses: ["Reduces inflammation", "Supports heart health", "Promotes brain function"],
      benefit: "heart"
    },
    {
      name: "Neem Leaves",
      image: "images/neem-leaves.jpg",
      bio: "Neem Leaf is a traditional antibacterial and antifungal herb.",
      uses: ["Purifies blood", "Enhances dental hygiene", "Supports detox"],
      benefit: "skin"
    },
    {
      name: "Moringa",
      image: "images/moringa.jpg",
      bio: "Moringa is nutrient-rich and loaded with antioxidants.",
      uses: ["Boosts energy", "Supports metabolism", "Rich in antioxidants"],
      benefit: "digestion"
    },
    {
      name: "Peppermint",
      image: "images/peppermint.jpg",
      bio: "Peppermint is a cooling herb that soothes digestion and relaxes muscles.",
      uses: ["Soothes digestion", "Relieves headaches", "Clears sinuses"],
      benefit: "digestion"
    }
    // 👉 add more herbs later if you want
  ];

  const container = document.getElementById('herbsContainer');
  const searchInput = document.getElementById('fruit-search');
  // const filterSelect = document.getElementById('benefit-filter'); // 🔴 commented filter select

  // Render function
  function renderHerbs(list) {
    container.innerHTML = ""; // clear old cards
    if (list.length === 0) {
      container.innerHTML = "<p>Seems the herbs not on the list, contact us and we'll get it to you!.</p>";
      return;
    }

    list.forEach(herb => {
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

    // Attach add-to-cart events again
    document.querySelectorAll('.btn-cart').forEach(button => {
      button.addEventListener('click', () => {
        alert(`${button.dataset.herb} added to cart!`);
      });
    });
  }

  // Filtering logic (search only, filter removed)
  function filterHerbs() {
    const searchTerm = searchInput.value.toLowerCase();
    // const selectedBenefit = filterSelect.value; // 🔴 filter skipped

    const filtered = herbs.filter(herb => {
      const matchesSearch =
        herb.name.toLowerCase().includes(searchTerm) ||
        herb.bio.toLowerCase().includes(searchTerm) ||
        herb.uses.some(use => use.toLowerCase().includes(searchTerm));

      // const matchesBenefit = selectedBenefit ? herb.benefit === selectedBenefit : true; // 🔴 filter skipped

      return matchesSearch; // 🔴 only search is used now
    });

    renderHerbs(filtered);
  }

  // Event listeners
  searchInput.addEventListener('input', filterHerbs);
  // filterSelect.addEventListener('change', filterHerbs); // 🔴 filter skipped

  // Initial render
  renderHerbs(herbs);
});