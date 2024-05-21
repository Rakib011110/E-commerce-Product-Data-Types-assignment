import mongoose from "mongoose";

export interface Order {
  email: string;
  productId: mongoose.Types.ObjectId;
  price: number;
  quantity: number;
}
