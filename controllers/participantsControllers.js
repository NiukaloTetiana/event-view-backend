import { HttpError } from "../helpers/httpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import {
  getParticipantById,
  listParticipants,
  createParticipant,
  findParticipantEmail,
} from "../services/participantsServices.js";

const getAllParticipants = async (req, res) => {
  const result = await listParticipants(req.query);

  res.json(result);
};

const getOneParticipant = async (req, res) => {
  const { id } = req.params;
  const participant = await getParticipantById({ _id: id });

  if (!participant) {
    throw HttpError(404, "Not found");
  }

  res.json(participant);
};

const addParticipant = async (req, res) => {
  const { email, eventId } = req.body;
  const participants = await findParticipantEmail(email);

  if (participants.find((elem) => elem.eventId.toString() === eventId)) {
    throw HttpError(409, "Participant already registered for this event");
  }

  const result = await createParticipant(req.body);

  res.status(201).json(result);
};

export default {
  getAllParticipants: ctrlWrapper(getAllParticipants),
  getOneParticipant: ctrlWrapper(getOneParticipant),
  addParticipant: ctrlWrapper(addParticipant),
};
