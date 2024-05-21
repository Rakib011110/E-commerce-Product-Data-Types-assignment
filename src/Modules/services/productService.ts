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

// const deleteProduct = async (id: string) => {
//   return await ProductModel.findByIdAndDelete(id);
// };

const deleteProduct = async (id: string) => {
  return await ProductModel.findByIdAndDelete(id);
};

export const ProductServices = {
  creatProductInToDb,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
