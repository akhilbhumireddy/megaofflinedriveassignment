import axios from "axios";
import "./authService.css";

const API_URL = "http://localhost:5000/api/auth";

export const signup = async (userData) => {
  return axios.post(`${API_URL}/signup`, userData);
};

export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }
  return response.data;
};

export const getToken = () => localStorage.getItem("token");

export const logout = () => localStorage.removeItem("token");
