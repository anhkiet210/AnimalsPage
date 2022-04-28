import axiosClient from "./axiosClient";
const AnimalsApi = {
  getAll: () => {
    const url = "/animals";
    return axiosClient.get(url);
  },
  get: (id) => {
    const url = `/animals/${id}`;
    return axiosClient.get(url);
  },
};

export default AnimalsApi;
