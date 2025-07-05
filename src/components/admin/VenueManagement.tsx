import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  TruckIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';

interface VenueManagementProps {
  userRole: string;
}

export const VenueManagement: React.FC<VenueManagementProps> = ({ userRole }) => {
  const [selectedZone, setSelectedZone] = useState('all');

  const venueZones = [
    {
      id: 'main-stage',
      name: 'Main Stage Area',
      capacity: 15000,
      currentOccupancy: 8234,
      status: 'normal',
      facilities: ['Sound System', 'Lighting', 'Security'],
      lastUpdated: '2 minutes ago'
    },
    {
      id: 'dance-floor',
      name: 'Dance Floor',
      capacity: 20000,
      currentOccupancy: 12456,
      status: 'normal',
      facilities: ['Open Space', 'Lighting', 'First Aid'],
      lastUpdated: '1 minute ago'
    },
    {
      id: 'food-court',
      name: 'Food Court',
      capacity: 5000,
      currentOccupancy: 3456,
      status: 'normal',
      facilities: ['50 Stalls', 'Seating', 'Waste Management'],
      lastUpdated: '3 minutes ago'
    },
    {
      id: 'parking-a',
      name: 'Parking Zone A',
      capacity: 2000,
      currentOccupancy: 1890,
      status: 'warning',
      facilities: ['Car Parking', 'Security', 'CCTV'],
      lastUpdated: '1 minute ago'
    },
    {
      id: 'parking-b',
      name: 'Parking Zone B',
      capacity: 1500,
      currentOccupancy: 1234,
      status: 'normal',
      facilities: ['Car Parking', 'Security'],
      lastUpdated: '2 minutes ago'
    },
    {
      id: 'vip-area',
      name: 'VIP Lounge',
      capacity: 500,
      currentOccupancy: 234,
      status: 'normal',
      facilities: ['AC Lounge', 'Premium Seating', 'Dedicated Service'],
      lastUpdated: '1 minute ago'
    }
  ];

  const facilities = [
    {
      id: 1,
      name: 'Sound System - Main Stage',
      status: 'operational',
      lastCheck: '30 minutes ago',
      nextMaintenance: '2024-10-16',
      technician: 'Raj Kumar'
    },
    {
      id: 2,
      name: 'Lighting - Dance Floor',
      status: 'operational',
      lastCheck: '45 minutes ago',
      nextMaintenance: '2024-10-17',
      technician: 'Priya Sharma'
    },
    {
      id: 3,
      name: 'Generator - Backup Power',
      status: 'standby',
      lastCheck: '1 hour ago',
      nextMaintenance: '2024-10-15',
      technician: 'Amit Singh'
    },
    {
      id: 4,
      name: 'Water Supply - Food Court',
      status: 'maintenance',
      lastCheck: '2 hours ago',
      nextMaintenance: '2024-10-15',
      technician: 'Suresh Patel'
    }
  ];

  const emergencyContacts = [
    { role: 'Event Manager', name: 'Rajesh Patel', phone: '+91 98765 43210' },
    { role: 'Security Head', name: 'Amit Kumar', phone: '+91 98765 43211' },
    { role: 'Medical Officer', name: 'Dr. Priya Sharma', phone: '+91 98765 43212' },
    { role: 'Technical Manager', name: 'Suresh Singh', phone: '+91 98765 43213' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'critical': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getFacilityStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100';
      case 'standby': return 'text-blue-600 bg-blue-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'offline': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getOccupancyPercentage = (current: number, capacity: number) => {
    return Math.round((current / capacity) * 100);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Venue Management</h2>
          <p className="text-gray-600 mt-2">Monitor venue capacity, facilities, and safety systems</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedZone}
            onChange={(e) => setSelectedZone(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Zones</option>
            <option value="main-stage">Main Stage</option>
            <option value="dance-floor">Dance Floor</option>
            <option value="food-court">Food Court</option>
            <option value="parking">Parking Areas</option>
            <option value="vip-area">VIP Area</option>
          </select>
          <Button variant="outline">
            <MapPinIcon className="h-4 w-4 mr-2" />
            View Map
          </Button>
        </div>
      </div>

      {/* Venue Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Capacity</p>
              <p className="text-2xl font-bold text-gray-900">50,000</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <UserGroupIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Current Occupancy</p>
              <p className="text-2xl font-bold text-gray-900">33,890</p>
              <p className="text-sm text-green-600">67.8% capacity</p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <CheckCircleIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Parking Utilization</p>
              <p className="text-2xl font-bold text-gray-900">89.2%</p>
              <p className="text-sm text-yellow-600">Near capacity</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-100">
              <TruckIcon className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
              <p className="text-sm text-red-600">Requires attention</p>
            </div>
            <div className="p-3 rounded-lg bg-red-100">
              <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Zone Monitoring */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Zone Monitoring</h3>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueZones.map((zone) => (
              <motion.div
                key={zone.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-gray-900">{zone.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(zone.status)}`}>
                    {zone.status}
                  </span>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Occupancy</span>
                    <span>{zone.currentOccupancy} / {zone.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        getOccupancyPercentage(zone.currentOccupancy, zone.capacity) > 90 ? 'bg-red-500' :
                        getOccupancyPercentage(zone.currentOccupancy, zone.capacity) > 75 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${getOccupancyPercentage(zone.currentOccupancy, zone.capacity)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {getOccupancyPercentage(zone.currentOccupancy, zone.capacity)}% capacity
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-xs font-medium text-gray-700 mb-2">Facilities</h5>
                  <div className="flex flex-wrap gap-1">
                    {zone.facilities.map((facility, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Updated {zone.lastUpdated}</span>
                  <Button variant="outline" size="sm">Monitor</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Facility Status */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Facility Status</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {facilities.map((facility) => (
                <div key={facility.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-medium text-gray-900">{facility.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getFacilityStatusColor(facility.status)}`}>
                        {facility.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Last check: {facility.lastCheck}</div>
                      <div>Next maintenance: {facility.nextMaintenance}</div>
                      <div>Technician: {facility.technician}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Emergency Contacts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{contact.role}</h4>
                    <p className="text-sm text-gray-600">{contact.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{contact.phone}</p>
                    <Button variant="outline" size="sm" className="mt-1">Call</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm">
                <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
                Emergency Alert
              </Button>
              <Button variant="outline" size="sm">
                <ClockIcon className="h-4 w-4 mr-2" />
                Maintenance Log
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};