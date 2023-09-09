import { useEffect, useState } from "react";

import expenseApi from "../services/ExpenseService";
import ExpenseQuery from "../models/ExpenseQuery";

const useExpense = () =>{
    const [expenses, setExpenses] = useState<ExpenseQuery[]>([]); 
    const [selectCategory, setSelectCategory] = useState("");

  const visibleExpenses = selectCategory
    ? expenses.filter((exp) => exp.category.name === selectCategory)
    : expenses;


    const fetchExpenses = async () => {
        const { data: expenses } = await expenseApi.getExpenses();
    
        setExpenses(expenses);
      };
  
    
      const handleDelete = async (id: string) => {
        const newExpenses = expenses.filter((exp) => exp._id !== id);
        await expenseApi.deleteExpense(id);
        setExpenses(newExpenses);
      };

      useEffect(()=>{
        fetchExpenses();      
      },[])

      return { visibleExpenses, setSelectCategory, handleDelete}
}

export default useExpense