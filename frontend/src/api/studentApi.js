import api from "./axios";

export const getStudents = async () => {
  const { data } = await api.get("/students");
  return data.students;
};

export const getStudent = async (id) => {
  const { data } = await api.get(`/students/${id}`);
  return data.student;
};

export const createStudent = async (student) => {
  const { data } = await api.post("/students", student);
  return data.student;
};

export const updateStudent = async (id, student) => {
  const { data } = await api.put(`/students/${id}`, student);
  return data.student;
};

export const deleteStudent = async (id) => {
  const { data } = await api.delete(`/students/${id}`);
  return data;
};