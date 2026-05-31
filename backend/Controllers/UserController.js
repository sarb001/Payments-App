import express from 'express';
import { User } from '../Schema/UserSchema.js';
import bcrypt from 'bcrypt';

const app = express();

 export const  SignupHandler = async(req,res) => {

    try {
        
        const { email , firstname , lastname , password }   = req.body;
        console.log('basic body -',email , firstname , lastname , password);

        if(!email ||  !firstname || !lastname || !password){
            return res.json({
                message : " Enter all input Fields "
            })
        }

        const PasswordEnc = await bcrypt.hash(password,10);
        console.log('Pass enc -',PasswordEnc);

        const  user = await User.create({ email,firstname,lastname,password : PasswordEnc });

        console.log('new user is  1 -',user);

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
    try {  
        const { email , password } = req.body;
        if(!email || !password){
            return res.status().json({
                message : "Enter all Fields"
            })
        }

        const pass = await User.findOne({})

        const hashedpass = bcrypt.compare(password,);

        return res.status(200).json({
            message : "User Loggedin"
        }) 

    } catch (error) {
         return res.status(500).json({
            message : "Login Failed"
         })
    }
}