import { Router } from "express";
import { getValue } from "../controllers/value.controller.js";
import { seedDatabase } from "../controllers/seed.controller.js";

const router = Router();

//router.post("/values", postValue); // original post route

router.get("/values", getValue);

router.post("/values", seedDatabase) // route created to seed db

export default router;
