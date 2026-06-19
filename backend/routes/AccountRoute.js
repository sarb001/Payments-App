import express from 'express';
import { SendMoney } from '../Controllers/AccountController';

const router = express.Router();

router.post('/pay',SendMoney);

export default router;