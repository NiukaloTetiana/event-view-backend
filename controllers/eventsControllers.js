import { HttpError } from "../helpers/httpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { getEventById, listEvents } from "../services/eventsServices.js";

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 10, byDate, byTitle, byOrganizer } = req.query;
  const skip = (page - 1) * limit;
  const sort = {};

  if (byDate !== undefined) {
    sort.event_date = byDate === "true" ? 1 : -1;
  }

  if (byTitle !== undefined) {
    sort.title = byTitle === "true" ? 1 : -1;
  }

  if (byOrganizer !== undefined) {
    sort.organizer = byOrganizer === "true" ? 1 : -1;
  }

  const result = await listEvents({}, { skip, limit }, sort);

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
