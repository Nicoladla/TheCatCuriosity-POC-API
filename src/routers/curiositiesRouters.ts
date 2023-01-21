import { Router } from "express";

const router = Router();

router.get("/curiosities");
router.get("/curiosities/:classificationId");
router.post("/curiosities");
router.patch("/curiosities/:id");
router.delete("/curiosities/:id");

export default router;
