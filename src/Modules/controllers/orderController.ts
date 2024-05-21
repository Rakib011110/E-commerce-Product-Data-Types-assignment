import { Request, Response } from "express";
import orderService from "../services/orderService";
import { Order } from "../interfaces/orderInterface";
import { validateOrder } from "../../utils/validateRequest";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order: Order = req.body;
    validateOrder(order);
    const result = await orderService.createOrder(order);
    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error: unknown) {
    let errorMessage = "Something is wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error,
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).json({
      success: true,
      data: orders,
      message: "Orders fetched successfully!",
    });
  } catch (error: unknown) {
    let errorMessage = "Something is wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error,
    });
  }
};
const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email query parameter is required.",
      });
    }
    const orders = await orderService.getOrdersByEmail(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (error: unknown) {
    let errorMessage = "Something is wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: error,
    });
  }
};

export default {
  createOrder,
  getOrders,
  getOrdersByEmail,
};
