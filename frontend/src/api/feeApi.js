import api from "./axios";

export const getFees = async () => {
  const { data } = await api.get("/fees");
  return data.fees;
};

export const getFee = async (id) => {
  const { data } = await api.get(`/fees/${id}`);
  return data.fee;
};

export const createFee = async (fee) => {
  const { data } = await api.post("/fees", fee);
  return data.fee;
};

export const updateFee = async (id, fee) => {
  const { data } = await api.put(`/fees/${id}`, fee);
  return data.fee;
};

export const deleteFee = async (id) => {
  const { data } = await api.delete(`/fees/${id}`);
  return data;
};