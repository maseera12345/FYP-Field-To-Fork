"""FieldToFork AI service. The Node backend calls POST /predict with a leaf image."""
from fastapi import FastAPI, File, HTTPException, UploadFile

from . import predictor

app = FastAPI(title="FieldToFork AI Service", version="0.1.0")

ALLOWED = {"image/jpeg", "image/png", "image/webp"}


@app.get("/health")
def health():
    return {"status": "ok", "model_ready": predictor.is_ready()}


@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    if image.content_type not in ALLOWED:
        raise HTTPException(status_code=400, detail="Only JPG, PNG or WEBP images are allowed")
    if not predictor.is_ready():
        raise HTTPException(status_code=503, detail="Model files not found in ai-service/model/")

    data = await image.read()
    try:
        predictions = predictor.predict(data)
    except Exception as exc:  # unreadable image, etc.
        raise HTTPException(status_code=400, detail=f"Could not process image: {exc}") from exc

    return {"predictions": predictions}
