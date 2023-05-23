import mongoose from "mongoose";
import app from "./app";

const port:number = 5000;

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-test");
    app.listen(port, () => {
      console.log(`Server app listening on port ${port}`);
    });
  } catch (err) {
    console.log("Server not connected");
  }
}
main();