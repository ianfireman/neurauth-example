
import mongoose from "mongoose";
import bluebird from "bluebird";
import { MONGODB_URI, ENVIRONMENT } from "./secrets";
import logger from "./logger";

function connectDatabase(): void {
  if (ENVIRONMENT !== "test") {
    mongoose.Promise = bluebird;
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(
      () => {
        logger.info("MongoDB connection success!");
      },
    ).catch(err => {
      logger.error("MongoDB connection error. Please make sure MongoDB is running. " + err);
      process.exit();
    });
  }
}

export default connectDatabase;
