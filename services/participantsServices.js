import { Participant } from "../models/Participant.js";

export const listParticipants = async (filter = {}) => {
  const participants = await Participant.find(filter);

  return participants;
};

export const createParticipant = async (data) => {
  const newParticipant = await Participant.create(data);

  return newParticipant;
};

export const getParticipantById = async (ParticipantId) => {
  const participant = await Participant.findById(ParticipantId);

  return participant;
};

export const findParticipantEmail = async (email) => {
  const participant = await Participant.findOne(email);

  return participant;
};
