import express, { type Express, type Request, type Response } from "express";
import connectDB from "./config/database.js";
const app: Express = express();

// Force database connection
connectDB().catch((error) => {
    console.error("Database connection failed during cold start:", error);
});

app.get("/", (req: Request, res: Response) => {
    res.status(200)
    .json({message: "Server is listening.", success: true, health: true});
})

export default app;
