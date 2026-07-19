import api from "./axios";

export const getComplaints = async () => {
  const { data } = await api.get("/complaints");
  return data.complaints;
};

export const getComplaint = async (id) => {
  const { data } = await api.get(`/complaints/${id}`);
  return data.complaint;
};

export const createComplaint = async (complaint) => {
  const { data } = await api.post("/complaints", complaint);
  return data.complaint;
};

export const updateComplaint = async (id, complaint) => {
  const { data } = await api.put(`/complaints/${id}`, complaint);
  return data.complaint;
};

export const deleteComplaint = async (id) => {
  const { data } = await api.delete(`/complaints/${id}`);
  return data;
};