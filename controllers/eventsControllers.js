import { ctrlWrapper } from "../helpers";
import { listEvents } from "../services/eventsServices";

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 30 } = req.query;
  const skip = (page - 1) * limit;
  const result = await listEvents({}, { skip, limit });

  res.json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
};
