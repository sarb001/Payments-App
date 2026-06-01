import express from 'express';
import { LoginHandler, SignupHandler } from '../Controllers/UserController.js';

const router = express.Router();

router.post('/signup' , SignupHandler);

router.post('/login' , LoginHandler);

export default router;

