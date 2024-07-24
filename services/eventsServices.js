import { Event } from "../models/Event.js";

export const listEvents = async (filter = {}, query = {}, sort = null) => {
  const events = await Event.find(
    filter,
    "title description event_date organizer logo_url",
    query
  )
    .sort(sort)
    .exec();
  const total = await Event.countDocuments(filter);
  return { events, total };
};

export const createEvent = async (data) => {
  const newEvent = await Event.create(data);

  return newEvent;
};

export const getEventById = async (eventId) => {
  const event = await Event.findById(eventId);

  return event;
};
