import { ProductInterface } from "../interfaces/productInterface";
import ProductModel from "../models/productModel";

const creatProductInToDb = async (product: ProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProducts = async () => {
  return await ProductModel.find();
};
const getProductById = async (id: string) => {
  return await ProductModel.findById(id);
};

const updateProduct = async (
  id: string,
  product: Partial<ProductInterface>
) => {
  return await ProductModel.findByIdAndUpdate(id, product, { new: true });
};

const deleteProduct = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id);
};

const searchProducts = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i"); // Case-insensitive search
  return await ProductModel.find({
    $or: [{ name: regex }, { description: regex }],
  });
};

export const ProductServices = {
  creatProductInToDb,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
