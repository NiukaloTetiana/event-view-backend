import { Participant } from "../models/Participant.js";

export const listParticipants = async (filter = {}, query = {}) => {
  const events = await Participant.find(
    filter,
    "title description event_date organizer logo_url",
    query
  );
  const total = await Event.countDocuments();

  return { events, total };
};
