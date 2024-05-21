import mongoose from "mongoose";

// src/interfaces/orderInterface.ts
export interface Order {
  email: string;
  productId: mongoose.Types.ObjectId; // This should match the type used in the schema
  price: number;
  quantity: number;
}
