import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react';
import { celebrities } from '../../data/mockData';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Celebrity } from '../../types';

export const CelebritySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCelebrity, setSelectedCelebrity] = useState<Celebrity | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % celebrities.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + celebrities.length) % celebrities.length);
  };

  const currentCelebrity = celebrities[currentIndex];

  return (
    <section id="celebrities" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Celebrity Lineup
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Get ready to dance with the biggest stars of Garba and folk music
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Celebrity Showcase */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-orange-500 to-red-600 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Celebrity Image */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-white p-4">
                  <img
                    src={currentCelebrity.image}
                    alt={currentCelebrity.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  STAR PERFORMER
                </div>
              </motion.div>

              {/* Celebrity Info */}
              <motion.div
                key={`info-${currentIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {currentCelebrity.name}
                </h3>
                <p className="text-lg mb-6 text-orange-100">
                  {currentCelebrity.bio}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-orange-300" />
                    <span>Performance Date: {new Date(currentCelebrity.performanceDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-300" />
                    <span>Performance Time: {currentCelebrity.performanceTime}</span>
                  </div>
                  {currentCelebrity.meetAndGreet && (
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-orange-300" />
                      <span>Meet & Greet Available</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setSelectedCelebrity(currentCelebrity)}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-orange-600"
                  >
                    View Profile
                  </Button>
                  {currentCelebrity.meetAndGreet && (
                    <Button variant="secondary">
                      Book Meet & Greet
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevSlide}
                className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextSlide}
                className="p-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Celebrity Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {celebrities.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Celebrities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {celebrities.map((celebrity, index) => (
            <motion.div
              key={celebrity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedCelebrity(celebrity)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={celebrity.image}
                  alt={celebrity.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{celebrity.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{celebrity.bio}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-orange-600 font-medium">
                    {new Date(celebrity.performanceDate).toLocaleDateString()}
                  </span>
                  {celebrity.meetAndGreet && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Meet & Greet
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Celebrity Profile Modal */}
        <Modal
          isOpen={!!selectedCelebrity}
          onClose={() => setSelectedCelebrity(null)}
          title={selectedCelebrity?.name}
          maxWidth="2xl"
        >
          {selectedCelebrity && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedCelebrity.image}
                  alt={selectedCelebrity.name}
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-4">{selectedCelebrity.bio}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span>Performance: {new Date(selectedCelebrity.performanceDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span>Time: {selectedCelebrity.performanceTime}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Past Performances</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {selectedCelebrity.pastPerformances.map((performance, index) => (
                      <li key={index}>{performance}</li>
                    ))}
                  </ul>
                </div>
                {selectedCelebrity.meetAndGreet && (
                  <Button variant="primary" className="w-full">
                    Book Meet & Greet - ₹2,999
                  </Button>
                )}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};