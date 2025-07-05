import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, CreditCard, Smartphone } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface BookingStep {
  id: string;
  title: string;
  completed: boolean;
}

interface PersonDetails {
  name: string;
  age: string;
  gender: 'male' | 'female';
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [personDetails, setPersonDetails] = useState<PersonDetails[]>([
    { name: '', age: '', gender: 'male' }
  ]);
  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: '',
    address: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const steps: BookingStep[] = [
    { id: 'details', title: 'Personal Details', completed: false },
    { id: 'payment', title: 'Payment', completed: false },
    { id: 'confirmation', title: 'Confirmation', completed: false }
  ];

  // Mock data for demonstration
  const selectedPass = {
    type: 'Individual Pass (Male)',
    bookingType: 'Full Event',
    days: 5,
    price: 2499,
    maxPersons: 1
  };

  const addPerson = () => {
    if (personDetails.length < selectedPass.maxPersons) {
      setPersonDetails([...personDetails, { name: '', age: '', gender: 'male' }]);
    }
  };

  const removePerson = (index: number) => {
    if (personDetails.length > 1) {
      setPersonDetails(personDetails.filter((_, i) => i !== index));
    }
  };

  const updatePersonDetails = (index: number, field: keyof PersonDetails, value: string) => {
    const updated = [...personDetails];
    updated[index] = { ...updated[index], [field]: value };
    setPersonDetails(updated);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBooking = async () => {
    setIsProcessing(true);
    // Simulate booking process
    setTimeout(() => {
      setIsProcessing(false);
      setBookingId(`GF2024-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);
      setCurrentStep(2);
    }, 3000);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return personDetails.every(person => person.name && person.age) && 
               contactDetails.email && contactDetails.phone;
      case 1:
        return paymentMethod !== '';
      default:
        return true;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Personal Details</h3>
            
            {/* Person Details */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-gray-900">Attendee Information</h4>
                {personDetails.length < selectedPass.maxPersons && (
                  <Button variant="outline" size="sm" onClick={addPerson}>
                    Add Person
                  </Button>
                )}
              </div>
              
              {personDetails.map((person, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center mb-4">
                    <h5 className="font-medium">Person {index + 1}</h5>
                    {personDetails.length > 1 && (
                      <button
                        onClick={() => removePerson(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={person.name}
                        onChange={(e) => updatePersonDetails(index, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Age *
                      </label>
                      <input
                        type="number"
                        value={person.age}
                        onChange={(e) => updatePersonDetails(index, 'age', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Age"
                        min="1"
                        max="100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender *
                      </label>
                      <select
                        value={person.gender}
                        onChange={(e) => updatePersonDetails(index, 'gender', e.target.value as 'male' | 'female')}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Contact Information</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={contactDetails.email}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={contactDetails.phone}
                    onChange={(e) => setContactDetails(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  value={contactDetails.address}
                  onChange={(e) => setContactDetails(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={3}
                  placeholder="Your address (optional)"
                />
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Payment Method</h3>
            
            {/* Payment Options */}
            <div className="space-y-4">
              <div 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="card"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-500"
                  />
                  <CreditCard className="h-6 w-6 text-gray-600" />
                  <div>
                    <label htmlFor="card" className="font-medium cursor-pointer">Credit/Debit Card</label>
                    <p className="text-sm text-gray-600">Visa, Mastercard, RuPay accepted</p>
                  </div>
                </div>
              </div>

              <div 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                }`}
                onClick={() => setPaymentMethod('upi')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="upi"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-500"
                  />
                  <Smartphone className="h-6 w-6 text-gray-600" />
                  <div>
                    <label htmlFor="upi" className="font-medium cursor-pointer">UPI Payment</label>
                    <p className="text-sm text-gray-600">Pay using any UPI app</p>
                  </div>
                </div>
              </div>

              <div 
                className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  paymentMethod === 'netbanking' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                }`}
                onClick={() => setPaymentMethod('netbanking')}
              >
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="netbanking"
                    name="payment"
                    value="netbanking"
                    checked={paymentMethod === 'netbanking'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-orange-500"
                  />
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₹</span>
                  </div>
                  <div>
                    <label htmlFor="netbanking" className="font-medium cursor-pointer">Net Banking</label>
                    <p className="text-sm text-gray-600">All major banks supported</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">Order Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>{selectedPass.type}</span>
                  <span>₹{selectedPass.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Booking Type</span>
                  <span>{selectedPass.bookingType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Number of Attendees</span>
                  <span>{personDetails.length}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>₹{selectedPass.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
            <p className="text-gray-600">
              Your tickets have been booked successfully. Digital tickets will be sent to your email within 5 minutes.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium mb-4">Booking Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Booking ID</span>
                  <span className="font-mono">{bookingId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Pass Type</span>
                  <span>{selectedPass.type}</span>
                </div>
                <div className="flex justify-between">
                  <span>Attendees</span>
                  <span>{personDetails.length} person{personDetails.length > 1 ? 's' : ''}</span>
                </div>
                <div className="flex justify-between">
                  <span>Email</span>
                  <span>{contactDetails.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-blue-900 mb-2">Important Instructions</h5>
              <ul className="text-sm text-blue-800 space-y-1 text-left">
                <li>• Carry a valid photo ID for entry verification</li>
                <li>• Show digital ticket QR code at the entrance</li>
                <li>• Arrive 30 minutes before event start time</li>
                <li>• Check your email for detailed event guidelines</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="2xl">
      <div className="min-h-[600px]">
        {/* Progress Steps */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                index <= currentStep ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {index < currentStep ? <CheckCircle className="h-5 w-5" /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-16 h-0.5 mx-2 ${
                  index < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <div className="flex space-x-4">
            {currentStep < 1 ? (
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={!isStepValid()}
              >
                Next
              </Button>
            ) : currentStep === 1 ? (
              <Button
                variant="primary"
                onClick={handleBooking}
                loading={isProcessing}
                disabled={!isStepValid()}
              >
                {isProcessing ? 'Processing Payment...' : 'Complete Booking'}
              </Button>
            ) : (
              <Button variant="primary" onClick={onClose}>
                Close
              </Button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};