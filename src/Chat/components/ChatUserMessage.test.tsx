import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatUserMessage } from './ChatUserMessage';

describe('ChatUserMessage', () => {
  it('renders the correct message', () => {
    const testMessage = 'Test message';
    render(<ChatUserMessage message={testMessage} />);

    expect(screen.getByText(testMessage)).toBeInTheDocument();
  });
});