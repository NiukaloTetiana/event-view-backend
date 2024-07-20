import express from "express";

import { validateBody, isValidId } from "../middlewares/index.js";
import participantsControllers from "../controllers/participantsControllers.js";
import { createParticipantSchema } from "../schemas/participantsSchema.js";

export const participantsRouter = express.Router();

participantsRouter.get("/", participantsControllers.getAllParticipants);

participantsRouter.get(
  "/:id",
  isValidId,
  participantsControllers.getOneParticipant
);

participantsRouter.post(
  "/",

  validateBody(createParticipantSchema),
  participantsControllers.addParticipant
);
