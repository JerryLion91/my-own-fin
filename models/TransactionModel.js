const mongoose = require('mongoose');

let schema = mongoose.Schema({
  description: String,
  value: Number,
  category: String,
  year: Number,
  month: Number,
  day: Number,
  yearMonth: String,
  yearMonthDay: String,
  type: String,
});

const TransactionModel = mongoose.model('transaction', schema);

module.exports = TransactionModel;

const mockTransactio = {
  id: 'uuid',
  type: TYPE.EXPENSE,
  value: 6200,
  category: EXPENSES.HOME,
  description: 'Almofadas lindas',
  payment_date: 'timestamp',
  frequency: FREQUENCY.ONCE,
  created_by: 'vrol',
  created_at: 'timestamp',
  updated_by: null,
  updated_at: null,
  deleted: false,
};

const FREQUENCY = {
  ONCE: 'ONCE',
  WEEKELY: 'WEEKELY',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
};

const TYPE = {
  INCOME: '+',
  EXPENSE: '-',
};

const INCOME = {
  SALARY: 'SALARY',
  BONUS: 'BONUS',
  HEALTH_CARE: 'HEALTH_CARE',
  FREELANCE: 'FREELANCE',
  OTHERS: 'OTHERS',
};
const EXPENSES = {
  HOME: 'HOME',
  EDUCATION: 'EDUCATION',
  ELETRONICS: 'ELETRONICS',
  PLEASURE: 'PLEASURE',
  OTHERS: 'OTHERS',
  GROCERY: 'GROCERY',
  RESTAURANT: 'RESTAURANT',
  HEALTH: 'HEALTH',
  SERVICES: 'SERVICES',
  HOME: 'HOME',
};
