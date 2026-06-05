import express from 'express';
import fs from 'fs';
import pool from './config/db';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();
const port = 3000;

const filePath = "C:/Users/User.LSD-LT-108/Desktop/db.txt";

app.use(express.json());
app.use('/api/user',userRoutes)


app.use(errorHandler);

app.listen(port,()=>{
    console.log("Server starting at port 3000");
});