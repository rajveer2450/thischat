import React, { useEffect } from 'react';
import { MessageList } from './components/MessageList';
import { MessageInput } from './components/MessageInput';
import { RangeSelector } from './components/RangeSelector';
import { useChatStore } from './store/chatStore';
import { useCurrentLocation } from './utils/location';

function App() {
  const setUserLocation = useChatStore((state) => state.setUserLocation);

  useEffect(() => {
    const initLocation = async () => {
      try {
        const location = await useCurrentLocation();
        setUserLocation(location);
      } catch (error) {
        console.error('Error getting location:', error);
      }
    };

    initLocation();
  }, [setUserLocation]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto h-screen flex flex-col">
        <header className="bg-white p-4 shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800">Nearby Chat</h1>
          <p className="text-sm text-gray-600">
            Chat with people in your vicinity
          </p>
        </header>
        
        <RangeSelector />
        <MessageList />
        <MessageInput />
      </div>
    </div>
  );
}

export default App;