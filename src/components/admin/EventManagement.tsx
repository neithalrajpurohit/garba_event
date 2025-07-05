import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  ClockIcon, 
  StarIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  SpeakerWaveIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';

interface EventManagementProps {
  userRole: string;
}

export const EventManagement: React.FC<EventManagementProps> = ({ userRole }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [viewMode, setViewMode] = useState('schedule');

  const eventDays = [
    { id: 1, date: '2024-10-15', name: 'Day 1 - Traditional Opening', theme: 'Classical Heritage' },
    { id: 2, date: '2024-10-16', name: 'Day 2 - Bollywood Fusion', theme: 'Modern Beats' },
    { id: 3, date: '2024-10-17', name: 'Day 3 - Regional Folk', theme: 'Cultural Diversity' },
    { id: 4, date: '2024-10-18', name: 'Day 4 - Youth Night', theme: 'Energy & Enthusiasm' },
    { id: 5, date: '2024-10-19', name: 'Day 5 - Grand Finale', theme: 'Unity Celebration' }
  ];

  const scheduleItems = [
    {
      id: 1,
      time: '17:00',
      duration: 30,
      title: 'Gates Open & Registration',
      type: 'logistics',
      status: 'scheduled',
      attendees: 0,
      venue: 'All Gates'
    },
    {
      id: 2,
      time: '17:30',
      duration: 90,
      title: 'Basic Garba Workshop',
      type: 'workshop',
      status: 'scheduled',
      attendees: 150,
      venue: 'Workshop Area',
      instructor: 'Meera Patel'
    },
    {
      id: 3,
      time: '19:00',
      duration: 60,
      title: 'Opening Ceremony',
      type: 'ceremony',
      status: 'scheduled',
      attendees: 5000,
      venue: 'Main Stage'
    },
    {
      id: 4,
      time: '21:00',
      duration: 90,
      title: 'Falguni Pathak Performance',
      type: 'performance',
      status: 'scheduled',
      attendees: 8000,
      venue: 'Main Stage',
      celebrity: 'Falguni Pathak'
    },
    {
      id: 5,
      time: '22:30',
      duration: 120,
      title: 'Community Garba',
      type: 'community',
      status: 'scheduled',
      attendees: 10000,
      venue: 'Dance Floor'
    },
    {
      id: 6,
      time: '23:30',
      duration: 60,
      title: 'Best Costume Competition',
      type: 'competition',
      status: 'scheduled',
      attendees: 500,
      venue: 'Competition Stage'
    }
  ];

  const celebrities = [
    {
      id: 1,
      name: 'Falguni Pathak',
      performanceDate: '2024-10-15',
      performanceTime: '21:00',
      status: 'confirmed',
      fee: 500000,
      requirements: ['Sound system', 'Lighting setup', 'Green room'],
      contact: '+91 98765 43210'
    },
    {
      id: 2,
      name: 'Kinjal Dave',
      performanceDate: '2024-10-16',
      performanceTime: '20:30',
      status: 'confirmed',
      fee: 300000,
      requirements: ['Sound system', 'Backup dancers space'],
      contact: '+91 98765 43211'
    },
    {
      id: 3,
      name: 'Parthiv Gohil',
      performanceDate: '2024-10-17',
      performanceTime: '21:30',
      status: 'pending',
      fee: 250000,
      requirements: ['Piano', 'Sound system'],
      contact: '+91 98765 43212'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'performance': return 'bg-purple-100 text-purple-800';
      case 'workshop': return 'bg-blue-100 text-blue-800';
      case 'competition': return 'bg-yellow-100 text-yellow-800';
      case 'ceremony': return 'bg-green-100 text-green-800';
      case 'community': return 'bg-orange-100 text-orange-800';
      case 'logistics': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Event Management</h2>
          <p className="text-gray-600 mt-2">Manage event schedule, performances, and activities</p>
        </div>
        <div className="flex space-x-3">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('schedule')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'schedule' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Schedule
            </button>
            <button
              onClick={() => setViewMode('celebrities')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                viewMode === 'celebrities' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600'
              }`}
            >
              Celebrities
            </button>
          </div>
          <Button variant="primary">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Day Selection */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {eventDays.map((day) => (
          <button
            key={day.id}
            onClick={() => setSelectedDay(day.id)}
            className={`flex-shrink-0 px-6 py-3 rounded-lg font-medium transition-all ${
              selectedDay === day.id
                ? 'bg-orange-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
            }`}
          >
            <div className="text-center">
              <div className="text-sm">{day.name}</div>
              <div className="text-xs opacity-75">{day.theme}</div>
            </div>
          </button>
        ))}
      </div>

      {viewMode === 'schedule' ? (
        /* Schedule View */
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {eventDays.find(day => day.id === selectedDay)?.name}
              </h3>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Export Schedule
                </Button>
                <Button variant="outline" size="sm">
                  <SpeakerWaveIcon className="h-4 w-4 mr-2" />
                  Announce Changes
                </Button>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {scheduleItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">{item.time}</div>
                      <div className="text-xs text-gray-500">{item.duration}min</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                          {item.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <UserGroupIcon className="h-4 w-4" />
                          <span>{item.attendees} attendees</span>
                        </div>
                        <div>📍 {item.venue}</div>
                        {item.instructor && <div>👨‍🏫 {item.instructor}</div>}
                        {item.celebrity && <div>⭐ {item.celebrity}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                    {userRole === 'super-admin' && (
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Celebrities View */
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {celebrities.map((celebrity) => (
            <motion.div
              key={celebrity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{celebrity.name}</h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(celebrity.status)}`}>
                  {celebrity.status}
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{celebrity.performanceDate}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <ClockIcon className="h-4 w-4" />
                  <span>{celebrity.performanceTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <StarIcon className="h-4 w-4" />
                  <span>₹{celebrity.fee.toLocaleString()} fee</span>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements</h4>
                <div className="flex flex-wrap gap-1">
                  {celebrity.requirements.map((req, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{celebrity.contact}</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="primary" size="sm">Contact</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};