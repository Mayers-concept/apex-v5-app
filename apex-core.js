// APEX_V5 Autonomous Intelligence - Full Knowledge System
const APEX_V5 = {
    // Complete Knowledge Database
    knowledge: {
        // Scientific concepts
        science: {
            'warburg effect': `The Warburg Effect is a phenomenon where cancer cells preferentially use glycolysis for energy production even when oxygen is available, rather than the more efficient oxidative phosphorylation used by normal cells. Discovered by Otto Warburg in 1924, this metabolic reprogramming produces only 2 ATP per glucose (vs 36 ATP normally) but provides rapid energy and building blocks for cell growth. This is why PET scans can detect tumors - they consume massive amounts of glucose.`,
            
            'quantum': `Quantum mechanics describes nature at the smallest scales. Key principles: 1) Superposition (particles exist in multiple states), 2) Entanglement (particles instantly affect each other regardless of distance), 3) Wave-particle duality (everything has both wave and particle properties), 4) Uncertainty principle (can't know position and momentum simultaneously).`,
            
            'relativity': `Einstein's theory has two parts: Special Relativity (1905) states that space and time are relative, nothing travels faster than light, and E=mc². General Relativity (1915) describes gravity as curved spacetime. Effects include time dilation (time slows near massive objects) and length contraction.`,
            
            'evolution': `Evolution by natural selection, discovered by Darwin, explains how species change over time. Organisms with beneficial traits survive and reproduce more, passing traits to offspring. Over millions of years, this creates new species. Evidence includes fossils, DNA similarities, and observable changes in organisms.`,
            
            'dna': `DNA (Deoxyribonucleic Acid) is the molecule carrying genetic instructions. It's a double helix made of nucleotides (A, T, G, C). Genes are DNA segments that code for proteins. Humans have ~3 billion base pairs and ~20,000 genes. DNA replication enables cell division and inheritance.`,
            
            'photosynthesis': `The process plants use to convert sunlight into chemical energy. Light reactions in chloroplasts split water (H₂O) and produce ATP and NADPH. The Calvin cycle then uses these to convert CO₂ into glucose (C₆H₁₂O₆). Overall: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂.`,
            
            'gravity': `The fundamental force of attraction between masses. Newton described it as F = G(m₁m₂)/r². Einstein showed it's actually curved spacetime. Gravity is the weakest fundamental force but has infinite range. It keeps planets in orbit, causes tides, and shapes the universe's structure.`,
            
            'atom': `The basic unit of matter, consisting of a nucleus (protons and neutrons) surrounded by electrons in shells. Protons determine the element, neutrons affect mass, electrons determine chemical behavior. Atoms are 99.99% empty space. They combine to form molecules through chemical bonds.`
        },
        
        // Technology concepts
        technology: {
            'ai': `Artificial Intelligence is computer systems performing tasks that typically require human intelligence. Machine Learning (subset of AI) learns from data. Deep Learning (subset of ML) uses neural networks. Current AI excels at pattern recognition, language processing, and game playing but lacks general intelligence.`,
            
            'blockchain': `A decentralized, immutable ledger technology. Data is stored in blocks, cryptographically linked in a chain. Each block contains transactions, timestamp, and hash of previous block. Consensus mechanisms (like Proof of Work) ensure agreement without central authority. Used in cryptocurrencies and smart contracts.`,
            
            'internet': `Global network of interconnected computers using TCP/IP protocols. Data travels as packets through routers. DNS translates domain names to IP addresses. HTTP/HTTPS enables web browsing. The Internet backbone consists of high-speed fiber optic cables, including undersea cables connecting continents.`,
            
            'encryption': `Process of encoding information so only authorized parties can read it. Symmetric encryption uses one key for both encryption/decryption (fast, like AES). Asymmetric uses public/private key pairs (secure, like RSA). Hashing creates one-way fixed-size outputs. Modern encryption protects online communications and data.`,
            
            'algorithm': `Step-by-step procedure for solving problems or performing tasks. Examples: sorting algorithms (QuickSort, MergeSort), search algorithms (Binary Search), pathfinding (Dijkstra's, A*). Complexity measured in Big O notation: O(1) constant, O(n) linear, O(n²) quadratic. Good algorithms balance speed and memory use.`,
            
            'database': `Organized collection of structured data. Relational databases (SQL) store data in tables with relationships. NoSQL databases handle unstructured data (document, key-value, graph). ACID properties ensure reliability. Indexing speeds queries. Modern apps often use multiple database types.`,
            
            'cloud': `Computing services delivered over the internet. IaaS provides infrastructure, PaaS provides platforms, SaaS provides software. Benefits: scalability, cost-efficiency, accessibility. Major providers: AWS, Azure, Google Cloud. Enables modern apps to handle millions of users without owning servers.`,
            
            'api': `Application Programming Interface - rules for software communication. REST APIs use HTTP methods (GET, POST, PUT, DELETE). GraphQL allows precise data queries. APIs enable integration between different services. Rate limiting prevents abuse. Authentication (OAuth, API keys) controls access.`
        },
        
        // Programming concepts
        programming: {
            'function': `Reusable block of code that performs specific task. Takes inputs (parameters), processes them, returns output. Benefits: code reuse, modularity, testing. Example:\n\`\`\`javascript\nfunction calculateArea(width, height) {\n  return width * height;\n}\nconst area = calculateArea(5, 10); // 50\n\`\`\``,
            
            'variable': `Named storage location for data. Types: primitives (number, string, boolean) and objects. Scope determines where accessible (global, function, block). Declaration: const (unchangeable), let (changeable), var (old style). Example:\n\`\`\`javascript\nlet count = 0;\nconst name = "APEX";\n\`\`\``,
            
            'loop': `Repeats code until condition met. Types: for (known iterations), while (condition-based), do-while (runs at least once), for...of (arrays), for...in (objects). Example:\n\`\`\`javascript\nfor (let i = 0; i < 5; i++) {\n  console.log(i); // 0,1,2,3,4\n}\n\`\`\``,
            
            'array': `Ordered collection of elements. Zero-indexed. Methods: push/pop (end), shift/unshift (beginning), map/filter/reduce (transformation). Example:\n\`\`\`javascript\nconst fruits = ['apple', 'banana'];\nfruits.push('orange');\nconst lengths = fruits.map(f => f.length);\n\`\`\``,
            
            'object': `Collection of key-value pairs. Access with dot notation or brackets. Can contain any data type including functions (methods). Example:\n\`\`\`javascript\nconst person = {\n  name: 'Alice',\n  age: 30,\n  greet() { return \`Hello, I'm \${this.name}\`; }\n};\n\`\`\``,
            
            'class': `Blueprint for creating objects. Contains constructor, properties, methods. Supports inheritance (extends), encapsulation (private fields), polymorphism. Example:\n\`\`\`javascript\nclass Car {\n  constructor(brand) {\n    this.brand = brand;\n  }\n  drive() { return 'Driving'; }\n}\n\`\`\``,
            
            'async': `Handles operations that take time without blocking. Promises represent future values. async/await makes async code look synchronous. Example:\n\`\`\`javascript\nasync function fetchData() {\n  const response = await fetch('/api/data');\n  return await response.json();\n}\n\`\`\``,
            
            'debugging': `Finding and fixing errors. Techniques: 1) Console.log for values, 2) Debugger/breakpoints to pause execution, 3) Browser DevTools Network/Console tabs, 4) Error stack traces show where failed, 5) Unit tests catch bugs early. Common bugs: null/undefined, off-by-one, async timing.`
        },
        
        // Math concepts
        mathematics: {
            'calculus': `Branch studying continuous change. Differential calculus finds rates of change (derivatives). Integral calculus finds accumulated quantities (integrals). Fundamental theorem connects them. Applications: physics, optimization, economics. Key: derivative of x^n is nx^(n-1), integral is x^(n+1)/(n+1).`,
            
            'algebra': `Studies mathematical symbols and rules for manipulating them. Solve for unknowns using equations. Linear equations: ax + b = c. Quadratic: ax² + bx + c = 0, solved with formula x = (-b ± √(b²-4ac))/2a. Systems of equations solved by substitution or elimination.`,
            
            'statistics': `Science of collecting, analyzing, interpreting data. Measures: mean (average), median (middle), mode (most frequent), standard deviation (spread). Probability: likelihood of events (0-1 or 0-100%). Normal distribution is bell curve. Correlation doesn't imply causation.`,
            
            'geometry': `Studies shapes, sizes, positions. 2D: circles (area=πr²), triangles (area=½bh), rectangles (area=lw). 3D: spheres (volume=4/3πr³), cubes (volume=s³). Pythagorean theorem: a²+b²=c². Angles in triangle sum to 180°. Pi (π≈3.14159) relates circle circumference to diameter.`,
            
            'prime': `Number divisible only by 1 and itself. First primes: 2,3,5,7,11,13,17,19,23,29. Fundamental theorem: every number is unique product of primes. Used in cryptography (RSA). Goldbach conjecture: every even number >2 is sum of two primes. Infinitely many primes exist.`,
            
            'fibonacci': `Sequence where each number is sum of previous two: 0,1,1,2,3,5,8,13,21,34... Appears in nature (spirals, flowers). Golden ratio φ=(1+√5)/2≈1.618 emerges from sequence. Formula: F(n) = F(n-1) + F(n-2). Applications in algorithms, art, architecture.`,
            
            'logarithm': `Inverse of exponentiation. If b^x = y, then log_b(y) = x. Common bases: 10 (log), e (ln), 2 (lg). Properties: log(ab) = log(a) + log(b), log(a^n) = n·log(a). Used in: complexity analysis, pH scale, decibels, compound interest.`,
            
            'matrix': `Rectangular array of numbers. Operations: addition, multiplication, transpose. Determinant measures scaling factor. Inverse undoes transformation. Used in: graphics (transformations), AI (neural networks), physics (quantum mechanics), economics (input-output models).`
        }
    },
    
    // Pattern matching system with real responses
    patterns: [
        // Greeting patterns
        {
            pattern: /^(hi|hello|hey|greetings|good\s+(morning|afternoon|evening)|sup|howdy)/i,
            handler: (input) => {
                const greetings = [
                    "Hello! I'm APEX_V5, ready to help you learn and solve problems. What interests you today?",
                    "Hi there! I can help with science, technology, programming, math, and more. What would you like to explore?",
                    "Greetings! I'm here to assist with explanations, calculations, coding, or any questions you have.",
                    "Hello! Whether you're a beginner or expert, I'm here to help. What's on your mind?"
                ];
                return greetings[Math.floor(Math.random() * greetings.length)];
            }
        },
        
        // Math calculations
        {
            pattern: /(\d+\.?\d*)\s*([\+\-\*\/\^%])\s*(\d+\.?\d*)/,
            handler: (input, match) => {
                const a = parseFloat(match[1]);
                const op = match[2];
                const b = parseFloat(match[3]);
                
                const operations = {
                    '+': { result: a + b, name: 'Addition' },
                    '-': { result: a - b, name: 'Subtraction' },
                    '*': { result: a * b, name: 'Multiplication' },
                    '/': { result: b !== 0 ? a / b : 'undefined', name: 'Division' },
                    '^': { result: Math.pow(a, b), name: 'Exponentiation' },
                    '%': { result: a % b, name: 'Modulo' }
                };
                
                const calc = operations[op];
                if (calc.result === 'undefined') {
                    return `**Division by Zero Error**\n\nYou attempted to calculate ${a} ÷ 0, which is mathematically undefined.\n\n**Why?** Division means "how many groups of size b fit into a?" With b=0, we're asking "how many groups of nothing fit into something?" - which has no meaningful answer.\n\n**In limits:** As divisor approaches 0, result approaches ±infinity depending on direction.`;
                }
                
                return `**Calculation Result**\n\n${a} ${op} ${b} = **${calc.result}**\n\n**Operation:** ${calc.name}\n**Decimal:** ${calc.result}\n**Scientific:** ${calc.result.toExponential(4)}\n\n${
                    calc.name === 'Exponentiation' ? `**Note:** This is ${a} multiplied by itself ${b} times.` :
                    calc.name === 'Modulo' ? `**Note:** This is the remainder when ${a} is divided by ${b}.` :
                    calc.name === 'Division' ? `**Fraction:** ${a}/${b}${b !== 0 ? ` ≈ ${(a/b).toFixed(6)}` : ''}` :
                    `**Verification:** Inverse operation gives ${op === '+' ? calc.result - b : op === '-' ? calc.result + b : op === '*' ? calc.result / b : a}`
                }`;
            }
        },
        
        // "What is" questions - searches knowledge base
        {
            pattern: /(?:what\s+is|what's|whats|explain|describe|tell\s+me\s+about|define)\s+(?:the\s+)?(.+?)(?:\?|$)/i,
            handler: (input, match) => {
                const topic = match[1].toLowerCase().trim();
                
                // Search all knowledge categories
                for (let category of Object.values(APEX_V5.knowledge)) {
                    // Check for exact matches
                    if (category[topic]) {
                        return `**${topic.charAt(0).toUpperCase() + topic.slice(1)}**\n\n${category[topic]}\n\n**Want to know more?** Ask about specific aspects or related concepts!`;
                    }
                    
                    // Check for partial matches
                    for (let [key, value] of Object.entries(category)) {
                        if (topic.includes(key) || key.includes(topic)) {
                            return `**${key.charAt(0).toUpperCase() + key.slice(1)}**\n\n${value}\n\n**Related topics** you might find interesting: Let me know what aspect you'd like to explore deeper!`;
                        }
                    }
                }
                
                // If not found, provide intelligent response
                return `**${topic.charAt(0).toUpperCase() + topic.slice(1)}**\n\nWhile I don't have specific information about "${topic}" in my current knowledge base, I can help you understand it through related concepts:\n\n**How to learn about this:**\n1. **Break it down:** What field does this belong to? (Science, Tech, Math, etc.)\n2. **Core concepts:** What fundamental ideas relate to this?\n3. **Applications:** How is this used in practice?\n4. **Resources:** Where can you learn more?\n\n**I can help with:**\n• Related concepts I do know\n• Learning strategies\n• Breaking down complex ideas\n• Finding patterns and connections\n\nTry asking about a specific aspect or related topic!`;
            }
        },
        
        // How to questions
        {
            pattern: /(?:how\s+(?:do|can|to|does)|teach|learn|tutorial|guide|show\s+me)\s+(.+?)(?:\?|$)/i,
            handler: (input, match) => {
                const topic = match[1].toLowerCase().trim();
                
                // Programming how-tos
                if (topic.includes('function') || topic.includes('code') || topic.includes('program')) {
                    return APEX_V5.knowledge.programming['function'] + `\n\n**Next Steps:**\n1. Try writing a simple function\n2. Add parameters\n3. Return values\n4. Test with different inputs\n\nNeed a specific example? Just ask!`;
                }
                
                if (topic.includes('loop') || topic.includes('iterate') || topic.includes('repeat')) {
                    return APEX_V5.knowledge.programming['loop'] + `\n\n**Practice Challenge:** Try writing a loop that prints numbers 1-10!`;
                }
                
                if (topic.includes('debug') || topic.includes('fix') || topic.includes('error')) {
                    return APEX_V5.knowledge.programming['debugging'] + `\n\n**Pro tip:** Start with console.log() to understand what your code is actually doing!`;
                }
                
                // General how-to response
                return `**How to ${topic.charAt(0).toUpperCase() + topic.slice(1)}**\n\n**Step-by-Step Approach:**\n\n**1. Understand the Goal**\n   • What exactly do you want to achieve?\n   • What does success look like?\n\n**2. Break It Down**\n   • Identify the main components\n   • List required skills/tools\n   • Find the simplest starting point\n\n**3. Learn the Basics**\n   • Core concepts you need\n   • Common patterns to recognize\n   • Best practices to follow\n\n**4. Practice**\n   • Start with simple examples\n   • Gradually increase complexity\n   • Learn from mistakes\n\n**5. Apply & Iterate**\n   • Use what you've learned\n   • Get feedback\n   • Improve continuously\n\n**Specific to "${topic}":** Tell me more about your experience level and goals, and I'll provide targeted guidance!`;
            }
        },
        
        // Help/capabilities
        {
            pattern: /(?:help|what\s+can\s+you|capabilities|features|commands|menu)/i,
            handler: () => {
                return `**APEX_V5 Capabilities**\n\n**🧮 Mathematics**\n• Calculations: \`123 + 456\`, \`18 * 37\`, \`2 ^ 10\`\n• Explanations: "What is calculus?", "Explain prime numbers"\n\n**💻 Programming**\n• Concepts: "What is a function?", "How do loops work?"\n• Debugging: "How to debug code?"\n• Languages: JavaScript, Python, and more\n\n**🔬 Science**\n• Physics: "Explain relativity", "What is quantum mechanics?"\n• Biology: "What is DNA?", "Explain evolution"\n• Chemistry: "What is the Warburg effect?"\n\n**🎓 Learning**\n• Tutorials: "Teach me programming", "How to learn math"\n• Explanations: "Explain [any topic]"\n• Step-by-step guides\n\n**💡 Problem Solving**\n• Analysis: "Analyze this problem..."\n• Solutions: "How to solve..."\n• Creative thinking: "Create a plan for..."\n\n**Example Commands:**\n• "Calculate 15 * 23"\n• "What is blockchain?"\n• "How to write a function?"\n• "Explain the Warburg effect"\n• "I'm a beginner in coding"\n\nWhat would you like help with?`;
            }
        },
        
        // Experience level
        {
            pattern: /(?:i'm\s+a?|i\s+am\s+a?|experience[\s:]+|level[\s:]+)?\s*(beginner|novice|intermediate|advanced|expert|new|starting|learning)/i,
            handler: (input, match) => {
                const level = match[1].toLowerCase();
                const responses = {
                    'beginner': `**Welcome, Beginner! 🌱**\n\nPerfect! I'll adjust my teaching style for you:\n\n**What this means:**\n• **Clear explanations** without jargon\n• **Step-by-step** breakdowns\n• **Lots of examples** to illustrate concepts\n• **Encouragement** at every step\n• **No assumption** of prior knowledge\n\n**Great starting points:**\n• "What is programming?"\n• "Explain variables simply"\n• "How do I start learning code?"\n• "What are the basics of [topic]?"\n\n**Remember:** Everyone starts as a beginner. The key is curiosity and practice!\n\nWhat would you like to learn first?`,
                    
                    'intermediate': `**Intermediate Level - Let's Level Up! 📈**\n\nGreat! You have the basics down. Now we can:\n\n**Focus Areas:**\n• **Deeper concepts** with more detail\n• **Best practices** and conventions\n• **Common patterns** and solutions\n• **Performance** considerations\n• **Real-world applications**\n\n**Try asking about:**\n• "Advanced features of [language]"\n• "Optimize this code..."\n• "Design patterns for..."\n• "Compare X vs Y approach"\n\n**Challenge yourself** with complex problems while building on your foundation!\n\nWhat area would you like to strengthen?`,
                    
                    'advanced': `**Advanced Mode Activated! 🚀**\n\nExcellent! Let's dive deep:\n\n**We can explore:**\n• **Complex architectures** and system design\n• **Performance optimization** and scaling\n• **Edge cases** and unusual scenarios\n• **Cutting-edge techniques**\n• **Industry best practices**\n• **Advanced algorithms** and data structures\n\n**Topics to explore:**\n• "Implement distributed systems"\n• "Optimize for millions of users"\n• "Advanced algorithmic complexity"\n• "Architecture patterns at scale"\n\n**No hand-holding** - straight to the sophisticated stuff!\n\nWhat complex challenge are you tackling?`,
                    
                    'new': `**Welcome Newcomer! 🎯**\n\nEveryone starts somewhere, and you've taken the first step!\n\n**My approach for you:**\n• **Gentle introduction** to concepts\n• **No pressure** - learn at your pace\n• **Celebrate small wins**\n• **Build confidence** gradually\n• **Fun examples** to keep interest\n\n**Perfect first questions:**\n• "What should I learn first?"\n• "Explain [topic] like I'm five"\n• "Show me a simple example"\n• "What are the basics?"\n\n**Remember:** The expert in anything was once a beginner!\n\nWhat sparks your curiosity?`
                };
                
                return responses[level] || responses['beginner'];
            }
        },
        
        // Thanks
        {
            pattern: /(?:thank|thanks|ty|thx|appreciate|helpful|awesome|great|good job|nice|cool)/i,
            handler: () => {
                const responses = [
                    "You're welcome! Happy to help. What else would you like to explore?",
                    "My pleasure! Learning together is what I enjoy most. What's next?",
                    "Glad I could help! Feel free to ask anything else.",
                    "Thank you! Your curiosity makes teaching rewarding. What shall we tackle next?",
                    "Awesome! Keep the questions coming - I'm here to help you grow!"
                ];
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    ],
    
    // Intent analyzer
    λ: function(input) {
        // Check patterns first
        for (let p of this.patterns) {
            const match = input.match(p.pattern);
            if (match) {
                return {
                    type: 'pattern',
                    handler: p.handler,
                    match: match
                };
            }
        }
        
        // Fallback intent detection
        const lower = input.toLowerCase();
        if (lower.includes('?')) return { type: 'question' };
        if (lower.length < 20) return { type: 'short' };
        return { type: 'general' };
    },
    
    // Complexity scanner
    Ψ: {
        scan: function(input) {
            const factors = {
                length: input.length,
                words: input.split(/\s+/).length,
                technical: (input.match(/[A-Z][a-z]+/g) || []).length,
                symbols: (input.match(/[^a-zA-Z0-9\s]/g) || []).length
            };
            
            const score = (factors.length * 0.01 + factors.words * 0.1 + 
                          factors.technical * 0.05 + factors.symbols * 0.02) / 5;
            
            if (score < 0.3) return "α";
            if (score < 0.6) return "β";
            if (score < 0.9) return "Ω";
            return "Ψ";
        },
        
        σ: new Map(),
        context: []
    },
    
    // Main solver
    solve: function(input) {
        try {
            input = input.trim();
            if (!input) return { 
                mode: "α", 
                response: "I'm ready to help! Ask me anything about science, technology, programming, or math." 
            };
            
            // Get intent
            const intent = this.λ(input);
            const mode = this.Ψ.scan(input);
            
            let response;
            
            // Handle pattern matches
            if (intent.type === 'pattern' && intent.handler) {
                response = intent.handler(input, intent.match);
            } else {
                // Fallback responses for unmatched inputs
                const fallbacks = {
                    'question': `Interesting question: "${input}"\n\nWhile I need more context to give a specific answer, here's how we can approach it:\n\n1. **Clarify the topic area** - Is this about science, technology, programming, or math?\n2. **Define key terms** - What are the main concepts involved?\n3. **Break it down** - What smaller questions make up this larger one?\n\nTry rephrasing or asking about a specific aspect!`,
                    
                    'short': `"${input}" - Let me help you with that!\n\nFor better assistance, try:\n• Adding more detail\n• Asking a specific question\n• Saying "explain [topic]"\n• Requesting "help with [subject]"\n\nOr just ask "What can you do?" to see my capabilities!`,
                    
                    'general': `Regarding "${input.substring(0, 50)}${input.length > 50 ? '...' : ''}"\n\nI understand you're interested in this topic. To provide the most helpful response:\n\n• Ask a specific question about it\n• Request an explanation of a particular aspect\n• Tell me your experience level\n• Specify what kind of help you need\n\nI'm here to help you learn and solve problems!`
                };
                
                response = fallbacks[intent.type] || fallbacks['general'];
            }
            
            // Store context
            this.Ψ.context.push({input, response, time: Date.now()});
            if (this.Ψ.context.length > 10) this.Ψ.context.shift();
            
            return { mode, response };
            
        } catch (error) {
            return {
                mode: "α",
                response: `Let me recalibrate and help you better. Your input: "${input}"\n\nTry asking:\n• A specific question\n• For an explanation\n• About a calculation\n• For help with a topic\n\nI'm here to assist!`
            };
        }
    }
};

// Make globally available
window.APEX_V5 = APEX_V5;

// Test on load
console.log('APEX_V5 Ready - Test: "What is the Warburg effect?"');
console.log(APEX_V5.solve('What is the Warburg effect?').response);
