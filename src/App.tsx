import React from 'react';
import { ChatProvider } from './Chat/ChatProvider';
import { ChatRoom } from './Chat/ChatRoom';

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <header className="App-header">
          <ChatRoom />
        </header>
      </div>
    </ChatProvider>
  );
}

export default App;