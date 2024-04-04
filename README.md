# Chat Application

This is a proof of concept (PoC) for a real-time chat application built with React, Zustand, and Tailwind CSS. It's designed to be responsive and work well on a variety of screen sizes, mobile version not yet implemented.

## Features

- Real-time chat functionality(with mock emulation)
- Responsive design
- Message length limit

## Tech Stack

- React for building the user interface
- Zustand for state management
- Tailwind CSS for styling

## Installation

To install the application, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/system-design-chat-poc.git`
2. Navigate to the project directory: `cd system-design-chat-poc.git`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`

The application will be available at `http://localhost:3000`.

## Testing

To run the tests, use the `npm test` command.

## WebSocket Server Implementation

The current `ChatProvider` is a mock implementation for demonstration purposes. To connect the application to a real WebSocket server, you'll need to replace the `sendMessage` function in `ChatProvider.tsx` with one that sends the message to the server.

```typescriptreact
import React, { useEffect, createContext, useContext } from 'react';
import { useStore } from './store';

const ws = new WebSocket('ws://localhost:8080');

type ChatContextType = {
  sendMessage: (msg: string) => void;
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC = ({ children }) => {
  const addMessage = useStore((state) => state.addMessage);

  useEffect(() => {
    ws.onmessage = (event) => {
      addMessage(event.data);
    };
  }, [addMessage]);

  const sendMessage = (msg: string) => {
    ws.send(msg);
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