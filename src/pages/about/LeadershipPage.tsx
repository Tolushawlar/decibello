import React from 'react';

const LeadershipPage: React.FC = () => {
  // Sample leadership team data - in a real app, this would come from an API or CMS
  const executiveTeam = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Chief Executive Officer',
      bio: 'Sarah has over 20 years of experience in technology consulting and digital transformation. Prior to joining our company, she held leadership positions at major global consulting firms.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Chief Technology Officer',
      bio: 'Michael leads our technology strategy and innovation initiatives. With a background in software engineering and cloud architecture, he ensures we stay at the forefront of emerging technologies.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 3,
      name: 'Priya Patel',
      title: 'Chief Operating Officer',
      bio: 'Priya oversees our global operations and delivery excellence. Her focus on operational efficiency and client satisfaction has been instrumental in our company growth.',
      image: 'https://via.placeholder.com/300x300'
    }
  ];

  const leadershipTeam = [
    {
      id: 4,
      name: 'David Wilson',
      title: 'Managing Director, Financial Services',
      bio: 'David leads our Financial Services practice, bringing deep industry expertise and a track record of successful digital transformations in banking and insurance.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 5,
      name: 'Elena Rodriguez',
      title: 'Managing Director, Healthcare',
      bio: 'Elena specializes in healthcare technology solutions that improve patient outcomes and operational efficiency for providers and payers.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 6,
      name: 'James Kim',
      title: 'Managing Director, Retail & Consumer',
      bio: 'James helps retail and consumer goods companies navigate digital disruption and create exceptional customer experiences.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 7,
      name: 'Olivia Taylor',
      title: 'Head of Cloud Services',
      bio: 'Olivia leads our cloud practice, helping clients leverage cloud technologies to drive innovation and business agility.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 8,
      name: 'Robert Martinez',
      title: 'Head of Data & Analytics',
      bio: 'Robert specializes in helping organizations transform their data into actionable insights that drive business value.',
      image: 'https://via.placeholder.com/300x300'
    },
    {
      id: 9,
      name: 'Sophia Lee',
      title: 'Head of Digital Transformation',
      bio: 'Sophia helps clients reimagine their business models and customer experiences through innovative digital solutions.',
      image: 'https://via.placeholder.com/300x300'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Our Leadership</h1>
        <p className="text-xl text-dark/70 mb-8">Meet the team driving our vision and success</p>
        
        {/* Executive Leadership */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">Executive Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-2">
            {executiveTeam.map(leader => (
              <div key={leader.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-1">{leader.name}</h3>
                  <p className="text-secondary font-medium mb-4">{leader.title}</p>
                  <p className="text-dark/80">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Practice & Domain Leaders */}
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-6">Practice & Domain Leaders</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-2">
            {leadershipTeam.map(leader => (
              <div key={leader.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <img src={leader.image} alt={leader.name} className="w-16 h-16 rounded-full object-cover mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{leader.name}</h3>
                    <p className="text-secondary text-sm">{leader.title}</p>
                  </div>
                </div>
                <p className="text-dark/80 text-sm">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-light/50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Our Leadership Values</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Innovation</h3>
              <p className="text-dark/80">
                We foster a culture of innovation, constantly exploring new technologies and approaches to solve complex business challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Collaboration</h3>
              <p className="text-dark/80">
                We believe in the power of diverse perspectives and collaborative problem-solving to deliver exceptional results for our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Integrity</h3>
              <p className="text-dark/80">
                We uphold the highest standards of integrity and ethics in all our interactions with clients, partners, and each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipPage;