import { useState, useRef, useEffect } from 'react';
import { ArrowUp, Bot, User } from 'lucide-react';

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
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Delay scroll to ensure DOM is updated after state change
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100);
    return () => clearTimeout(timer);
  }, [messages, isTyping]);

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
    
    // Immediately scroll when user sends a message
    setTimeout(scrollToBottom, 50);

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

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 128) + 'px';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustTextareaHeight();
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  const suggestionChips = [
    "Project",
    "Experience", 
    "Tell me about yourself"
  ];

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 md:p-6 border-b border-border bg-gradient-hero">
        <h1 className="text-xl md:text-2xl font-bold text-foreground animate-fade-in">Chat with John's AI</h1>
        <p className="text-sm md:text-base text-muted-foreground mt-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Ask anything about my experience, projects, or skills
        </p>
      </div>

      {/* Messages */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 md:p-6 space-y-3 md:space-y-4"
        style={{ paddingBottom: '200px' }}
      >
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
        <div ref={messagesEndRef} className="h-4" />
      </div>

      {/* Fixed Input at Bottom */}
      <div className="fixed bottom-0 left-0 md:left-sidebar right-0 bg-background/95 backdrop-blur-sm border-t border-border">
        {/* Input */}
        <div className="p-3 md:p-4">
          <div className="flex gap-2 md:gap-3 items-end">
            <textarea
              ref={textareaRef}
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Ask me anything about John's experience..."
              className="portfolio-input flex-1 text-sm md:text-base resize-none min-h-[44px] max-h-32 overflow-hidden scrollbar-hide"
              disabled={isTyping}
              aria-label="Type your message to John's AI assistant"
              aria-describedby="chat-input-help"
              rows={1}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="portfolio-button primary px-3 md:px-4 h-[44px] flex-shrink-0"
              aria-label="Send message"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
          <p id="chat-input-help" className="text-xs text-muted-foreground mt-2 opacity-75">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
