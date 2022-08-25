import mongoose from "mongoose";
require("dotenv").config();

const { MONGO_USER, MONGO_PASSWORD, MONGO_SESSION } = process.env;

mongoose
  .connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:27017/my_notes?${MONGO_SESSION}`
  )
  .then(() => console.log("Conectado com sucesso no mongoose"))
  .catch((err) => console.log(err));
