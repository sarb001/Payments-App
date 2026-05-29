
import express from 'express';
import Router from './routes/UserRoute.js';
import dotenv from 'dotenv';
import DatabaseConn from './Database/Db.js';
const app = express();

app.use(express.json());

dotenv.config();

const PORT  = 3000;
DatabaseConn();

app.use('/api/v1', Router);

app.listen(PORT , () => {
    console.log('Server Running on  PORT',PORT);
})


// signup
// login
// update info 