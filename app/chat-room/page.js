'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // 新增使用者訊息
    const userMessage = {
      id: Date.now(),
      text: message,
      timestamp: new Date().toLocaleTimeString(),
      isUser: true
    };
    
    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // 發送請求到 AI API
      const response = await fetch('/chat-ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: message }),
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      
      // 新增 AI 回應
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: data.message,
        timestamp: new Date().toLocaleTimeString(),
        isUser: false
      }]);
    } catch (error) {
      console.error('Error:', error);
      // 可以在這裡加入錯誤提示
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-12">聊天室</h1>
      
      {/* Chat Messages Container */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8 h-[500px] overflow-y-auto">
        {messages.length === 0 ? (
          <p className="text-center text-gray-500">尚無對話內容</p>
        ) : (
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-4 ${
                  msg.isUser 
                    ? 'bg-green-50 text-right' 
                    : 'bg-gray-50'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <span className={`font-medium ${
                      msg.isUser ? 'text-green-600' : 'text-blue-600'
                    }`}>
                      {msg.isUser ? '我' : 'AI'}
                    </span>
                    <span className="text-sm text-gray-500 ml-4">{msg.timestamp}</span>
                  </div>
                  <p className="text-gray-700 break-words">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Input Form */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="輸入訊息..."
            disabled={isLoading}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center gap-2 disabled:bg-gray-400"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
            {isLoading ? '處理中...' : '送出'}
          </button>
        </form>
      </div>
    </div>
  );
} 