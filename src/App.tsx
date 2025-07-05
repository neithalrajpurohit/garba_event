import React, { useState } from "react";
import { Header } from "./components/layout/Header";
import { HeroSection } from "./components/sections/HeroSection";
import { CelebritySection } from "./components/sections/CelebritySection";
import { EventSchedule } from "./components/sections/EventSchedule";
import { TicketSection } from "./components/sections/TicketSection";
import { VenueSection } from "./components/sections/VenueSection";
import { BookingModal } from "./components/sections/BookingModal";
import { AdminDashboard } from "./components/admin/AdminDashboard";

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
  };

  // Toggle between user and admin view (for demo purposes)
  const toggleAdminView = () => {
    setShowAdmin(!showAdmin);
  };

  if (showAdmin) {
    return <AdminDashboard userRole="super-admin" />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Toggle Button */}
      <button
        onClick={toggleAdminView}
        className="fixed top-4 right-4 z-[9990] bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
      >
        Switch to Admin
      </button>

      <Header onBookingClick={handleBookingClick} />
      <HeroSection onBookingClick={handleBookingClick} />
      <CelebritySection />
      <EventSchedule />
      <TicketSection onBookingClick={handleBookingClick} />
      <VenueSection />
      <BookingModal isOpen={isBookingModalOpen} onClose={handleCloseBooking} />
    </div>
  );
}

export default App;
