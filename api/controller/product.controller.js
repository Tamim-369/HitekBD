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
    const { name, description, price, category, discount } = req.body;
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
      discount,
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

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json({ message: "Product deleted successfully" });
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Extract product ID from URL parameter
    const { name, description, price, category, discount } = req.body;
    const file = req.file; // Access uploaded file

    // Check if the product ID is provided
    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    // Find the product by ID in the database
    const product = await Product.findById(productId);

    // If the product doesn't exist, return a 404 Not Found response
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Update product properties with provided values
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;
    if (discount) product.discount = discount;

    // If a new image file is uploaded, update the image URL
    if (file) {
      // Upload file to Cloudinary
      const img = await cloudinary.uploader.upload(file.path, {
        folder: "products",
      });
      const imgUrl = img.secure_url;
      product.image = imgUrl;
    }

    // Save the updated product to the database
    await product.save();

    // Send a success response with the updated product data
    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
