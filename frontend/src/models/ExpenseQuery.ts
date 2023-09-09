import Category from "./Category";

export default interface Expense {
    _id: string;
    description: string;
    amount: number;
    category: Category;
  }