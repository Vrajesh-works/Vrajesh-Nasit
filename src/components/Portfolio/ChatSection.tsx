import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const ChatSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "👋 Hello! I'm John's AI assistant. I can tell you about his experience, projects, and skills. What would you like to know?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockResponses = [
    "John is a passionate full-stack developer with 5+ years of experience in React, Node.js, and cloud technologies.",
    "He has worked on various projects including e-commerce platforms, SaaS applications, and mobile apps.",
    "John specializes in building scalable web applications and has experience with AWS, Docker, and microservices architecture.",
    "He's currently available for freelance projects and full-time opportunities. Would you like to know more about his specific skills?",
    "John has a strong background in both frontend and backend development, with expertise in modern JavaScript frameworks and databases.",
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-border bg-card">
        <h1 className="text-2xl font-bold text-foreground">Chat with John's AI</h1>
        <p className="text-muted-foreground mt-1">Ask anything about my experience, projects, or skills</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'ai' && (
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-primary-foreground" />
              </div>
            )}
            
            <div className={`chat-message ${message.sender}`}>
              <p className="text-sm leading-relaxed">{message.content}</p>
              <div className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>

            {message.sender === 'user' && (
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 text-accent-foreground" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="chat-message ai">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 border-t border-border bg-card">
        <div className="flex gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about John's experience..."
            className="portfolio-input flex-1"
            disabled={isTyping}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="portfolio-button primary px-4"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;