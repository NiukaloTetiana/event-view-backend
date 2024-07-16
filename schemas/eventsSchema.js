import Joi from "joi";

export const createEventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  event_date: Joi.date().required(),
  organizer: Joi.string().required(),
  logo_url: Joi.string().required(),
});
