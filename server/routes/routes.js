import { Router } from "express";
import { postValue, getValue } from "../controllers/value.controller.js";
import { seedDatabase } from "../controllers/seed.controller.js";

const router = Router();

router.post("/values", postValue);

router.get("/values", getValue);

router.post("/seed", seedDatabase)

export default router;
