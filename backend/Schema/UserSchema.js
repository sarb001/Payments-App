import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    email : {
         type : String,
         unique  : true,
         required : true
    },
    firstname : {
        type : String,
        required : true
    },
    lastname : {
         type : String,
         required : true
    },
    password : {
         type : String,
         required : true
    }
})

export const User = mongoose.model('User', UserSchema);