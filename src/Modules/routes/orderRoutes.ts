import { Router } from "express";
import orderController from "../controllers/orderController";

const router = Router();

router.post("/", orderController.createOrder);
router.get("/", orderController.getOrders);
router.get("/by-email", orderController.getOrdersByEmail);

export const OrderRoutes = router;
