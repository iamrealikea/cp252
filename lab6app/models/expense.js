class Expense {
  /**
   Represents an expense record.
   @constructor
   @param {Date|string} date - The date of the transaction.
   @param {number} income - The income amount.
   @param {number} expense - The expense amount.
   @param {string} detail - A description of the transaction.
 */
  constructor(date, income, expense, detail) {
    this.date = date;
    this.income = parseFloat(income) || 0;
    this.expense = parseFloat(expense) || 0;
    this.detail = detail || '';
  }
}

/**
 * Class ExpenseModel.
 * @class
 */
class ExpenseModel {
  constructor() {
    this.expenses = [];
  }

/**
 * add expense numbers passed to the function.
 * @param {float} expense - A positive number.
 */
  add(expense) {
    this.expenses.push(expense);
  }

/**
 * return expense numbers from stack.
 * @return {array} expense - array of positive number
 */

  getAll() {
    return this.expenses;
  }

/**
 * return total income from expense numbers in stack.
 * @returns {float} totalIncome - total income from expense numbers in stack
 */
  getTotalIncome() {
    return this.expenses.reduce((sum, exp) => sum + exp.income, 0);
  }

  /**
   * return total expense from expense numbers in stack.
   * @returns {float} totalExpense - total expense from expense numbers in stack
   */
  getTotalExpense() {
    return this.expenses.reduce((sum, exp) => sum + exp.expense, 0);
  }
 /**
   * return money left from expense numbers in stack.
   * @returns {float} moneyLeft - money left from expense numbers in stack
   */
  getMoneyLeft() {
    return this.getTotalIncome() - this.getTotalExpense();
  }
}

module.exports = { Expense, ExpenseModel };
