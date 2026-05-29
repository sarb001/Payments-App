import express from 'express';
import { User } from '../Schema/UserSchema.js';

const app = express();

 export const  SignupHandler = async(req,res) => {

    // console.log('basic body -',username , firstname , lastname , password);
    // const { username , firstname , lastname , password }   = req.body;

    //  if(!username ||  !firstname || !lastname || !password){
    //      return res.json({
    //         message : " Enter all input Fields "
    //      })
    //  }

    //  const  user = await User.create({
    //     username : username,
    //     firstname : firstname,
    //     lastname : lastname,
    //     password : password
    //  })
    console.log('new user is -',);

     const { username } = req.body;

     console.log('new user is  1 -',{ username });

    return res.status(200).json({
        message : "User Created"
    })
};

 export const  LoginHandler = async(req,res) => {
     return res.status(200).json({
        message : "User Loggedin"
    }) 
}