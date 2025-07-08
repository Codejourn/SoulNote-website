import React, { useState } from 'react';
import { ArrowLeft, Sparkles, MessageCircle, Bot, Send, User } from 'lucide-react';

interface AIAssistantProps {
  onNavigateHome: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onNavigateHome }) => {
  const [message, setMessage] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection process
    setTimeout(() => {
      setIsConnecting(false);
      alert('AI Assistant will be available soon! Backend integration coming up.');
    }, 2000);
  };

  const sampleConversations = [
    {
      type: 'user',
      message: "I'm feeling anxious about work tomorrow"
    },
    {
      type: 'ai',
      message: "I understand that work anxiety can be overwhelming. Let's try some breathing exercises together. Would you like me to guide you through a 5-minute calming session?"
    },
    {
      type: 'user',
      message: "Yes, that would be helpful"
    },
    {
      type: 'ai',
      message: "Perfect! Let's start with the 4-7-8 breathing technique. Breathe in for 4 counts, hold for 7, and exhale for 8. I'll guide you through this step by step."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-500 to-indigo-600 p-6">
            <div className="flex items-center justify-between">
              <button
                onClick={onNavigateHome}
                className="flex items-center space-x-2 text-white hover:text-slate-100 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </button>
              <div className="flex items-center space-x-3">
                <Sparkles className="w-8 h-8 text-white" />
                <h1 className="text-2xl font-bold text-white">AI Mental Health Assistant</h1>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-slate-400 to-indigo-500 rounded-full mb-4">
                <Bot className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Your Personal AI Companion</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Get personalized mental health support, coping strategies, and mindfulness guidance 
                powered by advanced AI technology.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-indigo-50 rounded-xl p-6 text-center">
                <MessageCircle className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">24/7 Support</h3>
                <p className="text-slate-600 text-sm">Always available when you need someone to talk to</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <Sparkles className="w-8 h-8 text-slate-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Personalized Guidance</h3>
                <p className="text-slate-600 text-sm">Tailored advice based on your unique situation</p>
              </div>
              <div className="bg-violet-50 rounded-xl p-6 text-center">
                <Bot className="w-8 h-8 text-violet-600 mx-auto mb-3" />
                <h3 className="font-semibold text-slate-800 mb-2">Smart Insights</h3>
                <p className="text-slate-600 text-sm">AI-powered analysis of your mental health patterns</p>
              </div>
            </div>

            {/* Sample Conversation */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Sample Conversation</h3>
              <div className="space-y-4">
                {sampleConversations.map((conv, index) => (
                  <div key={index} className={`flex ${conv.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                      conv.type === 'user' 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-white text-slate-800 border border-slate-200'
                    }`}>
                      <div className="flex items-center space-x-2 mb-1">
                        {conv.type === 'user' ? (
                          <User className="w-4 h-4" />
                        ) : (
                          <Bot className="w-4 h-4" />
                        )}
                        <span className="text-sm font-medium">
                          {conv.type === 'user' ? 'You' : 'AI Assistant'}
                        </span>
                      </div>
                      <p className="text-sm">{conv.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Section */}
            <div className="bg-gradient-to-r from-slate-100 to-indigo-100 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-6">
                Connect with your AI mental health assistant and start your journey to better wellbeing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex-1 max-w-md">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleConnect}
                  disabled={isConnecting}
                  className="px-8 py-3 bg-gradient-to-r from-slate-500 to-indigo-600 text-white rounded-lg hover:from-slate-600 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2"
                >
                  {isConnecting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Connecting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Connect to AI</span>
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-sm text-slate-500 mt-4">
                AI Assistant integration coming soon! Backend setup in progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;