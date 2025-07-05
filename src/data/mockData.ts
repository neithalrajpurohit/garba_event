import { Celebrity, Event, Ticket, Venue } from '../types';

export const celebrities: Celebrity[] = [
  {
    id: '1',
    name: 'Falguni Pathak',
    image: 'https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'The Dandiya Queen of India, known for her mesmerizing voice and traditional folk songs.',
    performanceDate: '2024-10-15',
    performanceTime: '21:00',
    socialMedia: {
      instagram: '@falgunipathak',
      facebook: 'FalguniPathakOfficial'
    },
    pastPerformances: ['Navratri 2023', 'Garba Mahotsav 2022'],
    meetAndGreet: true
  },
  {
    id: '2',
    name: 'Kinjal Dave',
    image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Popular Gujarati folk singer and performer, bringing modern energy to traditional Garba.',
    performanceDate: '2024-10-16',
    performanceTime: '20:30',
    socialMedia: {
      instagram: '@kinjaldave',
      facebook: 'KinjalDaveOfficial'
    },
    pastPerformances: ['Navratri 2023', 'Folk Festival 2022'],
    meetAndGreet: true
  },
  {
    id: '3',
    name: 'Parthiv Gohil',
    image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Renowned playback singer and folk artist, known for his soulful Garba performances.',
    performanceDate: '2024-10-17',
    performanceTime: '21:30',
    socialMedia: {
      instagram: '@parthivgohil',
      facebook: 'ParthivGohilOfficial'
    },
    pastPerformances: ['Navratri 2023', 'Classical Evening 2022'],
    meetAndGreet: false
  }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Opening Night - Traditional Garba',
    date: '2024-10-15',
    time: '19:00',
    description: 'Experience the magic of traditional Garba with classical folk songs and dance.',
    theme: 'Classical Heritage',
    celebrities: ['1'],
    workshops: [
      {
        id: '1',
        title: 'Basic Garba Steps',
        instructor: 'Meera Patel',
        time: '17:00',
        duration: '90 minutes',
        level: 'Beginner'
      }
    ],
    competitions: [
      {
        id: '1',
        title: 'Best Traditional Costume',
        time: '22:00',
        category: 'Costume',
        prizes: ['₹10,000', '₹5,000', '₹3,000']
      }
    ]
  },
  {
    id: '2',
    title: 'Bollywood Fusion Night',
    date: '2024-10-16',
    time: '19:00',
    description: 'Modern Bollywood hits meet traditional Garba in this exciting fusion evening.',
    theme: 'Bollywood Fusion',
    celebrities: ['2'],
    workshops: [
      {
        id: '2',
        title: 'Bollywood Garba Fusion',
        instructor: 'Raj Sharma',
        time: '17:30',
        duration: '2 hours',
        level: 'Intermediate'
      }
    ],
    competitions: [
      {
        id: '2',
        title: 'Dance Battle',
        time: '23:00',
        category: 'Dance',
        prizes: ['₹15,000', '₹8,000', '₹5,000']
      }
    ]
  },
  {
    id: '3',
    title: 'Grand Finale - Unity Night',
    date: '2024-10-19',
    time: '18:00',
    description: 'The grand finale celebrating unity and joy with all celebrities performing together.',
    theme: 'Unity Celebration',
    celebrities: ['1', '2', '3'],
    workshops: [
      {
        id: '3',
        title: 'Advanced Choreography',
        instructor: 'Priya Desai',
        time: '16:00',
        duration: '2.5 hours',
        level: 'Advanced'
      }
    ],
    competitions: [
      {
        id: '3',
        title: 'Grand Championship',
        time: '22:30',
        category: 'Overall',
        prizes: ['₹50,000', '₹25,000', '₹15,000']
      }
    ]
  }
];

export const tickets: Ticket[] = [
  {
    id: '1',
    type: 'premium-5day',
    category: 'individual',
    price: 2999,
    originalPrice: 3999,
    description: 'Premium 5-Day Pass',
    features: ['All 5 days access', 'VIP seating', 'Complimentary refreshments', 'Meet & greet access', 'Exclusive merchandise'],
    isLimited: true,
    stock: 500
  },
  {
    id: '2',
    type: 'regular-5day',
    category: 'individual',
    price: 1999,
    originalPrice: 2499,
    description: 'Regular 5-Day Pass',
    features: ['All 5 days access', 'General seating', 'Food court access', 'Workshop participation'],
    isLimited: false
  },
  {
    id: '3',
    type: 'single-day',
    category: 'individual',
    price: 499,
    originalPrice: 599,
    description: 'Single Day Pass',
    features: ['1 day access', 'General seating', 'Food court access'],
    isLimited: false
  },
  {
    id: '4',
    type: 'vip-meet-greet',
    category: 'individual',
    price: 4999,
    originalPrice: 5999,
    description: 'VIP Meet & Greet Package',
    features: ['Premium 5-day pass', 'Celebrity meet & greet', 'Photo opportunities', 'Exclusive merchandise', 'Backstage access'],
    isLimited: true,
    stock: 100
  }
];

export const venue: Venue = {
  name: 'Garba Ground, Ahmedabad',
  address: 'Sardar Patel Stadium Complex, Ahmedabad, Gujarat 380009',
  capacity: 50000,
  coordinates: {
    lat: 23.0225,
    lng: 72.5714
  },
  facilities: {
    parking: true,
    foodCourt: true,
    restrooms: true,
    firstAid: true
  },
  entryPoints: ['Main Gate', 'North Gate', 'South Gate', 'VIP Entrance'],
  parkingZones: ['Zone A', 'Zone B', 'Zone C', 'VIP Parking']
};