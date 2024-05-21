import express, { Application, Request, Response } from "express";
import cors from "cors";
import { ProductRouter } from "./Modules/routes/productRoutes"; // Correct import path
import { OrderRoutes } from "./Modules/routes/orderRoutes";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/products", ProductRouter);
app.use("/api/v1/orders", OrderRoutes);
const getController = (req: Request, res: Response) => {
  res.send("Hello World!");
};

app.get("/", getController);

export default app;
