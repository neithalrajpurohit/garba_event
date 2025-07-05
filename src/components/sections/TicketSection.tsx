import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar, Users, User } from 'lucide-react';
import { Button } from '../ui/Button';
import { format, addDays } from 'date-fns';

interface TicketSectionProps {
  onBookingClick: () => void;
}

interface PassType {
  id: string;
  name: string;
  description: string;
  icon: string;
  maxPersons: number;
  fullEventPrice: number;
  singleDayPrice: number;
  features: string[];
}

interface EventDay {
  date: Date;
  dayNumber: number;
  theme: string;
  isAvailable: boolean;
}

export const TicketSection: React.FC<TicketSectionProps> = ({ onBookingClick }) => {
  const [selectedPassType, setSelectedPassType] = useState<string>('individual-male');
  const [bookingType, setBookingType] = useState<'full-event' | 'single-day'>('full-event');
  const [selectedDays, setSelectedDays] = useState<number[]>([]);

  const passTypes: PassType[] = [
    {
      id: 'individual-male',
      name: 'Individual Pass (Male)',
      description: 'Single person entry',
      icon: '👨',
      maxPersons: 1,
      fullEventPrice: 2499,
      singleDayPrice: 599,
      features: ['All event access', 'Food court access', 'Workshop participation', 'Competition entry']
    },
    {
      id: 'individual-female',
      name: 'Individual Pass (Female)',
      description: 'Single person entry',
      icon: '👩',
      maxPersons: 1,
      fullEventPrice: 2299,
      singleDayPrice: 549,
      features: ['All event access', 'Food court access', 'Workshop participation', 'Competition entry', 'Ladies special events']
    },
    {
      id: 'couple',
      name: 'Couple Pass',
      description: '2 persons entry',
      icon: '👫',
      maxPersons: 2,
      fullEventPrice: 4299,
      singleDayPrice: 999,
      features: ['All event access', 'Food court access', 'Workshop participation', 'Competition entry', 'Couple dance competitions', 'Photo booth access']
    },
    {
      id: 'family',
      name: 'Family Pass',
      description: 'Up to 4 persons',
      icon: '👪',
      maxPersons: 4,
      fullEventPrice: 7999,
      singleDayPrice: 1799,
      features: ['All event access', 'Food court access', 'Workshop participation', 'Competition entry', 'Kids play area', 'Family photo sessions', 'Priority seating']
    }
  ];

  const eventDays: EventDay[] = [
    { date: new Date('2024-10-15'), dayNumber: 1, theme: 'Traditional Opening', isAvailable: true },
    { date: new Date('2024-10-16'), dayNumber: 2, theme: 'Bollywood Fusion', isAvailable: true },
    { date: new Date('2024-10-17'), dayNumber: 3, theme: 'Regional Folk', isAvailable: true },
    { date: new Date('2024-10-18'), dayNumber: 4, theme: 'Youth Night', isAvailable: true },
    { date: new Date('2024-10-19'), dayNumber: 5, theme: 'Grand Finale', isAvailable: true }
  ];

  const selectedPassTypeData = passTypes.find(pass => pass.id === selectedPassType);

  const calculateTotalPrice = () => {
    if (!selectedPassTypeData) return 0;
    
    if (bookingType === 'full-event') {
      return selectedPassTypeData.fullEventPrice;
    } else {
      return selectedDays.length * selectedPassTypeData.singleDayPrice;
    }
  };

  const calculateSavings = () => {
    if (!selectedPassTypeData || bookingType === 'single-day') return 0;
    
    const singleDayTotal = 5 * selectedPassTypeData.singleDayPrice;
    const fullEventPrice = selectedPassTypeData.fullEventPrice;
    return singleDayTotal - fullEventPrice;
  };

  const handleDaySelection = (dayNumber: number) => {
    if (selectedDays.includes(dayNumber)) {
      setSelectedDays(selectedDays.filter(day => day !== dayNumber));
    } else {
      setSelectedDays([...selectedDays, dayNumber]);
    }
  };

  const handleBookingTypeChange = (type: 'full-event' | 'single-day') => {
    setBookingType(type);
    if (type === 'full-event') {
      setSelectedDays([]);
    }
  };

  return (
    <section id="tickets" className="py-20 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Tickets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your perfect pass for an unforgettable 5-day Garba experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Pass Type Selection */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Pass Type</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {passTypes.map((passType) => (
                  <motion.div
                    key={passType.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                      selectedPassType === passType.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                    onClick={() => setSelectedPassType(passType.id)}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-3xl">{passType.icon}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900">{passType.name}</h4>
                        <p className="text-sm text-gray-600">{passType.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Full Event</span>
                        <span className="font-bold text-orange-600">₹{passType.fullEventPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Per Day</span>
                        <span className="font-bold text-gray-700">₹{passType.singleDayPrice}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Booking Type Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Options</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <button
                  onClick={() => handleBookingTypeChange('full-event')}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    bookingType === 'full-event'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="h-6 w-6 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Full Event Pass</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Access to all 5 days</p>
                  {selectedPassTypeData && (
                    <div>
                      <span className="text-2xl font-bold text-orange-600">
                        ₹{selectedPassTypeData.fullEventPrice}
                      </span>
                      {calculateSavings() > 0 && (
                        <div className="mt-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Save ₹{calculateSavings()}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </button>

                <button
                  onClick={() => handleBookingTypeChange('single-day')}
                  className={`p-6 rounded-xl border-2 text-left transition-all ${
                    bookingType === 'single-day'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <User className="h-6 w-6 text-orange-600" />
                    <h4 className="font-semibold text-gray-900">Single Day Pass</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Select specific days</p>
                  {selectedPassTypeData && (
                    <span className="text-2xl font-bold text-gray-700">
                      ₹{selectedPassTypeData.singleDayPrice}/day
                    </span>
                  )}
                </button>
              </div>

              {/* Day Selection Calendar */}
              {bookingType === 'single-day' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-4">Select Days</h4>
                  <div className="grid md:grid-cols-5 gap-3">
                    {eventDays.map((day) => (
                      <div
                        key={day.dayNumber}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedDays.includes(day.dayNumber)
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200 hover:border-orange-300'
                        } ${!day.isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => day.isAvailable && handleDaySelection(day.dayNumber)}
                      >
                        <div className="text-center">
                          <div className="text-sm text-gray-600 mb-1">Day {day.dayNumber}</div>
                          <div className="font-semibold text-gray-900 mb-2">
                            {format(day.date, 'MMM dd')}
                          </div>
                          <div className="text-xs text-gray-600 mb-3">{day.theme}</div>
                          <div className="flex justify-center">
                            <input
                              type="checkbox"
                              checked={selectedDays.includes(day.dayNumber)}
                              onChange={() => day.isAvailable && handleDaySelection(day.dayNumber)}
                              className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                              disabled={!day.isAvailable}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {selectedDays.length === 0 && (
                    <p className="text-sm text-gray-500 mt-4 text-center">
                      Please select at least one day to proceed
                    </p>
                  )}
                </motion.div>
              )}
            </div>

            {/* Pass Features */}
            {selectedPassTypeData && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedPassTypeData.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Summary</h3>
              
              {selectedPassTypeData && (
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{selectedPassTypeData.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{selectedPassTypeData.name}</h4>
                      <p className="text-sm text-gray-600">
                        Up to {selectedPassTypeData.maxPersons} person{selectedPassTypeData.maxPersons > 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Pass Type</span>
                      <span className="font-medium">
                        {bookingType === 'full-event' ? 'Full Event' : 'Single Day'}
                      </span>
                    </div>
                    
                    {bookingType === 'single-day' && selectedDays.length > 0 && (
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-600">Selected Days</span>
                        <span className="font-medium">{selectedDays.length} day{selectedDays.length > 1 ? 's' : ''}</span>
                      </div>
                    )}

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-600">Price per {bookingType === 'full-event' ? 'pass' : 'day'}</span>
                      <span className="font-medium">
                        ₹{bookingType === 'full-event' ? selectedPassTypeData.fullEventPrice : selectedPassTypeData.singleDayPrice}
                      </span>
                    </div>

                    {calculateSavings() > 0 && (
                      <div className="flex justify-between items-center mb-4 text-green-600">
                        <span>You Save</span>
                        <span className="font-bold">₹{calculateSavings()}</span>
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total Amount</span>
                        <span className="text-2xl font-bold text-orange-600">
                          ₹{calculateTotalPrice()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <Button
                onClick={onBookingClick}
                variant="primary"
                className="w-full mb-4"
                disabled={bookingType === 'single-day' && selectedDays.length === 0}
              >
                Proceed to Booking
              </Button>

              <div className="text-xs text-gray-500 space-y-2">
                <p>• Tickets are non-refundable</p>
                <p>• Valid ID required at entry</p>
                <p>• Children under 5 enter free</p>
                <p>• Digital tickets delivered via email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions</h3>
          <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ticket Policies</h4>
              <ul className="space-y-2">
                <li>• All tickets are non-refundable and non-transferable</li>
                <li>• Valid government-issued photo ID required for entry</li>
                <li>• Children under 5 years enter free with adult supervision</li>
                <li>• Lost tickets cannot be replaced</li>
                <li>• Entry subject to security check</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Event Guidelines</h4>
              <ul className="space-y-2">
                <li>• Traditional attire recommended but not mandatory</li>
                <li>• Outside food and beverages not permitted</li>
                <li>• Professional photography equipment prohibited</li>
                <li>• Management reserves right to refuse entry</li>
                <li>• Event schedule subject to change</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};