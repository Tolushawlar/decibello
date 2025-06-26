import { useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const ApplicationsPage = () => {
  const [applications] = useState([
    { id: 1, jobTitle: 'Senior Developer', company: 'Tech Corp', status: 'Under Review', appliedDate: '2024-01-20', location: 'Remote' },
    { id: 2, jobTitle: 'Marketing Manager', company: 'StartupXYZ', status: 'Interview Scheduled', appliedDate: '2024-01-18', location: 'New York' },
    { id: 3, jobTitle: 'Data Analyst', company: 'Analytics Inc', status: 'Applied', appliedDate: '2024-01-15', location: 'London' },
    { id: 4, jobTitle: 'UX Designer', company: 'Design Studio', status: 'Rejected', appliedDate: '2024-01-10', location: 'Remote' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Interview Scheduled': return 'bg-secondary/10 text-secondary';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800';
      case 'Applied': return 'bg-primary/10 text-primary';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <DashboardLayout role="user">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-dark">My Applications</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Browse Jobs
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-light/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-light/30">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-dark">{app.jobTitle}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-dark/70">{app.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-dark/70">{app.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-dark/70">{app.appliedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-primary hover:text-secondary mr-3">View</button>
                      <button className="text-secondary hover:text-primary">Withdraw</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ApplicationsPage;