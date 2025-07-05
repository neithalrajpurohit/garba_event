import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  FunnelIcon, 
  DocumentArrowDownIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { Button } from '../ui/Button';

interface TicketManagementProps {
  userRole: string;
}

interface Ticket {
  id: string;
  bookingId: string;
  customerName: string;
  email: string;
  phone: string;
  passType: string;
  quantity: number;
  totalAmount: number;
  bookingDate: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'refunded';
  paymentStatus: 'completed' | 'pending' | 'failed';
  entryStatus: 'not-entered' | 'entered' | 'exited';
  qrCode: string;
}

export const TicketManagement: React.FC<TicketManagementProps> = ({ userRole }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTickets, setSelectedTickets] = useState<string[]>([]);

  const tickets: Ticket[] = [
    {
      id: '1',
      bookingId: 'GF2024-ABC123',
      customerName: 'Rajesh Patel',
      email: 'rajesh@email.com',
      phone: '+91 98765 43210',
      passType: 'Premium 5-Day Pass',
      quantity: 2,
      totalAmount: 4998,
      bookingDate: '2024-10-10',
      status: 'confirmed',
      paymentStatus: 'completed',
      entryStatus: 'entered',
      qrCode: 'QR123456'
    },
    {
      id: '2',
      bookingId: 'GF2024-DEF456',
      customerName: 'Priya Sharma',
      email: 'priya@email.com',
      phone: '+91 98765 43211',
      passType: 'Family Pass',
      quantity: 4,
      totalAmount: 7999,
      bookingDate: '2024-10-12',
      status: 'confirmed',
      paymentStatus: 'completed',
      entryStatus: 'not-entered',
      qrCode: 'QR789012'
    },
    {
      id: '3',
      bookingId: 'GF2024-GHI789',
      customerName: 'Amit Kumar',
      email: 'amit@email.com',
      phone: '+91 98765 43212',
      passType: 'Single Day Pass',
      quantity: 1,
      totalAmount: 599,
      bookingDate: '2024-10-14',
      status: 'pending',
      paymentStatus: 'pending',
      entryStatus: 'not-entered',
      qrCode: 'QR345678'
    }
  ];

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.bookingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleSelectTicket = (ticketId: string) => {
    setSelectedTickets(prev => 
      prev.includes(ticketId) 
        ? prev.filter(id => id !== ticketId)
        : [...prev, ticketId]
    );
  };

  const handleSelectAll = () => {
    setSelectedTickets(
      selectedTickets.length === filteredTickets.length 
        ? [] 
        : filteredTickets.map(ticket => ticket.id)
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'refunded': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'failed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getEntryStatusColor = (status: string) => {
    switch (status) {
      case 'entered': return 'text-blue-600 bg-blue-100';
      case 'exited': return 'text-purple-600 bg-purple-100';
      case 'not-entered': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Ticket Management</h2>
          <p className="text-gray-600 mt-2">Manage all ticket bookings and attendee information</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline">
            <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button variant="primary">Add Manual Booking</Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, booking ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-80"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="refunded">Refunded</option>
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            Showing {filteredTickets.length} of {tickets.length} tickets
          </div>
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedTickets.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-orange-50 border border-orange-200 rounded-lg p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-orange-800">
              {selectedTickets.length} ticket{selectedTickets.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Send Email</Button>
              <Button variant="outline" size="sm">Mark as Confirmed</Button>
              <Button variant="outline" size="sm">Cancel Tickets</Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tickets Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={selectedTickets.length === filteredTickets.length && filteredTickets.length > 0}
                    onChange={handleSelectAll}
                    className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Booking Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Pass Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Entry Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedTickets.includes(ticket.id)}
                      onChange={() => handleSelectTicket(ticket.id)}
                      className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{ticket.bookingId}</div>
                      <div className="text-sm text-gray-500">{ticket.bookingDate}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{ticket.customerName}</div>
                      <div className="text-sm text-gray-500">{ticket.email}</div>
                      <div className="text-sm text-gray-500">{ticket.phone}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{ticket.passType}</div>
                      <div className="text-sm text-gray-500">Qty: {ticket.quantity}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">₹{ticket.totalAmount}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(ticket.paymentStatus)}`}>
                      {ticket.paymentStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getEntryStatusColor(ticket.entryStatus)}`}>
                      {ticket.entryStatus.replace('-', ' ')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      {userRole === 'super-admin' && (
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing 1 to {filteredTickets.length} of {tickets.length} results
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" disabled>Previous</Button>
          <Button variant="outline" size="sm">1</Button>
          <Button variant="outline" size="sm" disabled>Next</Button>
        </div>
      </div>
    </div>
  );
};