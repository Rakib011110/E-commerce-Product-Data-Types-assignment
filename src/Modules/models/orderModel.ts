// src/models/orderModel.ts
import mongoose, { Schema, Document } from "mongoose";
import { Order } from "../interfaces/orderInterface";

interface OrderDocument extends Order, Document {}

const OrderSchema = new Schema<OrderDocument>({
  email: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
