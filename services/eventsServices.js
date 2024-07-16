import { Event } from "../models/Event.js";

export const listEvents = async (filter = {}, query = {}) => {
  const events = await Event.find(
    filter,
    "title description event_date organizer logo_url",
    query
  );
  const total = await Event.countDocuments();

  return { events, total };
};

export const createEvent = async (data) => {
  const newEvent = await Event.create(data);

  return newEvent;
};
