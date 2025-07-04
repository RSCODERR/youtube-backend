import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json());
app.use(urlencoded());
app.use(express.static("public"))
app.use(cookieParser());

export {app};