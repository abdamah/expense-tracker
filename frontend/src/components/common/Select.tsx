import { ChangeEvent } from "react";
import Category from "../../models/Category";

interface Props {
  name: string;
  label: string;
  title: string;
  value: string;
  categories: Category[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  name,
  label,
  title,
  categories,
  onChange,
  ...rest
}: Props) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <select
        onChange={onChange}
        {...rest}
        id={name}
        name={name}
        className="form-select"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};
