import axios from "axios";

let http = axios.create({
  baseURL: "https://lifeplus-api.onrender.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const get = async (url) => {
  try {
    let response = await http.get(url);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
export const post = async (url, data) => {
  try {
    let response = await http.post(url, data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const postFormData = async (url, data) => {
  try {
    const response = await axios.postForm(url, data);
    return response;
  } catch (error) {
    return error;
  }
};
