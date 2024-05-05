import bcryptjs from "bcryptjs";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import sendEmail from "../utils/mailSender.js";
const JWT_SECRET = process.env.JWT_SECRET;
function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET);
}

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
  const hashedPassword = await bcryptjs.hash(password, 10);
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
    const newUser = await user.save();
    const token = generateToken({ id: newUser._id });
    console.log(token);
    const link = `${process.env.CLIENT_URL}/confirm?token=${token}`;
    const mailSuccess = await sendEmail(
      process.env.EMAIL,
      process.env.PASS,
      newUser.email,
      "Verify Email",
      `please Click here ${link} to verify your email`
    );
    if (!mailSuccess) {
      return res.status(500).json({ message: "Something went wrong" });
    }

    res.status(201).json({
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      token: token,
      message:
        "We have sent a verification link in your email. Please click it to verify your account",
    });
  } catch {
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const verifyUser = async (req, res, next) => {
  // const { token } = req.body;
  const token = req.params.token;
  console.log(token);
  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.verifyed) {
      return res.status(400).json({ message: "User already verified" });
    }

    user.verifyed = true;
    await user.save();

    res.status(200).json({ message: "User verified successfully" });
  } catch (error) {
    console.error("Error verifying user:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
export const getUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  if (!user.verifyed) {
    return res.status(400).json({ message: "Please verify your email" });
  }

  res.status(200).json({
    email: user.email,
    phoneNumber: user.phoneNumber,
    token: generateToken({ id: user._id }),
    message: "Logged in successfully",
  });
};

export const findUser = async (req, res) => {
  const email = req.params.email;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { name, email, phoneNumber, city, state, street } = req.body;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.name = name;
  user.email = email;
  user.phoneNumber = phoneNumber;
  user.city = city;
  user.state = state;
  user.street = street;
  try {
    const updatedUser = await user.save();
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const resetPassword = async (req, res) => {
  const randomNumber = Math.floor(Math.random() * 900000) + 100000;
  sendEmail(
    process.env.EMAIL,
    process.env.PASS,
    req.params.email,
    "Reset Password",
    `your verification code is ${randomNumber}`
  );
  const hashedNumber = await bcryptjs.hash(randomNumber.toString(), 10);
  return res.status(200).json({
    message: "We have send a verification code in your email.",
    code: hashedNumber,
  });
};

export const verifyCode = async (req, res) => {
  const code = req.body.code;
  const hashedCode = await bcryptjs.compare(code, req.query.code);
  if (!hashedCode) {
    return res.status(400).json({ message: "Invalid code" });
  }
  return res.status(200).json({ message: "Code verified successfully" });
};

export const resetPasswordFinish = async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await bcryptjs.hash(password, 10);
  const user = await User.findOne({ email: req.params.email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  user.password = hashedPassword;
  try {
    const updatedUser = await user.save();
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};
