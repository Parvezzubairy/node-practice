import express from 'express';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import { errorHandler } from './middlewares/error.middleware';
import swaggerUi from "swagger-ui-express";
import { openApiDocument } from "./config/swagger";
import dotenv from 'dotenv';
import { authenticate } from './middlewares/auth.middleware';

const app = express();
dotenv.config();
const port = 3000;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument)
);

app.use(express.json());
app.use('/api/users',authenticate,userRoutes);
app.use('/login', authRoutes);


app.use(errorHandler);

app.listen(port,()=>{
    console.log("Server starting at port 3000");
});