import { Request, Response } from "express";
import Product from "../models/Product.js";

export const addProduct = async (req: Request, res: Response) => {
  try {
       console.log("Files received:", req.files);
    console.log("Files length:", (req.files as any)?.length);
    if (!req.files || !(req.files instanceof Array) || req.files.length !== 4) {
      return res.status(400).json({
        message: "Exactly 4 images required",
      });
    }

   const imagePaths = (req.files as Express.Multer.File[]).map(
  (file: any) => file.path
);


    const newProduct = new Product({
      ...req.body,
      images: imagePaths,
    });

    await newProduct.save();

    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });

 
  } catch (error: any) {  
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json(products);
};
