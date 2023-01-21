import { Router } from "express";

import {
  getClassifications,
  postClassifications,
  deleteClassifications,
} from "../controllers/classificationsController.js";

const router = Router();

router.get("/classifications", getClassifications);
router.post("/classifications", postClassifications);
router.delete("/classifications:id", deleteClassifications);

export default router;
