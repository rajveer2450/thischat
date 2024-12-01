import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { MessageCircle } from 'lucide-react';
import { useChatStore } from '../store/chatStore';

export const MessageList: React.FC = () => {
  const nearbyMessages = useChatStore((state) => state.getNearbyMessages());

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {nearbyMessages.map((message) => (
        <div
          key={message.id}
          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <MessageCircle className="w-5 h-5 text-blue-500" />
            </div>
            <div className="flex-1">
              <p className="text-gray-800">{message.content}</p>
              <p className="text-sm text-gray-500 mt-1">
                {formatDistanceToNow(message.timestamp, { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};