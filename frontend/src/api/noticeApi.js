import api from "./axios";

export const getNotices = async () => {
  const { data } = await api.get("/notices");
  return data.notices;
};

export const getNotice = async (id) => {
  const { data } = await api.get(`/notices/${id}`);
  return data.notice;
};

export const createNotice = async (notice) => {
  const { data } = await api.post("/notices", notice);
  return data.notice;
};

export const updateNotice = async (id, notice) => {
  const { data } = await api.put(`/notices/${id}`, notice);
  return data.notice;
};

export const deleteNotice = async (id) => {
  const { data } = await api.delete(`/notices/${id}`);
  return data;
};