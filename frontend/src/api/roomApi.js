import api from "./axios";

export const getRooms = async () => {
  const { data } = await api.get("/rooms");
  return data.rooms;
};