import { Request, Response } from "express";
import { ProductServices } from "../services/productService";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await ProductServices.creatProductInToDb(product);
    res.status(200).json({
      success: true,
      message: "Product is created successfully",
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

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductServices.getProducts();
    res.status(200).json({ success: true, data: products });
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

const getProductById = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.getProductById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
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

const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.updateProduct(
      req.params.id,
      req.body
    );
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: product,
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await ProductServices.deleteProduct(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }
    res
      .status(202)
      .json({ success: true, message: "Product deleted successfully" });
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

const searchProducts = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    if (!searchTerm) {
      return res.status(400).json({
        success: false,
        message: "Search term is required.",
      });
    }
    const products = await ProductServices.searchProducts(searchTerm);
    res.status(200).json({
      success: true,
      message: `Products matching search term '${searchTerm}' fetched successfully!`,
      data: products,
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

export const ProductController = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
