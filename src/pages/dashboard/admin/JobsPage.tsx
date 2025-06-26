import { useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const JobsPage = () => {
  const [jobs] = useState([
    { id: 1, title: 'Senior Developer', department: 'Engineering', location: 'Remote', status: 'Active', applications: 23, posted: '2024-01-15' },
    { id: 2, title: 'Marketing Manager', department: 'Marketing', location: 'New York', status: 'Active', applications: 45, posted: '2024-01-10' },
    { id: 3, title: 'Data Analyst', department: 'Analytics', location: 'London', status: 'Closed', applications: 67, posted: '2024-01-05' },
    { id: 4, title: 'UX Designer', department: 'Design', location: 'Remote', status: 'Active', applications: 34, posted: '2024-01-20' }
  ]);

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-dark">Job Postings</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Create Job Posting
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-light/50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Applications</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Posted</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-dark/60 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {jobs.map((job) => (
                  <tr key={job.id} className="hover:bg-light/30">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-dark">{job.title}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-dark/70">{job.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-dark/70">{job.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        job.status === 'Active' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {job.applications}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-dark/70">{job.posted}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="text-primary hover:text-secondary mr-3">Edit</button>
                      <button className="text-secondary hover:text-primary mr-3">View</button>
                      <button className="text-red-600 hover:text-red-800">Delete</button>
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

export default JobsPage;