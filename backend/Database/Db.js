
import mongoose from "mongoose";

// using simple javascript for connection
//  without async/await 

const DatabaseConn = () => {

      mongoose.connect('mongodb://localhost:27017/payments-app')
    .then(() => {
        console.log('mongodb connected')
    }).catch((err) => console.log('connection err -',err));
    
}

export default DatabaseConn;