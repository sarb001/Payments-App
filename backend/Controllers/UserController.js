import express from 'express';
import { User } from '../Schema/UserSchema.js';
import bcrypt from 'bcrypt';
import UserZodSchema from '../types.js';

const app = express();

 export const  SignupHandler = async(req,res) => {
    try {
        
        const { email , firstname , lastname , password }   = req.body;
        console.log('basic body -',email , firstname , lastname , password);

        const body  =  req.body;
        console.log('body -',body);

        const ParsedData = UserZodSchema.safeParse(body);
        console.log('Parsed Data -',ParsedData);

        if(!ParsedData.success){
            return res.status(411).json({
                message : " Enter all input Fields "
            })
        }

        const PasswordEnc = await bcrypt.hash(body.password,10);
        console.log('Pass enc -',PasswordEnc);

        const  user = await User.create({ 
            email : body.email , 
            firstname : body.firstname ,
            lastname : body.lastname,
            password : PasswordEnc });

        console.log('new user is  1 -',user);

            return res.status(200).json({
                message : "User Created"
            }); 

       }

    catch (error) {
        console.log('error -',error );
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

        const MainUser = await User.findOne({email}).select("+password");
        console.log('pass is =',MainUser);

        if(!MainUser){
            return res.status(500).json({
                message : "User not Found"
            })
        }
        
        const Hashedpass = await bcrypt.compare(password,MainUser.password);
        console.log('hashpass is =',Hashedpass);

        if(!Hashedpass){
            return res.status(500).json({
                message : "Incorrect Password"
            }) 
        }

        return res.status(200).json({
                message : "User Loggedin"
        }) 

    } catch (error) {
         return res.status(500).json({
            message : "Login Failed"
         })
    }
}