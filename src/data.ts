interface SportsCardDataType {
  teamImage: string;
  teamName: string;
  totalEvents: number;
  sport: string;
}

interface TicketDataType {
  ticketImage: string;
  ticketTitle: string;
  eventDate: {
    date: string;
    day: string;
    time: string;
  };
  address: string;
  buttonText: string;
}

export const SportsCardData: SportsCardDataType[] = [
  {
    teamImage: "/images/player-1.png",
    teamName: "Sacramento River Cats",
    totalEvents: 48,
    sport: "Baseball",
  },
  {
    teamImage: "/images/player-2.png",
    teamName: "Las Vegas Aviators",
    totalEvents: 48,
    sport: "Baseball",
  },
  {
    teamImage: "/images/player-3.png",
    teamName: "New jersey devils",
    totalEvents: 48,
    sport: "Baseball",
  },
  {
    teamImage: "/images/player-2.png",
    teamName: "Las Vegas Aviators",
    totalEvents: 48,
    sport: "Baseball",
  },
];

export const Ticketdata: TicketDataType[] = [
  {
    ticketImage: "/images/Ticket-1.png",
    ticketTitle: "Las Vegas Aviators",
    eventDate: {
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
    },
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection",
  },
  {
    ticketImage: "/images/Ticket-2.png",
    ticketTitle: "Sacramento River Cats",
    eventDate: {
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
    },
    address: "Sutter Health Park, Sacramento, California",
    buttonText: "Orange Collection",
  },
  {
    ticketImage: "/images/Ticket-1.png",
    ticketTitle: "Las Vegas Aviators",
    eventDate: {
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
    },
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection",
  },
  {
    ticketImage: "/images/Ticket-2.png",
    ticketTitle: "Sacramento River Cats",
    eventDate: {
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
    },
    address: "Sutter Health Park, Sacramento, California",
    buttonText: "Orange Collection",
  },
  {
    ticketImage: "/images/Ticket-1.png",
    ticketTitle: "Las Vegas Aviators",
    eventDate: {
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
    },
    address: "Las Vegas Ballpark, Las Vegas, Nevada",
    buttonText: "Take Flight Collection",
  },
  {
    ticketImage: "/images/Ticket-2.png",
    ticketTitle: "Sacramento River Cats",
    eventDate: {
      date: "OCT 15",
      day: "SUN",
      time: "4:30 PM",
    },
    address: "Sutter Health Park, Sacramento, California",
    buttonText: "Orange Collection",
  },
];
