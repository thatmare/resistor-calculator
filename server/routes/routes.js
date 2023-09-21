import { Router } from 'express';
import { postMultiplier } from '../controllers/multiplier.controller.js';
import { postTolerance } from '../controllers/tolerance.controller.js'

const router = Router();

router.post('/multiplier', postMultiplier);
router.post('/tolerance', postTolerance);

export default router;