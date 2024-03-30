import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./configs/database";
import booksRouter from "./routes/movies";
import categoryRouter from "./routes/categories";
import genreRouter from "./routes/genres";
import userSchema from "./routes/auth"
dotenv.config();

const app = express();
// const port = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || "mongodb://127.0.0.1:27017/movies_nodejs"


app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

connectMongoDB(DB_URL)

app.use(`/movies`, booksRouter)
app.use(`/categories`, categoryRouter)
app.use(`/genres`, genreRouter)
app.use(`/users`, userSchema)

export const viteNodeApp = app;