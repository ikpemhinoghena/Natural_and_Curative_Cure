document.addEventListener('DOMContentLoaded', () => {
  const herbs = [
    {
      name: "Irish Moss (Chondrus crispus)",
      image: "images/irish-moss-2.webp",
      bio: "Irish moss is a mineral-rich red seaweed that supports mucosal and immune health, with antiviral, anti-inflammatory and prebiotic properties used to support herpes, autoimmune inflammation (e.g., lupus), diabetes-related metabolic balance and skin health.",
      uses: [
        "Supports thyroid & mineral balance",
        "Strengthens immune and antiviral response",
        "Aids gut health and digestion (prebiotic)",
        "Helps manage blood sugar and cholesterol",
        "Soothes skin and supports healing"
      ],
      benefit: "immunity",
      caution: "High in iodine — avoid excess use if pregnant or on thyroid medication."
    },
    {
      name: "Sutherlandia (Cancer Bush)",
      image: "images/Lessertia_frutescens_1.webp",
      bio: "Sutherlandia is a South African tonic herb used traditionally during chronic illness — known for immune-modulating and anti-inflammatory properties to support energy, recovery and infection resistance.",
      uses: [
        "Modulates immune response (support for chronic illness)",
        "Calms inflammation and oxidative stress",
        "May aid blood sugar balance",
        "Supports appetite and energy during recovery",
        "Shows antiviral/antimicrobial activity in lab studies"
      ],
      benefit: "immunity",
      caution: "Contains L-canavanine — avoid if you have lupus/autoimmune conditions or during pregnancy; consult before using with ARVs."
    },
    {
      name: "Moringa oleifera (Miracle Tree)",
      image: "images/moringa-870x455.webp",
      bio: "Moringa is nutrient-dense and antioxidant-rich; used to boost immunity, regulate blood sugar, reduce inflammation and improve recovery and skin health.",
      uses: [
        "Helps regulate blood sugar (diabetes support)",
        "Reduces inflammation and oxidative stress",
        "Boosts immunity and energy",
        "Supports heart and cholesterol health",
        "Promotes wound healing and skin care"
      ],
      benefit: "metabolic health",
      caution: "Can lower blood sugar and blood pressure; monitor if on medication and avoid high doses in pregnancy."
    },
    {
      name: "Nigella sativa (Black Seed)",
      image: "images/Nigella_ sativa.webp",
      bio: "Black Seed (Nigella) is a traditional immune and metabolic tonic rich in thymoquinone, used for antiviral support, inflammation control and blood sugar balance.",
      uses: [
        "Boosts immunity and antiviral response",
        "Helps regulate blood sugar (diabetes support)",
        "Reduces inflammation and autoimmune flare-ups",
        "Supports respiratory health (asthma/allergies)",
        "Promotes liver and heart protection"
      ],
      benefit: "immunity",
      caution: "May lower blood sugar and blood pressure; avoid high doses during pregnancy."
    },
    {
      name: "Artemisia annua (Sweet Wormwood)",
      image: "images/sweet-wormwood-artemisia-annua-primary-v2.webp",
      bio: "Artemisia annua is the natural source of artemisinin (antimalarial); traditionally used for fevers and infections and studied for antiviral and anti-inflammatory activity.",
      uses: [
        "Powerful antimalarial support (artemisinin source)",
        "Shows antiviral activity in studies",
        "Reduces inflammation and oxidative stress",
        "Traditionally used for fevers and infections",
        "Investigated for anticancer potential in labs"
      ],
      benefit: "immunity",
      caution: "Not a replacement for prescribed malaria/HIV drugs; avoid during pregnancy and high doses due to possible liver toxicity."
    },
    {
      name: "Artemisia afra (African Wormwood)",
      image: "images/Artemisia afra (African Wormwood).avif",
      bio: "African Wormwood (Umhlonyane) is a trusted African herb for respiratory support, infections and immune boosting with antimicrobial and anti-inflammatory properties.",
      uses: [
        "Fights viral and bacterial respiratory infections",
        "Boosts immunity and reduces inflammation",
        "Relieves coughs, asthma and chest congestion",
        "Supports digestion and helps fight parasites",
        "Provides antioxidant protection"
      ],
      benefit: "immunity",
      caution: "Potent herb — avoid prolonged/high use in pregnancy."
    },
    {
      name: "Hypoxis hemerocallidea (African Potato)",
      image: "images/Hypoxis hemerocallidea (African Potato).webp",
      bio: "African Potato is a South African medicinal plant valued as an immune tonic with anti-inflammatory and antioxidant activity, traditionally used in HIV, cancer support and metabolic health.",
      uses: [
        "Strengthens immune system in chronic illness",
        "Reduces inflammation and joint pain",
        "Supports healthy blood sugar",
        "Provides antioxidant cell protection",
        "May support prostate and urinary health"
      ],
      benefit: "immunity",
      caution: "May interact with some medications; consult before use."
    },
    {
      name: "Turmeric (Curcuma longa)",
      image: "images/turmeric.jpg",
      bio: "Turmeric is a well-studied anti-inflammatory spice (curcumin) used to reduce inflammation, support metabolic health and protect cells.",
      uses: [
        "Reduces inflammation (autoimmune support)",
        "Supports metabolic & liver health",
        "Provides antioxidant protection",
        "May support joint and skin health",
        "Studied for anticancer effects"
      ],
      benefit: "inflammation",
      caution: "High doses may upset stomach or interact with blood thinners."
    },
    {
      name: "Neem Leaves (Azadirachta indica)",
      image: "images/neem-leaves.jpg",
      bio: "Neem leaf is a traditional antimicrobial and immune-support herb used for infections, skin issues and metabolic support.",
      uses: [
        "Antibacterial and antifungal action",
        "Supports blood sugar control",
        "Immune-support for chronic infections",
        "Promotes skin health and wound care",
        "Supports liver detoxification"
      ],
      benefit: "immunity",
      caution: "Not recommended in pregnancy; consult on dosing if on medication."
    },
    {
      name: "Peppermint",
      image: "images/peppermint.jpg",
      bio: "Peppermint soothes digestion, clears sinuses and eases headaches — a gentle supportive herb for symptom relief.",
      uses: [
        "Soothes digestion and reduces bloating",
        "Relieves headaches and tension",
        "Clears sinuses and eases congestion",
        "Calms nausea",
        "Topical relief for itch or mild skin irritation"
      ],
      benefit: "digestion",
      caution: "May trigger acid reflux in sensitive individuals."
    },

    // --- Newly added from the 20-list ---
    {
      name: "Prunus africana (African Cherry)",
      image: "images/prunierdafrique.webp",
      bio: "African Cherry (Prunus africana) is a traditional tree bark remedy prized for prostate and urinary health and for its anti-inflammatory and antioxidant effects.",
      uses: [
        "Supports prostate health and urinary flow",
        "Reduces inflammation and oxidative stress",
        "May support metabolic balance",
        "Provides antioxidant protection",
        "Used topically for wound support"
      ],
      benefit: "inflammation",
      caution: "Use bark extracts from sustainable sources; consult for hormone-sensitive conditions."
    },
    {
      name: "Catharanthus roseus (Madagascar Periwinkle)",
      image: "images/vecteezy_catharanthus-roseus-flower_40151788.webp",
      bio: "Madagascar Periwinkle contains powerful alkaloids (used by modern medicine in cancer drugs); traditionally used for infections and metabolic complaints — handle with care.",
      uses: [
        "Source of anticancer alkaloids (pharmaceutical use)",
        "Has antimicrobial properties in lab studies",
        "May offer immune supportive compounds",
        "Traditionally used for diabetes support",
        "Supports wound healing in folk use"
      ],
      benefit: "cancer support",
      caution: "Contains potent alkaloids — not for self-treatment of cancer; consult a clinician."
    },
    {
      name: "Kigelia africana (Sausage Tree)",
      image: "images/kigelia-africana.jpg",
      bio: "Kigelia (Sausage Tree) is used across Africa for skin infections, wound healing and traditional tumor remedies; shows antimicrobial and anti-inflammatory activity.",
      uses: [
        "Topical support for skin infections and wounds",
        "Shows anticancer activity in lab studies",
        "Has antimicrobial action for STIs and ulcers",
        "Reduces inflammation and swelling",
        "Supports skin health and healing"
      ],
      benefit: "skin",
      caution: "Internal use should be supervised; avoid without professional guidance."
    },
    {
      name: "Vernonia amygdalina (Bitter Leaf)",
      image: "images/vernonia-amygdalina.jpg",
      bio: "Bitter Leaf is a West African staple herb with evidence for antidiabetic, anti-malarial and anti-inflammatory effects — commonly eaten as a vegetable or taken as decoction.",
      uses: [
        "Helps lower blood sugar (diabetes support)",
        "Antimalarial and antiparasitic action",
        "Antimicrobial support for infections",
        "Reduces inflammation and oxidative stress",
        "Supports liver health and detox"
      ],
      benefit: "diabetes",
      caution: "Bitter taste — may affect liver enzymes; consult if on medication."
    },
    {
      name: "Annona muricata (Soursop / Graviola)",
      image: "images/soursop.jpg",
      bio: "Soursop is used traditionally against tumors and infections; lab studies show cytotoxic compounds (acetogenins) — supportive, not curative, and use with caution.",
      uses: [
        "Shows anticancer activity in lab studies",
        "Has antiviral and antiparasitic reports",
        "Reduces inflammation and pain",
        "Supports digestive health",
        "Provides antioxidant protection"
      ],
      benefit: "cancer support",
      caution: "High/long-term doses linked to neurological risks in some reports — avoid chronic high intake."
    },
    {
      name: "Garcinia kola (Bitter Kola)",
      image: "images/bitter-kola.jpg",
      bio: "Bitter Kola seed is used in West Africa as an antioxidant tonic with respiratory and liver protective uses and some evidence for metabolic benefits.",
      uses: [
        "Antioxidant and liver protective action",
        "Supports respiratory health and coughs",
        "May assist blood sugar regulation",
        "Antimicrobial and immune support",
        "Boosts energy and appetite"
      ],
      benefit: "metabolic health",
      caution: "Use moderately; consult if on diabetes or liver medications."
    },
    {
      name: "Ocimum sanctum (Holy Basil / Tulsi)",
      image: "images/tulsi.jpg",
      bio: "Holy Basil (Tulsi) is an adaptogen valued for stress resilience, immune support, antiviral activity and blood sugar balance.",
      uses: [
        "Adaptogen — reduces stress and supports immunity",
        "Antiviral and antimicrobial effects",
        "Helps regulate blood sugar",
        "Reduces inflammation",
        "Supports respiratory and mucosal health"
      ],
      benefit: "immunity",
      caution: "Avoid large doses in pregnancy; may lower blood sugar — monitor with meds."
    },
    {
      name: "Bidens pilosa",
      image: "images/bidens-pilosa.jpg",
      bio: "Bidens (Spanish Needle) is a common tropical herb used as food and medicine — studied for blood sugar regulation and anti-inflammatory effects.",
      uses: [
        "Helps improve glucose tolerance (diabetes support)",
        "Reduces inflammation and pain",
        "Antimicrobial and wound healing",
        "Supports blood pressure balance",
        "Provides antioxidant benefits"
      ],
      benefit: "diabetes",
      caution: "May interact with anticoagulants or diabetes meds — consult your provider."
    },
    {
      name: "Phyllanthus niruri (Stonebreaker)",
      image: "images/phyllanthus-niruri.jpg",
      bio: "Phyllanthus is a traditional herb for liver and kidney health with antiviral activity in lab studies (hepatitis, herpes) and supportive metabolic effects.",
      uses: [
        "Supports liver health and hepatitis care",
        "Shows antiviral activity (hepatic viruses, herpes in labs)",
        "Helps dissolve kidney stones historically",
        "Supports blood sugar balance",
        "Provides antioxidant and anti-inflammatory action"
      ],
      benefit: "liver/antiviral",
      caution: "Avoid during pregnancy; check interactions with medications."
    },
    {
      name: "Boswellia spp. (Frankincense)",
      image: "images/frankincense.jpg",
      bio: "Frankincense resin contains boswellic acids that powerfully reduce inflammation — used for arthritis, autoimmune flare control and respiratory health.",
      uses: [
        "Reduces chronic inflammation (supports lupus/arthritis)",
        "Improves joint pain and mobility",
        "Supports respiratory health",
        "Has immune-modulating properties",
        "Studied for anti-tumor effects"
      ],
      benefit: "inflammation",
      caution: "May interact with anti-inflammatory drugs — consult if on medication."
    },
    {
      name: "Sclerocarya birrea (Marula)",
      image: "images/marula.jpg",
      bio: "Marula is an African fruit tree whose extracts are antioxidant-rich and used traditionally to support metabolic health, skin healing and general immunity.",
      uses: [
        "Antioxidant protection for cells",
        "Supports healthy blood sugar and lipids",
        "Promotes skin repair and wound healing",
        "Provides anti-inflammatory support",
        "Supports overall immune resilience"
      ],
      benefit: "metabolic health",
      caution: "Allergic reactions possible; consult if on medication."
    },
    {
      name: "Harpagophytum procumbens (Devil's Claw)",
      image: "images/devils-claw.jpg",
      bio: "Devil's Claw root is used to relieve joint and back pain with proven anti-inflammatory and analgesic actions — popular for arthritis and rheumatic conditions.",
      uses: [
        "Relieves osteoarthritis and rheumatic pain",
        "Strong anti-inflammatory action (autoimmune support)",
        "Improves mobility and reduces stiffness",
        "Supports digestive function as a bitter tonic",
        "Provides analgesic relief for chronic pain"
      ],
      benefit: "inflammation",
      caution: "May interact with blood thinners and diabetes meds; avoid in pregnancy."
    },
    {
      name: "Glycyrrhiza glabra (Licorice)",
      image: "images/licorice.jpg",
      bio: "Licorice root contains glycyrrhizin with antiviral and soothing effects — used for herpes, respiratory and liver support; use carefully due to cardiovascular effects in high doses.",
      uses: [
        "Antiviral activity (supports herpes symptom care)",
        "Soothes mucous membranes and coughs",
        "Supports liver function and digestion",
        "Reduces inflammation",
        "Provides mild immune support"
      ],
      benefit: "antiviral",
      caution: "High doses can raise blood pressure and lower potassium — avoid in hypertension, pregnancy or long-term high use."
    },
    {
      name: "Tetrapleura tetraptera (Aridan)",
      image: "images/aridan.jpg",
      bio: "Aridan (West African spice) is traditionally used for arthritis, asthma and metabolic complaints — shows anti-inflammatory and blood sugar-lowering activity in studies.",
      uses: [
        "Reduces inflammation and arthritis pain",
        "Helps manage blood sugar (diabetes support)",
        "Supports respiratory & asthma relief",
        "Provides antioxidant protection",
        "Used as a digestive aid and tonic"
      ],
      benefit: "diabetes",
      caution: "Use moderate doses; consult if pregnant or on medication."
    }
  ];

  const container = document.getElementById('herbsContainer');
  const searchInput = document.getElementById('fruit-search');

  // Render function
  function renderHerbs(list) {
    container.innerHTML = ""; 
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
          <div class="herb-caution">
            ⚠️ <small>${herb.caution}</small>
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
  }

  function filterHerbs() {
    const searchTerm = searchInput.value.toLowerCase();
    const filtered = herbs.filter(herb => {
      return (
        herb.name.toLowerCase().includes(searchTerm) ||
        herb.bio.toLowerCase().includes(searchTerm) ||
        herb.uses.some(use => use.toLowerCase().includes(searchTerm))
      );
    });
    renderHerbs(filtered);
  }

  searchInput.addEventListener('input', filterHerbs);
  renderHerbs(herbs);
});
