import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projetct-task-manager-express.herokuapp.com',
});

export default api;
