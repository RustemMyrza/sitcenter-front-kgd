import axios from "axios";
import { API_BASE_URL } from "@/utils/api";

const token = localStorage.getItem("authToken");

export const fetchUserInfo = async (id) => {
  try {
    // console.log(id)
    const result = await axios.get(`${API_BASE_URL}/users/${id}`, {
      headers: {
        bearer: token,
      },
    });
    
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const update = async (id, body) => {
  try {
    await axios.put(`${API_BASE_URL}/users/${id}`, body, {
      headers: {
        bearer: token,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const deleteUser = async (id, ) => {
  try {
    await axios.delete(`${API_BASE_URL}/users/${id}`, {
      headers: {
        bearer: token,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
export const createUser = async (body ) => {
  try {
    await axios.post(`${API_BASE_URL}/users/`,body, {
      headers: {
        bearer: token,
      },
    });
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};


export const fetchUsers = async () => {
  try {
    // console.log(id)
    const result = await axios.get(`${API_BASE_URL}/users`, {
      headers: {
        bearer: token,
      },
    });
    
    return result;
  } catch (error) {
    console.log(error);
  }
};



export const upload = async (formData, username) => {
  try {
    const queryParams = new URLSearchParams({ login: username }).toString();
    const response = await fetch(
      `${API_BASE_URL}/users/upload?${queryParams}`,
      {
        method: "POST",
        headers: {
          bearer: token,
        },
        body: formData,
      }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
