import Category from "../models/Category";

interface Props {
  categories: Category[];
  onSelectCategory: (name: string) => void;
}

const ExpenseFilter = ({ categories, onSelectCategory }: Props) => {
  return (
    <select
      onChange={(e) => onSelectCategory(e.target.value)}
      name="category"
      id="category"
      className="form-select"
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
