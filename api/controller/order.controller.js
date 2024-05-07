import Order from "../model/order.model.js";
export const createOrder = async (req, res) => {
  const {
    products,
    userId,
    name,
    city,
    bkash,
    nagad,
    state,
    street,
    phoneNumber,
  } = req.body;
  const order = new Order({
    products,
    userId,
    name,
    city,
    bkash,
    nagad,
    state,
    street,
    phoneNumber,
  });
  const newOrder = await order.save();
  if (newOrder) {
    return res.status(200).json(newOrder);
  }
};
