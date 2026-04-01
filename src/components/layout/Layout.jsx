const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-5">
        <h2 className="text-xl font-bold mb-6">Finance</h2>

        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-blue-500">Dashboard</li>
          <li className="cursor-pointer hover:text-blue-500">Transactions</li>
          <li className="cursor-pointer hover:text-blue-500">Insights</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {children}
      </div>

    </div>
  );
};

export default Layout;