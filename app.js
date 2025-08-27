// APEX_V5 App Interface - Production Version
class ApexApp {
    constructor() {
        this.messagesEl = document.getElementById('messages');
        this.inputEl = document.getElementById('user-input');
        this.sendBtn = document.getElementById('send-btn');
        this.modeEl = document.getElementById('current-mode');
        this.complexityEl = document.getElementById('complexity');
        this.contextEl = document.getElementById('context');
        this.memoryEl = document.getElementById('memory');
        this.typingEl = document.getElementById('typing-indicator');
        
        this.isProcessing = false;
        this.messageHistory = [];
        
        this.init();
    }
    
    init() {
        // Send button
        this.sendBtn.addEventListener('click', () => this.handleSend());
        
        // Enter key
        this.inputEl.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.handleSend();
            }
        });
        
        // Quick action buttons
        document.querySelectorAll('.quick-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.target.dataset.action;
                const prompts = {
                    explain: "Explain ",
                    solve: "Solve ",
                    create: "Create ",
                    analyze: "Analyze "
                };
                this.inputEl.value = prompts[action];
                this.inputEl.focus();
            });
        });
        
        // Auto-resize input on mobile
        this.inputEl.addEventListener('input', () => {
            this.updateStatus();
        });
        
        // Welcome message
        this.addMessage('apex', 
            '🚀 APEX_V5 Intelligence System Active\n\n' +
            'I adapt to your needs - from simple questions to complex problems.\n\n' +
            'Try asking me to:\n' +
            '• Explain concepts\n' +
            '• Solve problems\n' +
            '• Write code\n' +
            '• Analyze ideas\n' +
            '• Create content\n\n' +
            'What would you like to explore?',
            'α'
        );
        
        // Initialize status
        this.updateStatus();
        
        // Focus input
        setTimeout(() => this.inputEl.focus(), 100);
    }
    
    async handleSend() {
        const input = this.inputEl.value.trim();
        if (!input || this.isProcessing) return;
        
        this.isProcessing = true;
        
        // Add user message
        this.addMessage('user', input);
        
        // Clear input
        this.inputEl.value = '';
        
        // Show typing indicator
        this.showTyping(true);
        
        // Process with APEX_V5
        setTimeout(() => {
            const result = APEX_V5.solve(input);
            
            // Update mode indicator with animation
            this.updateMode(result.mode);
            
            // Hide typing and add response
            this.showTyping(false);
            this.addMessage('apex', result.response, result.mode);
            
            // Update status
            this.updateStatus();
            
            // Store in history
            this.messageHistory.push({input, response: result.response});
            
            this.isProcessing = false;
            
            // Focus back to input
            this.inputEl.focus();
            
        }, 600 + Math.random() * 400); // Realistic response time
    }
    
    addMessage(sender, text, mode = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        
        // Format timestamp
        const time = new Date().toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit'
        });
        
        // Process text formatting
        let formattedText = text
            .replace(/\n/g, '<br>')
            .replace(/•/g, '<span class="bullet">•</span>')
            .replace(/💡|📚|🔧|🎯|🚀|💻|📊|✅|🔍|⚡|🌌/g, '<span class="emoji">$&</span>')
            .replace(/`([^`]+)`/g, '<code>$1</code>');
        
        messageDiv.innerHTML = `
            <div class="message-header">
                <span class="message-sender">${sender === 'user' ? 'You' : 'APEX_V5'}</span>
                ${mode ? `<span class="message-mode">[${mode}]</span>` : ''}
                <span class="message-time">${time}</span>
            </div>
            <div class="message-content">${formattedText}</div>
        `;
        
        this.messagesEl.appendChild(messageDiv);
        
        // Smooth scroll to bottom
        requestAnimationFrame(() => {
            this.messagesEl.scrollTo({
                top: this.messagesEl.scrollHeight,
                behavior: 'smooth'
            });
        });
        
        // Animate entry
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateY(20px)';
        requestAnimationFrame(() => {
            messageDiv.style.transition = 'all 0.3s ease';
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        });
    }
    
    showTyping(show) {
        this.typingEl.style.display = show ? 'flex' : 'none';
        if (show) {
            this.messagesEl.scrollTo({
                top: this.messagesEl.scrollHeight,
                behavior: 'smooth'
            });
        }
    }
    
    updateMode(mode) {
        const modeEl = this.modeEl;
        const modeColors = {
            'α': '#00ff88',
            'β': '#0088ff',
            'Ω': '#ff00ff',
            'Ψ': '#ffaa00'
        };
        
        // Animate mode change
        modeEl.style.opacity = '0';
        setTimeout(() => {
            modeEl.textContent = mode;
            modeEl.style.color = modeColors[mode] || '#00ff88';
            modeEl.style.opacity = '1';
            
            // Pulse effect
            const pulse = document.querySelector('.mode-pulse');
            pulse.style.background = modeColors[mode];
            pulse.style.animation = 'none';
            requestAnimationFrame(() => {
                pulse.style.animation = 'pulse 1s ease';
            });
        }, 200);
    }
    
    updateStatus() {
        // Complexity indicator
        const input = this.inputEl.value || '';
        const complexity = APEX_V5.Ψ.scan(input);
        const complexityLabels = {
            'α': '◉ Simple',
            'β': '◉◉ Moderate',
            'Ω': '◉◉◉ Complex',
            'Ψ': '◉◉◉◉ Quantum'
        };
        this.complexityEl.textContent = complexityLabels[complexity];
        
        // Context indicator
        const contextSize = APEX_V5.Ψ.context.length;
        this.contextEl.textContent = contextSize > 0 ? 
            `◈ Context: ${contextSize}` : '◈ Ready';
        
        // Memory indicator
        const memorySize = APEX_V5.Ψ.σ.size;
        this.memoryEl.textContent = memorySize > 0 ? 
            `◊ Memory: ${memorySize}` : '◊ Active';
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new ApexApp();
    });
} else {
    window.app = new ApexApp();
}

// Handle PWA installation
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
}
