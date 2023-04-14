import express, {json, urlencoded} from "express";
import { RegisterRoutes } from "./routes";
import * as dotenv from 'dotenv'
dotenv.config()

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);
