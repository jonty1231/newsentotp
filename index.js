// api/index.js
import serverlessExpress from "@vendia/serverless-express";
import app from "./server.js";

export default serverlessExpress({ app });
