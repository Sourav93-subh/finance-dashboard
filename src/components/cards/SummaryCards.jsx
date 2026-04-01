const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">

      {/* Balance */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Total Balance</h3>
        <p className="text-2xl font-bold mt-2">₹50,000</p>
      </div>

      {/* Income */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Income</h3>
        <p className="text-2xl font-bold mt-2 text-green-500">₹70,000</p>
      </div>

      {/* Expenses */}
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Expenses</h3>
        <p className="text-2xl font-bold mt-2 text-red-500">₹20,000</p>
      </div>

    </div>
  );
};

export default SummaryCards;