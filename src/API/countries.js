import api from ".";

const path = "/countries";

const get = () => {
  return api.get(`${path}`);
};

export default {
  get,
};
