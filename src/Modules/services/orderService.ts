// src/services/orderService.ts
import OrderModel from "../models/orderModel";
import ProductModel from "../models/productModel";
import { Order } from "../interfaces/orderInterface";

const createOrder = async (order: Order) => {
  const product = await ProductModel.findById(order.productId);
  if (!product) throw new Error("Product not found");

  if (product.inventory.quantity < order.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  await product.save();

  return await OrderModel.create(order);
};

const getOrders = async () => {
  return await OrderModel.find().populate("productId");
};

const getOrdersByEmail = async (email: string) => {
  return await OrderModel.find({ email }).populate("productId");
};

export default {
  createOrder,
  getOrders,
  getOrdersByEmail,
};
