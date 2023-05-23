import { Request, Response } from "express";
import { createProductDb, getAllProductDataDb } from "./product.service";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await createProductDb(req.body);
    if (product) {
      res.status(200).json({ message: "Product Created Successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Product Failed To Create"})
  }
};

export const getAllProductData = async (req: Request, res: Response) => {
  try {
    const product = await getAllProductDataDb()
    if(product){
      res.status(200).json({ message: "success", data: product });
    }
  } catch (error) {
    res.status(500).json({ message: "Product Failed To Create"})
    return null;
  }
}