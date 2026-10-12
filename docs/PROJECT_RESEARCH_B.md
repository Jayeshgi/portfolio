# Project research: FruitLens and Typo Corrector

Reviewed 11 October 2026. These are source reviews, not runtime or model-evaluation tests. Personal contribution is based on Jayesh's statement that he developed nearly all of each project.

## FruitLens

An image-classification application connecting a PyTorch model, FastAPI inference API, and React interface. The README describes fruit information supplied through Gemini with a fallback data path. [README](https://github.com/Jayeshgi/fruit_detection_app#readme)

The model factory supports MobileNetV3 Small, MobileNetV3 Large, and ResNet18 with replaceable classification heads. The **current configuration selects ResNet18**. This matters because the README also mentions MobileNetV3. Avoid presenting one historical architecture as the only implementation. [Model factory](https://raw.githubusercontent.com/Jayeshgi/fruit_detection_app/main/model/fruit_model.py), [configuration](https://raw.githubusercontent.com/Jayeshgi/fruit_detection_app/main/model/config.py)

Inference loads saved weights and class names, prepares three resized/cropped views, and returns top predictions from the view with the highest confidence. This is classification, not object localization or a YOLO bounding-box detector. [Inference service](https://raw.githubusercontent.com/Jayeshgi/fruit_detection_app/main/backend/model_service.py)

- **Problem:** Make fruit-image predictions available through an understandable application interface.
- **Approach:** Connect transfer learning, an inference API, image upload, and supporting fruit descriptions.
- **Outcome:** A repository containing training, inference, backend, and interface code. No public deployment was established.
- **Stack:** Python, PyTorch/Torchvision, FastAPI, React, Vite, and Gemini integration.
- **Claims excluded:** The README's reported accuracy and dataset counts are not independently reproduced here. No claim of real-world robustness, calibrated confidence, medical nutrition guidance, or production readiness is made.

## Typo Corrector

A browser-extension prototype that combines a spelling pre-filter with contextual masked-language-model suggestions. The README describes a FastAPI correction endpoint, corrected text, alternatives, and Chrome popup/page-input integration. [README](https://github.com/Jayeshgi/typo-corrector#readme)

The source loads `bert-base-uncased` using Hugging Face `BertTokenizer` and `BertForMaskedLM`, creates a fill-mask pipeline, and uses a GPU when available. The FastAPI application loads the model during startup and mounts correction routes. [BERT loader](https://raw.githubusercontent.com/Jayeshgi/typo-corrector/main/backend/utils/bert_loader.py), [application](https://raw.githubusercontent.com/Jayeshgi/typo-corrector/main/backend/main.py)

The extension manifest is Manifest V3 with a popup, background service worker, page content script, and localhost backend access. The dependency list includes FastAPI, Transformers, PyTorch, pyspellchecker, and Pydantic. [Manifest](https://raw.githubusercontent.com/Jayeshgi/typo-corrector/main/extension/manifest.json), [requirements](https://raw.githubusercontent.com/Jayeshgi/typo-corrector/main/backend/requirements.txt)

- **Problem:** Suggest spelling corrections in sentence context.
- **Approach:** Combine dictionary-based candidate detection, BERT suggestions, an API, and browser UI.
- **Outcome:** A local-backend/browser-extension prototype. Full correction behavior was not executed during this review.
- **Stack:** Python, BERT, Hugging Face Transformers, PyTorch, FastAPI, pyspellchecker, JavaScript, Chrome Manifest V3.
- **Claims excluded:** No Chrome Web Store publication, benchmark accuracy, privacy guarantee, or universal input compatibility is established.

## Remaining case-study inputs

Actual screenshots, development dates, live-demo links if available, and the hardest implementation challenge or lesson would strengthen both case studies. The portfolio's current artwork is explicitly labeled as concept illustration.
