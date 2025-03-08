const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const expenseSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    monthYear: { type: String, required: true },
    monthNumber: { type: Number, required: true },
    tables: [{
        tableName: { type: String },
        columns: [{ type: String }],
        rows: [{
            date: { type: String },
            name: { type: String },
            amount: { type: Number },
        }],
    }],
    calculations: {
        totalIncome: {type: Number, default: 0},
        totalExpense: { type: Number, default: 0},
        currentAmount: { type: Number, default: 0}
    }
});



const models = {
    Users: mongoose.model('User', userSchema),
    Expense: mongoose.model('Expense', expenseSchema),
};

module.exports = models;
