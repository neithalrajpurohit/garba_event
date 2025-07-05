import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  QrCodeIcon,
  UserGroupIcon,
  ClockIcon,
  MapPinIcon,
  // TrendingUpIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";

interface AttendanceTrackingProps {
  userRole: string;
}

export const AttendanceTracking: React.FC<AttendanceTrackingProps> = ({
  userRole,
}) => {
  const [selectedGate, setSelectedGate] = useState("all");
  const [timeFilter, setTimeFilter] = useState("today");

  const attendanceStats = [
    {
      name: "Current Attendance",
      value: "8,234",
      change: "Live Count",
      icon: UserGroupIcon,
      color: "blue",
    },
    // {
    //   name: 'Total Entries Today',
    //   value: '12,456',
    //   change: '+15.2%',
    //   icon: TrendingUpIcon,
    //   color: 'green'
    // },
    {
      name: "Peak Hour",
      value: "20:00-21:00",
      change: "1,234 entries",
      icon: ClockIcon,
      color: "purple",
    },
    {
      name: "Capacity Utilization",
      value: "67.8%",
      change: "33,890 / 50,000",
      icon: MapPinIcon,
      color: "orange",
    },
  ];

  const gateActivity = [
    {
      gate: "Main Gate",
      entries: 4567,
      exits: 234,
      current: 4333,
      capacity: 15000,
      status: "normal",
    },
    {
      gate: "North Gate",
      entries: 3456,
      exits: 189,
      current: 3267,
      capacity: 12000,
      status: "normal",
    },
    {
      gate: "South Gate",
      entries: 2890,
      exits: 156,
      current: 2734,
      capacity: 10000,
      status: "normal",
    },
    {
      gate: "VIP Entrance",
      entries: 1543,
      exits: 67,
      current: 1476,
      capacity: 5000,
      status: "normal",
    },
  ];

  const hourlyFlow = [
    { hour: "17:00", entries: 234, exits: 12 },
    { hour: "18:00", entries: 567, exits: 23 },
    { hour: "19:00", entries: 890, exits: 45 },
    { hour: "20:00", entries: 1234, exits: 67 },
    { hour: "21:00", entries: 1567, exits: 89 },
    { hour: "22:00", entries: 1890, exits: 123 },
    { hour: "23:00", entries: 1456, exits: 234 },
  ];

  const recentEntries = [
    {
      id: 1,
      name: "Rajesh Patel",
      ticketId: "GF2024-ABC123",
      gate: "Main Gate",
      time: "22:45:32",
      status: "entered",
    },
    {
      id: 2,
      name: "Priya Sharma",
      ticketId: "GF2024-DEF456",
      gate: "North Gate",
      time: "22:45:28",
      status: "entered",
    },
    {
      id: 3,
      name: "Amit Kumar",
      ticketId: "GF2024-GHI789",
      gate: "South Gate",
      time: "22:45:15",
      status: "entered",
    },
    {
      id: 4,
      name: "Sneha Patel",
      ticketId: "GF2024-JKL012",
      gate: "VIP Entrance",
      time: "22:45:10",
      status: "entered",
    },
    {
      id: 5,
      name: "Rohit Singh",
      ticketId: "GF2024-MNO345",
      gate: "Main Gate",
      time: "22:44:58",
      status: "exited",
    },
  ];

  const alerts = [
    {
      id: 1,
      type: "capacity",
      message: "Main Gate approaching 90% capacity",
      time: "5 minutes ago",
      severity: "warning",
    },
    {
      id: 2,
      type: "security",
      message: "Invalid QR code scan attempt at North Gate",
      time: "8 minutes ago",
      severity: "error",
    },
    {
      id: 3,
      type: "system",
      message: "Scanner offline at South Gate - Gate 3",
      time: "12 minutes ago",
      severity: "error",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Attendance Tracking
          </h2>
          <p className="text-gray-600 mt-2">
            Real-time entry/exit monitoring and crowd management
          </p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedGate}
            onChange={(e) => setSelectedGate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">All Gates</option>
            <option value="main">Main Gate</option>
            <option value="north">North Gate</option>
            <option value="south">South Gate</option>
            <option value="vip">VIP Entrance</option>
          </select>
          <Button variant="outline">
            <QrCodeIcon className="h-4 w-4 mr-2" />
            QR Scanner
          </Button>
        </div>
      </div>

      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {attendanceStats.map((stat, index) => (
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
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Active Alerts
            </h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">
                {alerts.length} active
              </span>
            </div>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg border-l-4 ${
                  alert.severity === "error"
                    ? "bg-red-50 border-red-400"
                    : "bg-yellow-50 border-yellow-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ExclamationTriangleIcon
                      className={`h-5 w-5 ${
                        alert.severity === "error"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        alert.severity === "error"
                          ? "text-red-900"
                          : "text-yellow-900"
                      }`}
                    >
                      {alert.message}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Gate Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Gate Activity
          </h3>
          <div className="space-y-4">
            {gateActivity.map((gate, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium text-gray-900">{gate.gate}</h4>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      gate.status === "normal"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {gate.status}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Entries</p>
                    <p className="font-semibold text-green-600">
                      {gate.entries}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600">Exits</p>
                    <p className="font-semibold text-red-600">{gate.exits}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Current</p>
                    <p className="font-semibold text-blue-600">
                      {gate.current}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Capacity</span>
                    <span>
                      {gate.current} / {gate.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        gate.current / gate.capacity > 0.8
                          ? "bg-red-500"
                          : gate.current / gate.capacity > 0.6
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                      style={{
                        width: `${(gate.current / gate.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hourly Flow */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Hourly Entry/Exit Flow
          </h3>
          <div className="space-y-3">
            {hourlyFlow.map((hour, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="text-sm font-medium text-gray-900">
                  {hour.hour}
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm text-green-600">
                      ↑ {hour.entries}
                    </div>
                    <div className="text-xs text-gray-500">entries</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-red-600">↓ {hour.exits}</div>
                    <div className="text-xs text-gray-500">exits</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-blue-600">
                      +{hour.entries - hour.exits}
                    </div>
                    <div className="text-xs text-gray-500">net</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            Recent Entry/Exit Activity
          </h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">Live Updates</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attendee
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentEntries.map((entry) => (
                <tr key={entry.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {entry.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {entry.ticketId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{entry.gate}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{entry.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        entry.status === "entered"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
