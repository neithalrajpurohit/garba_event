import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CurrencyDollarIcon,
  // TrendingUpIcon,
  // TrendingDownIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";

interface RevenueAnalyticsProps {
  userRole: string;
}

export const RevenueAnalytics: React.FC<RevenueAnalyticsProps> = ({
  userRole,
}) => {
  const [dateRange, setDateRange] = useState("7days");
  const [viewType, setViewType] = useState("overview");

  const revenueStats = [
    {
      name: "Total Revenue",
      value: "₹32,45,680",
      change: "+18.2%",
      changeType: "increase",
      icon: CurrencyDollarIcon,
      color: "green",
    },
    // {
    //   name: 'Average Order Value',
    //   value: '₹2,534',
    //   change: '+5.4%',
    //   changeType: 'increase',
    //   icon: TrendingUpIcon,
    //   color: 'blue'
    // },
    {
      name: "Conversion Rate",
      value: "68.4%",
      change: "+2.1%",
      changeType: "increase",
      icon: ChartBarIcon,
      color: "purple",
    },
    // {
    //   name: 'Refund Rate',
    //   value: '2.3%',
    //   change: '-0.8%',
    //   changeType: 'decrease',
    //   icon: TrendingDownIcon,
    //   color: 'red'
    // }
  ];

  const revenueByPassType = [
    {
      passType: "Premium 5-Day Pass",
      revenue: 12456780,
      percentage: 38.4,
      bookings: 2489,
    },
    {
      passType: "Family Pass",
      revenue: 8934560,
      percentage: 27.5,
      bookings: 1118,
    },
    {
      passType: "Individual Pass (Male)",
      revenue: 6789012,
      percentage: 20.9,
      bookings: 2716,
    },
    {
      passType: "Individual Pass (Female)",
      revenue: 3456789,
      percentage: 10.6,
      bookings: 1584,
    },
    {
      passType: "Single Day Pass",
      revenue: 865439,
      percentage: 2.6,
      bookings: 1445,
    },
  ];

  const dailyRevenue = [
    { date: "2024-10-08", revenue: 234567, bookings: 89 },
    { date: "2024-10-09", revenue: 345678, bookings: 124 },
    { date: "2024-10-10", revenue: 456789, bookings: 167 },
    { date: "2024-10-11", revenue: 567890, bookings: 203 },
    { date: "2024-10-12", revenue: 678901, bookings: 245 },
    { date: "2024-10-13", revenue: 789012, bookings: 289 },
    { date: "2024-10-14", revenue: 890123, bookings: 334 },
  ];

  const paymentMethods = [
    { method: "UPI", revenue: 15678900, percentage: 48.3 },
    { method: "Credit/Debit Card", revenue: 12345600, percentage: 38.0 },
    { method: "Net Banking", revenue: 4321080, percentage: 13.3 },
    { method: "Wallet", revenue: 135000, percentage: 0.4 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Revenue Analytics
          </h2>
          <p className="text-gray-600 mt-2">
            Track sales performance and financial metrics
          </p>
        </div>
        <div className="flex space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="custom">Custom Range</option>
          </select>
          <Button variant="outline">
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Revenue Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueStats.map((stat, index) => (
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
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    vs last period
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Revenue by Pass Type */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Revenue by Pass Type
          </h3>
          <div className="space-y-4">
            {revenueByPassType.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {item.passType}
                    </span>
                    <span className="text-sm text-gray-600">
                      ₹{item.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">
                      {item.bookings} bookings
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Revenue Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Daily Revenue Trend
          </h3>
          <div className="space-y-3">
            {dailyRevenue.map((day, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <div className="text-sm font-medium text-gray-900">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="text-xs text-gray-500">
                    {day.bookings} bookings
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    ₹{day.revenue.toLocaleString()}
                  </div>
                  <div className="text-xs text-green-600">
                    +
                    {(
                      (day.revenue / dailyRevenue[0].revenue - 1) *
                      100
                    ).toFixed(1)}
                    %
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Revenue by Payment Method
          </h3>
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-900">
                      {method.method}
                    </span>
                    <span className="text-sm text-gray-600">
                      ₹{method.revenue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-gray-500">
                      {method.percentage}% of total
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${method.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Insights */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Revenue Insights
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="text-sm font-medium text-green-900 mb-2">
                Peak Sales Day
              </h4>
              <p className="text-sm text-green-700">
                October 14th generated the highest revenue of ₹8,90,123 with 334
                bookings
              </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-900 mb-2">
                Best Performing Pass
              </h4>
              <p className="text-sm text-blue-700">
                Premium 5-Day Pass accounts for 38.4% of total revenue
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="text-sm font-medium text-purple-900 mb-2">
                Growth Trend
              </h4>
              <p className="text-sm text-purple-700">
                Revenue has grown by 18.2% compared to the same period last year
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <h4 className="text-sm font-medium text-orange-900 mb-2">
                Forecast
              </h4>
              <p className="text-sm text-orange-700">
                Projected to reach ₹45,00,000 by event end based on current
                trends
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
