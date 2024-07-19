import express from "express";
import { isValidId } from "../middlewares/isValidId.js";
import eventsControllers from "../controllers/eventsControllers.js";

export const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);
eventsRouter.get("/:id", isValidId, eventsControllers.getOneEvent);
