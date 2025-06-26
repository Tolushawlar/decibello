import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const StaffDashboard = () => {
  const stats = [
    { name: 'Assigned Tasks', value: '12', change: '+3', icon: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Messages', value: '8', change: '+2', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { name: 'Completed', value: '45', change: '+12', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
  ];

  return (
    <DashboardLayout role="staff">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-dark/60">{stat.name}</p>
                  <p className="text-2xl font-bold text-dark">{stat.value}</p>
                  <p className="text-sm text-secondary">{stat.change}</p>
                </div>
                <div className="bg-primary/10 p-3 rounded-lg">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={stat.icon} clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-4">Recent Tasks</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-light/50 rounded-lg">
                  <div>
                    <p className="font-medium text-dark">Review Application</p>
                    <p className="text-sm text-dark/60">Due: Today</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Pending</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-4">Recent Messages</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-light/50 rounded-lg">
                  <div>
                    <p className="font-medium text-dark">John Doe</p>
                    <p className="text-sm text-dark/60">Application inquiry...</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">New</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StaffDashboard;