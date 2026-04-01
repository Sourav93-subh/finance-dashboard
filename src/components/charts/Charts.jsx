import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const lineData = [
  { name: "Jan", balance: 20000 },
  { name: "Feb", balance: 30000 },
  { name: "Mar", balance: 25000 },
  { name: "Apr", balance: 40000 },
];

const pieData = [
  { name: "Food", value: 4000 },
  { name: "Travel", value: 3000 },
  { name: "Shopping", value: 2000 },
  { name: "Bills", value: 1000 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Line Chart */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Balance Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="balance" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="mb-4 font-semibold">Spending Breakdown</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={80}
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Charts;