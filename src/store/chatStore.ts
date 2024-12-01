import { create } from 'zustand';
import { Message, Location } from '../types';
import { getDistance } from '../utils/location';

interface ChatStore {
  messages: Message[];
  userLocation: Location | null;
  range: number; // in kilometers
  setUserLocation: (location: Location) => void;
  addMessage: (content: string) => void;
  setRange: (range: number) => void;
  getNearbyMessages: () => Message[];
}

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  userLocation: null,
  range: 5,

  setUserLocation: (location) => set({ userLocation: location }),

  addMessage: (content) => {
    const { userLocation } = get();
    if (!userLocation) return;

    const newMessage: Message = {
      id: crypto.randomUUID(),
      content,
      timestamp: Date.now(),
      location: userLocation,
    };

    set((state) => ({
      messages: [newMessage, ...state.messages].slice(0, 100), // Keep last 100 messages
    }));
  },

  setRange: (range) => set({ range }),

  getNearbyMessages: () => {
    const { messages, userLocation, range } = get();
    if (!userLocation) return [];

    return messages.filter((message) => {
      const distance = getDistance(userLocation, message.location);
      return distance <= range;
    });
  },
}));