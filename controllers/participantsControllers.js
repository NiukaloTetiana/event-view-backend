import { ctrlWrapper, HttpError } from "../helpers/index.js";
import {
  getParticipantById,
  listParticipants,
  createParticipant,
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
  const { email } = req.body;
  const participant = await findParticipantEmail({ email });

  if (participant) {
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
