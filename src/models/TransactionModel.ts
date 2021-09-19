import { Schema, model } from 'mongoose';

const incomeArr = ['SALARY', 'BONUS', 'HEALTH_CARE', 'FREELANCE', 'OTHERS'];
const expenseArr = [
  'HOME',
  'EDUCATION',
  'ELETRONICS',
  'PLEASURE',
  'GROCERY',
  'RESTAURANT',
  'HEALTH',
  'SERVICES',
  'OTHERS',
];

interface TransactionInterface {
  type: string;
  value: number;
  category: string;
  description?: string;
  frequency: string;
  payment_date: Date;
  created_at: number;
  created_by: string;
  updated_at: number;
  updated_by: string;
  deleted: boolean;
}

const transactionSchema = new Schema<TransactionInterface>(
  {
    type: {
      type: String,
      enum: ['+', '-'],
      required: true,
    },
    value: {
      type: Number, // in cents
      required: true,
    },
    category: {
      type: String,
      validate: {
        validator: function (v) {
          switch (this.type) {
            case '+':
              return incomeArr.includes(v);
            case '-':
              return expenseArr.includes(v);
            default:
              return false;
          }
        },
        message: (reason) =>
          `${reason.value} is not a valid category for this transaction.`,
        kind: 'Invalid category',
      },
      required: true,
    },
    description: String,
    frequency: {
      type: String,
      enum: ['ONCE', 'WEEKELY', 'MONTHLY', 'YEARLY'],
      default: 'ONCE',
    },
    payment_date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    created_by: { type: String },
    updated_by: { type: String },
    deleted: { type: Boolean, default: false },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

const TransactionModel = model('transaction', transactionSchema);

export default TransactionModel;

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
};
