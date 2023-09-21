import { Router } from 'express';
import { postValue, getValue } from '../controllers/value.controller.js';

const router = Router();

router.post('/values', postValue);

router.get('/values', getValue);

export default router;