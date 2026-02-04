import mongoose from "mongoose";
import { ENV } from "./env.js";
export const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("CONNECTED SUCCESSFULY");
  } catch (e) {
    console.log("error connecting to DB");
    process.exit(1);
  }
};
