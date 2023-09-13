import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import Expense from "../models/Expense";
import expenseApi from "../services/ExpenseService";

const initialValues = {   
    description: "",
    amount: parseInt(""),
    category: "",
  };
 
const useExpenseForm = () =>{
    const [expense, setExpense] = useState<Expense>(initialValues);
   


    const { id } = useParams();
    const naviage = useNavigate();
  
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setExpense({ ...expense, [e.target.name]: e.target.value });
    };
  
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
      const newExpense = { ...expense };
      newExpense.category = e.target.value;
      setExpense(newExpense);
    };
  
    const fetchExpense = async () => {
      if (!id || id === "new") return;
  
      const { data: expense } = await expenseApi.getExpenseById(id);
      setExpense(expense);
    };
  
    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
  
      if (id === "new") {
        await expenseApi.saveExpense(expense);
        naviage("/");
      } else {
        await expenseApi.updateExpense(id!, expense);
        naviage("/");
      }
 
    };
  
    useEffect(() => {   
      fetchExpense();
    }, []);
  
    return {id, expense, handleInputChange, handleSelectChange, handleSubmit}
}

export default useExpenseForm;