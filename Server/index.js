import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import Router from "./routes/Routes.js";
import cors from "cors";

const app = express();
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DD_PASSWARD;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use("/", Router);
const PORT = 6000;
Connection(username, password);
app.listen(`${PORT}`, () => {
  console.log("server is working on port", PORT);
});
