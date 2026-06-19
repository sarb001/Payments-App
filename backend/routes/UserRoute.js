import express from 'express';
import { AllUsers, LoginHandler, SignupHandler, UpdateUser, UserProfile } from '../Controllers/UserController.js';
import { Authorization } from '../Auth/auth.js';

const router = express.Router();

router.post('/signup' , SignupHandler);

router.post('/login' , LoginHandler);

router.post('/updateuser'  , Authorization  ,UpdateUser);

router.post('/userprofile'  , Authorization  ,UserProfile);

router.get('/allusers'  , Authorization  ,AllUsers);

export default router;

