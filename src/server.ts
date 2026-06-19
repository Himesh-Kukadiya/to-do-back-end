import { env } from "./config/env.js"
import app from "./app.js"
import connectDB from "./config/database.js";

async function startServer() {
    try {
        await connectDB();

        app.listen(env.PORT, () => {
            console.log(`⚡[Server]: server is running on http://127.0.0.1:${env.PORT}/`)
        });
    }
    catch(error) {
        console.log("====================")
        console.error(error);
        process.exit(1);
    }
}

startServer();
