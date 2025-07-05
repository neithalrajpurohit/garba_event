import React from 'react';
import { motion } from 'framer-motion';
import { 
  Ticket, 
  Users, 
  DollarSign, 
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  TrendingUp
} from 'lucide-react';

interface DashboardOverviewProps {
  userRole: string;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({ userRole }) => {
  const stats = [
    {
      name: 'Total Tickets Sold',
      value: '12,847',
      change: '+12%',
      changeType: 'increase',
      icon: Ticket,
      color: 'blue'
    },
    {
      name: 'Total Revenue',
      value: '₹32,45,680',
      change: '+18%',
      changeType: 'increase',
      icon: DollarSign,
      color: 'green'
    },
    {
      name: 'Active Attendees',
      value: '8,234',
      change: 'Live',
      changeType: 'neutral',
      icon: Users,
      color: 'purple'
    },
    {
      name: 'Conversion Rate',
      value: '68.4%',
      change: '+5.2%',
      changeType: 'increase',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  const recentActivity = [
    { id: 1, type: 'ticket_sale', message: 'Premium 5-day pass sold', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'entry', message: 'Bulk entry processed - 45 attendees', time: '5 minutes ago', status: 'info' },
    { id: 3, type: 'alert', message: 'Parking Zone A reaching capacity', time: '8 minutes ago', status: 'warning' },
    { id: 4, type: 'refund', message: 'Refund request processed', time: '12 minutes ago', status: 'success' },
    { id: 5, type: 'error', message: 'Payment gateway timeout', time: '15 minutes ago', status: 'error' }
  ];

  const upcomingEvents = [
    { id: 1, name: 'Celebrity Performance - Falguni Pathak', time: '21:00', status: 'upcoming' },
    { id: 2, name: 'Dance Competition Finals', time: '22:30', status: 'upcoming' },
    { id: 3, name: 'Food Court Extension Hours', time: '23:00', status: 'scheduled' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <p className="text-gray-600 mt-2">Real-time insights and event management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'increase' ? 'text-green-600' : 
                    stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from yesterday</span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Real-time Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Real-time Activity</h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Live</span>
              </div>
            </div>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.status === 'success' ? 'bg-green-500' :
                    activity.status === 'warning' ? 'bg-yellow-500' :
                    activity.status === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <div className="flex items-center">
                    {activity.status === 'success' && <CheckCircle className="h-4 w-4 text-green-500" />}
                    {activity.status === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                    {activity.status === 'error' && <XCircle className="h-4 w-4 text-red-500" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Today's Schedule</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-600" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{event.name}</p>
                    <p className="text-xs text-gray-600">{event.time}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
                <span className="text-sm font-medium text-orange-900">Generate Daily Report</span>
              </button>
              <button className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <span className="text-sm font-medium text-blue-900">Export Attendee List</span>
              </button>
              <button className="w-full text-left p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                <span className="text-sm font-medium text-green-900">Send Announcements</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Entry Rate</h4>
          <p className="text-2xl font-bold text-gray-900">234/hour</p>
          <p className="text-sm text-green-600 mt-1">↑ 12% from last hour</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Parking Occupancy</h4>
          <p className="text-2xl font-bold text-gray-900">78%</p>
          <p className="text-sm text-yellow-600 mt-1">Zone A: 95% full</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Food Court Sales</h4>
          <p className="text-2xl font-bold text-gray-900">₹1,23,456</p>
          <p className="text-sm text-green-600 mt-1">↑ 8% from yesterday</p>
        </div>
      </div>
    </div>
  );
};