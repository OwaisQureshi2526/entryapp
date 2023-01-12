import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { EmployeeList } from "./components";
import { EmployeeForm } from "./components";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/create-employee" element={<EmployeeForm />} />
          <Route path="/edit-employee/:id" element={<EmployeeForm />} />
        </Routes>
      </div>
    </div>
  );
};
