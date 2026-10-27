# Plant Health Monitoring

A searchable growing guide for eight plants and crops, plus a browser-based leaf disease classifier.

## Run locally

From the project directory, start a local web server:

```powershell
py -m http.server 8000
```

Open `http://localhost:8000`. The classifier uses TensorFlow.js from a CDN, so an internet connection is needed to load the model runtime.

## Disease model

The Teachable Machine model in `plant-disease-model/` predicts one of three classes: Leaf Spot, Rust, or Powdery mildew. Its results are estimates, not confirmed diagnoses.

## GitHub Pages

The workflow in `.github/workflows/pages.yml` deploys the site from the `main` branch. In the repository's **Settings → Pages**, choose **GitHub Actions** as the build and deployment source if Pages is not already enabled.
