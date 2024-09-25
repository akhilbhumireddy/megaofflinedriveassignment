import axios from "axios";
import { getToken } from "./authService";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = async () => {
  const token = getToken();
  return axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addTodo = async (title) => {
  const token = getToken();
  return axios.post(
    API_URL,
    { title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const updateTodoStatus = async (id, status) => {
  const token = getToken();
  return axios.put(
    `${API_URL}/${id}`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteTodo = async (id) => {
  const token = getToken();
  return axios.delete(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
