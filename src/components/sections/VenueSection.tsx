import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Truck, Store, Heart } from 'lucide-react';
import { venue } from '../../data/mockData';
import { Button } from '../ui/Button';

export const VenueSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: MapPin },
    { id: 'facilities', name: 'Facilities', icon: Store },
    { id: 'parking', name: 'Parking & Entry', icon: Truck },
    { id: 'guidelines', name: 'Guidelines', icon: Heart }
  ];

  const facilities = [
    { name: 'Food Court', description: '50+ food stalls with variety of cuisines', available: true },
    { name: 'Rest Areas', description: 'Comfortable seating areas throughout the venue', available: true },
    { name: 'First Aid', description: '24/7 medical assistance with trained staff', available: true },
    { name: 'Prayer Area', description: 'Dedicated space for prayers and meditation', available: true },
    { name: 'Lost & Found', description: 'Central lost and found counter', available: true },
    { name: 'Photography Zone', description: 'Professional photo booth with props', available: true },
    { name: 'Kids Play Area', description: 'Safe play area for children', available: true },
    { name: 'VIP Lounges', description: 'Exclusive lounges for premium ticket holders', available: true }
  ];

  const guidelines = [
    { title: 'Dress Code', description: 'Traditional Indian attire preferred but not mandatory' },
    { title: 'Entry Time', description: 'Gates open at 5:00 PM daily' },
    { title: 'Age Restrictions', description: 'Children under 5 enter free with adult supervision' },
    { title: 'Photography', description: 'Personal photography allowed, no professional equipment' },
    { title: 'Food & Drinks', description: 'Outside food not allowed, water bottles permitted' },
    { title: 'Prohibited Items', description: 'No alcohol, weapons, or dangerous items' }
  ];

  return (
    <section id="venue" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Venue Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our world-class venue
          </p>
        </motion.div>

        {/* Venue Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12"
        >
          <div className="relative h-96 bg-gradient-to-r from-orange-500 to-red-600">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-60"></div>
            <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
              <div>
                <h3 className="text-4xl font-bold mb-4">{venue.name}</h3>
                <p className="text-xl mb-4">{venue.address}</p>
                <p className="text-lg">Capacity: {venue.capacity.toLocaleString()} people</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              <tab.icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Virtual Tour</h3>
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-8 w-8 text-orange-600" />
                    </div>
                    <p className="text-gray-600">3D Virtual Tour</p>
                    <Button variant="outline" className="mt-4">
                      Launch Virtual Tour
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">{venue.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Truck className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Accessibility</h4>
                      <p className="text-gray-600">Easily accessible by metro, bus, and private vehicles</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Store className="h-6 w-6 text-orange-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Capacity</h4>
                      <p className="text-gray-600">{venue.capacity.toLocaleString()} people</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="primary" className="w-full">
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'facilities' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Facilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {facilities.map((facility, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{facility.name}</h4>
                      <p className="text-gray-600 text-sm">{facility.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'parking' && (
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Entry Points</h3>
                <div className="space-y-4">
                  {venue.entryPoints.map((entry, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-900">{entry}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parking Zones</h3>
                <div className="space-y-4">
                  {venue.parkingZones.map((zone, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-900">{zone}</span>
                      <span className="text-sm text-green-600 font-medium">₹50/day</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Parking is available on a first-come, first-served basis. 
                    We recommend arriving early or using public transportation.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'guidelines' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {guidelines.map((guideline, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{guideline.title}</h4>
                    <p className="text-gray-600 text-sm">{guideline.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-900 mb-2">Emergency Contacts</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-orange-700">Event Helpline: +91 98765 43210</p>
                    <p className="text-orange-700">Medical Emergency: +91 98765 43211</p>
                  </div>
                  <div>
                    <p className="text-orange-700">Security: +91 98765 43212</p>
                    <p className="text-orange-700">Lost & Found: +91 98765 43213</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};