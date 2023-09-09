import { Route, Routes } from "react-router-dom";

import "./App.css";
import { ExpenseForm } from "./components/ExpenseForm";
import { Expenses } from "./components/Expenses";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="container">
      <div className="mb-5">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Expenses />} />
        <Route path="/expense/:id" element={<ExpenseForm />} />
      </Routes>
    </main>
  );
}

export default App;
