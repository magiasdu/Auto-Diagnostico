import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 bg-brand-secondary z-50">
      <div
        className="h-full bg-brand-primary transition-all duration-500 ease-out"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;