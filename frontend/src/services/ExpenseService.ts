import http from "./HttpService";
import {apiUrl} from "../config.json";
import Expense from "../models/Expense";


const endpoint = apiUrl + "/expenses/";

function getExpenses(){
    return http.get(endpoint)
}

function getExpenseById(id:string ){
return http.get(endpoint + id);
}

function saveExpense(expense:Expense){
    return http.post(endpoint, expense);
}

function updateExpense(id: string, expense:Expense){
    return http.put(endpoint +id, expense);
}


function deleteExpense(id: string){
    return http.delete(endpoint + id);
}



export default{
    getExpenses,
    getExpenseById,
    saveExpense,
    updateExpense,
    deleteExpense,
}