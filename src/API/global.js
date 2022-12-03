import api from ".";

const path = "/summary";

const get = () => {
  return api.get(`${path}`);
};

export default {
  get,
};
