import fs from "fs";
import path from "path";
import crypto from "crypto";
import multer from "multer";
import { env } from "../config/env.js";
import ApiError from "../utils/ApiError.js";

const allowed = ["image/jpeg", "image/png", "image/webp"];

function makeUploader(folder) {
  const dir = path.join(env.UPLOAD_DIR, folder);
  fs.mkdirSync(dir, { recursive: true });

  return multer({
    storage: multer.diskStorage({
      destination: (req, file, cb) => cb(null, dir),
      filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        cb(null, `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${ext}`);
      },
    }),
    limits: { fileSize: env.MAX_FILE_SIZE_MB * 1024 * 1024 },
    fileFilter: (req, file, cb) =>
      allowed.includes(file.mimetype) ? cb(null, true) : cb(ApiError.badRequest("Only JPG, PNG or WEBP images are allowed")),
  });
}

// uploadSingle("image", "scans")        -> req.file
// uploadMultiple("images", 5, "crops")  -> req.files
export const uploadSingle = (field, folder) => makeUploader(folder).single(field);
export const uploadMultiple = (field, max, folder) => makeUploader(folder).array(field, max);
