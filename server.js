import express from "express";
import dotenv from "dotenv";
import router from "./src/routes";
import connectMongoDB from "./src/config/dbconfig";
import errorHandler from "./src/middlewares/errorHandler";
dotenv.config();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/movies_nodejs";
connectMongoDB(dbUrl);

app.use("/", router);

app.use(errorHandler);

export const viteNodeApp = app;
