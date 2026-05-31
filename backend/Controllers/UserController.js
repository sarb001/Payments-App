import express from 'express';
import { User } from '../Schema/UserSchema.js';

const app = express();

 export const  SignupHandler = async(req,res) => {

     const { username , firstname , lastname , password }   = req.body;
     console.log('basic body -',username , firstname , lastname , password);

     if(!username ||  !firstname || !lastname || !password){
         return res.json({
            message : " Enter all input Fields "
         })
     }

     const  user = await User.create({ username,firstname,lastname,password });

     console.log('new user is  1 -',user);

    return res.status(200).json({
        message : "User Created"
    })
};

 export const  LoginHandler = async(req,res) => {
     return res.status(200).json({
        message : "User Loggedin"
    }) 
}