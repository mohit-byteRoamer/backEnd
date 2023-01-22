import express from "express";
import userApi from "./api/router/user-router.js";
import ConnectDB from "./db.js";
const app = express();
app.use(express.json()); //JSON converts Body data in JSON format
app.use("/user", userApi);

app.listen(3000, () => {
  console.log("Server is Ready");
  ConnectDB();
});
