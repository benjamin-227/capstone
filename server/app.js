import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import hedgehogs from "./routers/hedgehogs.js";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
//Middleware
app.use(cors);
app.use(express.json());
app.use("/hedgehogs", hedgehogs);

//Database
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

app.get("/api/random", async (req, res, next) => {
  console.log("Request received");
  try {
    const response = await axios.get(
      "https://randommer.io/api/Name?nameType=firstname&quantity=3",
      {
        headers: {
          "X-Api-Key": process.env.RANDOM_NAME_API
        }
      }
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error fetching random name:", error);
    res.status(500).send("Error fetching name");
  }
});

app.get("/status", (req, res, next) => {
  res.send(JSON.stringify({ message: "Service healthy" }));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
