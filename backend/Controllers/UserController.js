import express from 'express';
import { User } from '../Schema/UserSchema.js';
import bcrypt from 'bcrypt';
import { LoginzodSchema, UserZodSchema } from '../types.js';
import jwt from 'jsonwebtoken';

const app = express();

 export const  SignupHandler = async(req,res) => {
    try {

        const body = req.body;
        console.log('body -', body);

        const parsed = UserZodSchema.safeParse(body);
        if (!parsed.success) {
            return res.status(400).json({
                message: 'Enter all input fields',
            });
        }

        const data = parsed.data;
        const passwordEnc = await bcrypt.hash(data.password, 10);
        console.log('Pass enc -', passwordEnc);

        const user = await User.create({
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            password: passwordEnc
        });

        console.log('new user is -', user);
        return res.status(201).json({
            message: 'User Created'
        });
    } catch (error) {
        console.log('error -', error);
        return res.status(500).json({
            message: 'Signup Failed'
        });
    }
};

 export const  LoginHandler = async(req,res) => {
    try {  
        const body = req.body;
        console.log('body is -',body);
        
        const Loginuser = LoginzodSchema.safeParse(body);
        console.log('lOGON USER is -',Loginuser);

         if(!Loginuser.success){
            return res.status(400).json({
                message : "Enter all Fields"
            })
        }

        const MainUser = await User.findOne({email : body?.email }).select("+password");
        console.log('pass is =',MainUser);

        if(!MainUser){
            return res.status(500).json({
                message : "User not Found"
            })
        }
        
        const Hashedpass = await bcrypt.compare(body?.password,MainUser.password);
        console.log('hashpass is =',Hashedpass);

        const Secretkey = "sarb@123";

        const userjwt = jwt.sign({email : MainUser?._id },Secretkey);

        console.log('userjwt - ',userjwt);

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