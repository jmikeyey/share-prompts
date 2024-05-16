import mongoose from "mongoose";

let isConnected = false; // track connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Mongo DB is Already Connected");
    return;
  }
  const connection = `${process.env.MONGO_URI}`;
  mongoose
    .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("Database Connected Successfully"); isConnected = true; })
    .catch((err) => console.log(err));
};
