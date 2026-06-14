import express from 'express';
import { LoginHandler, SignupHandler, UpdateUser } from '../Controllers/UserController.js';
import { Authorization } from '../Auth/auth.js';

const router = express.Router();

router.post('/signup' , SignupHandler);

router.post('/login' , LoginHandler);

router.post('/updateuser'  , Authorization  ,UpdateUser);

export default router;

