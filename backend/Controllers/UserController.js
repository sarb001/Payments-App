import express from 'express';

const app = express();

export const  SignupHandler = async(req,res) => {

    return res.status(200).json({
        message : "User Created"
    })
};

export const  LoginHandler = async(req,res) => {
     return res.status(200).json({
        message : "User Loggedin"
    }) 
}