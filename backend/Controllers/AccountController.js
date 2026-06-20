import express from 'express';

const app = express();

export const AddMoney = async(req,res) => {
  try {
    
    // 100 rs send from frontend
    const body = req.body;

    // get balance first + then add money ;    
    const user = await User.find({email : req.user?.email}).select("-password");
    console.log('main user ',user?.balance);
    
    if(!user){
      return res.status(400).json({
        message : "User not  Found "
      })
    }

     return res.status(200).json({
        message : "Money Added Successfully"
     })


  } catch (error) {
     return res.status(500).json({
        message : " Unable to  add  Money"
     })
  }
}


export const SendMoney = async(req,res) => {
  try {
    
  } catch (error) {
    
  }
}