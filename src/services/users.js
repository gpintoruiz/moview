import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/users';

const create = async (userData) => {
  const response = await axios.post(baseUrl, userData);
  return response.data;
};

const usersService = {
  create
};

export default usersService;