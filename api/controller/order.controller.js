import Order from "../model/order.model.js";
import Product from "../model/product.model.js";
import User from "../model/user.model.js";
import sendEmail from "../utils/mailSender.js";
const discountedPrice = (mainPrice, discount) => {
  return mainPrice - (mainPrice * discount) / 100;
};
export const createOrder = async (req, res) => {
  const {
    products,
    userId,
    name,
    city,
    paymentMethod,
    state,
    street,
    phoneNumber,
  } = req.body;
  if (!products || !name || !city || !state || !street || !phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }
  if (!paymentMethod) {
    return res
      .status(400)
      .json({ message: "Please select your payment method" });
  }

  const totalPrice = await products.reduce(async (totalPromise, product) => {
    let total = await totalPromise;
    let foundProduct = await Product.findById(product.productId);
    console.log("Product Price:", foundProduct.price);
    console.log("Product Amount:", product.amount);
    return (
      total +
      discountedPrice(foundProduct.price, foundProduct.discount) *
        product.amount
    );
  }, Promise.resolve(0));

  console.log("Total Price:", totalPrice);

  const order = new Order({
    products,
    userId,
    name,
    price: totalPrice + 120,
    city,
    paymentMethod,
    state,
    street,
    phoneNumber,
  });
  const newOrder = await order.save();
  if (newOrder) {
    sendEmail(
      process.env.EMAIL,
      process.env.PASS,
      "rtowhidur96@gmail.com",
      `New Order from ${newOrder.phoneNumber}`,
      `A user named ${
        newOrder.name ? newOrder.name : "Unknown"
      } placed a new order view order information by clicking the link https://hitekbd.onrender.com/order?id=${
        newOrder._id
      }`
    );
    return res.status(200).json(newOrder);
  }
};

export const getOneOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json(order);
};
export const getOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.find({ userId: id });
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json(order);
};

export const getAllOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.find({});
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  res.status(200).json(order);
};

export const changeOrderStatus = async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
  order.status = "Shipped";
  const newOrder = await order.save();
  if (newOrder) {
    return res.status(200).json(newOrder);
  }
};
