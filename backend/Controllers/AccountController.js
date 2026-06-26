import express from 'express';
import { User } from '../Schema/UserSchema.js';

const app = express();

export const AddMoney = async(req,res) => {
  try {
    
    // 100 rs send from frontend
    const body = req.body;
    console.log('body -',body);
    console.log('body balance -',body?.balance);

    // get balance first + then add money ;    
    const user = await User.findOne({email : req.user?.email}).select("-password");
    console.log('mainn user ',user);
    
    user.balance = body?.balance + user.balance;
    console.log('Total balance-',user.balance);

    await user.save();

    if(!user){
      return res.status(400).json({
        message : "User not  Found "
      })
    }

     return res.status(200).json({
        message : "Money Added Successfully"
     })


  } catch (error) {
     console.log('money error -',error);

     return res.status(500).json({
        message : " Unable to  add  Money"
     })
  }
}

export const SendMoney = async(req,res) => {
  try {
    
    //  userprofile 

    //  another user bal added up  ++
    //  mine bal -- 


  } catch (error) {
    console.log('error -',error);
    return res.status(500).json({
       message : "Failed to Send Money"
    })
  }
}