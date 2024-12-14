import React, { useState, useEffect, useRef } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import TypingIndicator from "@/components/TypingIndicator";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  content: string;
  isAi: boolean;
}

const INITIAL_MESSAGE = "Hello! I'm Aedin, your AI companion. I learn and grow with every interaction. How can I assist you today?";

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    { content: INITIAL_MESSAGE, isAi: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAiResponse = async (userMessage: string) => {
    // Simulate AI thinking time
    setIsTyping(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For now, we'll use a simple response system
    const responses = [
      "That's an interesting perspective. Could you tell me more about it?",
      "I understand what you're saying. Let me think about that for a moment...",
      "Based on our conversation, I think we could explore this topic further.",
      "That's a great question! Let me share my thoughts on that.",
      "I'm learning from our interaction. Could you elaborate on that point?"
    ];
    
    const response = responses[Math.floor(Math.random() * responses.length)];
    setIsTyping(false);
    
    setMessages(prev => [...prev, { content: response, isAi: true }]);
    
    console.log("AI responded to:", userMessage);
    console.log("Generated response:", response);
  };

  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { content: message, isAi: false }]);
    console.log("User sent message:", message);
    
    // Generate AI response
    await generateAiResponse(message);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <header className="bg-primary text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Chat with Aedin</h1>
      </header>
      
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-3xl mx-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              content={message.content}
              isAi={message.isAi}
            />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </main>
      
      <footer className="bg-white">
        <div className="max-w-3xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </footer>
    </div>
  );
};

export default Index;