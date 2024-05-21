import mongoose, { Schema, Document } from "mongoose";
import {
  Inventory,
  ProductInterface,
  Variant,
} from "../interfaces/productInterface";

const VariantSchema = new Schema<Variant>({
  type: String,
  value: String,
});

const InventorySchema = new Schema<Inventory>({
  quantity: Number,
  inStock: Boolean,
});

const ProductSchema = new Schema<ProductDocument>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [VariantSchema],
  inventory: InventorySchema,
});

export interface ProductDocument extends ProductInterface, Document {}

export default mongoose.model<ProductDocument>("Product", ProductSchema);
