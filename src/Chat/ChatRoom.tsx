import React, { useState } from 'react';
import { useStore } from './ChatStore';
import { useChat } from './ChatProvider';
import { ChatUserMessage } from './components/ChatUserMessage';

export const ChatRoom = () => {
  const messages = useStore((state) => state.messages);
  const { sendMessage } = useChat();
  const [input, setInput] = useState('');

  const handleSend = () => {
    sendMessage(input);
    setInput('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="hidden md:flex flex-col h-[30rem] lg:h-[40rem] min-w-[50ch] max-w-md mx-auto border-2 border-blue-500 rounded-lg p-4 bg-white">
        <h1 className="text-2xl font-bold mb-4 text-center">Chat Room</h1>
        <div className="overflow-auto mb-4 flex-grow">
          {messages.map((msg, index) => (
            <ChatUserMessage key={index} message={msg} />
          ))}
        </div>
        <div className="flex">
          <input
            className="flex-grow rounded-l-lg p-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message"
            maxLength={200}
          />
          <button
            className="bg-blue-500 text-white rounded-r-lg p-2"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
      <div className="md:hidden flex items-center justify-center text-center text-xl">
        We are not supporting mobile version yet.
      </div>
    </div>
  );
};