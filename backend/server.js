import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes";
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

mongoose.connect(
  "mongodb+srv://guadalupegaona97:D2RBzHhgv5mOkYRe@cluster0.cb9j1o3.mongodb.net/?retryWrites=true&w=majority"
)
  .then(() => console.log("Established a connection to the database"))

  .catch((err) => console.log(`Something went wrong when connecting to the database `, err));

app.listen(PORT, () => {
  console.log(`Server fired up at port: http://localhost:${PORT}`)
})
//     .then(() => console.log(`Established a connection to the database ${db_name}`))
//     .catch(err => console.log(`Something went wrong when connecting to the database `, err));