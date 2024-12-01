export interface Message {
  id: string;
  content: string;
  timestamp: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

export interface Location {
  latitude: number;
  longitude: number;
}