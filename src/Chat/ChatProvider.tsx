import React, { useEffect, createContext, useContext } from 'react';
import { useStore } from '../store';

type ChatContextType = {
  sendMessage: (msg: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const addMessage = useStore((state) => state.addMessage);

  useEffect(() => {
    // Simulate receiving a message from the server every 5 seconds, when ws server is there
    // you can replace all this with actual websocket code
    const interval = setInterval(() => {
      addMessage(`Test message ${Date.now()}`);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [addMessage]);

  const sendMessage = (msg: string) => {
    // Simulate sending a message to the server
    addMessage(`You: ${msg}`);
    console.log(`Sent message: ${msg}`);
  };

  return (
    <ChatContext.Provider value={{ sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

