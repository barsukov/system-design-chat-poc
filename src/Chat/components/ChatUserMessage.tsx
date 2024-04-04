import React from 'react';

type ChatUserMessageProps = {
  message: string;
};

export const ChatUserMessage: React.FC<ChatUserMessageProps> = ({ message }) => {
  const isUserMessage = message && message.startsWith('You:');
  return (
    <div
      className={`${isUserMessage ? 'bg-slate-500' : 'bg-blue-500'} text-white rounded-lg p-2 mb-2`}
    >
      {message}
    </div>
  );
}; 