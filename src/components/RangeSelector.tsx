import React from 'react';
import { MapPin } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export const RangeSelector: React.FC = () => {
  const { range, setRange } = useChatStore();

  return (
    <div className="p-4 bg-white border-b">
      <div className="flex items-center space-x-3">
        <MapPin className="w-5 h-5 text-blue-500" />
        <div className="flex-1">
          <label htmlFor="range" className="block text-sm font-medium text-gray-700">
            Message Range: {range} km
          </label>
          <input
            type="range"
            id="range"
            min="1"
            max="20"
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};