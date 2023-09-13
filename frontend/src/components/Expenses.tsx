import useCategory from "../hooks/useCategory";
import useExpense from "../hooks/useExpense";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = () => {
  const { visibleExpenses, setSelectCategory, handleDelete } = useExpense();
  const { categories } = useCategory();

  return (
    <>
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </>
  );
};

export default Expenses;
