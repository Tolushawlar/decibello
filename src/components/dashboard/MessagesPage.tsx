import { useState } from 'react';
import DashboardLayout from './DashboardLayout';

interface MessagesPageProps {
  role: 'admin' | 'staff' | 'user';
}

const MessagesPage: React.FC<MessagesPageProps> = ({ role }) => {
  const [messages] = useState([
    { id: 1, from: 'John Doe', subject: 'Application Status Inquiry', preview: 'Hi, I wanted to check on my application...', date: '2024-01-20', read: false },
    { id: 2, from: 'HR Team', subject: 'Interview Scheduled', preview: 'Your interview has been scheduled for...', date: '2024-01-19', read: true },
    { id: 3, from: 'Jane Smith', subject: 'Project Update', preview: 'The latest project milestone has been...', date: '2024-01-18', read: false },
    { id: 4, from: 'Support', subject: 'Account Verification', preview: 'Please verify your account details...', date: '2024-01-17', read: true }
  ]);

  return (
    <DashboardLayout role={role}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-dark">Messages</h2>
          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Compose Message
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="divide-y divide-gray-200">
            {messages.map((message) => (
              <div key={message.id} className={`p-6 hover:bg-light/30 cursor-pointer ${!message.read ? 'bg-primary/5' : ''}`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${!message.read ? 'bg-primary' : 'bg-transparent'}`}></div>
                      <h3 className={`font-medium ${!message.read ? 'text-dark font-semibold' : 'text-dark'}`}>
                        {message.from}
                      </h3>
                      <span className="text-sm text-dark/60">{message.date}</span>
                    </div>
                    <h4 className={`mt-1 ${!message.read ? 'font-semibold text-dark' : 'text-dark'}`}>
                      {message.subject}
                    </h4>
                    <p className="text-dark/70 text-sm mt-1">{message.preview}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-primary hover:text-secondary">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MessagesPage;