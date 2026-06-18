import { env } from "./config/env.js"
import app from "./app.js"

app.listen(env.PORT, () => {
    console.log(`⚡[Server]: server is running on http://127.0.0.1:${env.PORT}/`)
});

