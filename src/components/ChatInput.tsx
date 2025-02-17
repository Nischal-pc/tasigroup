import React, { useState } from 'react';
import { Send, Download, Sparkles } from 'lucide-react';

const ChatInput = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This will be connected to Ollama later
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-0 left-64 right-0 p-6 bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
      <form onSubmit={handleSubmit} className="flex items-center space-x-3 max-w-5xl mx-auto">
        <div className="relative flex-1">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your query here..."
            className="w-full p-4 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />
          <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-3">
          <button 
            type="submit" 
            className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Send className="h-5 w-5" />
          </button>
          
          <button 
            type="button" 
            className="p-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <Download className="h-5 w-5" />
          </button>
          
          <button 
            type="button" 
            className="px-6 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 font-medium"
          >
            New Chat
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;