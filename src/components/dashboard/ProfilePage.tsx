import { useState } from 'react';
import DashboardLayout from './DashboardLayout';

interface ProfilePageProps {
  role: 'admin' | 'staff' | 'user';
}

const ProfilePage: React.FC<ProfilePageProps> = ({ role }) => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    bio: 'Experienced professional with a passion for innovation and growth.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python'],
    experience: '5+ years'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <DashboardLayout role={role}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-dark">Profile</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="h-12 w-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-dark">{profile.name}</h3>
              <p className="text-dark/60">{profile.email}</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mt-2 capitalize">
                {role}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">Full Name</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ) : (
                  <p className="text-dark">{profile.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1">Email</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ) : (
                  <p className="text-dark">{profile.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1">Phone</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ) : (
                  <p className="text-dark">{profile.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1">Location</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={profile.location}
                    onChange={(e) => setProfile({...profile, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ) : (
                  <p className="text-dark">{profile.location}</p>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-dark mb-1">Bio</label>
                {isEditing ? (
                  <textarea 
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                ) : (
                  <p className="text-dark">{profile.bio}</p>
                )}
              </div>

              {role === 'user' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">Experience</label>
                    <p className="text-dark">{profile.experience}</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark mb-1">Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {profile.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;