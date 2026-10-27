const plants = [
  {
    name: "Money Plant",
    scientific: "Epipremnum aureum",
    category: "houseplant",
    categoryLabel: "House & garden",
    icon: "🌿",
    tint: "#e5eddb",
    green: "#4b704e",
    aliases: ["pothos", "devil's ivy", "devils ivy", "epipremnum"],
    water: "Low to moderate",
    conditions: "Warm, indirect light",
    concern: "Overwatering and root rot",
    summary: "An easygoing evergreen climber or trailer that brings leafy greenery to homes, offices and balconies. It can be grown in soil or water.",
    facts: [
      ["Type", "Evergreen ornamental climber or trailer"],
      ["Soil type", "Loose, well-draining potting mix rich in organic matter"],
      ["Weather", "Warm, humid conditions; approximately 18–30°C"],
      ["Sunlight", "Bright, indirect light; tolerates lower light"],
      ["Irrigation", "Water when the upper 2–5 cm of soil feels dry"],
      ["Growing season", "Grows through much of the year in warm conditions"],
      ["Propagation", "Stem cuttings with at least one node"],
      ["Fertilizer", "Diluted balanced liquid fertilizer during active growth"]
    ],
    watering: [
      "Water thoroughly until excess water drains from the pot.",
      "Do not let the pot stand in water, as roots may rot.",
      "Watering frequency depends on temperature, light, pot size and soil.",
      "Reduce watering in cooler weather when growth slows."
    ],
    problems: [
      ["Root rot", "Soft, dark roots and yellowing leaves", "Improve drainage and avoid overwatering"],
      ["Leaf spot", "Brown or black spots on leaves", "Remove affected leaves and avoid unnecessarily wet foliage"],
      ["Mealybugs", "White, cotton-like clusters", "Wipe off small infestations and inspect nearby plants"],
      ["Spider mites", "Fine webbing and speckled leaves", "Rinse leaves and manage dry, dusty conditions"]
    ],
    notes: [
      "It can grow in soil or water, although soil-grown plants need appropriate nutrients.",
      "Pruning encourages a fuller appearance.",
      "Safety: toxic if chewed or swallowed by pets; can irritate the mouth."
    ]
  },
  {
    name: "Aloe Vera",
    scientific: "Aloe vera",
    category: "houseplant",
    categoryLabel: "House & garden",
    icon: '<svg class="plant-svg" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 27V12m0 7c-5-1-8-4-8-8 5 0 8 3 8 8Zm0-4c0-6 3-10 8-11 1 6-2 10-8 11Zm0 10c-4-2-6-5-6-8 4 0 6 3 6 8Zm0-5c3-4 6-5 9-4-1 4-4 6-9 6" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>',
    tint: "#e9edda",
    green: "#6d8250",
    aliases: ["aloe"],
    water: "Low",
    conditions: "Warm, sunny, dry conditions",
    concern: "Waterlogged soil",
    summary: "A drought-tolerant succulent with thick, water-storing leaves. It grows well in a pot or dry garden when its roots have excellent drainage.",
    facts: [
      ["Type", "Succulent perennial plant"],
      ["Soil type", "Sandy or gritty, well-draining soil"],
      ["Weather", "Warm, dry conditions; roughly 20–30°C for active growth"],
      ["Sunlight", "Bright light; gradually acclimatize to stronger sun"],
      ["Irrigation", "Water deeply, then allow the soil to dry out"],
      ["Growing season", "Mainly active in warm weather"],
      ["Propagation", "Offsets or pups growing beside the parent plant"],
      ["Fertilizer", "Little is needed; use a light application during active growth"]
    ],
    watering: [
      "Aloe stores water in its thick leaves, so it needs less frequent watering than many plants.",
      "Check that the soil has dried before watering again.",
      "Use a pot with drainage holes.",
      "Avoid frequent small waterings that keep roots constantly moist."
    ],
    problems: [
      ["Root rot", "Soft, dark roots and mushy leaves", "Use gritty soil and reduce watering"],
      ["Leaf rot", "Soft or discoloured patches", "Improve airflow and remove badly affected tissue"],
      ["Mealybugs", "White cotton-like insects", "Remove them early and isolate affected plants"],
      ["Scale insects", "Small, hard bumps on leaves", "Remove carefully and monitor the plant"]
    ],
    notes: [
      "It tolerates drought but can be damaged by frost and prolonged waterlogging.",
      "Mature plants may produce tall flower stalks in suitable conditions.",
      "The yellow latex beneath the leaf skin is different from the inner gel and can be harmful if ingested."
    ]
  },
  {
    name: "Hibiscus",
    scientific: "Hibiscus rosa-sinensis",
    category: "houseplant",
    categoryLabel: "House & garden",
    icon: "🌺",
    tint: "#f4e3de",
    green: "#9b5b4d",
    aliases: ["chinese hibiscus", "tropical hibiscus"],
    water: "Moderate to high",
    conditions: "Warm, sunny conditions",
    concern: "Pests and irregular watering",
    summary: "A flowering shrub that thrives in warm, sunny conditions and can bloom for much of the year in suitable climates. Grow it in a garden, pot or hedge.",
    facts: [
      ["Type", "Flowering shrub"],
      ["Soil type", "Fertile, well-draining loam rich in organic matter"],
      ["Weather", "Warm, frost-free conditions; roughly 18–32°C"],
      ["Sunlight", "About 4–6 or more hours of sunlight daily"],
      ["Irrigation", "Keep soil evenly moist, not waterlogged"],
      ["Growing season", "Long flowering season in warm climates"],
      ["Propagation", "Stem cuttings or, for some varieties, seeds"],
      ["Fertilizer", "Balanced fertilizer during active growth; avoid excess nitrogen"]
    ],
    watering: [
      "Water when the upper layer of soil begins to dry.",
      "Plants in hot weather or small pots may need more frequent watering.",
      "During flowering and active growth, avoid letting the root zone dry out completely.",
      "Good drainage is essential to prevent root disease."
    ],
    problems: [
      ["Leaf spot", "Brown or dark marks on leaves", "Remove affected foliage and improve airflow"],
      ["Root rot", "Yellowing, wilting and weak growth", "Correct drainage and watering"],
      ["Aphids", "Small insects on young shoots and buds", "Wash off with water or use suitable insecticidal soap"],
      ["Whiteflies", "Tiny white insects fly up when disturbed", "Inspect leaf undersides and control early"],
      ["Mealybugs", "White, cotton-like clusters", "Remove infested parts and monitor regularly"]
    ],
    notes: [
      "Regular pruning helps maintain shape and encourages new growth.",
      "Bud drop can result from irregular watering, heat stress, pests or nutrient problems.",
      "In very hot summers, protection from intense afternoon heat may reduce stress."
    ]
  },
  {
    name: "Rose",
    scientific: "Rosa species and hybrids",
    category: "houseplant",
    categoryLabel: "House & garden",
    icon: "🌹",
    tint: "#f2e3df",
    green: "#a15750",
    aliases: ["roses"],
    water: "Moderate",
    conditions: "Sunny, well-drained soil",
    concern: "Black spot and fungal disease",
    summary: "A flowering shrub with varieties for gardens and containers. Regular attention to sunlight, airflow and watering helps keep roses healthy and flowering.",
    facts: [
      ["Type", "Flowering shrub"],
      ["Soil type", "Fertile, well-draining loam with organic matter"],
      ["Weather", "Moderate temperatures; many varieties prefer around 15–28°C"],
      ["Sunlight", "Usually 6 or more hours of sunlight daily"],
      ["Irrigation", "Deep watering near the roots when soil begins to dry"],
      ["Growing season", "Varies by variety and climate"],
      ["Propagation", "Cuttings, budding or grafting"],
      ["Fertilizer", "Balanced rose fertilizer during active growth; follow label directions"]
    ],
    watering: [
      "Water at the base of the plant to keep leaves relatively dry.",
      "Give established roses a deep watering rather than frequent shallow watering.",
      "Check more often during hot, dry or windy weather.",
      "Avoid waterlogged soil, which can damage roots."
    ],
    problems: [
      ["Black spot", "Dark spots on leaves, followed by yellowing", "Remove infected leaves, improve airflow and avoid overhead watering"],
      ["Powdery mildew", "White, powder-like growth", "Improve airflow; use an appropriately labelled treatment if needed"],
      ["Rust", "Orange or rusty spots on leaves", "Remove infected foliage and reduce leaf wetness"],
      ["Aphids", "Insects clustered around buds and shoots", "Wash off small populations and protect beneficial insects"],
      ["Thrips", "Streaked petals and damaged buds", "Monitor flowers and use suitable controls if needed"]
    ],
    notes: [
      "Prune according to the rose variety and local growing season.",
      "Remove faded flowers when appropriate to encourage further flowering.",
      "Good airflow helps reduce fungal disease; some afternoon protection can help in hot regions."
    ]
  },
  {
    name: "Wheat",
    scientific: "Triticum aestivum",
    category: "crop",
    categoryLabel: "Field crop",
    icon: "🌾",
    tint: "#f1ecd9",
    green: "#8b7945",
    aliases: ["bread wheat"],
    water: "Moderate; stage-dependent",
    conditions: "Cool season",
    concern: "Rust and heat stress",
    summary: "A major annual cereal crop and source of flour for breads, chapatis, pasta and many other foods. It is commonly grown in India's winter Rabi season.",
    facts: [
      ["Type", "Annual cereal crop"],
      ["Soil type", "Fertile, well-drained loam or clay loam"],
      ["Weather", "Cool growing season; relatively warm, dry conditions for ripening"],
      ["Temperature", "Approximately 10–25°C during much of growth; varies by stage and variety"],
      ["Sunlight", "Full sunlight"],
      ["Irrigation", "Depends on rainfall, soil and crop stage; several irrigations may be needed"],
      ["Sowing season", "Winter (Rabi season) in much of India"],
      ["Harvesting", "When ears and grains mature and become dry"],
      ["Fertilizers", "N, P, K and other nutrients according to soil testing"]
    ],
    watering: [
      "Adequate moisture is particularly important around crown root initiation, usually about 20–25 days after sowing depending on conditions.",
      "Moisture during tillering supports the development of additional shoots.",
      "Flowering and grain filling are important stages for grain development.",
      "Avoid waterlogging; irrigation needs vary with soil moisture, rainfall, temperature and variety."
    ],
    problems: [
      ["Wheat rust", "Yellow, orange or dark pustules on leaves and stems", "Grow resistant varieties and monitor the crop"],
      ["Loose smut", "Grain heads contain dark, powdery spores", "Use certified, appropriately treated seed"],
      ["Powdery mildew", "White powder-like patches on leaves", "Use resistant varieties and manage crop density"],
      ["Termites", "Damaged roots and weakened plants", "Use locally recommended integrated pest management"],
      ["Aphids", "Insects on leaves and ears", "Monitor fields and conserve beneficial insects"]
    ],
    notes: [
      "Wheat provides carbohydrates, protein and dietary fibre.",
      "Crop rotation, balanced fertilization and weed control help maintain yields.",
      "Excessive heat during flowering and grain filling can reduce grain yield."
    ]
  },
  {
    name: "Rice",
    scientific: "Oryza sativa",
    category: "crop",
    categoryLabel: "Field crop",
    icon: "🌱",
    tint: "#e1ecdf",
    green: "#577e63",
    aliases: ["paddy"],
    water: "Moderate to high; system-dependent",
    conditions: "Warm with reliable moisture",
    concern: "Water management and blast",
    summary: "A staple annual cereal grown in warm conditions. Rice can be established by direct seeding or transplanting, using flooded or non-flooded systems.",
    facts: [
      ["Type", "Annual cereal crop"],
      ["Soil type", "Water-retaining clay loam or loam; other soils suit managed systems"],
      ["Weather", "Warm, humid conditions"],
      ["Temperature", "Roughly 20–35°C for many growth stages; varies by variety"],
      ["Sunlight", "Full sunlight"],
      ["Irrigation", "Reliable moisture; flooded or non-flooded systems may be used"],
      ["Sowing season", "Mainly Kharif in many Indian regions; other seasons where suitable"],
      ["Harvesting", "When most grains mature and the crop turns golden"],
      ["Fertilizers", "N, P, K and other nutrients based on soil needs"]
    ],
    watering: [
      "Keep soil sufficiently moist during establishment.",
      "In conventional transplanted systems, maintain shallow standing water as recommended for the field and crop stage.",
      "Avoid water stress during flowering, which can reduce grain formation.",
      "Where suitable, alternate wetting and drying can save water; drain fields appropriately before harvest."
    ],
    problems: [
      ["Rice blast", "Spindle-shaped leaf lesions; affected necks may weaken", "Use resistant varieties, balanced nitrogen and appropriate disease management"],
      ["Bacterial leaf blight", "Yellowing and drying spread from leaf edges", "Use resistant varieties and good crop management"],
      ["Sheath blight", "Lesions on leaf sheaths near the waterline", "Avoid excessive nitrogen and overly dense growth"],
      ["Brown planthopper", "Yellowing, drying and patches of damaged plants", "Monitor populations and conserve natural enemies"],
      ["Stem borers", "Dead central shoots or white, empty grain heads", "Use integrated pest management and field monitoring"]
    ],
    notes: [
      "Rice is a staple food for a large part of the world's population.",
      "Proper field levelling and water management improve irrigation efficiency.",
      "Excessive fertilizer use can increase disease risk and nutrient losses."
    ]
  },
  {
    name: "Chickpeas",
    scientific: "Cicer arietinum",
    category: "crop",
    categoryLabel: "Field crop",
    icon: '<svg class="plant-svg" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M7 25c-3-4-2-10 2-15 4-5 9-7 14-4 5 3 5 9 2 14-4 6-13 9-18 5Z" fill="currentColor" opacity=".22"/><path d="M7 25c-3-4-2-10 2-15 4-5 9-7 14-4 5 3 5 9 2 14-4 6-13 9-18 5Z" stroke="currentColor" stroke-width="1.8"/><path d="M11 20c-1-2 0-5 2-7m4 8c-1-2 0-5 2-7m-9 9 3 1m5-2 3 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    tint: "#eee8d8",
    green: "#88754e",
    aliases: ["chickpea", "chana", "gram", "garbanzo", "garbanzo bean"],
    water: "Low to moderate",
    conditions: "Cool, relatively dry season",
    concern: "Wilt and excess moisture",
    summary: "An annual pulse crop known as chana in India. It is valued for protein and fibre, and its roots work with nitrogen-fixing bacteria.",
    facts: [
      ["Type", "Annual pulse or legume crop"],
      ["Soil type", "Well-drained loam or sandy loam"],
      ["Weather", "Cool, relatively dry growing season"],
      ["Temperature", "Approximately 15–30°C; varies by growth stage and variety"],
      ["Sunlight", "Full sunlight"],
      ["Irrigation", "Often grown with limited irrigation; avoid excess moisture"],
      ["Sowing season", "Winter (Rabi season) in much of India"],
      ["Harvesting", "When plants yellow or brown and pods mature"],
      ["Fertilizers", "Soil-test-based nutrients; phosphorus and effective rhizobial inoculation can be important"]
    ],
    watering: [
      "Sow into soil with sufficient moisture for germination.",
      "Irrigate if needed during flowering and pod formation when the soil becomes too dry.",
      "Avoid excessive irrigation and waterlogging, which encourage root diseases.",
      "Rainfall and stored soil moisture can sometimes meet much of the crop's water requirement."
    ],
    problems: [
      ["Fusarium wilt", "Yellowing, wilting and drying of plants", "Use resistant varieties, crop rotation and clean seed"],
      ["Ascochyta blight", "Dark lesions on leaves, stems and pods", "Use healthy seed and resistant varieties; manage the field appropriately"],
      ["Dry root rot", "Dry, weakened roots and wilting", "Reduce plant stress and use appropriate rotations"],
      ["Pod borer", "Caterpillars feeding on flowers and pods", "Monitor regularly and use integrated pest management"],
      ["Aphids", "Clusters of small insects on young growth", "Conserve natural enemies and control only when necessary"]
    ],
    notes: [
      "Chickpeas improve soil fertility through a symbiotic relationship with nitrogen-fixing bacteria.",
      "They provide protein, fibre, minerals and complex carbohydrates; used for chana, chana dal and besan.",
      "Crop rotation helps reduce soil-borne disease; waterlogging and prolonged humid weather are harmful."
    ]
  },
  {
    name: "Corn",
    scientific: "Zea mays",
    category: "crop",
    categoryLabel: "Field crop",
    icon: "🌽",
    tint: "#f3ecd5",
    green: "#8c813f",
    aliases: ["maize", "sweet corn"],
    water: "Moderate to high; stage-dependent",
    conditions: "Warm, sunny conditions",
    concern: "Water stress at flowering",
    summary: "Also known as maize, this warm-season cereal is grown for fresh cobs, dry grain, animal feed and industrial ingredients.",
    facts: [
      ["Type", "Annual cereal crop"],
      ["Soil type", "Fertile, well-drained loam or sandy loam"],
      ["Weather", "Warm conditions with adequate moisture"],
      ["Temperature", "Approximately 18–32°C for good growth; varies by stage and variety"],
      ["Sunlight", "Full sunlight"],
      ["Irrigation", "Regular moisture, especially during flowering and grain filling"],
      ["Sowing season", "Commonly Kharif in India; Rabi and spring crops in suitable regions"],
      ["Harvesting", "Green cobs for fresh use or mature dry grain for storage"],
      ["Fertilizers", "N, P, K and other nutrients according to soil testing"]
    ],
    watering: [
      "Maintain enough moisture for uniform germination and establishment.",
      "Water supports vegetative leaf and stem growth.",
      "Tasseling and silking are critical stages; water stress can reduce pollination and grain number.",
      "Adequate moisture supports grain filling. Avoid waterlogging and excessive irrigation."
    ],
    problems: [
      ["Turcicum leaf blight", "Long, grey-green or brown leaf lesions", "Use resistant hybrids and manage crop residues"],
      ["Downy mildew", "Pale stripes, stunted growth and abnormal leaves", "Use resistant varieties and locally recommended seed treatment"],
      ["Common rust", "Reddish-brown pustules on leaves", "Use resistant hybrids and monitor the field"],
      ["Fall armyworm", "Ragged leaves and feeding damage in the whorl", "Scout regularly and use integrated pest management"],
      ["Stem borers", "Holes in stems and damaged growing points", "Monitor in a timely way and follow appropriate local control measures"]
    ],
    notes: [
      "Maize is used as food, animal feed and a raw material for starch and other products.",
      "Pollination depends on pollen transfer from tassels to silks; weeds compete strongly with young plants.",
      "Dry grain should be harvested and stored at suitably low moisture to prevent mould and spoilage."
    ]
  }
];

const grid = document.querySelector("#plant-grid");
const searchInput = document.querySelector("#plant-search");
const searchForm = document.querySelector("#search-form");
const suggestionBox = document.querySelector("#suggestions");
const resultSection = document.querySelector("#result-section");
const detailRoot = document.querySelector("#plant-detail");
const guideCount = document.querySelector("#guide-count");
let activeFilter = "all";

function normalize(value) {
  return value.trim().toLocaleLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function matchesPlant(plant, query) {
  const search = normalize(query);
  return [plant.name, plant.scientific, ...plant.aliases].some((item) => normalize(item).includes(search));
}

function makeCard(plant) {
  const card = document.createElement("button");
  card.type = "button";
  card.className = "plant-card";
  card.dataset.name = plant.name;
  card.style.setProperty("--card-tint", plant.tint);
  card.style.setProperty("--card-green", plant.green);
  card.setAttribute("aria-label", `View ${plant.name} growing guide`);
  card.innerHTML = `
    <span class="card-top">
      <span class="card-icon" aria-hidden="true">${plant.icon}</span>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </span>
    <span>
      <span class="card-meta">${plant.categoryLabel}</span>
      <h3>${plant.name}</h3>
      <span class="scientific">${plant.scientific}</span>
    </span>
    <span class="card-bottom"><span class="card-water"><strong>WATER</strong>${plant.water}</span></span>`;
  card.addEventListener("click", () => showPlant(plant));
  return card;
}

function renderGrid() {
  const visible = plants.filter((plant) => activeFilter === "all" || plant.category === activeFilter);
  grid.replaceChildren(...visible.map(makeCard));
  guideCount.textContent = `Showing ${visible.length} ${visible.length === 1 ? "guide" : "guides"}`;
}

function renderSuggestions(query) {
  const search = normalize(query);
  if (!search) {
    suggestionBox.hidden = true;
    suggestionBox.replaceChildren();
    return;
  }
  const found = plants.filter((plant) => matchesPlant(plant, search)).slice(0, 5);
  suggestionBox.replaceChildren();
  for (const plant of found) {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "suggestion-option";
    option.setAttribute("role", "option");
    option.innerHTML = `<span class="suggestion-emoji" aria-hidden="true">${plant.icon}</span><span><strong>${plant.name}</strong><small>${plant.scientific}</small></span>`;
    option.addEventListener("click", () => {
      searchInput.value = plant.name;
      suggestionBox.hidden = true;
      showPlant(plant);
    });
    suggestionBox.append(option);
  }
  suggestionBox.hidden = found.length === 0;
}

function renderFacts(facts) {
  return facts.map(([label, value]) => `<div class="fact"><span class="fact-label">${label}</span><span class="fact-value">${value}</span></div>`).join("");
}

function renderList(items, className) {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function renderProblems(problems) {
  return `<div class="issue-list">${problems.map(([name, symptoms, management]) => `
    <div class="issue">
      <div class="issue-title"><strong>${name}</strong><span>${symptoms}</span></div>
      <p>${management}</p>
    </div>`).join("")}</div>`;
}

function showPlant(plant) {
  searchInput.value = plant.name;
  suggestionBox.hidden = true;
  detailRoot.innerHTML = `
    <header class="detail-header">
      <div class="detail-title-wrap">
        <span class="detail-plant-icon" style="--card-tint:${plant.tint};--card-green:${plant.green}" aria-hidden="true">${plant.icon}</span>
        <div><h2>${plant.name}</h2><p class="scientific">${plant.scientific}</p></div>
      </div>
      <span class="detail-kicker"><span>✳</span>${plant.categoryLabel}</span>
    </header>
    <p class="detail-summary">${plant.summary}</p>
    <div class="fact-grid">${renderFacts(plant.facts)}</div>
    <div class="detail-lower">
      <section class="detail-panel">
        <h3><span class="panel-symbol" aria-hidden="true">◉</span>Irrigation &amp; water requirements</h3>
        ${renderList(plant.watering, "water-list")}
      </section>
      <section class="detail-panel">
        <h3><span class="panel-symbol" aria-hidden="true">⌁</span>Common diseases &amp; pests</h3>
        ${renderProblems(plant.problems)}
      </section>
    </div>
    <section class="detail-extra detail-panel">
      <h3><span class="panel-symbol" aria-hidden="true">✳</span>Other important information</h3>
      ${renderList(plant.notes, "notes-list")}
    </section>`;
  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function findPlant(query) {
  const search = normalize(query);
  if (!search) return null;
  return plants.find((plant) => [plant.name, plant.scientific, ...plant.aliases].some((item) => normalize(item) === search))
    || plants.find((plant) => matchesPlant(plant, search));
}

searchInput.addEventListener("input", () => renderSuggestions(searchInput.value));
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const plant = findPlant(searchInput.value);
  if (plant) {
    showPlant(plant);
    return;
  }
  if (normalize(searchInput.value)) {
    suggestionBox.hidden = true;
    detailRoot.innerHTML = `<div class="empty-state"><h2>No guide found for “${searchInput.value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char])}”</h2><p>Try Money Plant, Aloe Vera, Hibiscus, Rose, Wheat, Rice, Chickpeas or Corn.</p></div>`;
    resultSection.hidden = false;
    resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-form")) suggestionBox.hidden = true;
  const hint = event.target.closest("[data-search]");
  if (hint) {
    searchInput.value = hint.dataset.search;
    showPlant(findPlant(hint.dataset.search));
  }
});
document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("is-active", chip === button));
    renderGrid();
  });
});
document.querySelector("#close-result").addEventListener("click", () => {
  resultSection.hidden = true;
  searchInput.focus();
});

document.querySelector("#comparison-body").innerHTML = plants.map((plant) => `
  <tr><td>${plant.name}${plant.name === "Chickpeas" ? " (Chana)" : plant.name === "Corn" ? " (Maize)" : ""}</td><td>${plant.water}</td><td>${plant.conditions}</td><td>${plant.concern}</td></tr>`).join("");

searchInput.value = "";
window.addEventListener("pageshow", () => {
  searchInput.value = "";
});
renderGrid();
