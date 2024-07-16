import express from "express";
import eventsControllers from "../controllers/eventsControllers.js";

export const eventsRouter = express.Router();

eventsRouter.get("/", eventsControllers.getAllEvents);
