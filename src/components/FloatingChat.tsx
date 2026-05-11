import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default  function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://sudharsan051006-lumi-ai.hf.space/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      // Adjust data.response based on your specific backend JSON structure
      const aiMsg: Message = { 
        sender: 'ai', 
        text: data.response || data.message || "I couldn't process that." 
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: 'ai', text: "Connection error." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={containerStyle}>
      {/* Expanded Chat Interface */}
      {isOpen && (
        <div style={cardStyle}>
          <div style={headerStyle}>
            <span style={{ fontWeight: 600 }}>Lumi AI</span>
            <button onClick={() => setIsOpen(false)} style={closeBtnStyle}>✕</button>
          </div>

          <div style={messageAreaStyle}>
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                style={{
                  ...bubbleBase,
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  background: msg.sender === 'user' 
                    ? 'linear-gradient(135deg, #6e8efb, #a777e3)' 
                    : 'rgba(255, 255, 255, 0.2)',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  borderRadius: msg.sender === 'user' ? '15px 15px 2px 15px' : '15px 15px 15px 2px',
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && <div style={typingStyle}>AI is thinking...</div>}
            <div ref={chatEndRef} />
          </div>

          <div style={inputAreaStyle}>
            <input
              style={inputStyle}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask Lumi..."
            />
            <button onClick={handleSend} style={sendBtnStyle}>Send</button>
          </div>
        </div>
      )}

      {/* Floating Bubble Trigger */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          style={bubbleTriggerStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          ✨
        </button>
      )}
    </div>
  );
}

// --- Styles ---

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '25px',
  right: '25px',
  zIndex: 1000,
  fontFamily: 'Inter, system-ui, sans-serif',
};

const bubbleTriggerStyle: React.CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  border: 'none',
  background: 'linear-gradient(135deg, #6e8efb, #a777e3)',
  fontSize: '24px',
  cursor: 'pointer',
  boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  transition: 'transform 0.2s ease',
};

const cardStyle: React.CSSProperties = {
  width: '320px',
  height: '450px',
  background: 'rgba(255, 255, 255, 0.7)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderRadius: '24px',
  boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  border: '1px solid rgba(255, 255, 255, 0.3)',
};

const headerStyle: React.CSSProperties = {
  padding: '16px',
  background: 'rgba(255, 255, 255, 0.2)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid rgba(0,0,0,0.05)',
};

const closeBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  opacity: 0.6,
};

const messageAreaStyle: React.CSSProperties = {
  flex: 1,
  padding: '16px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const bubbleBase: React.CSSProperties = {
  padding: '10px 14px',
  maxWidth: '85%',
  fontSize: '14px',
  lineHeight: '1.4',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
};

const typingStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#666',
  fontStyle: 'italic',
};

const inputAreaStyle: React.CSSProperties = {
  padding: '16px',
  display: 'flex',
  gap: '8px',
  borderTop: '1px solid rgba(0,0,0,0.05)',
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '10px',
  borderRadius: '12px',
  border: '1px solid rgba(0,0,0,0.1)',
  outline: 'none',
  fontSize: '14px',
};

const sendBtnStyle: React.CSSProperties = {
  background: '#000',
  color: '#fff',
  border: 'none',
  padding: '8px 12px',
  borderRadius: '10px',
  cursor: 'pointer',
  fontSize: '13px',
  fontWeight: 500,
};