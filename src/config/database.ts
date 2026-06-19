import { env } from "./env.js";
import mongoose from "mongoose";

async function connectDB() {
    await mongoose.connect(env.MONGODB_URI);
    console.log(`✅ Connected with mongodb!`);
}

export default connectDB;