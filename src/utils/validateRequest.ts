// src/utils/validation.ts
import Joi from "joi";
import { ProductInterface } from "../Modules/interfaces/productInterface";
import { Order } from "../Modules/interfaces/orderInterface";

const productSchema = Joi.object<ProductInterface>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  category: Joi.string().required(),
  tags: Joi.array().items(Joi.string()).required(),
  variants: Joi.array()
    .items(
      Joi.object({
        type: Joi.string().required(),
        value: Joi.string().required(),
      })
    )
    .required(),
  inventory: Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required(),
  }).required(),
});

const orderSchema = Joi.object<Order>({
  email: Joi.string().email().required(),
  productId: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
});

export const validateProduct = (product: ProductInterface) => {
  const { error } = productSchema.validate(product);
  if (error) throw new Error(error.details[0].message);
};

export const validateOrder = (order: Order) => {
  const { error } = orderSchema.validate(order);
  if (error) throw new Error(error.details[0].message);
};
