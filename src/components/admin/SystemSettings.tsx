import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CogIcon,
  ShieldCheckIcon,
  BellIcon,
  UserGroupIcon,
  CreditCardIcon,
  GlobeAltIcon,
  KeyIcon,
  // DatabaseIcon
} from "@heroicons/react/24/outline";
import { Button } from "../ui/Button";

interface SystemSettingsProps {
  userRole: string;
}

export const SystemSettings: React.FC<SystemSettingsProps> = ({ userRole }) => {
  const [activeTab, setActiveTab] = useState("general");

  const settingsTabs = [
    { id: "general", name: "General", icon: CogIcon },
    { id: "security", name: "Security", icon: ShieldCheckIcon },
    { id: "notifications", name: "Notifications", icon: BellIcon },
    { id: "users", name: "User Roles", icon: UserGroupIcon },
    { id: "payments", name: "Payment Settings", icon: CreditCardIcon },
    { id: "api", name: "API & Integrations", icon: GlobeAltIcon },
    // { id: 'backup', name: 'Backup & Recovery', icon: DatabaseIcon }
  ];

  const userRoles = [
    {
      id: "super-admin",
      name: "Super Admin",
      description: "Full system access and control",
      permissions: ["All permissions"],
      userCount: 2,
    },
    {
      id: "admin",
      name: "Admin",
      description: "Administrative access with some restrictions",
      permissions: [
        "User management",
        "Event management",
        "Reports",
        "Settings",
      ],
      userCount: 5,
    },
    {
      id: "manager",
      name: "Manager",
      description: "Operational management access",
      permissions: ["Ticket management", "Attendance tracking", "Reports"],
      userCount: 12,
    },
    {
      id: "staff",
      name: "Staff",
      description: "Limited operational access",
      permissions: ["Attendance tracking", "Basic reports"],
      userCount: 25,
    },
  ];

  const paymentGateways = [
    {
      id: "razorpay",
      name: "Razorpay",
      status: "active",
      fees: "2.5%",
      methods: ["Cards", "UPI", "Net Banking", "Wallets"],
    },
    {
      id: "payu",
      name: "PayU",
      status: "inactive",
      fees: "2.3%",
      methods: ["Cards", "UPI", "Net Banking"],
    },
    {
      id: "stripe",
      name: "Stripe",
      status: "active",
      fees: "2.9%",
      methods: ["Cards", "Digital Wallets"],
    },
  ];

  const apiIntegrations = [
    {
      id: "sms",
      name: "SMS Gateway",
      provider: "Twilio",
      status: "active",
      lastUsed: "2 minutes ago",
    },
    {
      id: "email",
      name: "Email Service",
      provider: "SendGrid",
      status: "active",
      lastUsed: "5 minutes ago",
    },
    {
      id: "maps",
      name: "Maps API",
      provider: "Google Maps",
      status: "active",
      lastUsed: "1 hour ago",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">System Settings</h2>
          <p className="text-gray-600 mt-2">
            Configure system preferences and security settings
          </p>
        </div>
        <Button variant="primary">Save All Changes</Button>
      </div>

      {/* Settings Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 overflow-x-auto">
        {settingsTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.name}</span>
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200"
      >
        {activeTab === "general" && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              General Settings
            </h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Garba Festival 2024"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Dates
                  </label>
                  <input
                    type="text"
                    defaultValue="October 15-19, 2024"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Description
                </label>
                <textarea
                  rows={3}
                  defaultValue="Experience the magic of traditional Garba with celebrity performances, workshops, and competitions."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venue Capacity
                  </label>
                  <input
                    type="number"
                    defaultValue="50000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time Zone
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Asia/Kolkata (IST)</option>
                    <option>UTC</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Security Settings
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <ShieldCheckIcon className="h-5 w-5 text-yellow-600" />
                  <h4 className="font-medium text-yellow-900">
                    Password Policy
                  </h4>
                </div>
                <div className="space-y-2 text-sm text-yellow-800">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Minimum 8 characters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Require uppercase and lowercase letters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span>Require numbers and special characters</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Force password change every 90 days</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Session Timeout (minutes)
                  </label>
                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Max Login Attempts
                  </label>
                  <input
                    type="number"
                    defaultValue="5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      Two-Factor Authentication
                    </h4>
                    <p className="text-sm text-gray-600">
                      Require 2FA for admin accounts
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">
                      IP Whitelisting
                    </h4>
                    <p className="text-sm text-gray-600">
                      Restrict admin access to specific IPs
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "users" && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              User Roles & Permissions
            </h3>
            <div className="space-y-4">
              {userRoles.map((role) => (
                <div
                  key={role.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-medium text-gray-900">{role.name}</h4>
                      <p className="text-sm text-gray-600">
                        {role.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">
                        {role.userCount} users
                      </span>
                      <div className="flex space-x-2 mt-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        {userRole === "super-admin" &&
                          role.id !== "super-admin" && (
                            <Button variant="outline" size="sm">
                              Delete
                            </Button>
                          )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-medium text-gray-700 mb-2">
                      Permissions
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "payments" && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Payment Gateway Settings
            </h3>
            <div className="space-y-4">
              {paymentGateways.map((gateway) => (
                <div
                  key={gateway.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h4 className="font-medium text-gray-900">
                          {gateway.name}
                        </h4>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            gateway.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {gateway.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        Transaction Fee: {gateway.fees}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {gateway.methods.map((method, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                      <Button variant="outline" size="sm">
                        {gateway.status === "active" ? "Disable" : "Enable"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "api" && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              API & Integrations
            </h3>
            <div className="space-y-4">
              {apiIntegrations.map((integration) => (
                <div
                  key={integration.id}
                  className="p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        {integration.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Provider: {integration.provider}
                      </p>
                      <p className="text-xs text-gray-500">
                        Last used: {integration.lastUsed}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          integration.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {integration.status}
                      </span>
                      <Button variant="outline" size="sm">
                        <KeyIcon className="h-4 w-4 mr-2" />
                        API Keys
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "backup" && (
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Backup & Recovery
            </h3>
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">
                  Automated Backups
                </h4>
                <p className="text-sm text-blue-800 mb-4">
                  Database backups are automatically created every 6 hours and
                  stored securely.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    View Backup History
                  </Button>
                  <Button variant="outline" size="sm">
                    Create Manual Backup
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Backup Frequency
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                    <option>Every 6 hours</option>
                    <option>Every 12 hours</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Retention Period (days)
                  </label>
                  <input
                    type="number"
                    defaultValue="30"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-medium text-red-900 mb-2">
                  Emergency Recovery
                </h4>
                <p className="text-sm text-red-800 mb-4">
                  In case of system failure, use these options to restore data
                  and functionality.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    Restore from Backup
                  </Button>
                  <Button variant="outline" size="sm">
                    Emergency Contacts
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
