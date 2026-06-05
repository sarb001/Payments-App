import express from 'express';
import { LoginHandler, SignupHandler, UpdateUser } from '../Controllers/UserController.js';

const router = express.Router();

router.post('/signup' , SignupHandler);

router.post('/login' , LoginHandler);

router.post('/updateuser' ,UpdateUser);

export default router;

