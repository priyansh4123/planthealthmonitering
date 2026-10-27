const leafInput = document.querySelector("#leaf-file");
const leafDropzone = document.querySelector("#leaf-dropzone");
const leafPreview = document.querySelector("#leaf-preview");
const uploadEmpty = document.querySelector("#upload-empty");
const previewToolbar = document.querySelector("#preview-toolbar");
const leafFileName = document.querySelector("#leaf-file-name");
const uploadMessage = document.querySelector("#upload-message");
const analyzeButton = document.querySelector("#analyze-leaf");
const modelStatus = document.querySelector("#model-status");
const predictionResult = document.querySelector("#prediction-result");
const predictionTitle = document.querySelector("#prediction-title");
const predictionList = document.querySelector("#prediction-list");
const treatmentPanel = document.querySelector("#treatment-panel");
const treatmentTitle = document.querySelector("#treatment-title");
const treatmentList = document.querySelector("#treatment-list");
let leafPreviewUrl = null;
let classifier = null;
let selectedImageReady = false;

const treatmentGuidance = {
  "leaf spot": [
    "Remove badly affected leaves and discard them; clean pruning tools between plants.",
    "Water at the soil rather than over the leaves, and improve spacing and airflow.",
    "Avoid working with wet foliage and clear fallen infected leaves around the plant."
  ],
  rust: [
    "Remove and discard heavily affected leaves; avoid composting diseased material.",
    "Keep foliage dry where practical by watering at the soil and allowing good airflow.",
    "Check nearby plants and choose resistant varieties when they are available for your crop."
  ],
  "powdery mildew": [
    "Remove the most affected leaves and dispose of them; clean pruning tools afterward.",
    "Improve sunlight and airflow around the plant, and avoid crowding or excessive nitrogen fertilizer.",
    "Water at the soil level and monitor new growth for recurring symptoms."
  ]
};

function setLeafMessage(message, isError = false) {
  uploadMessage.textContent = message;
  uploadMessage.classList.toggle("is-error", isError);
}

function updateAnalyzeButton() {
  analyzeButton.disabled = !classifier || !selectedImageReady;
}

function setModelStatus(message, isError = false) {
  modelStatus.lastChild.textContent = ` ${message}`;
  modelStatus.classList.toggle("is-error", isError);
}

function clearPredictions() {
  predictionResult.hidden = true;
  predictionTitle.textContent = "";
  predictionList.replaceChildren();
  treatmentPanel.hidden = true;
  treatmentList.replaceChildren();
  treatmentTitle.textContent = "Treatment guidance";
}

function renderTreatment(className) {
  const guidance = treatmentGuidance[className.trim().toLocaleLowerCase()];
  treatmentTitle.textContent = `If the result is ${className}`;
  treatmentList.replaceChildren();

  if (!guidance) {
    const item = document.createElement("li");
    item.textContent = "No specific care suggestions are available for this model class. Confirm the issue with a local plant-care expert.";
    treatmentList.append(item);
  } else {
    for (const suggestion of guidance) {
      const item = document.createElement("li");
      item.textContent = suggestion;
      treatmentList.append(item);
    }
  }
  treatmentPanel.hidden = false;
}

function clearLeafImage() {
  if (leafPreviewUrl) URL.revokeObjectURL(leafPreviewUrl);
  leafPreviewUrl = null;
  selectedImageReady = false;
  leafInput.value = "";
  leafPreview.removeAttribute("src");
  leafPreview.hidden = true;
  uploadEmpty.hidden = false;
  previewToolbar.hidden = true;
  clearPredictions();
  setLeafMessage("No image selected.");
  updateAnalyzeButton();
}

function loadLeafImage(file) {
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    clearLeafImage();
    setLeafMessage("Please choose an image file.", true);
    return;
  }
  if (file.size > 10 * 1024 * 1024) {
    clearLeafImage();
    setLeafMessage("This image is larger than 10 MB. Choose a smaller image.", true);
    return;
  }

  if (leafPreviewUrl) URL.revokeObjectURL(leafPreviewUrl);
  selectedImageReady = false;
  clearPredictions();
  leafPreviewUrl = URL.createObjectURL(file);
  leafPreview.onload = () => {
    selectedImageReady = true;
    setLeafMessage(classifier ? "Image ready. Run the model to see its prediction." : "Image ready. Waiting for the disease model to load.");
    updateAnalyzeButton();
  };
  leafPreview.onerror = () => {
    selectedImageReady = false;
    setLeafMessage("This image could not be opened. Try another image file.", true);
    updateAnalyzeButton();
  };
  leafPreview.src = leafPreviewUrl;
  leafPreview.hidden = false;
  uploadEmpty.hidden = true;
  previewToolbar.hidden = false;
  leafFileName.textContent = file.name;
  updateAnalyzeButton();
}

function renderPredictions(predictions) {
  const ranked = predictions
    .filter((prediction) => Number.isFinite(prediction.probability))
    .sort((left, right) => right.probability - left.probability);
  if (ranked.length === 0) {
    throw new Error("The model returned no class scores.");
  }

  const best = ranked[0];
  predictionTitle.textContent = best.className;
  predictionList.replaceChildren();

  for (const prediction of ranked) {
    const row = document.createElement("div");
    row.className = "prediction-row";
    const label = document.createElement("span");
    label.className = "prediction-label";
    label.textContent = prediction.className;
    const score = document.createElement("span");
    score.className = "prediction-score";
    score.textContent = `${(prediction.probability * 100).toFixed(1)}%`;
    const track = document.createElement("span");
    track.className = "prediction-track";
    const fill = document.createElement("span");
    fill.className = "prediction-fill";
    fill.style.width = `${Math.max(0, Math.min(1, prediction.probability)) * 100}%`;
    track.append(fill);
    row.append(label, score, track);
    predictionList.append(row);
  }
  predictionResult.hidden = false;
  renderTreatment(best.className);
}

async function loadClassifier() {
  try {
    if (!window.tmImage) {
      throw new Error("The model library did not load. Check your internet connection and reload.");
    }
    classifier = await window.tmImage.load(
      "./plant-disease-model/model.json",
      "./plant-disease-model/metadata.json"
    );
    setModelStatus(`Model ready · ${classifier.getTotalClasses()} classes`);
    setLeafMessage(selectedImageReady ? "Image ready. Run the model to see its prediction." : "No image selected.");
    updateAnalyzeButton();
  } catch (error) {
    console.error("Could not load the plant disease model:", error);
    setModelStatus("Model could not load", true);
    setLeafMessage("Could not load the model. Open this site through a local web server and check the model files.", true);
  }
}

leafInput.addEventListener("change", () => loadLeafImage(leafInput.files[0]));
document.querySelector("#clear-leaf").addEventListener("click", clearLeafImage);
leafDropzone.addEventListener("dragover", (event) => {
  event.preventDefault();
  leafDropzone.classList.add("is-dragging");
});
leafDropzone.addEventListener("dragleave", (event) => {
  if (!leafDropzone.contains(event.relatedTarget)) leafDropzone.classList.remove("is-dragging");
});
leafDropzone.addEventListener("drop", (event) => {
  event.preventDefault();
  leafDropzone.classList.remove("is-dragging");
  loadLeafImage(event.dataTransfer.files[0]);
});
analyzeButton.addEventListener("click", async () => {
  if (!classifier || !selectedImageReady) return;
  analyzeButton.disabled = true;
  analyzeButton.textContent = "Analyzing…";
  clearPredictions();
  setLeafMessage("Analyzing the leaf image…");
  try {
    const predictions = await classifier.predict(leafPreview);
    renderPredictions(predictions);
    setLeafMessage("Analysis complete. Compare the estimate with visible symptoms and other plant-care guidance.");
  } catch (error) {
    console.error("Could not analyze the leaf image:", error);
    setLeafMessage("The image could not be analyzed. Try a clear, well-lit leaf photo.", true);
  } finally {
    analyzeButton.innerHTML = 'Analyze leaf <span aria-hidden="true">↗</span>';
    updateAnalyzeButton();
  }
});

loadClassifier();
