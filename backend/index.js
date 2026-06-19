
import express from 'express';
import UserRouter from './routes/UserRoute.js';
import AccountRouter from './routes/AccountRoute.js';
import dotenv from 'dotenv';
import DatabaseConn from './Database/Db.js';
const app = express();

app.use(express.json());

dotenv.config();

const PORT  = 3000;
DatabaseConn();

app.use('/api/v1/user', UserRouter);

app.use('/api/v1/account', AccountRouter);

app.listen(PORT , () => {
    console.log('Server Running on  PORT',PORT);
})

// ***** UserRoute -

// signup
// login
// update info 

// *** paymentRoute - 

// AddMoney in balance like UPI lite
// Send Money  (Sending 500 to Angad) - Sent  to 500 Done /-
// Recieve Money  ( Recieved 500 from Angad )

// AllTrnsx