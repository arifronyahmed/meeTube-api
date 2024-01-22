import mongoose from "mongoose";
import catchAsync from "../utils/catchAsync.js";
import { DB_NAME } from "../constants.js";

const connectDB = catchAsync(async () => {
  const connectionInstance = await mongoose.connect(
    `${process.env.MONGODB_URI}/${DB_NAME}`
  );
  console.log(
    `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
  );
});

export default connectDB;
