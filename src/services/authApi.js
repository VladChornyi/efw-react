import axios from "axios";

const publicHost = axios.create({
  baseURL: "http://70.34.201.18:4444",
});

const privateHost = axios.create({
  baseURL: "http://70.34.201.18:4444",
});

export async function register(credential) {
  const { data } = await publicHost.post("/users/create", credential);
  return data;
}

export async function login(credential) {
  const { data } = await publicHost.post("/users/login", credential);
  return data;
}

export const token = {
  set: (token, token_type) => {
    privateHost.defaults.headers.common.Authorization = `${token_type} ${token}`;
  },
  unSet: () => {
    privateHost.defaults.headers.common.Authorization = "";
  },
};
