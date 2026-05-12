import React, { useState, useRef, useEffect } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

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
      {isOpen && (
        <div className="chat-card" style={cardStyle}>
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
                    ? 'linear-gradient(135deg, #7c3aed, #a78bfa)' 
                    : 'rgba(0, 0, 0, 0.05)',
                  color: msg.sender === 'user' ? '#fff' : '#000',
                  borderRadius: msg.sender === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && <div style={typingStyle}>Lumi is thinking...</div>}
            <div ref={chatEndRef} />
          </div>

          <div style={inputAreaStyle}>
            <input
              style={inputStyle}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything..."
            />
            <button onClick={handleSend} style={sendBtnStyle}>Send</button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          style={bubbleTriggerStyle}
        >
          ✨
        </button>
      )}

      {/* Mobile-specific adjustments */}
      <style>{`
        @media (max-width: 480px) {
          .chat-card {
            width: calc(100vw - 40px) !important;
            height: 70vh !important;
            bottom: 80px !important;
            right: 0px !important;
          }
        }
      `}</style>
    </div>
  );
}

// --- Styles ---

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 9999,
  fontFamily: 'Inter, sans-serif',
};

const bubbleTriggerStyle: React.CSSProperties = {
  width: '56px',
  height: '56px',
  borderRadius: '50%',
  border: 'none',
  background: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
  fontSize: '24px',
  cursor: 'pointer',
  boxShadow: '0 4px 20px rgba(124, 58, 237, 0.3)',
};

const cardStyle: React.CSSProperties = {
  width: '350px',
  height: '500px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '24px',
  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  border: '1px solid rgba(0,0,0,0.05)',
  marginBottom: '10px',
};

const headerStyle: React.CSSProperties = {
  padding: '16px 20px',
  background: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #f0f0f0',
};

const closeBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  padding: '5px',
};

const messageAreaStyle: React.CSSProperties = {
  flex: 1,
  padding: '20px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const bubbleBase: React.CSSProperties = {
  padding: '12px 16px',
  maxWidth: '85%',
  fontSize: '14px',
  lineHeight: '1.5',
};

const typingStyle: React.CSSProperties = {
  fontSize: '12px',
  color: '#999',
  marginLeft: '5px',
};

const inputAreaStyle: React.CSSProperties = {
  padding: '16px',
  display: 'flex',
  gap: '10px',
  background: '#fff',
  borderTop: '1px solid #f0f0f0',
};

const inputStyle: React.CSSProperties = {
  flex: 1,
  padding: '12px',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  outline: 'none',
  fontSize: '16px', // Prevents iOS auto-zoom
};

const sendBtnStyle: React.CSSProperties = {
  background: '#7c3aed',
  color: '#fff',
  border: 'none',
  padding: '0 16px',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: 600,
};