import express from 'express';
import { User } from '../Schema/UserSchema.js';
import bcrypt from 'bcrypt';

const app = express();

 export const  SignupHandler = async(req,res) => {

    try {
        
        const { username , firstname , lastname , password }   = req.body;
        console.log('basic body -',username , firstname , lastname , password);

        if(!username ||  !firstname || !lastname || !password){
            return res.json({
                message : " Enter all input Fields "
            })
        }

        const PasswordEnc = await bcrypt.hash(password,10);
        console.log('Pass enc -',PasswordEnc);

    //   const  user = await User.create({ username,firstname,lastname,password : PasswordEnc });

    //  console.log('new user is  1 -',user);

        return res.status(200).json({
            message : "User Created"
        }); 
       }

    catch (error) {
         return res.status(500).json({
            message : "Signup Failed"
         })
    }
};

 export const  LoginHandler = async(req,res) => {
     return res.status(200).json({
        message : "User Loggedin"
    }) 
}