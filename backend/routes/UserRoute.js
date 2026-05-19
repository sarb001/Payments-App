import express from 'express';
import { LoginHandler, SignupHandler } from '../Controllers/UserController';

const route = express.Router();

route.get('/signup' , SignupHandler);

route.get('/login' , LoginHandler);

route.get('/updateinfo' , )

export default route;

