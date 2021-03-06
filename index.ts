import express from "express";
import cors from "cors";
import pg from "pg-promise";
import { signupRoutes } from "./routes/auth-routes/signupRoute";
import { loginRoute } from "./routes/auth-routes/loginRoute";
import { purpleRoute } from "./routes/purpleRoutes";
import { redRoute } from "./routes/redRoutes";
import { orangeRoute } from "./routes/orangeRoutes";
import { yellowRoute } from "./routes/yellowRoutes";
import { greenRoute } from "./routes/greenRoutes";
import { blueRoute } from "./routes/blueRoutes";
import { blackRoute } from "./routes/blackRoutes";
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", signupRoutes);
app.use("/", loginRoute);
app.use("/", purpleRoute);
app.use("/", orangeRoute);
app.use("/", redRoute);
app.use("/", yellowRoute);
app.use("/", greenRoute);
app.use("/", blueRoute);
app.use("/", blackRoute);

const port = 3050;

export const db = pg()({
  // connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  host: 'ec2-34-192-210-139.compute-1.amazonaws.com',
  port: 5432,
  user: 'skdxecjbjyezap',
  password: 'ad3efaa72d7d4659ebc01bb1b00e5ce5765c7f53a37ae2b9b97c5b4dbcbcbd10',
  database: 'ddhn2rqd11ce6h',
});

app.listen(port, () =>
  console.log(
    `Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`
  )
);

module.exports = app;
