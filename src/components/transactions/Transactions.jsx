import { useState, useEffect } from "react";

const Transactions = ({ role, darkMode }) => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      setTransactions(JSON.parse(saved));
    } else {
      // default data
      const defaultData = [
        { id: 1, date: "2026-04-01", amount: 5000, category: "Salary", type: "income" },
        { id: 2, date: "2026-04-02", amount: 1200, category: "Food", type: "expense" },
      ];
      setTransactions(defaultData);
      localStorage.setItem("transactions", JSON.stringify(defaultData));
    }
  }, []);

  // Save to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Delete function
  const handleDelete = (id) => {
    const updated = transactions.filter((item) => item.id !== id);
    setTransactions(updated);
  };

  const filteredData = transactions.filter((item) => {
    const matchesSearch = item.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={darkMode ? "bg-gray-800 p-5 rounded-xl shadow mt-6" : "bg-white p-5 rounded-xl shadow mt-6"}>
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>

      {/* Search + Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search category..."
          className="border p-2 rounded w-full text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded text-black"
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
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id} className="border-b">
              <td>{item.date}</td>
              <td>₹{item.amount}</td>
              <td>{item.category}</td>
              <td className={item.type === "income" ? "text-green-400" : "text-red-400"}>
                {item.type}
              </td>

              {role === "admin" && (
                <td>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {filteredData.length === 0 && (
        <p className="text-center mt-4 text-gray-400">
          No transactions found
        </p>
      )}
    </div>
  );
};

export default Transactions;