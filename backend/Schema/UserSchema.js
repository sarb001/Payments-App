import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    username : {
         type : String,
         unique  : true,
         required : true
    },
    firstname : {
        type :String ,   
         unique  : true,
         required : true
    },
    lastname : {
         type :String ,   
         unique  : true,
         required : true
    },
    password : {
         type :String ,   
         unique  : true,
         required : true
    }
})

export const User = new mongoose.model('User',UserSchema);