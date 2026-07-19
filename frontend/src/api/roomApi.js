import api from "./axios";

export const getRooms = async () => {
  const { data } = await api.get("/rooms");
  return data.rooms;
};

export const getRoom = async (id) => {
  const { data } = await api.get(`/rooms/${id}`);
  return data.room;
};

export const createRoom = async (room) => {
  const { data } = await api.post("/rooms", room);
  return data.room;
};

export const updateRoom = async (id, room) => {
  const { data } = await api.put(`/rooms/${id}`, room);
  return data.room;
};

export const deleteRoom = async (id) => {
  const { data } = await api.delete(`/rooms/${id}`);
  return data;
};