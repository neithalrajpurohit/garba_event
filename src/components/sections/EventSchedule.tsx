import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, GraduationCap, Trophy } from 'lucide-react';
import { events } from '../../data/mockData';
import { Button } from '../ui/Button';

export const EventSchedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const selectedEvent = events[selectedDay];

  const days = [
    'Day 1 - Oct 15',
    'Day 2 - Oct 16',
    'Day 3 - Oct 17',
    'Day 4 - Oct 18',
    'Day 5 - Oct 19'
  ];

  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Event Schedule
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Five days of non-stop celebration with traditional Garba, workshops, and competitions
          </p>
        </motion.div>

        {/* Day Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedDay === index
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Selected Day Content */}
        <motion.div
          key={selectedDay}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Event Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedEvent.title}</h3>
                <p className="text-orange-100 text-lg">{selectedEvent.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5" />
                  <span>{new Date(selectedEvent.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{selectedEvent.time}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Timeline */}
              <div className="lg:col-span-2">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Daily Timeline</h4>
                <div className="space-y-6">
                  {/* Sample timeline items */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium">
                        17:00
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Gates Open</h5>
                      <p className="text-gray-600">Welcome ceremony and registration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-lg text-sm font-medium">
                        17:30
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Workshop Session</h5>
                      <p className="text-gray-600">Learn traditional Garba steps</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-green-100 text-green-600 px-3 py-1 rounded-lg text-sm font-medium">
                        19:00
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Opening Ceremony</h5>
                      <p className="text-gray-600">Traditional prayers and inaugural dance</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-medium">
                        21:00
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Celebrity Performance</h5>
                      <p className="text-gray-600">Main stage performance by featured artists</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-lg text-sm font-medium">
                        22:00
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Community Garba</h5>
                      <p className="text-gray-600">Open dance floor for all participants</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-20 text-center">
                      <div className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-lg text-sm font-medium">
                        23:30
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">Competitions</h5>
                      <p className="text-gray-600">Dance competitions and prize distribution</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Workshops */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Workshops
                  </h4>
                  <div className="space-y-3">
                    {selectedEvent.workshops.map((workshop) => (
                      <div key={workshop.id} className="border-l-4 border-purple-400 pl-4">
                        <h5 className="font-medium text-purple-900">{workshop.title}</h5>
                        <p className="text-sm text-purple-700">
                          {workshop.time} • {workshop.duration}
                        </p>
                        <p className="text-sm text-purple-600">
                          Instructor: {workshop.instructor}
                        </p>
                        <span className="inline-block bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs mt-1">
                          {workshop.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Competitions */}
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-yellow-900 mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    Competitions
                  </h4>
                  <div className="space-y-3">
                    {selectedEvent.competitions.map((competition) => (
                      <div key={competition.id} className="border-l-4 border-yellow-400 pl-4">
                        <h5 className="font-medium text-yellow-900">{competition.title}</h5>
                        <p className="text-sm text-yellow-700">{competition.time}</p>
                        <p className="text-sm text-yellow-600">Category: {competition.category}</p>
                        <div className="mt-2">
                          <p className="text-xs text-yellow-600 mb-1">Prizes:</p>
                          <div className="flex flex-wrap gap-1">
                            {competition.prizes.map((prize, index) => (
                              <span key={index} className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">
                                {prize}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Theme */}
                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-orange-900 mb-4 flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Theme
                  </h4>
                  <p className="text-orange-800 font-medium">{selectedEvent.theme}</p>
                  <p className="text-sm text-orange-700 mt-2">
                    Join us in celebrating this beautiful theme through dance, music, and traditional attire.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200">
              <Button variant="primary">Download Full Schedule</Button>
              <Button variant="outline">Add to Calendar</Button>
              <Button variant="ghost">Share Schedule</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};