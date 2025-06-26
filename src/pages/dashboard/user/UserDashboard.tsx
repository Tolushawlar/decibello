import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const UserDashboard = () => {
  const stats = [
    { name: 'Applications', value: '5', change: '+2', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { name: 'Messages', value: '3', change: '+1', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
    { name: 'Profile Views', value: '24', change: '+8', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' }
  ];

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
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

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-4">Recent Applications</h3>
            <div className="space-y-3">
              {[
                { job: 'Senior Developer', status: 'Under Review', date: '2024-01-20' },
                { job: 'Marketing Manager', status: 'Interview Scheduled', date: '2024-01-18' },
                { job: 'Data Analyst', status: 'Applied', date: '2024-01-15' }
              ].map((app, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-light/50 rounded-lg">
                  <div>
                    <p className="font-medium text-dark">{app.job}</p>
                    <p className="text-sm text-dark/60">{app.date}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    app.status === 'Interview Scheduled' 
                      ? 'bg-secondary/10 text-secondary'
                      : app.status === 'Under Review'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-dark mb-4">Recommended Jobs</h3>
            <div className="space-y-3">
              {[
                { title: 'Frontend Developer', company: 'Tech Corp', location: 'Remote' },
                { title: 'Product Manager', company: 'StartupXYZ', location: 'New York' },
                { title: 'UX Designer', company: 'Design Studio', location: 'London' }
              ].map((job, index) => (
                <div key={index} className="p-3 bg-light/50 rounded-lg">
                  <p className="font-medium text-dark">{job.title}</p>
                  <p className="text-sm text-dark/60">{job.company} • {job.location}</p>
                  <button className="text-primary text-sm mt-1 hover:text-secondary">View Details</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;