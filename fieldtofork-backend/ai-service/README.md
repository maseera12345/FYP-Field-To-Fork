# FieldToFork AI Service (Python)

A small FastAPI service. The Node backend sends it a leaf image and gets back the top predictions
from the MobileNetV2 model. The Node `disease` module then adds treatment suggestions and saves the scan.

```
ai-service/
  app/main.py         API: GET /health, POST /predict
  app/predictor.py    loads the model, preprocesses the image, predicts
  model/              trained model + class_names.json go here (not committed)
  train/              training notebook / script
  requirements.txt
```

## Run

```bash
cd ai-service
python -m venv venv
venv\Scripts\activate            # Windows (Mac/Linux: source venv/bin/activate)
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Check http://127.0.0.1:8000/health. Until the model files exist, `model_ready` is `false`
and `/predict` answers 503. That is expected before training.
