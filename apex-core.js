// APEX_V5 Ultimate Autonomous Intelligence
const APEX_V5 = {
    // Comprehensive Knowledge Base
    knowledge: {
        // Programming concepts (expanded)
        programming: {
            'polymorphism': `**Polymorphism** means "many forms" - the ability of different objects to respond to the same interface in their own way.\n\n**Types:**\n\n**1. Compile-time (Static)**\n• Method overloading - same name, different parameters\n• Operator overloading - operators work differently for different types\n\n**2. Runtime (Dynamic)**\n• Method overriding - child class provides specific implementation\n• Interface implementation - different classes implement same interface\n\n**Example:**\n\`\`\`javascript\n// Base class\nclass Animal {\n  makeSound() { return "Some sound"; }\n}\n\n// Polymorphic implementations\nclass Dog extends Animal {\n  makeSound() { return "Woof!"; }\n}\n\nclass Cat extends Animal {\n  makeSound() { return "Meow!"; }\n}\n\n// Same method, different behavior\nconst animals = [new Dog(), new Cat()];\nanimals.forEach(a => console.log(a.makeSound()));\n// Output: "Woof!" then "Meow!"\n\`\`\`\n\n**Benefits:**\n• Code reusability\n• Flexibility\n• Extensibility\n• Cleaner interfaces`,
            
            'inheritance': `**Inheritance** allows a class to inherit properties and methods from another class.\n\n**Example:**\n\`\`\`javascript\nclass Vehicle {\n  constructor(brand) {\n    this.brand = brand;\n  }\n  start() { return "Engine started"; }\n}\n\nclass Car extends Vehicle {\n  constructor(brand, model) {\n    super(brand); // Call parent constructor\n    this.model = model;\n  }\n  // Inherits start() method\n  // Add new method\n  honk() { return "Beep!"; }\n}\n\nconst myCar = new Car("Toyota", "Camry");\nconsole.log(myCar.start()); // Inherited\nconsole.log(myCar.honk());  // Own method\n\`\`\``,
            
            'encapsulation': `**Encapsulation** bundles data and methods together while hiding internal details.\n\n**Key Principles:**\n• Hide internal state\n• Provide public interface\n• Control access to data\n\n**Example:**\n\`\`\`javascript\nclass BankAccount {\n  #balance = 0; // Private field\n  \n  constructor(initial) {\n    this.#balance = initial;\n  }\n  \n  // Public methods control access\n  deposit(amount) {\n    if (amount > 0) {\n      this.#balance += amount;\n      return true;\n    }\n    return false;\n  }\n  \n  getBalance() {\n    return this.#balance; // Controlled access\n  }\n}\n\nconst account = new BankAccount(100);\naccount.deposit(50);  // OK\naccount.#balance = 1000000; // Error! Private\n\`\`\``,
            
            'abstraction': `**Abstraction** hides complex implementation details and shows only essential features.\n\n**Example:**\n\`\`\`javascript\n// Abstract the complexity\nclass EmailService {\n  send(to, subject, body) {\n    // Hide complex implementation\n    this.validateEmail(to);\n    this.formatMessage(subject, body);\n    this.connectToServer();\n    this.authenticate();\n    this.transmit();\n    return "Email sent!";\n  }\n  \n  // User doesn't need to know these details\n  validateEmail(email) { /* complex validation */ }\n  formatMessage(s, b) { /* MIME formatting */ }\n  connectToServer() { /* SMTP connection */ }\n  // ... etc\n}\n\n// Simple interface for user\nconst email = new EmailService();\nemail.send("user@example.com", "Hi", "Message");\n\`\`\``,
            
            'recursion': `**Recursion** is when a function calls itself to solve smaller instances of the same problem.\n\n**Key Parts:**\n• Base case - stops recursion\n• Recursive case - calls itself with modified input\n\n**Examples:**\n\`\`\`javascript\n// Factorial: n! = n × (n-1)!\nfunction factorial(n) {\n  if (n <= 1) return 1; // Base case\n  return n * factorial(n - 1); // Recursive case\n}\n\n// Fibonacci sequence\nfunction fib(n) {\n  if (n <= 1) return n;\n  return fib(n - 1) + fib(n - 2);\n}\n\n// Tree traversal\nfunction sumTree(node) {\n  if (!node) return 0;\n  return node.value + \n         sumTree(node.left) + \n         sumTree(node.right);\n}\n\`\`\`\n\n**When to use:** Tree/graph traversal, divide-and-conquer, backtracking`,
            
            'closure': `**Closure** is when a function retains access to variables from its outer scope even after the outer function returns.\n\n**Example:**\n\`\`\`javascript\nfunction createCounter() {\n  let count = 0; // Outer variable\n  \n  return function() {\n    count++; // Inner function accesses outer variable\n    return count;\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n// 'count' is preserved between calls!\n\n// Practical use: Private variables\nfunction createBank(initial) {\n  let balance = initial;\n  \n  return {\n    deposit: (amt) => balance += amt,\n    getBalance: () => balance\n  };\n}\n\`\`\`\n\n**Uses:** Data privacy, event handlers, callbacks, partial application`,
            
            'callback': `**Callback** is a function passed as an argument to another function, to be executed later.\n\n**Example:**\n\`\`\`javascript\n// Basic callback\nfunction greet(name, callback) {\n  const message = \`Hello, \${name}!\`;\n  callback(message);\n}\n\ngreet("Alice", (msg) => console.log(msg));\n\n// Async callback\nsetTimeout(() => {\n  console.log("Runs after 1 second");\n}, 1000);\n\n// Array methods use callbacks\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2);\n\n// Event handlers\nbutton.addEventListener('click', () => {\n  console.log('Button clicked!');\n});\n\`\`\`\n\n**Note:** Callbacks can lead to "callback hell" - use Promises/async-await for complex async operations`,
            
            'promise': `**Promise** represents a value that may be available now, in the future, or never.\n\n**States:**\n• Pending - initial state\n• Fulfilled - operation succeeded\n• Rejected - operation failed\n\n**Example:**\n\`\`\`javascript\n// Create a promise\nconst myPromise = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    const success = true;\n    if (success) {\n      resolve("Operation successful!");\n    } else {\n      reject("Operation failed!");\n    }\n  }, 1000);\n});\n\n// Use the promise\nmyPromise\n  .then(result => console.log(result))\n  .catch(error => console.error(error))\n  .finally(() => console.log("Cleanup"));\n\n// Async/await syntax\nasync function getData() {\n  try {\n    const result = await myPromise;\n    console.log(result);\n  } catch (error) {\n    console.error(error);\n  }\n}\n\`\`\``
        },
        
        // Additional topics
        concepts: {
            'oop': `**Object-Oriented Programming (OOP)** is a paradigm based on objects containing data and code.\n\n**Four Pillars:**\n1. **Encapsulation** - Bundling data and methods\n2. **Inheritance** - Classes inherit from others\n3. **Polymorphism** - Same interface, different implementations\n4. **Abstraction** - Hide complex details\n\n**Benefits:**\n• Modularity\n• Reusability\n• Scalability\n• Maintainability`,
            
            'mvc': `**Model-View-Controller (MVC)** is an architectural pattern separating concerns:\n\n**Model:** Data and business logic\n**View:** User interface/presentation\n**Controller:** Handles input, updates model and view\n\n**Flow:**\n1. User interacts with View\n2. Controller handles input\n3. Controller updates Model\n4. Model notifies View\n5. View updates display`,
            
            'rest': `**REST (Representational State Transfer)** is an architectural style for APIs.\n\n**Principles:**\n• Client-server separation\n• Stateless\n• Cacheable\n• Uniform interface\n\n**HTTP Methods:**\n• GET - Read data\n• POST - Create new\n• PUT - Update existing\n• DELETE - Remove\n• PATCH - Partial update`,
            
            'solid': `**SOLID Principles** for better object-oriented design:\n\n**S** - Single Responsibility: Class should have one reason to change\n**O** - Open/Closed: Open for extension, closed for modification\n**L** - Liskov Substitution: Subtypes must be substitutable\n**I** - Interface Segregation: Many specific interfaces better than one general\n**D** - Dependency Inversion: Depend on abstractions, not concretions`,
            
            'agile': `**Agile** is an iterative approach to software development.\n\n**Values:**\n• Individuals over processes\n• Working software over documentation\n• Customer collaboration over contracts\n• Responding to change over plans\n\n**Common Frameworks:**\n• Scrum - Sprints, daily standups\n• Kanban - Visual workflow\n• XP - Extreme Programming`
        }
    },
    
    // Enhanced pattern recognition
    detectIntent: function(input) {
        const lower = input.toLowerCase();
        
        // Direct topic extraction
        const keywords = [
            'polymorphism', 'inheritance', 'encapsulation', 'abstraction',
            'recursion', 'closure', 'callback', 'promise', 'async',
            'function', 'variable', 'loop', 'array', 'object', 'class',
            'oop', 'mvc', 'rest', 'api', 'solid', 'agile',
            'warburg', 'quantum', 'relativity', 'dna', 'evolution',
            'blockchain', 'ai', 'ml', 'algorithm', 'database',
            'calculate', 'solve', 'explain', 'what is', 'how to',
            'teach', 'learn', 'help', 'create', 'build', 'debug'
        ];
        
        // Find matching keyword
        for (let keyword of keywords) {
            if (lower.includes(keyword)) {
                return { type: 'keyword', topic: keyword };
            }
        }
        
        // Check for specific patterns
        if (/^(explain|describe|what is|tell me about|define)\s+(.+)/i.test(input)) {
            const match = input.match(/^(?:explain|describe|what is|tell me about|define)\s+(.+?)(?:\?|$)/i);
            if (match) {
                return { type: 'explain', topic: match[1].trim() };
            }
        }
        
        if (/^(provide|give|show|list)\s+(.+)/i.test(input)) {
            const match = input.match(/^(?:provide|give|show|list)\s+(.+?)(?:\?|$)/i);
            if (match) {
                return { type: 'provide', topic: match[1].trim() };
            }
        }
        
        // Math detection
        if (/\d+\s*[\+\-\*\/\^%]\s*\d+/.test(input)) {
            return { type: 'math', expression: input };
        }
        
        return { type: 'general', original: input };
    },
    
    // Get knowledge for topic
    getKnowledge: function(topic) {
        if (!topic) return null;
        
        const searchTerm = topic.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        // Search all knowledge bases
        for (let category of [this.knowledge.programming, this.knowledge.concepts]) {
            // Direct match
            if (category[searchTerm]) {
                return category[searchTerm];
            }
            
            // Partial match
            for (let [key, value] of Object.entries(category)) {
                if (key.includes(searchTerm) || searchTerm.includes(key)) {
                    return value;
                }
            }
        }
        
        return null;
    },
    
    // Math calculator
    calculate: function(expression) {
        const match = expression.match(/(\d+\.?\d*)\s*([\+\-\*\/\^%])\s*(\d+\.?\d*)/);
        if (!match) return null;
        
        const a = parseFloat(match[1]);
        const op = match[2];
        const b = parseFloat(match[3]);
        
        const operations = {
            '+': a + b,
            '-': a - b,
            '*': a * b,
            '/': b !== 0 ? a / b : 'undefined',
            '^': Math.pow(a, b),
            '%': a % b
        };
        
        const result = operations[op];
        const opName = {
            '+': 'Addition',
            '-': 'Subtraction',
            '*': 'Multiplication',
            '/': 'Division',
            '^': 'Exponentiation',
            '%': 'Modulo'
        }[op];
        
        if (result === 'undefined') {
            return `**Error:** Cannot divide by zero!\n\nDivision by zero is undefined in mathematics.`;
        }
        
        return `**Calculation Result**\n\n${a} ${op} ${b} = **${result}**\n\nOperation: ${opName}`;
    },
    
    // Main intelligence engine
    λ: function(input) {
        const intent = this.detectIntent(input);
        
        // Handle different intent types
        switch(intent.type) {
            case 'keyword':
            case 'explain':
            case 'provide':
                const knowledge = this.getKnowledge(intent.topic);
                if (knowledge) {
                    return knowledge + `\n\n**Want to know more?** Ask about related concepts or specific examples!`;
                }
                
                // Smart fallback for unknown topics
                return `**Exploring: ${intent.topic}**\n\n` +
                       `While I don't have specific information about "${intent.topic}" in my current knowledge base, ` +
                       `here's how we can approach it:\n\n` +
                       `**1. Related Concepts I Know:**\n` +
                       `• Programming: polymorphism, inheritance, encapsulation, abstraction\n` +
                       `• Patterns: MVC, REST, SOLID principles\n` +
                       `• Concepts: recursion, closures, callbacks, promises\n\n` +
                       `**2. How to Learn This:**\n` +
                       `• Break down the term\n` +
                       `• Find similar concepts\n` +
                       `• Look for practical examples\n` +
                       `• Practice implementation\n\n` +
                       `Try asking about a related topic or provide more context!`;
            
            case 'math':
                const result = this.calculate(intent.expression);
                return result || `I can help with calculations! Use format: "number operator number"\nExample: "45 * 23" or "128 + 456"`;
            
            case 'general':
            default:
                // Check for greetings
                if (/^(hi|hello|hey|greetings)/i.test(input)) {
                    return `Hello! I'm APEX_V5, your learning assistant.\n\n` +
                           `I can help with:\n` +
                           `• **Programming:** OOP, functions, algorithms\n` +
                           `• **Concepts:** Explain complex topics\n` +
                           `• **Math:** Calculations and formulas\n` +
                           `• **Learning:** Step-by-step tutorials\n\n` +
                           `What would you like to explore?`;
                }
                
                // Check for thanks
                if (/thank|thanks|appreciate/i.test(input)) {
                    return `You're welcome! Happy to help. What else would you like to learn?`;
                }
                
                // Check for help
                if (/help|what can you/i.test(input)) {
                    return `**APEX_V5 Capabilities**\n\n` +
                           `**Topics I can explain:**\n` +
                           `• Polymorphism, Inheritance, Encapsulation\n` +
                           `• Recursion, Closures, Callbacks\n` +
                           `• OOP, MVC, REST, SOLID\n` +
                           `• And much more!\n\n` +
                           `**Try these:**\n` +
                           `• "Explain polymorphism"\n` +
                           `• "What is recursion?"\n` +
                           `• "Calculate 45 * 67"\n` +
                           `• "How do closures work?"\n\n` +
                           `What interests you?`;
                }
                
                // Intelligent general response
                return `I notice you're asking about: "${input}"\n\n` +
                       `To help you better, try:\n` +
                       `• Starting with "Explain..." or "What is..."\n` +
                       `• Asking about specific programming concepts\n` +
                       `• Requesting calculations (e.g., "25 * 4")\n` +
                       `• Saying "help" to see what I can do\n\n` +
                       `I'm here to help you learn!`;
        }
    },
    
    // Complexity scanner
    Ψ: {
        scan: function(input) {
            const length = input.length;
            if (length < 20) return "α";
            if (length < 50) return "β";
            if (length < 100) return "Ω";
            return "Ψ";
        },
        σ: new Map(),
        context: []
    },
    
    // Main solver function
    solve: function(input) {
        try {
            input = input.trim();
            if (!input) {
                return {
                    mode: "α",
                    response: "I'm ready! Ask me about programming concepts, calculations, or any topic you'd like to understand."
                };
            }
            
            // Get response
            const response = this.λ(input);
            const mode = this.Ψ.scan(input);
            
            // Store context
            this.Ψ.context.push({input, response, time: Date.now()});
            if (this.Ψ.context.length > 10) this.Ψ.context.shift();
            
            return { mode, response };
            
        } catch (error) {
            console.error('Error:', error);
            return {
                mode: "α",
                response: `Let me help you with that! Try asking:\n` +
                         `• "Explain [concept]"\n` +
                         `• "What is [topic]?"\n` +
                         `• "Calculate [math]"\n` +
                         `• "How does [thing] work?"`
            };
        }
    }
};

// Initialize
window.APEX_V5 = APEX_V5;

// Auto-test
console.log('Testing: "Explain polymorphism"');
console.log(APEX_V5.solve('Explain polymorphism').response.substring(0, 100) + '...');
