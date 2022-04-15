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
  host: "ec2-23-20-224-166.compute-1.amazonaws.com",
  port: 5432,
  user: "pmmtbpaoddgbxf",
  password: '225629cd11cc48052cc24f71fa160547d4b96f9ed0d4eda5efab3b751aeb1b2c',
  database: 'd9oiou4tj5o4k0',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(port, () =>
  console.log(
    `Listening on port: ${port}. ${process.env.DATABASE_NAME} ${process.env.DATABASE_PASSWORD}`
  )
);
