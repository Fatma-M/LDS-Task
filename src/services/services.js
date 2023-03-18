import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEmployees() {
    return apiClient.get("/employees");
  },
  getEmployee(id) {
    return apiClient.get(`/employees/${id}`);
  },
  addEmployee(data) {
    return apiClient.post("/employees", data);
  },
  editEmployee(id, data) {
    return apiClient.put(`/employees/${id}`, data);
  },
  deleteEmployee(id) {
    return apiClient.delete(`/employees/${id}`);
  },

  getPatients() {
    return apiClient.get("/patients");
  },
  getPatient(id) {
    return apiClient.get(`/patients/${id}`);
  },
  addPatient(data) {
    return apiClient.post("/patients", data);
  },
  editPatient(id, data) {
    return apiClient.put(`/patients/${id}`, data);
  },
  deletePatient(id) {
    return apiClient.delete(`/patients/${id}`);
  },
};
