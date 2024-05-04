import bcrypt from "bcrypt";
import User from "../model/user.model.js";
export const createUser = async (req, res, next) => {
  const { name, phoneNumber, email, password, city, state, street } = req.body;
  if (
    !name ||
    !phoneNumber ||
    !email ||
    !password ||
    !city ||
    !state ||
    !street
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const existEmail = await User.findOne({ email });
  const existPhoneNumber = await User.findOne({ phoneNumber });
  if (existEmail || existPhoneNumber) {
    return res
      .status(400)
      .json({ message: "Email or Phone number already exist" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({
    name,
    phoneNumber,
    email,
    password: hashedPassword,
    city,
    state,
    street,
  });
  try {
    await user.save();
    res
      .status(201)
      .json({ message: "User created successfully Alhamdulillah" });
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};
