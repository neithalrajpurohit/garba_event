import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  Ticket,
  DollarSign,
  Calendar,
  MapPin,
  Settings,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { DashboardOverview } from "./DashboardOverview";
import { TicketManagement } from "./TicketManagement";
import { UserManagement } from "./UserManagement";
import { RevenueAnalytics } from "./RevenueAnalytics";
import { AttendanceTracking } from "./AttendanceTracking";
import { EventManagement } from "./EventManagement";
import { VenueManagement } from "./VenueManagement";
import { ReportsSection } from "./ReportsSection";
import { SystemSettings } from "./SystemSettings";

interface AdminDashboardProps {
  userRole: "super-admin" | "admin" | "manager" | "staff";
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ userRole }) => {
  const [activeSection, setActiveSection] = useState("overview");

  const navigationItems = [
    {
      id: "overview",
      name: "Dashboard",
      icon: BarChart3,
      roles: ["super-admin", "admin", "manager", "staff"],
    },
    {
      id: "tickets",
      name: "Ticket Management",
      icon: Ticket,
      roles: ["super-admin", "admin", "manager"],
    },
    {
      id: "users",
      name: "User Management",
      icon: Users,
      roles: ["super-admin", "admin"],
    },
    {
      id: "revenue",
      name: "Revenue Analytics",
      icon: DollarSign,
      roles: ["super-admin", "admin", "manager"],
    },
    {
      id: "attendance",
      name: "Attendance Tracking",
      icon: Calendar,
      roles: ["super-admin", "admin", "manager", "staff"],
    },
    {
      id: "events",
      name: "Event Management",
      icon: Calendar,
      roles: ["super-admin", "admin"],
    },
    {
      id: "venue",
      name: "Venue Management",
      icon: MapPin,
      roles: ["super-admin", "admin", "manager"],
    },
    {
      id: "settings",
      name: "Settings",
      icon: Settings,
      roles: ["super-admin", "admin"],
    },
  ];

  const filteredNavigation = navigationItems.filter((item) =>
    item.roles.includes(userRole)
  );

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <DashboardOverview userRole={userRole} />;
      case "tickets":
        return <TicketManagement userRole={userRole} />;
      case "users":
        return <UserManagement userRole={userRole} />;
      case "revenue":
        return <RevenueAnalytics userRole={userRole} />;
      case "attendance":
        return <AttendanceTracking userRole={userRole} />;
      case "events":
        return <EventManagement userRole={userRole} />;
      case "venue":
        return <VenueManagement userRole={userRole} />;
      case "reports":
        return <ReportsSection userRole={userRole} />;
      case "settings":
        return <SystemSettings userRole={userRole} />;
      default:
        return <DashboardOverview userRole={userRole} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <h1 className="ml-3 text-xl font-bold text-gray-900">
                Garba Festival Admin
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Live Event</span>
              </div>
              <div className="text-sm text-gray-600">
                Role: <span className="font-medium capitalize">{userRole}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-4">
            <ul className="space-y-2">
              {filteredNavigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};