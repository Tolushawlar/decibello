import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const AdminDashboard = () => {
  const stats = [
    { name: 'Total Users', value: '1,234', change: '+12%', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' },
    { name: 'Active Jobs', value: '23', change: '+3', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6' },
    { name: 'Applications', value: '456', change: '+18%', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Scheduled Calls', value: '89', change: '+7', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' }
  ];

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h3 className="text-lg font-semibold text-dark mb-4">Recent Applications</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-light/50 rounded-lg">
                  <div>
                    <p className="font-medium text-dark">John Doe</p>
                    <p className="text-sm text-dark/60">Senior Developer</p>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">New</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-4">Upcoming Calls</h3>
            <div className="space-y-3">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-between p-3 bg-light/50 rounded-lg">
                  <div>
                    <p className="font-medium text-dark">Client Meeting</p>
                    <p className="text-sm text-dark/60">Today, 2:00 PM</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">Today</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;