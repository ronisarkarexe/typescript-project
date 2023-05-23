import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRoute from  "./app/modulers/user/user.route";
import productRouter from './app/modulers/product/product.route';

// create user middleware
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRouter)

export default app;