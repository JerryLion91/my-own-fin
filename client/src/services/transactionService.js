import mongoose from 'mongoose';
import axios from 'axios';

const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
// const TransactionModel = require('../../../models/TransactionModel');

const http = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    'Content-type': 'application/json',
  },
});

const getPeriod = (period) => {
  // YYYY-MM
  return http.get(`/transaction?period=${period}`);
};

const create = (data) => {
  return http.post('/transaction', data);
};

const update = (id, data) => {
  id = ObjectId(id);
  return http.put(`/transaction/${id}`, data);
};

const remove = (id) => {
  id = ObjectId(id);
  return http.delete(`/transaction/${id}`);
};

export default {
  getPeriod,
  create,
  update,
  remove,
};
