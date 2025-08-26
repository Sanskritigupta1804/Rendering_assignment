import { artists } from "./schemas/artists";
import { venues } from "./schemas/venues";
import { concerts } from "./schemas/concerts";
import { zones } from "./schemas/zones";
import { featuredContent } from "./schemas/featured-content";

// Artist seed data
export const artistSeedData: (typeof artists.$inferInsert)[] = [
  {
    name: "A. R. Rahman",
    bio: "Oscar-winning composer and music director known for his innovative fusion of Indian classical music with electronic, world music and traditional orchestral arrangements.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    genre: "Film Music, Classical, Electronic",
    website: "https://www.arrahman.com",
    socialLinks: {
      instagram: "https://instagram.com/arrahman",
      twitter: "https://twitter.com/arrahman",
      facebook: "https://facebook.com/arrahman"
    }
  },
  {
    name: "Anirudh Ravichander",
    bio: "Indian composer, singer and lyricist who works predominantly in Tamil cinema. Known for his contemporary and experimental music style.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    genre: "Tamil Film Music, Pop, Electronic",
    website: "https://www.anirudhofficial.com",
    socialLinks: {
      instagram: "https://instagram.com/anirudhofficial",
      twitter: "https://twitter.com/anirudhofficial"
    }
  },
  {
    name: "Arijit Singh",
    bio: "Indian playback singer and music composer. Known for his soulful voice and romantic ballads that have defined a generation of Indian music.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    genre: "Playback Singing, Romantic Ballads",
    website: "https://www.arijitsingh.com",
    socialLinks: {
      instagram: "https://instagram.com/arijitsingh",
      facebook: "https://facebook.com/arijitsingh"
    }
  },
  {
    name: "The Weeknd",
    bio: "Canadian singer, songwriter, and record producer. Known for his sonic versatility and dark themes in his music.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    genre: "R&B, Pop, Alternative",
    website: "https://www.theweeknd.com",
    socialLinks: {
      instagram: "https://instagram.com/theweeknd",
      twitter: "https://twitter.com/theweeknd"
    }
  },
  {
    name: "Coldplay",
    bio: "British rock band formed in 1996. Known for their melodic rock anthems and elaborate live performances.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    genre: "Alternative Rock, Pop Rock",
    website: "https://www.coldplay.com",
    socialLinks: {
      instagram: "https://instagram.com/coldplay",
      twitter: "https://twitter.com/coldplay"
    }
  },
  {
    name: "Travis Scott",
    bio: "American rapper, singer, songwriter, and record producer. Known for his distinctive auto-tuned vocal style and high-energy performances.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    genre: "Hip Hop, Trap, R&B",
    website: "https://www.travisscott.com",
    socialLinks: {
      instagram: "https://instagram.com/travisscott",
      twitter: "https://twitter.com/trvisXX"
    }
  },
  {
    name: "Billie Eilish",
    bio: "American singer and songwriter. Known for her distinctive vocal style and dark, introspective lyrics.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    genre: "Pop, Alternative, Electropop",
    website: "https://www.billieeilish.com",
    socialLinks: {
      instagram: "https://instagram.com/billieeilish",
      twitter: "https://twitter.com/billieeilish"
    }
  },
  {
    name: "Taylor Swift",
    bio: "American singer-songwriter. Known for her narrative songwriting and genre-spanning discography.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    genre: "Pop, Country, Folk",
    website: "https://www.taylorswift.com",
    socialLinks: {
      instagram: "https://instagram.com/taylorswift",
      twitter: "https://twitter.com/taylorswift13"
    }
  }
];

// Venue seed data
export const venueSeedData: (typeof venues.$inferInsert)[] = [
  {
    name: "Jawaharlal Nehru Stadium",
    address: "Lodhi Road, New Delhi, Delhi 110003",
    city: "New Delhi",
    country: "India",
    capacity: 60000,
    description: "Multi-purpose stadium known for hosting major sporting events and concerts.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "M. A. Chidambaram Stadium",
    address: "Chepauk, Chennai, Tamil Nadu 600005",
    city: "Chennai",
    country: "India",
    capacity: 50000,
    description: "Historic cricket stadium with excellent acoustics for concerts.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "NSCI Dome",
    address: "Worli, Mumbai, Maharashtra 400018",
    city: "Mumbai",
    country: "India",
    capacity: 8000,
    description: "Indoor arena perfect for intimate concerts and events.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "SoFi Stadium",
    address: "1000 S Prairie Ave, Inglewood, CA 90301",
    city: "Los Angeles",
    country: "USA",
    capacity: 70240,
    description: "State-of-the-art stadium with cutting-edge technology and design.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "Wembley Stadium",
    address: "London HA9 0WS, United Kingdom",
    city: "London",
    country: "UK",
    capacity: 90000,
    description: "Iconic stadium known for hosting major sporting and music events.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "Madison Square Garden",
    address: "4 Pennsylvania Plaza, New York, NY 10001",
    city: "New York",
    country: "USA",
    capacity: 20789,
    description: "The world's most famous arena, known as 'The World's Most Famous Arena'.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "O2 Arena",
    address: "Peninsula Square, London SE10 0DX, United Kingdom",
    city: "London",
    country: "UK",
    capacity: 20000,
    description: "Multi-purpose indoor arena located in the heart of London.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  },
  {
    name: "MetLife Stadium",
    address: "1 MetLife Stadium Dr, East Rutherford, NJ 07073",
    city: "East Rutherford",
    country: "USA",
    capacity: 82500,
    description: "Modern stadium with excellent facilities for large-scale events.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
  }
];

// Concert seed data (updated to use venueId and artistId)
export const concertSeedData: (typeof concerts.$inferInsert)[] = [
  {
    title: "A. R. Rahman – Symphony of Stars",
    description: "Experience the magic of A. R. Rahman performing his greatest hits with a full orchestra.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-10-15T19:00:00"),
    venueId: 1, // Jawaharlal Nehru Stadium
    artistId: 1, // A. R. Rahman
    ticketsOpen: new Date("2025-08-01T10:00:00"),
    ticketsClose: new Date("2025-10-14T23:59:59"),
    status: "upcoming"
  },
  {
    title: "A. R. Rahman – Classical Fusion Night",
    description: "A special evening of classical Indian music fused with contemporary arrangements.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-12-20T18:30:00"),
    venueId: 2, // M. A. Chidambaram Stadium
    artistId: 1, // A. R. Rahman
    ticketsOpen: new Date("2025-10-01T09:00:00"),
    ticketsClose: new Date("2025-12-19T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Anirudh Ravichander – Rockstar Nights",
    description: "An electrifying evening of Tamil and Telugu chartbusters with Anirudh.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    date: new Date("2025-11-05T19:30:00"),
    venueId: 2, // M. A. Chidambaram Stadium
    artistId: 2, // Anirudh Ravichander
    ticketsOpen: new Date("2025-08-20T09:00:00"),
    ticketsClose: new Date("2025-11-04T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Anirudh Ravichander – Electronic Beats",
    description: "A high-energy electronic music night featuring Anirudh's latest tracks.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    date: new Date("2026-01-15T21:00:00"),
    venueId: 3, // NSCI Dome
    artistId: 2, // Anirudh Ravichander
    ticketsOpen: new Date("2025-11-01T10:00:00"),
    ticketsClose: new Date("2026-01-14T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Arijit Singh – Soulful Evenings",
    description: "A night of romance and melody with the voice that defined a generation.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    date: new Date("2025-09-22T20:00:00"),
    venueId: 3, // NSCI Dome
    artistId: 3, // Arijit Singh
    ticketsOpen: new Date("2025-07-30T12:00:00"),
    ticketsClose: new Date("2025-09-21T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Arijit Singh – Unplugged Session",
    description: "An intimate acoustic performance featuring Arijit's most beloved songs.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    date: new Date("2025-11-28T19:00:00"),
    venueId: 3, // NSCI Dome
    artistId: 3, // Arijit Singh
    ticketsOpen: new Date("2025-09-15T11:00:00"),
    ticketsClose: new Date("2025-11-27T23:59:59"),
    status: "upcoming"
  },
  {
    title: "The Weeknd – After Hours Til Dawn Tour",
    description: "The Weeknd brings his global stadium tour with stunning visuals and hits.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-08-25T20:00:00"),
    venueId: 4, // SoFi Stadium
    artistId: 4, // The Weeknd
    ticketsOpen: new Date("2025-06-15T10:00:00"),
    ticketsClose: new Date("2025-08-24T23:59:59"),
    status: "upcoming"
  },
  {
    title: "The Weeknd – Starboy Experience",
    description: "A special performance featuring The Weeknd's greatest hits and new material.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2026-02-14T20:00:00"),
    venueId: 6, // Madison Square Garden
    artistId: 4, // The Weeknd
    ticketsOpen: new Date("2025-12-01T09:00:00"),
    ticketsClose: new Date("2026-02-13T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Coldplay – Music of the Spheres",
    description: "Coldplay returns with an immersive, colorful stadium experience.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-09-12T19:30:00"),
    venueId: 5, // Wembley Stadium
    artistId: 5, // Coldplay
    ticketsOpen: new Date("2025-06-20T09:00:00"),
    ticketsClose: new Date("2025-09-11T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Coldplay – Parachutes Anniversary",
    description: "Celebrating 25 years of Parachutes with a special acoustic performance.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2026-03-20T19:00:00"),
    venueId: 7, // O2 Arena
    artistId: 5, // Coldplay
    ticketsOpen: new Date("2025-12-15T10:00:00"),
    ticketsClose: new Date("2026-03-19T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Travis Scott – Utopia Tour",
    description: "High-energy rap and immersive stage design from Travis Scott.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-10-01T21:00:00"),
    venueId: 6, // Madison Square Garden
    artistId: 6, // Travis Scott
    ticketsOpen: new Date("2025-07-10T11:00:00"),
    ticketsClose: new Date("2025-09-30T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Travis Scott – Astroworld Reunion",
    description: "A special performance celebrating the legacy of Astroworld album.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2026-01-30T22:00:00"),
    venueId: 4, // SoFi Stadium
    artistId: 6, // Travis Scott
    ticketsOpen: new Date("2025-11-01T12:00:00"),
    ticketsClose: new Date("2026-01-29T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Billie Eilish – Happier Than Ever World Tour",
    description: "Billie Eilish performs her hauntingly beautiful tracks live.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-08-18T19:00:00"),
    venueId: 7, // O2 Arena
    artistId: 7, // Billie Eilish
    ticketsOpen: new Date("2025-06-05T10:00:00"),
    ticketsClose: new Date("2025-08-17T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Billie Eilish – Ocean Eyes Acoustic",
    description: "An intimate acoustic session featuring Billie's early works and fan favorites.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2026-02-28T20:00:00"),
    venueId: 3, // NSCI Dome
    artistId: 7, // Billie Eilish
    ticketsOpen: new Date("2025-12-20T09:00:00"),
    ticketsClose: new Date("2026-02-27T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Taylor Swift – The Eras Tour",
    description: "Taylor Swift takes fans through every era of her career in an epic show.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2025-12-02T18:00:00"),
    venueId: 8, // MetLife Stadium
    artistId: 8, // Taylor Swift
    ticketsOpen: new Date("2025-09-01T09:00:00"),
    ticketsClose: new Date("2025-12-01T23:59:59"),
    status: "upcoming"
  },
  {
    title: "Taylor Swift – Folklore & Evermore",
    description: "A special performance featuring songs from Folklore and Evermore albums.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    date: new Date("2026-03-15T19:30:00"),
    venueId: 5, // Wembley Stadium
    artistId: 8, // Taylor Swift
    ticketsOpen: new Date("2025-12-01T10:00:00"),
    ticketsClose: new Date("2026-03-14T23:59:59"),
    status: "upcoming"
  }
];

// Zone seed data
export const zoneSeedData: (typeof zones.$inferInsert)[] = [
  // A. R. Rahman – Symphony of Stars (Concert 1)
  {
    concertId: 1,
    name: "VIP Front Row",
    description: "Premium front row seats with exclusive access",
    capacity: 100,
    availableTickets: 100,
    soldTickets: 0,
    price: "15000.00",
    color: "#FFD700"
  },
  {
    concertId: 1,
    name: "Premium Seating",
    description: "Excellent view with premium amenities",
    capacity: 500,
    availableTickets: 500,
    soldTickets: 0,
    price: "8000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 1,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 2000,
    availableTickets: 2000,
    soldTickets: 0,
    price: "3000.00",
    color: "#4ECDC4"
  },
  {
    concertId: 1,
    name: "Economy Seating",
    description: "Affordable seating options",
    capacity: 3000,
    availableTickets: 3000,
    soldTickets: 0,
    price: "1500.00",
    color: "#95A5A6"
  },
  
  // A. R. Rahman – Classical Fusion Night (Concert 2)
  {
    concertId: 2,
    name: "VIP Experience",
    description: "Ultimate VIP experience with meet & greet",
    capacity: 80,
    availableTickets: 80,
    soldTickets: 0,
    price: "12000.00",
    color: "#FFD700"
  },
  {
    concertId: 2,
    name: "Premium Zone",
    description: "Premium seating with great acoustics",
    capacity: 400,
    availableTickets: 400,
    soldTickets: 0,
    price: "7000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 2,
    name: "General Zone",
    description: "Standard seating area",
    capacity: 1500,
    availableTickets: 1500,
    soldTickets: 0,
    price: "2500.00",
    color: "#4ECDC4"
  },
  
  // Anirudh Ravichander – Rockstar Nights (Concert 3)
  {
    concertId: 3,
    name: "VIP Experience",
    description: "Ultimate VIP experience with meet & greet",
    capacity: 50,
    availableTickets: 50,
    soldTickets: 0,
    price: "12000.00",
    color: "#FFD700"
  },
  {
    concertId: 3,
    name: "Premium Zone",
    description: "Premium seating with great acoustics",
    capacity: 300,
    availableTickets: 300,
    soldTickets: 0,
    price: "6000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 3,
    name: "General Zone",
    description: "Standard seating area",
    capacity: 1500,
    availableTickets: 1500,
    soldTickets: 0,
    price: "2500.00",
    color: "#4ECDC4"
  },
  
  // Anirudh Ravichander – Electronic Beats (Concert 4)
  {
    concertId: 4,
    name: "VIP Dance Floor",
    description: "Exclusive VIP area with premium sound system",
    capacity: 100,
    availableTickets: 100,
    soldTickets: 0,
    price: "10000.00",
    color: "#FFD700"
  },
  {
    concertId: 4,
    name: "Premium Standing",
    description: "Premium standing area with great view",
    capacity: 500,
    availableTickets: 500,
    soldTickets: 0,
    price: "5000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 4,
    name: "General Standing",
    description: "General standing area",
    capacity: 1000,
    availableTickets: 1000,
    soldTickets: 0,
    price: "2000.00",
    color: "#4ECDC4"
  },
  
  // Arijit Singh – Soulful Evenings (Concert 5)
  {
    concertId: 5,
    name: "VIP Front Row",
    description: "Premium front row seats with exclusive access",
    capacity: 80,
    availableTickets: 80,
    soldTickets: 0,
    price: "10000.00",
    color: "#FFD700"
  },
  {
    concertId: 5,
    name: "Premium Seating",
    description: "Excellent view with premium amenities",
    capacity: 400,
    availableTickets: 400,
    soldTickets: 0,
    price: "6000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 5,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 1200,
    availableTickets: 1200,
    soldTickets: 0,
    price: "2500.00",
    color: "#4ECDC4"
  },
  
  // Arijit Singh – Unplugged Session (Concert 6)
  {
    concertId: 6,
    name: "VIP Intimate",
    description: "Ultimate intimate VIP experience",
    capacity: 50,
    availableTickets: 50,
    soldTickets: 0,
    price: "15000.00",
    color: "#FFD700"
  },
  {
    concertId: 6,
    name: "Premium Seating",
    description: "Premium seating with great acoustics",
    capacity: 200,
    availableTickets: 200,
    soldTickets: 0,
    price: "8000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 6,
    name: "General Seating",
    description: "Standard seating area",
    capacity: 800,
    availableTickets: 800,
    soldTickets: 0,
    price: "3000.00",
    color: "#4ECDC4"
  },
  
  // The Weeknd – After Hours Til Dawn Tour (Concert 7)
  {
    concertId: 7,
    name: "VIP Experience",
    description: "Ultimate VIP experience with exclusive access",
    capacity: 200,
    availableTickets: 200,
    soldTickets: 0,
    price: "25000.00",
    color: "#FFD700"
  },
  {
    concertId: 7,
    name: "Premium Seating",
    description: "Premium seating with excellent view",
    capacity: 1000,
    availableTickets: 1000,
    soldTickets: 0,
    price: "12000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 7,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 3000,
    availableTickets: 3000,
    soldTickets: 0,
    price: "5000.00",
    color: "#4ECDC4"
  },
  {
    concertId: 7,
    name: "Economy Seating",
    description: "Affordable seating options",
    capacity: 5000,
    availableTickets: 5000,
    soldTickets: 0,
    price: "2500.00",
    color: "#95A5A6"
  },
  
  // The Weeknd – Starboy Experience (Concert 8)
  {
    concertId: 8,
    name: "VIP Front Row",
    description: "Premium front row seats with exclusive access",
    capacity: 150,
    availableTickets: 150,
    soldTickets: 0,
    price: "20000.00",
    color: "#FFD700"
  },
  {
    concertId: 8,
    name: "Premium Seating",
    description: "Premium seating with great view",
    capacity: 800,
    availableTickets: 800,
    soldTickets: 0,
    price: "10000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 8,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 2000,
    availableTickets: 2000,
    soldTickets: 0,
    price: "4000.00",
    color: "#4ECDC4"
  },
  
  // Coldplay – Music of the Spheres (Concert 9)
  {
    concertId: 9,
    name: "VIP Experience",
    description: "Ultimate VIP experience with exclusive access",
    capacity: 300,
    availableTickets: 300,
    soldTickets: 0,
    price: "30000.00",
    color: "#FFD700"
  },
  {
    concertId: 9,
    name: "Premium Seating",
    description: "Premium seating with excellent view",
    capacity: 1500,
    availableTickets: 1500,
    soldTickets: 0,
    price: "15000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 9,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 4000,
    availableTickets: 4000,
    soldTickets: 0,
    price: "6000.00",
    color: "#4ECDC4"
  },
  {
    concertId: 9,
    name: "Economy Seating",
    description: "Affordable seating options",
    capacity: 6000,
    availableTickets: 6000,
    soldTickets: 0,
    price: "3000.00",
    color: "#95A5A6"
  },
  
  // Coldplay – Parachutes Anniversary (Concert 10)
  {
    concertId: 10,
    name: "VIP Intimate",
    description: "Ultimate intimate VIP experience",
    capacity: 100,
    availableTickets: 100,
    soldTickets: 0,
    price: "25000.00",
    color: "#FFD700"
  },
  {
    concertId: 10,
    name: "Premium Seating",
    description: "Premium seating with great acoustics",
    capacity: 600,
    availableTickets: 600,
    soldTickets: 0,
    price: "12000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 10,
    name: "General Seating",
    description: "Standard seating area",
    capacity: 2000,
    availableTickets: 2000,
    soldTickets: 0,
    price: "5000.00",
    color: "#4ECDC4"
  },
  
  // Travis Scott – Utopia Tour (Concert 11)
  {
    concertId: 11,
    name: "VIP Experience",
    description: "Ultimate VIP experience with exclusive access",
    capacity: 100,
    availableTickets: 100,
    soldTickets: 0,
    price: "20000.00",
    color: "#FFD700"
  },
  {
    concertId: 11,
    name: "Premium Seating",
    description: "Premium seating with great view",
    capacity: 500,
    availableTickets: 500,
    soldTickets: 0,
    price: "10000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 11,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 1500,
    availableTickets: 1500,
    soldTickets: 0,
    price: "4000.00",
    color: "#4ECDC4"
  },
  
  // Travis Scott – Astroworld Reunion (Concert 12)
  {
    concertId: 12,
    name: "VIP Front Row",
    description: "Premium front row seats with exclusive access",
    capacity: 200,
    availableTickets: 200,
    soldTickets: 0,
    price: "25000.00",
    color: "#FFD700"
  },
  {
    concertId: 12,
    name: "Premium Seating",
    description: "Premium seating with excellent view",
    capacity: 1000,
    availableTickets: 1000,
    soldTickets: 0,
    price: "12000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 12,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 3000,
    availableTickets: 3000,
    soldTickets: 0,
    price: "5000.00",
    color: "#4ECDC4"
  },
  {
    concertId: 12,
    name: "Economy Seating",
    description: "Affordable seating options",
    capacity: 5000,
    availableTickets: 5000,
    soldTickets: 0,
    price: "2500.00",
    color: "#95A5A6"
  },
  
  // Billie Eilish – Happier Than Ever World Tour (Concert 13)
  {
    concertId: 13,
    name: "VIP Experience",
    description: "Ultimate VIP experience with exclusive access",
    capacity: 150,
    availableTickets: 150,
    soldTickets: 0,
    price: "18000.00",
    color: "#FFD700"
  },
  {
    concertId: 13,
    name: "Premium Seating",
    description: "Premium seating with great view",
    capacity: 800,
    availableTickets: 800,
    soldTickets: 0,
    price: "9000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 13,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 2000,
    availableTickets: 2000,
    soldTickets: 0,
    price: "4000.00",
    color: "#4ECDC4"
  },
  
  // Billie Eilish – Ocean Eyes Acoustic (Concert 14)
  {
    concertId: 14,
    name: "VIP Intimate",
    description: "Ultimate intimate VIP experience",
    capacity: 80,
    availableTickets: 80,
    soldTickets: 0,
    price: "20000.00",
    color: "#FFD700"
  },
  {
    concertId: 14,
    name: "Premium Seating",
    description: "Premium seating with great acoustics",
    capacity: 400,
    availableTickets: 400,
    soldTickets: 0,
    price: "10000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 14,
    name: "General Seating",
    description: "Standard seating area",
    capacity: 1000,
    availableTickets: 1000,
    soldTickets: 0,
    price: "4000.00",
    color: "#4ECDC4"
  },
  
  // Taylor Swift – The Eras Tour (Concert 15)
  {
    concertId: 15,
    name: "VIP Experience",
    description: "Ultimate VIP experience with exclusive access",
    capacity: 300,
    availableTickets: 300,
    soldTickets: 0,
    price: "35000.00",
    color: "#FFD700"
  },
  {
    concertId: 15,
    name: "Premium Seating",
    description: "Premium seating with excellent view",
    capacity: 1500,
    availableTickets: 1500,
    soldTickets: 0,
    price: "18000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 15,
    name: "General Admission",
    description: "Standard seating with good view",
    capacity: 4000,
    availableTickets: 4000,
    soldTickets: 0,
    price: "7000.00",
    color: "#4ECDC4"
  },
  {
    concertId: 15,
    name: "Economy Seating",
    description: "Affordable seating options",
    capacity: 6000,
    availableTickets: 6000,
    soldTickets: 0,
    price: "3500.00",
    color: "#95A5A6"
  },
  
  // Taylor Swift – Folklore & Evermore (Concert 16)
  {
    concertId: 16,
    name: "VIP Intimate",
    description: "Ultimate intimate VIP experience",
    capacity: 200,
    availableTickets: 200,
    soldTickets: 0,
    price: "30000.00",
    color: "#FFD700"
  },
  {
    concertId: 16,
    name: "Premium Seating",
    description: "Premium seating with great acoustics",
    capacity: 1000,
    availableTickets: 1000,
    soldTickets: 0,
    price: "15000.00",
    color: "#FF6B6B"
  },
  {
    concertId: 16,
    name: "General Seating",
    description: "Standard seating area",
    capacity: 3000,
    availableTickets: 3000,
    soldTickets: 0,
    price: "6000.00",
    color: "#4ECDC4"
  }
];

// Featured content seed data
export const featuredContentSeedData: (typeof featuredContent.$inferInsert)[] = [
  {
    type: "hero",
    title: "Experience Live Music Like Never Before",
    subtitle: "Get ready for the biggest concerts of 2025",
    description: "From legendary artists to rising stars, experience the magic of live music in world-class venues.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop",
    ctaText: "Explore Concerts",
    ctaUrl: "/concerts",
    isActive: true,
    priority: 1
  },
  {
    type: "spotlight",
    title: "A. R. Rahman – Symphony of Stars",
    subtitle: "October 15, 2025",
    description: "Don't miss this once-in-a-lifetime performance by the Oscar-winning composer.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    ctaText: "Get Tickets",
    ctaUrl: "/concerts/1",
    concertId: 1,
    isActive: true,
    priority: 2
  },
  {
    type: "promotion",
    title: "Early Bird Special",
    subtitle: "Save up to 30% on select concerts",
    description: "Book your tickets early and enjoy exclusive discounts on premium seating.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    ctaText: "View Offers",
    ctaUrl: "/offers",
    isActive: true,
    priority: 3
  }
];

export default {
  artists: artistSeedData,
  venues: venueSeedData,
  concerts: concertSeedData,
  zones: zoneSeedData,
  featuredContent: featuredContentSeedData
};