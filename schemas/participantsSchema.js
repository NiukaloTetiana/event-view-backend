import Joi from "joi";

export const createParticipantsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  dateOfRegistration: Joi.date().required(),
  eventAdvertisementSource: Joi.string()
    .required()
    .valid("Social media", "Friends", "Found myself"),
  eventId: Joi.string().required().messages({
    "any.required": "eventId is required",
  }),
});
