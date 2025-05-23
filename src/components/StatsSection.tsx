import React from 'react';
import DataChart from './DataChart';
import MotionCard from './MotionCard';
import MinimalSection from './MinimalSection';

const StatsSection: React.FC = () => {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'ROI Growth',
        data: [20, 45, 42, 65, 72, 85],
        borderColor: '#5858f5',
        backgroundColor: 'rgba(88, 88, 245, 0.1)',
      },
      {
        label: 'Lead Generation',
        data: [30, 38, 45, 55, 58, 70],
        borderColor: '#f7d54c',
        backgroundColor: 'rgba(247, 213, 76, 0.1)',
      }
    ]
  };

  const conversionData = {
    labels: ['Social', 'Search', 'Direct', 'Email', 'Referral'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        '#5858f5',
        '#f7d54c',
        '#7878ff',
        '#f8dc6f',
        '#4747e6'
      ]
    }]
  };

  return (
    <MinimalSection bgColor="bg-light">
      <div className="text-center mb-12">
        <h2 className="text-h2 text-dark mb-4">Performance Metrics</h2>
        <p className="text-body text-dark/70 max-w-2xl mx-auto">
          Data-driven insights that showcase our impact on client success and growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <MotionCard delay={0.2}>
          <DataChart
            type="line"
            title="Growth Performance"
            labels={performanceData.labels}
            datasets={performanceData.datasets}
          />
        </MotionCard>

        <MotionCard delay={0.4}>
          <DataChart
            type="doughnut"
            title="Lead Source Distribution"
            labels={conversionData.labels}
            datasets={conversionData.datasets}
          />
        </MotionCard>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {[
          { label: 'Client Retention', value: '95%', color: 'primary' },
          { label: 'ROI Increase', value: '150%', color: 'secondary' },
          { label: 'Lead Quality', value: '87%', color: 'primary' },
          { label: 'Growth Rate', value: '65%', color: 'secondary' }
        ].map((stat, index) => (
          <MotionCard 
            key={stat.label} 
            delay={0.2 * (index + 1)}
            className="bg-white rounded-lg p-6 text-center"
          >
            <div className={`text-${stat.color} text-3xl font-bold mb-2`}>
              {stat.value}
            </div>
            <div className="text-dark/70 text-sm">
              {stat.label}
            </div>
          </MotionCard>
        ))}
      </div>
    </MinimalSection>
  );
};

export default StatsSection;