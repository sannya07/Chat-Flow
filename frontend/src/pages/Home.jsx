import React, { useState, useEffect } from 'react';
import { Github, MessageCircle, Send, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  // State to track which message to show in the demo chat
  // This creates the animated typing effect
  const [currentMessage, setCurrentMessage] = useState(0);
  
  // State to track which FAQ items are open/closed
  // We use an array to store the index of open FAQs
  const [openFAQs, setOpenFAQs] = useState([]);

  // Sample conversation data for the chat demo
  // Each message has text, sender name, time, and whether it's from the user
  const mockMessages = [
    { 
      text: "Hey! How's your day going? 😊", 
      sender: "Sarah", 
      time: "2:30 PM", 
      isUser: false  // This means it's from the other person, not the user
    },
    { 
      text: "Pretty good! Just finished work. What about you?", 
      sender: "You", 
      time: "2:32 PM", 
      isUser: true   // This is from the user
    },
    { 
      text: "Same here! Want to grab coffee later?", 
      sender: "Sarah", 
      time: "2:33 PM", 
      isUser: false 
    },
    { 
      text: "Sounds perfect! See you at 5?", 
      sender: "You", 
      time: "2:35 PM", 
      isUser: true 
    }
  ];

  // This effect runs when the component loads and creates the animation
  // It cycles through messages every 2.5 seconds to show a conversation happening
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessage((previousMessage) => {
        // When we reach the last message, go back to the first one
        // The % operator gives us the remainder, creating a loop
        return (previousMessage + 1) % mockMessages.length;
      });
    }, 2500); // Change message every 2500ms (2.5 seconds)
    
    // Cleanup function: stop the timer when component unmounts
    // This prevents memory leaks
    return () => clearInterval(messageTimer);
  }, []); // Empty dependency array means this only runs once when component mounts

  // Function to toggle FAQ open/closed state
  // This handles clicking on FAQ questions to expand/collapse them
  const toggleFAQ = (index) => {
    setOpenFAQs(currentOpenFAQs => {
      // Check if this FAQ is already open
      if (currentOpenFAQs.includes(index)) {
        // If it's open, remove it from the array (close it)
        return currentOpenFAQs.filter(faqIndex => faqIndex !== index);
      } else {
        // If it's closed, add it to the array (open it)
        return [...currentOpenFAQs, index];
      }
    });
  };

  // FAQ data - keeping it organized and easy to modify
  const faqs = [
    {
      question: "Is ChatFlow free to use?",
      answer: "Yes! ChatFlow is completely free with unlimited messaging. We also offer premium features for enhanced experience."
    },
    {
      question: "How secure are my conversations?",
      answer: "All messages are encrypted end-to-end. We never store or read your private conversations."
    },
    {
      question: "Can I use ChatFlow on mobile?",
      answer: "Absolutely! ChatFlow works seamlessly on all devices - desktop, mobile, and tablet."
    },
    {
      question: "How do I invite friends?",
      answer: "Simply share your unique ChatFlow link or search for friends by their username."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      
      {/* TOP NAVIGATION BAR */}
      <nav className="bg-black text-white px-6 py-4 shadow-lg border-b" style={{ borderColor: '#222222' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo section on the left */}
          <div className="flex items-center space-x-2">
            <MessageCircle size={24} style={{ color: '#1DCD9F' }} />
            <span className="text-xl font-bold text-white">ChatFlow</span>
          </div>
          
          {/* Navigation links on the right */}
          <div className="flex items-center space-x-6">
            {/* GitHub link that opens in new tab */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            
            {/* Sign in button */}
            <button className="text-gray-300 hover:text-white transition-all duration-300">
              <Link to='/login'>Sign In</Link>
            </button>
            
            {/* Sign up button with background color */}
            <button 
              className="px-6 py-2 rounded-lg font-semibold transition-colors duration-300 shadow-lg"
              style={{ backgroundColor: '#1DCD9F', color: 'black' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#169976'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#1DCD9F'}
            >
            <Link to='/signup'>Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>

      {/* MAIN HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Grid layout: text on left, chat demo on right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Hero text and buttons */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Main headline */}
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Connect with
                <span className="block" style={{ color: '#1DCD9F' }}>Anyone, Anywhere</span>
              </h1>
              
              {/* Subtitle description */}
              <p className="text-xl text-gray-300 leading-relaxed">
                Experience seamless messaging with ChatFlow. Fast, secure, and beautifully simple. 
                Connect with friends, family, and colleagues like never before.
              </p>
            </div>
            
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg"
                style={{ backgroundColor: '#1DCD9F', color: 'black' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#169976'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1DCD9F'}
              >
                <Link to='/signup'>Get Started for Free</Link>
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Animated chat demo */}
          <div className="lg:pl-8">
            {/* Chat window container */}
            <div 
              className="rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto border"
              style={{ backgroundColor: '#222222', borderColor: '#1DCD9F' }}
            >
              
              {/* Chat header with user info */}
              <div 
                className="text-white p-4 flex items-center justify-between"
                style={{ backgroundColor: '#1DCD9F' }}
              >
                <div className="flex items-center space-x-3">
                  {/* User avatar (circular with initial) */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: '#169976' }}
                  >
                    <span className="text-sm font-bold text-white">S</span>
                  </div>
                  {/* User name and status */}
                  <div>
                    <div className="font-semibold text-black">Sarah Johnson</div>
                    <div className="text-xs text-gray-700">Online</div>
                  </div>
                </div>
                {/* Online indicator (pulsing green dot) */}
                <div 
                  className="w-3 h-3 rounded-full animate-pulse shadow-sm"
                  style={{ backgroundColor: '#169976' }}
                ></div>
              </div>

              {/* Chat messages area */}
              <div className="h-80 p-4 space-y-4 overflow-y-auto bg-black">
                {/* Show messages up to the current animated position */}
                {mockMessages.slice(0, currentMessage + 1).map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    {/* Message bubble */}
                    <div 
                      className={`max-w-xs px-4 py-2 rounded-2xl shadow-lg ${
                        message.isUser 
                          ? 'rounded-br-none'  // User messages
                          : 'rounded-bl-none'  // Other person
                      }`}
                      style={{
                        backgroundColor: message.isUser ? '#1DCD9F' : '#222222',
                        color: message.isUser ? 'black' : 'white',
                        border: message.isUser ? 'none' : '1px solid #1DCD9F'
                      }}
                    >
                      {/* Message text */}
                      <p className="text-sm">{message.text}</p>
                      {/* Timestamp */}
                      <p 
                        className="text-xs mt-1"
                        style={{ color: message.isUser ? '#169976' : '#1DCD9F' }}
                      >
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat input area at bottom */}
              <div 
                className="p-4 border-t"
                style={{ backgroundColor: '#222222', borderColor: '#1DCD9F' }}
              >
                <div 
                  className="flex items-center space-x-3 rounded-full px-4 py-2 border"
                  style={{ backgroundColor: 'black', borderColor: '#1DCD9F' }}
                >
                  {/* Text input (disabled since it's just for demo) */}
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 bg-transparent outline-none text-gray-300 placeholder-gray-500"
                    disabled
                  />
                  {/* Send button */}
                  <button 
                    className="text-black p-2 rounded-full transition-colors duration-300 shadow-lg"
                    style={{ backgroundColor: '#1DCD9F' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#169976'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#1DCD9F'}
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ SECTION */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Everything you need to know about ChatFlow
            </p>
          </div>

          {/* FAQ items */}
          <div className="space-y-4">
            {/* Loop through each FAQ item */}
            {faqs.map((faq, index) => {
              // Check if this FAQ is currently open
              const isOpen = openFAQs.includes(index);
              
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-2xl"
                  style={{ 
                    backgroundColor: '#222222', 
                    borderColor: '#1DCD9F',
                    boxShadow: isOpen ? '0 10px 25px rgba(29, 205, 159, 0.3)' : 'none'
                  }}
                >
                  {/* Clickable question header */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 flex items-center justify-between transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                    style={{ 
                      backgroundColor: isOpen ? 'black' : 'transparent',
                      focusRingColor: '#1DCD9F'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'black'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = isOpen ? 'black' : 'transparent'}
                  >
                    {/* Question text */}
                    <h3 className="text-xl font-semibold text-white pr-4">
                      {faq.question}
                    </h3>
                    {/* Chevron icon that rotates when open */}
                    <ChevronDown 
                      size={24}
                      className={`transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                      style={{ color: '#1DCD9F' }}
                    />
                  </button>
                  
                  {/* Answer section that slides down - only shows when isOpen is true */}
                  {isOpen && (
                    <div className="animate-slideDown">
                      <div className="px-6 pb-6 border-t" style={{ borderColor: '#1DCD9F' }}>
                        <p className="text-gray-300 leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t pt-6 text-center text-gray-400" style={{ borderColor: '#222222' }}>
            <p>&copy; 2025 ChatFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CUSTOM CSS STYLES */}
      <style jsx>{`
        /* Animation for messages appearing */
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        /* Animation for FAQ answers sliding down */
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 200px;
          }
        }
        
        /* Apply the fade-in animation */
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        
        /* Apply the slide-down animation */
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Home;