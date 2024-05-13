import Product from "../model/product.model.js";
import cloudinary from "../utils/cloudinary.js";
import multer from "multer";

// Multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(404).json({ message: "Products not found" });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error("Error retrieving products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, discount } = req.body;
    const files = req.files; // Access uploaded files

    if (!name || !description || !price || !category || !files) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Upload files to Cloudinary
    const imgUrls = await Promise.all(
      files.map(async (file) => {
        const img = await cloudinary.uploader.upload(file.path, {
          folder: "products",
          width: 500, // Set the width and height to make the image square
          height: 500,
          crop: "fill",
        });
        return img.secure_url;
      })
    );

    const newProduct = new Product({
      name,
      description,
      price,
      discount,
      category,
      images: imgUrls, // Assuming your product model has an array field for images
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
    const product = await Product.findById(id);
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
    const productId = req.params.id;
    const { name, description, price, category, discount } = req.body;
    const files = req.files;

    if (!productId) {
      return res.status(400).json({ message: "Product ID is required" });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (category) product.category = category;
    if (discount) product.discount = discount;

    // If new images are uploaded, upload them to Cloudinary
    const imgUrls = await Promise.all(
      files.map(async (file) => {
        const img = await cloudinary.uploader.upload(file.path, {
          folder: "products",
          width: 500, // Set the width and height to make the image square
          height: 500,
          crop: "fill",
        });
        return img.secure_url;
      })
    );

    // Concatenate the new image URLs with existing ones
    product.images = imgUrls;

    await product.save();

    res.status(200).json(product);
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
