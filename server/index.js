import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
import game from "./routes/game.js";
import user from "./routes/user.js";

const app = express();
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/games", game);

app.listen(8800, () => {
  connect();
  console.log("Server berjalan di port 8800");
});
