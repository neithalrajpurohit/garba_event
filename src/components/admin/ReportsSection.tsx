import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DocumentArrowDownIcon, 
  CalendarIcon, 
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';

interface ReportsSectionProps {
  userRole: string;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({ userRole }) => {
  const [selectedReport, setSelectedReport] = useState('sales');
  const [dateRange, setDateRange] = useState('7days');

  const reportTypes = [
    { id: 'sales', name: 'Sales Report', icon: CurrencyDollarIcon, description: 'Revenue and ticket sales analysis' },
    { id: 'attendance', name: 'Attendance Report', icon: UsersIcon, description: 'Entry/exit patterns and crowd analysis' },
    { id: 'financial', name: 'Financial Summary', icon: ChartBarIcon, description: 'Complete financial breakdown' },
    { id: 'operational', name: 'Operational Report', icon: ClockIcon, description: 'Event operations and logistics' }
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Daily Sales Report - Oct 14',
      type: 'sales',
      generatedAt: '2024-10-14 23:59',
      size: '2.3 MB',
      format: 'PDF'
    },
    {
      id: 2,
      name: 'Attendance Summary - Week 1',
      type: 'attendance',
      generatedAt: '2024-10-14 18:30',
      size: '1.8 MB',
      format: 'Excel'
    },
    {
      id: 3,
      name: 'Financial Report - Oct 13',
      type: 'financial',
      generatedAt: '2024-10-13 23:59',
      size: '3.1 MB',
      format: 'PDF'
    }
  ];

  const scheduledReports = [
    {
      id: 1,
      name: 'Daily Sales Summary',
      frequency: 'Daily at 11:59 PM',
      recipients: ['admin@garba.com', 'finance@garba.com'],
      status: 'active'
    },
    {
      id: 2,
      name: 'Weekly Attendance Report',
      frequency: 'Every Sunday at 6:00 AM',
      recipients: ['operations@garba.com'],
      status: 'active'
    },
    {
      id: 3,
      name: 'Monthly Financial Summary',
      frequency: 'First day of month',
      recipients: ['ceo@garba.com', 'finance@garba.com'],
      status: 'paused'
    }
  ];

  const salesData = {
    totalRevenue: 3245680,
    totalTickets: 12847,
    averageOrderValue: 2534,
    topSellingPass: 'Premium 5-Day Pass',
    peakSalesHour: '20:00-21:00',
    conversionRate: 68.4
  };

  const attendanceData = {
    totalEntries: 45678,
    currentAttendance: 8234,
    peakAttendance: 12456,
    averageStayDuration: '4.2 hours',
    busiestGate: 'Main Gate',
    exitRate: 15.2
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-gray-600 mt-2">Generate and manage comprehensive event reports</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="today">Today</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="custom">Custom Range</option>
          </select>
          <Button variant="primary">
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Report Type Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportTypes.map((report) => (
          <motion.div
            key={report.id}
            whileHover={{ scale: 1.02 }}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
              selectedReport === report.id
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 hover:border-orange-300 bg-white'
            }`}
            onClick={() => setSelectedReport(report.id)}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`p-2 rounded-lg ${
                selectedReport === report.id ? 'bg-orange-100' : 'bg-gray-100'
              }`}>
                <report.icon className={`h-6 w-6 ${
                  selectedReport === report.id ? 'text-orange-600' : 'text-gray-600'
                }`} />
              </div>
              <h3 className="font-semibold text-gray-900">{report.name}</h3>
            </div>
            <p className="text-sm text-gray-600">{report.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Report Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {reportTypes.find(r => r.id === selectedReport)?.name} Preview
          </h3>
        </div>
        <div className="p-6">
          {selectedReport === 'sales' && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Total Revenue</h4>
                  <p className="text-2xl font-bold text-green-600">₹{salesData.totalRevenue.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Total Tickets Sold</h4>
                  <p className="text-2xl font-bold text-blue-600">{salesData.totalTickets.toLocaleString()}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Average Order Value</h4>
                  <p className="text-2xl font-bold text-purple-600">₹{salesData.averageOrderValue}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Conversion Rate</h4>
                  <p className="text-2xl font-bold text-orange-600">{salesData.conversionRate}%</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Top Selling Pass</h4>
                  <p className="text-lg font-semibold text-gray-900">{salesData.topSellingPass}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Peak Sales Hour</h4>
                  <p className="text-lg font-semibold text-gray-900">{salesData.peakSalesHour}</p>
                </div>
              </div>
            </div>
          )}

          {selectedReport === 'attendance' && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Total Entries</h4>
                  <p className="text-2xl font-bold text-blue-600">{attendanceData.totalEntries.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Current Attendance</h4>
                  <p className="text-2xl font-bold text-green-600">{attendanceData.currentAttendance.toLocaleString()}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Peak Attendance</h4>
                  <p className="text-2xl font-bold text-purple-600">{attendanceData.peakAttendance.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Average Stay Duration</h4>
                  <p className="text-2xl font-bold text-orange-600">{attendanceData.averageStayDuration}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Busiest Gate</h4>
                  <p className="text-lg font-semibold text-gray-900">{attendanceData.busiestGate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-600">Exit Rate</h4>
                  <p className="text-lg font-semibold text-gray-900">{attendanceData.exitRate}%</p>
                </div>
              </div>
            </div>
          )}

          {(selectedReport === 'financial' || selectedReport === 'operational') && (
            <div className="text-center py-12">
              <ChartBarIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-gray-900 mb-2">Report Preview</h4>
              <p className="text-gray-600 mb-6">
                {selectedReport === 'financial' 
                  ? 'Complete financial breakdown including revenue, expenses, and profit margins'
                  : 'Operational metrics including staff performance, logistics, and efficiency metrics'
                }
              </p>
              <Button variant="primary">Generate Full Report</Button>
            </div>
          )}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Reports</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>Generated: {report.generatedAt}</span>
                      <span>Size: {report.size}</span>
                      <span>Format: {report.format}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scheduled Reports */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">Scheduled Reports</h3>
              <Button variant="outline" size="sm">Add Schedule</Button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {scheduledReports.map((report) => (
                <div key={report.id} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900">{report.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      report.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {report.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-2 mb-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{report.frequency}</span>
                    </div>
                    <div>Recipients: {report.recipients.join(', ')}</div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="outline" size="sm">
                      {report.status === 'active' ? 'Pause' : 'Resume'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};