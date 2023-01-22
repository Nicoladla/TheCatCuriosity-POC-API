import { Router } from "express";

import {
  getCuriosities,
  getCuriositiesByClassification,
  postCuriosities,
  updateCuriosities,
  deleteCuriosities,
} from "../controllers/curiositiesController.js";

const router = Router();

router.get("/curiosities", getCuriosities);
router.get("/curiosities/:classificationId", getCuriositiesByClassification);
router.post("/curiosities", postCuriosities);
router.patch("/curiosities/:id", updateCuriosities);
router.delete("/curiosities/:id", deleteCuriosities);

export default router;
