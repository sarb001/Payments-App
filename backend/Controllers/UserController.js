import express from 'express';
import { User } from '../Schema/UserSchema.js';
import bcrypt from 'bcrypt';
import { LoginzodSchema, UserZodSchema } from '../types.js';
import jwt from 'jsonwebtoken';

const app = express();

 export const  SignupHandler = async(req,res) => {
    try {

        const body = req.body;

        const parsed = UserZodSchema.safeParse(body);
        if (!parsed.success) {
            return res.status(400).json({
                message: 'Enter all input fields',
            });
        }

        const data = parsed.data;
        const passwordEnc = await bcrypt.hash(data.password, 10);

        const user = await User.create({
            email: data.email,
            firstname: data.firstname,
            lastname: data.lastname,
            password: passwordEnc
        });

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
        
        const Loginuser = LoginzodSchema.safeParse(body);

         if(!Loginuser.success){
            return res.status(400).json({
                message : "Enter all Fields"
            })
        }

        const MainUser = await User.findOne({email : Loginuser?.data?.email }).select("+password");

        if(!MainUser){
            return res.status(500).json({
                message : "User not Found"
            })
        }
        
        const Hashedpass = await bcrypt.compare(body?.password,MainUser.password);

        const Secretkey = "sarb@123";

        const Token = jwt.sign({email : MainUser?.email },Secretkey);

        if(!Hashedpass){
            return res.status(500).json({
                message : "Incorrect Password"
            }) 
        }

        return res.status(200).json({
                message : "User Loggedin",
                Token,
                MainUser
        }) 

    } catch (error) {
         return res.status(500).json({
            message : "Login Failed"
         })
    }
}

export const UpdateUser = async(req,res) => {
     try {
        
         console.log('Inside updation');

         return res.status(200).json({
            message : "Updation Done"
         })

     } catch (error) {
         console.log('updation error -',error);
            return res.status(500).json({
                message : "Updation Failed"
            })
     }
}

export const UserProfile = async(req,res) => {
     try {
        console.log('user profile-',req.user);
        
        const user = await User.find({email : req.user?.email}).select("-password");
        console.log('main user ',user);

        if(!user){
            return res.status(400).json({
                message : "User not  Found "
            })
        }

        return res.status(200).json({
            message : "User Profile"
        })

     } catch (error) {
        console.log(' profile error -',error);
         return res.status(500).json({
            message : "Unable to fetch All Users"
        })
     }
}   

export const AllUsers = async(req,res) => {
     try {
        
        const  users = await User.find({});

        return res.status(200).json({
            message : "All users fetched"
        })

     } catch (error) {
        return res.status(500).json({
            message : "Unable to fetch All Users"
        })
     }
}   


