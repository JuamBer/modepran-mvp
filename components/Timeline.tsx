import React from 'react';
import { TimelineEvent } from '../types';
import { Heart, Home, Stethoscope, AlertCircle, Info } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
}

const getIcon = (type: string) => {
  switch (type) {
    case 'rescue': return <AlertCircle className="w-5 h-5 text-white" />;
    case 'vet': return <Stethoscope className="w-5 h-5 text-white" />;
    case 'home': return <Home className="w-5 h-5 text-white" />;
    case 'heart': return <Heart className="w-5 h-5 text-white" />;
    default: return <Info className="w-5 h-5 text-white" />;
  }
};

const getColor = (type: string) => {
  switch (type) {
    case 'rescue': return 'bg-orange-500';
    case 'vet': return 'bg-blue-500';
    case 'home': return 'bg-green-500';
    case 'heart': return 'bg-pink-500';
    default: return 'bg-gray-400';
  }
};

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  // Sort events by date descending
  const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="relative border-l-2 border-gray-200 ml-3 my-6">
      {sortedEvents.map((event, index) => (
        <div key={index} className="mb-8 ml-6 relative">
          <span className={`absolute -left-10 top-0 flex items-center justify-center w-8 h-8 rounded-full ring-4 ring-white ${getColor(event.icon || 'info')}`}>
            {getIcon(event.icon || 'info')}
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
            {event.title}
            <span className="bg-gray-100 text-gray-800 text-sm font-medium ml-3 px-2.5 py-0.5 rounded border border-gray-200">
              {event.date}
            </span>
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500">
            {event.description}
          </p>
        </div>
      ))}
    </div>
  );
};
