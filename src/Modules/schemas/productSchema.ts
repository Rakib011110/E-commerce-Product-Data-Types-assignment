import mongoose, { Schema, Document } from "mongoose";
import { ProductInterface } from "../interfaces/productInterface";

const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: {
    type: [{ type: { type: String }, value: String }],
    required: true,
  },
  inventory: {
    type: {
      quantity: { type: Number, required: true },
      inStock: { type: Boolean, required: true },
    },
    required: true,
  },
});

export default mongoose.model<ProductInterface & Document>(
  "Product",
  productSchema
);
