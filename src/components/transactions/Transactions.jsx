import { useState } from "react";

const data = [
  { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
  { id: 3, date: "2026-04-03", amount: 800, category: "Travel", type: "expense" },
  { id: 4, date: "2026-04-04", amount: 2000, category: "Freelance", type: "income" },
];

const Transactions = ({ role }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredData = data.filter((item) => {
    const matchesSearch = item.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      {/* Table */}
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2">Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="py-2">{item.date}</td>
              <td>₹{item.amount}</td>
              <td>{item.category}</td>
              <td
                className={
                  item.type === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {item.type}
              </td>

              {/* ✅ THIS IS THE CORRECT PLACE */}
              {role === "admin" && (
                <td>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              )}

            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <p className="text-center mt-4 text-gray-500">
          No transactions found
        </p>
      )}
    </div>
  );
};

export default Transactions;