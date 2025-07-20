'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { ChatDialog } from './chat-dialog';

export function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-4 right-4 rounded-full w-14 h-14 flex items-center justify-center shadow-lg bg-blue-600 hover:bg-blue-700 text-white z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
      <ChatDialog isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
