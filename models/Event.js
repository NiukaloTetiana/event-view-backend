import { model, Schema } from "mongoose";
import { handleMongooseError } from "../helpers";

const eventSchema = new Schema(
  {
    title: { type: String, required: [true, "Title is required"] },

    description: { type: String, required: [true, "Description is required"] },

    event_date: { type: Date, required: [true, "Event date is required"] },

    organizer: { type: String, required: [true, "Organizer is required"] },

    logo_url: { type: String, required: [true, "Logo url is required"] },
  },
  { versionKey: false }
);

eventSchema.post("save", handleMongooseError);

export const Event = model("event", eventSchema);
