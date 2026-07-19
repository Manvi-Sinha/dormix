import api from "./axios";

// Get all wardens
export const getWardens = async () => {
  const { data } = await api.get("/wardens");
  return data.wardens;
};

// Get single warden
export const getWarden = async (id) => {
  const { data } = await api.get(`/wardens/${id}`);
  return data.warden;
};

// Create warden
export const createWarden = async (warden) => {
  const { data } = await api.post("/wardens", warden);
  return data.warden;
};

// Update warden
export const updateWarden = async (id, warden) => {
  const { data } = await api.put(`/wardens/${id}`, warden);
  return data.warden;
};

// Delete warden
export const deleteWarden = async (id) => {
  const { data } = await api.delete(`/wardens/${id}`);
  return data;
};