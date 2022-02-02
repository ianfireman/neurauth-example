import express from "express";
import compression from "compression";
import { json, urlencoded } from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index";
import { ENVIRONMENT } from "./config/secrets";
import { notFound, defaultError } from "./middlewares/errorHandler";

const app = express();

app.use(helmet());
app.use(compression());
app.use(json());
app.use(urlencoded({ extended: true }));
if (ENVIRONMENT!=="test") 
  app.use(morgan("combined"));
app.use("/api", routes);
app.use(notFound);
app.use(defaultError);

export default app;
