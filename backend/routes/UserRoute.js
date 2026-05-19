import express from 'express';
import { LoginHandler, SignupHandler } from '../Controllers/UserController.js';

const router = express.Router();

router.get('/signup' , SignupHandler);

router.get('/login' , LoginHandler);

// router.get('/updateinfo' , )

export default router;

