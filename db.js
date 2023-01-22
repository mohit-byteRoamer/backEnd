import mongoose from "mongoose";

let ConnectDB = function () {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.urf84lb.mongodb.net?retryWrites=true&w=majority"
    )
    .then((result) => {
      console.log("Database Connection Is Ready");
    })
    .catch((error) => console.log(error));
};

export default ConnectDB;
