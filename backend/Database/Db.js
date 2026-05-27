
import mongoose from "mongoose";

// using simple javascript for connection
//  without async/await 

// const DatabaseConn = () => {

//       mongoose.connect('mongodb://localhost:27017/payments-app')
//     .then(() => {
//         console.log('mongodb connected')
//     }).catch((err) => console.log('connection err -',err));
    
// }


const  DatabaseConn = async() => {
    try {     
        await mongoose.connect(process.env.DB_NAME);
        console.log(' Mongodb Connected ');
    } catch (error) {
        console.log('error =',error);
        process.exit(1);
    }
}

export default DatabaseConn;