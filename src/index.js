import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("Error", (error) => {
      console.log("Error from app:", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Application running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo db connection failed !!", err);
  });
