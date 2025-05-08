import mongoose from "mongoose";
const dbConnection = async () => {
  mongoose
    .connect("mongodb+srv://rajveersingh:rajveersingh@cluster0.zl4yvjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("MongoDB connected");
    })
    .catch(() => {
      console.log("Not Connected");
    });
};

export default dbConnection;
