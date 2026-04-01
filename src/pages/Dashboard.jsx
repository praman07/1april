const StatCard = ({ title, value, change }) => (
  <div className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition">
    <p className="text-gray-400 text-sm">{title}</p>
    <h2 className="text-2xl font-bold mt-1">{value}</h2>
    <span className="text-green-500 text-sm">{change}</span>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Crypto Dashboard</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <StatCard title="Total Balance" value="$53,252" change="+6.15%" />
        <StatCard title="BTC" value="$23,077" change="+2.1%" />
        <StatCard title="LTC" value="0.00256" change="+1.2%" />
        <StatCard title="ETH" value="0.073" change="+3.4%" />
        <StatCard title="XMR" value="0.0068" change="-1.2%" />
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Market Chart</h3>
          <div className="h-72 bg-biege-200 from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
            Chart Coming Soon
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <h3 className="font-semibold mb-4">Markets</h3>
          <div className="space-y-3 text-sm">
            {[
              ["ETH", "+1.9%"],
              ["XRP", "+0.6%"],
              ["LTC", "+1.8%"],
              ["XMR", "-1.2%"],
            ].map(([coin, change]) => (
              <div className="flex justify-between">
                <span>{coin}</span>
                <span
                  className={
                    change.includes("+") ? "text-green-500" : "text-red-500"
                  }
                >
                  {change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;