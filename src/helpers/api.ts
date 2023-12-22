import axios from "axios"

export const API = {
  getPeople: async () => {
    return await axios.get("https://dummyjson.com/users?limit=5");
  },
  getPosts: async (skip?: number) => {
    return await axios.get(`https://dummyjson.com/posts?limit=5&skip=${skip ?? 0}`);
  },
  getComments: async (skip?: number) => {
    return await axios.get(`https://dummyjson.com/comments?limit=6&skip${skip ?? 0}`);
  },
  addNewComments: async () => {
    const randomizeId = Math.floor(Math.random() * 1000);
    return await axios.get(`https://dummyjson.com/comments/${randomizeId}`);
  }
}