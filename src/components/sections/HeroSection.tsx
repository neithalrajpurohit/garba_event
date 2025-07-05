import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '../ui/Button';
import { CountdownTimer } from '../ui/CountdownTimer';

interface HeroSectionProps {
  onBookingClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookingClick }) => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 opacity-90">
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        {/* Placeholder for video background */}
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')] bg-cover bg-center opacity-30"></div>
      </div>

      {/* Sound Toggle */}
      <div className="absolute top-20 right-4 z-20">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all"
        >
          {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
        </button>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Garba Festival 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience the magic of traditional Garba with celebrity performances
            </p>
            <div className="text-lg md:text-xl mb-8">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-full">
                October 15-19, 2024 | Sardar Patel Stadium, Ahmedabad
              </span>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">Festival Starts In</h2>
            <CountdownTimer targetDate="2024-10-15T19:00:00" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button
              onClick={onBookingClick}
              variant="primary"
              size="lg"
              className="text-lg px-8 py-4 shadow-2xl"
            >
              Book Your Tickets Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Highlights
            </Button>
          </motion.div>

          {/* Early Bird Offer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-12 inline-block"
          >
            <div className="bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg">
              🎉 Early Bird Offer: Save 25% - Limited Time!
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};