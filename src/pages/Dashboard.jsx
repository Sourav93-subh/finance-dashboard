import SummaryCards from "../components/cards/SummaryCards";
import Charts from "../components/charts/Charts";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Finance Dashboard</h1>

      <SummaryCards />
      <Charts />

    </div>
  );
};

export default Dashboard;