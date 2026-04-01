const data = [
  { category: "Food", amount: 4000 },
  { category: "Travel", amount: 3000 },
  { category: "Shopping", amount: 2000 },
  { category: "Bills", amount: 1000 },
];

const Insights = () => {
  // Highest spending
  const highest = data.reduce((prev, curr) =>
    prev.amount > curr.amount ? prev : curr
  );

  // Total calculations
  const totalExpense = data.reduce((sum, item) => sum + item.amount, 0);
  const income = 10000; // mock
  const savings = income - totalExpense;

  return (
    <div className="bg-white p-5 rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">Insights</h3>

      <div className="space-y-3">

        <p>🔥 Highest spending: <strong>{highest.category}</strong> (₹{highest.amount})</p>

        <p>📊 Total Expense: ₹{totalExpense}</p>

        <p>💰 Savings: ₹{savings}</p>

        <p>
          💡 You are spending{" "}
          <strong>{Math.round((totalExpense / income) * 100)}%</strong> of your income
        </p>

      </div>
    </div>
  );
};

export default Insights;