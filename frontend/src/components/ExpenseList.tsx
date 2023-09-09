import { Link } from "react-router-dom";
import Expense from "../models/ExpenseQuery";

interface Props {
  expenses: Expense[];
  onDelete: (id: string) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense._id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category.name}</td>
            <td>
              <Link
                to={`expense/${expense._id}`}
                className="btn btn-success btn-sm"
              >
                Update
              </Link>
            </td>
            <td>
              <button
                onClick={() => onDelete(expense._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
