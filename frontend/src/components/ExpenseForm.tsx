import useCategory from "../hooks/useCategory";
import useExpenseForm from "../hooks/useExpenseForm";
import Button from "./common/Button";
import { Input } from "./common/Input";
import { Select } from "./common/Select";

const ExpenseForm = () => {
  const { id, expense, handleInputChange, handleSelectChange, handleSubmit } =
    useExpenseForm();
  const { categories } = useCategory();

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Description"
        name="description"
        value={expense.description}
        onChange={handleInputChange}
      />
      <Input
        label="Amount"
        name="amount"
        value={expense.amount || ""}
        type="number"
        onChange={handleInputChange}
      />
      <Select
        label="Category"
        name="category"
        title="All Categories"
        value={expense.category}
        onChange={handleSelectChange}
        categories={categories}
      />
      <Button label={id === "new" ? "Save Expense" : "Update Expense"} />
    </form>
  );
};

export default ExpenseForm;
