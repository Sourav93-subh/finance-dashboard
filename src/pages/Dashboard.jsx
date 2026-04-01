import { useState } from "react";
import SummaryCards from "../components/cards/SummaryCards";
import Charts from "../components/charts/Charts";
import Transactions from "../components/transactions/Transactions";

const Dashboard = () => {
  const [role, setRole] = useState("viewer");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Finance Dashboard</h1>

      {/* Role Selector */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Role:</label>
        <select
          className="border p-2 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="viewer">Viewer</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <SummaryCards />
      <Charts />
      <Transactions role={role} />

    </div>
  );
};

export default Dashboard;