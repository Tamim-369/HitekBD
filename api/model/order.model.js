import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  nagad: {
    type: Boolean,
  },
  bkash: {
    type: Boolean,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
