import express from 'express';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/error.middleware';
import swaggerUi from "swagger-ui-express";
import { openApiDocument } from "./config/swagger";

const app = express();
const port = 3000;

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(openApiDocument)
);

app.use(express.json());
app.use('/api/users',userRoutes)


app.use(errorHandler);

app.listen(port,()=>{
    console.log("Server starting at port 3000");
});