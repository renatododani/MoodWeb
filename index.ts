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
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  host: process.env.DATABASE_HOST,
  port: 5432,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

app.listen(port, () =>
  console.log(
    `Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`
  )
);

module.exports = app;
