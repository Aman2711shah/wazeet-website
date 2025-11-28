import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatContext, generateEnhancedResponse, getDynamicSuggestions, exportConversation, copyMessage } from '../../utils/chatKnowledgeBase';
import './AIBusinessChat.css';

const INITIAL_MESSAGES = [
    {
        id: 1,
        type: 'bot',
        text: "Hello! 👋 I'm your AI Business Expert powered by comprehensive UAE business data. I can help you with:\n\n🏢 Freezone selection (all 52 UAE freezones)\n💰 Cost estimates and comparisons\n📋 Visa and residency guidance  \n🏦 Banking and setup process\n📊 Tax and compliance information\n💼 Investment opportunities\n\nWhat would you like to know?",
        timestamp: new Date()
    }
];

// Quick action categories
const QUICK_ACTIONS = [
    { id: 'freezone', label: '🏢 Freezones', icon: '🏢' },
    { id: 'tax', label: '📊 Tax Info', icon: '📊' },
    { id: 'visa', label: '✈️ Visas', icon: '✈️' },
    { id: 'cost', label: '💰 Costs', icon: '💰' },
    { id: 'banking', label: '🏦 Banking', icon: '🏦' },
    { id: 'setup', label: '🚀 Setup', icon: '🚀' }
];

const CATEGORY_QUICK_QUERIES = {
    freezone: "What are the best freezones for my business?",
    tax: "Explain UAE corporate tax and VAT",
    visa: "Tell me about Golden Visa requirements",
    cost: "How much does business setup cost?",
    banking: "How to open a corporate bank account?",
    setup: "Walk me through the business setup process"
};

export default function AIBusinessChat() {
    const [messages, setMessages] = useState(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [context] = useState(new ChatContext());
    const [suggestions, setSuggestions] = useState([]);
    const messagesEndRef = useRef(null);
    const [hoveredMessage, setHoveredMessage] = useState(null);

    const isFirstRender = useRef(true);

    const scrollToBottom = () => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    useEffect(() => {
        // Initialize with dynamic suggestions
        setSuggestions(getDynamicSuggestions(context));
    }, [context]);

    const handleSendMessage = async (text) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage = {
            id: Date.now(),
            type: 'user',
            text: text,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        context.addMessage('user', text);
        setInputValue('');
        setIsTyping(true);

        // Simulate realistic typing delay based on response length
        const response = generateEnhancedResponse(text, context);
        const typingDelay = Math.min(2000, 500 + response.text.length * 5);

        setTimeout(() => {
            const botMessage = {
                id: Date.now() + 1,
                type: 'bot',
                text: response.text,
                timestamp: new Date(),
                metadata: response
            };

            setMessages(prev => [...prev, botMessage]);
            context.addMessage('bot', response.text, response);
            setIsTyping(false);

            // Update suggestions based on response
            if (response.suggestions) {
                setSuggestions(response.suggestions);
            } else {
                setSuggestions(getDynamicSuggestions(context));
            }
        }, typingDelay);
    };

    const handleQuickAction = (actionId) => {
        const query = CATEGORY_QUICK_QUERIES[actionId];
        handleSendMessage(query);
    };

    const handleClearChat = () => {
        if (window.confirm('Clear all chat history?')) {
            setMessages(INITIAL_MESSAGES);
            context.clear();
            setSuggestions(getDynamicSuggestions(context));
        }
    };

    const handleExport = () => {
        exportConversation(messages);
    };

    const handleCopyMessage = (text) => {
        copyMessage(text);
        // Could show a toast notification here
    };

    return (
        <section id="chat" className="chat-section">
            <div className="chat-container">
                <div className="chat-header">
                    <div className="header-content">
                        <div className="header-title">
                            <h2>🤖 AI Business Expert</h2>
                            <span className="powered-by">Powered by UAE Business Data</span>
                        </div>
                        <p>Intelligent guidance using data from 52 freezones, 20+ guides, and comprehensive investment info</p>
                    </div>
                    <div className="header-actions">
                        <div className="status-indicator">
                            <span className="dot online"></span>
                            Online
                        </div>
                        <button className="icon-btn" onClick={handleExport} title="Export conversation">
                            📥
                        </button>
                        <button className="icon-btn" onClick={handleClearChat} title="Clear chat">
                            🗑️
                        </button>
                    </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="quick-actions">
                    {QUICK_ACTIONS.map(action => (
                        <button
                            key={action.id}
                            className="quick-action-btn"
                            onClick={() => handleQuickAction(action.id)}
                            disabled={isTyping}
                        >
                            <span className="action-icon">{action.icon}</span>
                            <span className="action-label">{action.label.split(' ')[1]}</span>
                        </button>
                    ))}
                </div>

                <div className="chat-interface">
                    <div className="messages-area">
                        <AnimatePresence>
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className={`message ${msg.type}`}
                                    onMouseEnter={() => setHoveredMessage(msg.id)}
                                    onMouseLeave={() => setHoveredMessage(null)}
                                >
                                    <div className="avatar">
                                        {msg.type === 'bot' ? (
                                            <span className="emoji-icon">🤖</span>
                                        ) : (
                                            <span className="emoji-icon">👤</span>
                                        )}
                                    </div>
                                    <div className="message-content">
                                        <div className="bubble">
                                            {msg.text.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    {i < msg.text.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        <div className="message-meta">
                                            <span className="timestamp">
                                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                            {hoveredMessage === msg.id && (
                                                <div className="message-actions">
                                                    <button
                                                        className="action-icon-btn"
                                                        onClick={() => handleCopyMessage(msg.text)}
                                                        title="Copy message"
                                                    >
                                                        📋
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="message bot typing-message"
                            >
                                <div className="avatar">
                                    <span className="emoji-icon">🤖</span>
                                </div>
                                <div className="message-content">
                                    <div className="bubble typing-bubble">
                                        <div className="typing-indicator">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                        <span className="typing-text">AI is thinking...</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Dynamic Suggestions */}
                    <div className="suggestions-area">
                        <div className="suggestions-label">💡 Suggested questions:</div>
                        <div className="suggestions-grid">
                            {suggestions.map((q, idx) => (
                                <button
                                    key={idx}
                                    className="suggestion-chip"
                                    onClick={() => handleSendMessage(q)}
                                    disabled={isTyping}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="input-area">
                        <input
                            type="text"
                            placeholder="Ask me anything about UAE business..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage(inputValue)}
                            disabled={isTyping}
                            className="chat-input"
                        />
                        <button
                            className="send-btn"
                            onClick={() => handleSendMessage(inputValue)}
                            disabled={!inputValue.trim() || isTyping}
                            title="Send message"
                        >
                            <span className="send-icon">📤</span>
                        </button>
                    </div>

                    {/* Message count footer */}
                    <div className="chat-footer">
                        <span className="message-count">{messages.length - 1} messages</span>
                        <span className="context-topic">
                            {context.currentTopic && `Topic: ${context.currentTopic}`}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
