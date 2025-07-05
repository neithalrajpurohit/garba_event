export interface Celebrity {
  id: string;
  name: string;
  image: string;
  bio: string;
  performanceDate: string;
  performanceTime: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  pastPerformances: string[];
  meetAndGreet: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  theme: string;
  celebrities: string[];
  workshops: Workshop[];
  competitions: Competition[];
}

export interface Workshop {
  id: string;
  title: string;
  instructor: string;
  time: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface Competition {
  id: string;
  title: string;
  time: string;
  category: string;
  prizes: string[];
}

export interface Ticket {
  id: string;
  type: 'premium-5day' | 'regular-5day' | 'single-day' | 'vip-meet-greet';
  category: 'individual' | 'couple' | 'family' | 'group';
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isLimited?: boolean;
  stock?: number;
}

export interface Booking {
  id: string;
  userId: string;
  tickets: {
    ticketId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  qrCode: string;
  bookingDate: string;
  userDetails: {
    name: string;
    email: string;
    phone: string;
  };
}

export interface Venue {
  name: string;
  address: string;
  capacity: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  facilities: {
    parking: boolean;
    foodCourt: boolean;
    restrooms: boolean;
    firstAid: boolean;
  };
  entryPoints: string[];
  parkingZones: string[];
}