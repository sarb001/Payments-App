
import express from 'express';
import Router from './routes/UserRoute';
const app = express();

const PORT  = 3000;

app.listen(PORT , () => {
    console.log('Server Running on  PORT',PORT);
})

app.get('/api/v1',Router);

// signup
// login
// update info 