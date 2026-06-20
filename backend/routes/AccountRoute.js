import express from 'express';
import { AddMoney } from '../Controllers/AccountController.js';
import { Authorization } from '../Auth/auth.js';

const router = express.Router();

router.post('/addmoney',Authorization ,AddMoney);

export default router;