import React from 'react';
import { FaHourglassHalf } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[350px] text-center">
      <FaHourglassHalf className="text-6xl text-blue-500 animate-pulse" />
      <h1 className="text-4xl font-bold mt-4">Coming Soon</h1>
      <p className="text-gray-600 mt-2">We're working hard to bring something amazing. Stay tuned!</p>
    </div>
  );
};

export default ComingSoon;
