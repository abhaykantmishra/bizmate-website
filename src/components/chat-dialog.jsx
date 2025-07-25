'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import axios from 'axios';


const chatbot_uri = process.env.NEXT_PUBLIC_CHATBOT_URI

const mockQa = [
  { question: "hello", answer: "Hi there! How can I help you today?" },
  { question: "how are you", answer: "I'm a bot, so I don't have feelings, but I'm ready to assist you!" },
  { question: "what is v0", answer: "v0 is Vercel's AI-powered assistant that helps you write code for your projects." },
  { question: "pricing", answer: "For pricing information, please visit our website's pricing page." },
  { question: "contact support", answer: "You can contact our support team via email at support@example.com or call us at 1-800-123-4567." },
  { question: "features", answer: "Our product offers features like real-time collaboration, secure data storage, and intuitive user interface." },
  { question: "thank you", answer: "You're welcome! Is there anything else I can help you with?" },
];

export function ChatDialog({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newUserMessage = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');

    try {
      // bot response
      const res = await axios.post(chatbot_uri, {
        "message": input
      })
      console.log(res.data);
      const botMessage = {id:Date.now().toString(), text: res.data?.bot_response, sender: 'bot'};
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.log("Something went wrong!", "ERR: ", error)
      const botMessage = {id:Date.now().toString(), text: error?.message, sender: 'bot'};
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="overflow-y-auto fixed -bottom-20 -right-20 md:-bottom-45 md:-right-45 left-auto top-auto transform-none w-[300px] md:w-[400px] h-[450px] md:h-[550px] flex flex-col p-0"
      >
        <DialogHeader className="p-4 border-b sticky top-0 z-50 bg-white">
          <DialogTitle className="text-blue-600">Chat with us!</DialogTitle>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {
                messages.map((message) => (
                <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                    <div
                    className={`max-w-[70%] text-sm md:text-base p-3 rounded-lg ${
                        message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }
                    `}
                    >
                    {message.text}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <ScrollBar orientation='vertical' />
        </ScrollArea>

        <form onSubmit={handleSendMessage} className="flex p-4 border-t gap-2 border-b sticky bottom-0 z-50 bg-white">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 text-sm md:text-base"
            aria-label="Type your message"
          />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
            Send
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}