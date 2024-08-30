import mongoose from "mongoose";
export async function connect() {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("MongoDB connected Alhamdulillah");
  } catch (error) {
    console.log(error);
  }
}
