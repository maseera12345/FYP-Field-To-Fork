"""Loads the trained MobileNetV2 model once and predicts a leaf image.

Put these two files in ai-service/model/ after training:
  - plant_disease_mobilenetv2.keras   (the trained model)
  - class_names.json                  (list of class names, same order as training)
"""
import io
import json
from pathlib import Path

import numpy as np
from PIL import Image

MODEL_DIR = Path(__file__).resolve().parent.parent / "model"
MODEL_PATH = MODEL_DIR / "plant_disease_mobilenetv2.keras"
CLASSES_PATH = MODEL_DIR / "class_names.json"
IMG_SIZE = (224, 224)

_model = None
_class_names = None


def is_ready() -> bool:
    return MODEL_PATH.exists() and CLASSES_PATH.exists()


def _load():
    global _model, _class_names
    if _model is None:
        import tensorflow as tf  # imported lazily so /health works without TensorFlow

        _model = tf.keras.models.load_model(MODEL_PATH)
        _class_names = json.loads(CLASSES_PATH.read_text(encoding="utf-8"))
    return _model, _class_names


def predict(image_bytes: bytes, top_k: int = 3):
    from tensorflow.keras.applications.mobilenet_v2 import preprocess_input

    model, class_names = _load()
    img = Image.open(io.BytesIO(image_bytes)).convert("RGB").resize(IMG_SIZE)
    batch = preprocess_input(np.expand_dims(np.array(img, dtype="float32"), axis=0))
    probs = model.predict(batch, verbose=0)[0]

    top = probs.argsort()[::-1][:top_k]
    return [{"label": class_names[i], "confidence": round(float(probs[i]) * 100, 2)} for i in top]
