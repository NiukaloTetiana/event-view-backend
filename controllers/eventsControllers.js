import { ctrlWrapper, HttpError } from "../helpers/index.js";
import { getEventById, listEvents } from "../services/eventsServices.js";

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  const result = await listEvents({}, { skip, limit });

  res.json(result);
};

const getOneEvent = async (req, res) => {
  const { id } = req.params;
  const event = await getEventById({ _id: id });

  if (!event) {
    throw HttpError(404, "Not found");
  }

  res.json(event);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  getOneEvent: ctrlWrapper(getOneEvent),
};
