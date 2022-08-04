const axios = require('axios');

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com',
    });
  }

  getAllCharacters = () => {
    return this.api.get('/characters');
  };

  getOneCharacter = (id) => {
    return this.api.get(`/characters/${id}`);
  };

  createCharacter = (character) => {
    return this.api.post(`/characters`, character);
  };

  editCharacter = (id, updatedInfo) => {
    return this.api.put(`/characters/${id}`, updatedInfo);
  };

  deleteCharacter = (id) => {
    return this.api.delete(`/characters/${id}`);
  };
}

module.exports = ApiService;
