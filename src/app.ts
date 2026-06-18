import express, { response, type Express, type Request, type Response } from "express";

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
    res.status(200)
    .json({message: "Server is listening.", success: true, health: true});
})

export default app;

