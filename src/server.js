import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import connectMongoDB from "./configs/database.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/movies_nodejs"


app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());
connectMongoDB(DB_URL);
routes(app)
app.listen(port, () => {
    console.log("Server running port :" + port)
})