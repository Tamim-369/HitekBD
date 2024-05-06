import Product from "../model/product.model.js";
import cloudinary from "../utils/cloudinary.js";
import multer from "multer";

// Multer configuration
const upload = multer({ dest: "uploads/" }); // Destination folder for uploaded files

export const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const file = req.file; // Access uploaded file
    console.log("Uploaded file:", req.file);

    if (!name || !description || !price || !category || !file) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Upload file to Cloudinary
    const img = await cloudinary.uploader.upload(file.path, {
      folder: "products",
    });
    const imgUrl = img.secure_url;
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      image: imgUrl,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res
      .status(500)
      .json({ message: "Error creating product", error: error.message });
  }
};

export const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ _id: id });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error("Error retrieving product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
