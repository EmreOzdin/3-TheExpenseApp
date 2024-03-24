import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://the-expense-app-e66e0-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}