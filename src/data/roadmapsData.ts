import { CareerPathSummary, RoadmapTopic } from '../types';
import { Node, Edge } from '@xyflow/react';

export const CAREER_PATHS: CareerPathSummary[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    tagline: 'From web fundamentals to high-performance interface architecture.',
    description: 'Master HTML, CSS, modern JavaScript, TypeScript, the React ecosystem, state architecture, web performance, testing, and production deployment.',
    difficulty: 'Beginner',
    duration: '5 - 6 Months',
    totalTopics: 25,
    category: 'Frontend',
    popular: true,
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    tagline: 'Build scalable APIs, data pipelines, distributed architectures, and robust databases.',
    description: 'Learn server architecture, relational & NoSQL databases, RESTful and GraphQL API design, caching, authentication, Docker, and cloud microservices.',
    difficulty: 'Intermediate',
    duration: '6 - 8 Months',
    totalTopics: 20,
    category: 'Backend',
    popular: true,
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    tagline: 'Unify client-side fluidity with resilient cloud backend infrastructure.',
    description: 'Bridge both worlds: modern React/Next.js client layers, Node.js or Spring backend services, database schema design, and end-to-end deployment.',
    difficulty: 'Intermediate',
    duration: '7 - 9 Months',
    totalTopics: 28,
    category: 'Full Stack',
    popular: true,
  },
  {
    id: 'java',
    title: 'Java Developer',
    tagline: 'Enterprise-grade software engineering powered by the JVM ecosystem.',
    description: 'Master Core Java, Object-Oriented Principles, Collections, Multithreading, Spring Boot, Spring Data JPA, Spring Security, and cloud microservices.',
    difficulty: 'Intermediate',
    duration: '6 - 7 Months',
    totalTopics: 22,
    category: 'Backend',
    popular: true,
  },
  {
    id: 'python',
    title: 'Python Developer',
    tagline: 'Rapid scripting, web backends, automation, and data system interfaces.',
    description: 'Deep dive into Python syntax, data structures, FastAPI, Django, database integration with SQLAlchemy, testing, and async architecture.',
    difficulty: 'Beginner',
    duration: '4 - 5 Months',
    totalTopics: 20,
    category: 'Backend',
    popular: false,
  },
  {
    id: 'aiml',
    title: 'AI/ML Engineer',
    tagline: 'Harness predictive models, neural architectures, and intelligent systems.',
    description: 'Linear algebra, calculus, PyTorch, model fine-tuning, retrieval-augmented generation (RAG), vector databases, and MLOps deployment pipelines.',
    difficulty: 'Advanced',
    duration: '8 - 10 Months',
    totalTopics: 26,
    category: 'AI/ML',
    popular: true,
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    tagline: 'Automate delivery pipelines, infrastructure as code, and cluster reliability.',
    description: 'Linux systems, Docker containerization, Kubernetes orchestration, Terraform IaC, GitHub Actions CI/CD, Prometheus monitoring, and cloud security.',
    difficulty: 'Advanced',
    duration: '6 - 8 Months',
    totalTopics: 22,
    category: 'DevOps',
    popular: true,
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    tagline: 'Transform raw enterprise numbers into visual intelligence and executive decisions.',
    description: 'Advanced SQL queries, statistics, Python pandas/numpy, Tableau/PowerBI visual dashboards, and automated ETL pipelines.',
    difficulty: 'Beginner',
    duration: '3 - 4 Months',
    totalTopics: 18,
    category: 'Data',
    popular: false,
  },
  {
    id: 'system-design',
    title: 'System Design & Architecture',
    tagline: 'Architect fault-tolerant systems handling millions of concurrent requests.',
    description: 'Load balancing, horizontal scaling, database sharding, CAP theorem, caching strategies, messaging queues (Kafka/RabbitMQ), and rate limiters.',
    difficulty: 'Advanced',
    duration: '4 - 5 Months',
    totalTopics: 16,
    category: 'Architecture',
    popular: false,
  }
];

export const TOPIC_DETAILS: Record<string, RoadmapTopic> = {
  // ==========================================
  // FRONTEND TOPICS (25 Verified Topics)
  // ==========================================
  'fe-start': {
    id: 'fe-start',
    title: 'Developer Workstation & Shell',
    category: 'Foundations',
    status: 'completed',
    whatIsIt: 'Configuring your modern development workstation: terminal shell (zsh/bash), code editor, runtime environment, and browser debugging tools.',
    whyLearnIt: 'A streamlined dev setup saves hundreds of hours throughout your engineering career and speeds up rapid feedback cycles.',
    prerequisites: ['Basic computer literacy', 'Operating system familiarity'],
    whatToLearn: ['Terminal & Shell navigation (zsh/bash)', 'VS Code setup & key extensions', 'Node.js & npm runtime installation', 'Chrome DevTools fundamentals'],
    estimatedDays: 2,
    resources: [
      { title: 'The Modern Dev Workstation Guide', type: 'doc', label: 'Official Doc', source: 'Mapped Guides' },
      { title: 'Command Line Crash Course', type: 'course', label: 'Video Course', source: 'FreeCodeCamp' },
      { title: 'Terminal Navigation Drills', type: 'practice', label: 'Practice', source: 'Exercism' },
      { title: 'Dotfiles & Tooling Repository', type: 'project', label: 'Project', source: 'Personal Portfolio' },
    ]
  },
  'fe-internet': {
    id: 'fe-internet',
    title: 'Internet & Network Fundamentals',
    category: 'Foundations',
    status: 'completed',
    whatIsIt: 'The foundational protocols that govern the world wide web: how computers locate, request, encrypt, and render web assets.',
    whyLearnIt: 'Understanding DNS resolution, HTTP/HTTPS status codes, and packet flow makes you dramatically better at debugging network errors and performance bottlenecks.',
    prerequisites: ['Developer Workstation & Shell'],
    whatToLearn: ['How DNS resolution works', 'HTTP/HTTPS request-response lifecycle', 'IP addressing & ports', 'TLS/SSL handshakes & certificate security'],
    estimatedDays: 3,
    resources: [
      { title: 'How the Web Works — MDN', type: 'doc', label: 'Official Doc', source: 'Mozilla Developer Network' },
      { title: 'HTTP/3 and Networking Deep Dive', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Simulating HTTP Headers with cURL', type: 'practice', label: 'Practice', source: 'Mapped Interactive Sandbox' },
      { title: 'Mini HTTP Request Inspector', type: 'project', label: 'Project', source: 'Mapped Capstone' },
    ]
  },
  'fe-html': {
    id: 'fe-html',
    title: 'Semantic HTML5',
    category: 'Core Web',
    status: 'completed',
    whatIsIt: 'The structural skeleton of all web applications, focusing on semantic elements like <header>, <article>, <main>, and input forms.',
    whyLearnIt: 'Semantic tags ensure screen reader accessibility (a11y), strong search engine discoverability (SEO), and clean DOM trees.',
    prerequisites: ['Internet & Network Fundamentals'],
    whatToLearn: ['Semantic tags vs generic divs', 'Form controls, validation & attributes', 'Meta tags, viewport & Open Graph', 'ARIA landmarks & labels'],
    estimatedDays: 4,
    resources: [
      { title: 'HTML5 Living Standard Documentation', type: 'doc', label: 'Official Doc', source: 'WHATWG' },
      { title: 'Building Accessible HTML from Scratch', type: 'course', label: 'Video Course', source: 'Web.dev' },
      { title: 'Semantic Markup Speed Challenge', type: 'practice', label: 'Practice', source: 'Codepen' },
      { title: 'Accessible Long-form Editorial Article', type: 'project', label: 'Project', source: 'Portfolio Template' },
    ]
  },
  'fe-a11y': {
    id: 'fe-a11y',
    title: 'Web Accessibility (a11y)',
    category: 'Core Web',
    status: 'completed',
    whatIsIt: 'Inclusive design and code standards that make web apps usable for people with visual, motor, auditory, or cognitive disabilities.',
    whyLearnIt: 'Accessibility is legally required in enterprise software and is a hallmark of senior-level front-end craftsmanship.',
    prerequisites: ['Semantic HTML5'],
    whatToLearn: ['WCAG 2.2 AA standards', 'Keyboard focus traps & tab order', 'Color contrast ratios (4.5:1 / 3:1)', 'Screen reader testing (VoiceOver/NVDA)'],
    estimatedDays: 3,
    resources: [
      { title: 'WCAG 2.2 Guidelines Reference', type: 'doc', label: 'Official Doc', source: 'W3C WAI' },
      { title: 'Practical Web Accessibility Course', type: 'course', label: 'Video Course', source: 'Egghead.io' },
      { title: 'Lighthouse Accessibility Audit', type: 'practice', label: 'Practice', source: 'Chrome DevTools' },
      { title: 'Fully Keyboard-Accessible Modal Dialog', type: 'project', label: 'Project', source: 'Component Lab' },
    ]
  },
  'fe-css': {
    id: 'fe-css',
    title: 'Modern CSS & Box Model',
    category: 'Styling',
    status: 'completed',
    whatIsIt: 'The visual styling engine of the browser: Box Model, cascading specificity, CSS Custom Properties, and inheritance rules.',
    whyLearnIt: 'Understanding layout math and the cascade prevents unexpected layout breakage across diverse viewport sizes.',
    prerequisites: ['Semantic HTML5'],
    whatToLearn: ['Box-sizing, margin collapse & specificity', 'Display block, inline, and inline-block', 'CSS Custom Properties (Variables)', 'Transform, transitions & keyframe animations'],
    estimatedDays: 5,
    resources: [
      { title: 'MDN CSS Reference & Cheatsheet', type: 'doc', label: 'Official Doc', source: 'MDN' },
      { title: 'CSS Demystified Masterclass', type: 'course', label: 'Video Course', source: 'Kevin Powell' },
      { title: 'CSS Selector & Specificity Drills', type: 'practice', label: 'Practice', source: 'Frontend Mentor' },
      { title: 'Custom Responsive Component Kit', type: 'project', label: 'Project', source: 'Showcase Project' },
    ]
  },
  'fe-responsive': {
    id: 'fe-responsive',
    title: 'Responsive Design (Flexbox & Grid)',
    category: 'Styling',
    status: 'completed',
    whatIsIt: 'Mastering modern 1D and 2D layout systems (Flexbox and CSS Grid) along with mobile-first media query breakpoints.',
    whyLearnIt: 'Every modern web application must adapt flawlessly from a 375px mobile screen to a 4K ultrawide monitor.',
    prerequisites: ['Modern CSS & Box Model'],
    whatToLearn: ['Flexbox container vs item alignments', 'CSS Grid templates, auto-fit & minmax()', 'Mobile-first media query strategy', 'Subgrid and container queries'],
    estimatedDays: 5,
    resources: [
      { title: 'Complete Guide to Flexbox & CSS Grid', type: 'doc', label: 'Official Doc', source: 'CSS-Tricks' },
      { title: 'Grid & Flexbox Layout Mastery', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Flexbox Froggy & Grid Garden', type: 'practice', label: 'Practice', source: 'Interactive Games' },
      { title: 'Responsive Editorial Magazine Layout', type: 'project', label: 'Project', source: 'Showcase' },
    ]
  },
  'fe-tailwind': {
    id: 'fe-tailwind',
    title: 'Utility CSS & Tailwind',
    category: 'Styling',
    status: 'completed',
    whatIsIt: 'Rapid UI development using utility-first CSS frameworks like Tailwind CSS, theme tokens, and component abstractions.',
    whyLearnIt: 'Tailwind is the prevailing standard in modern web development startups, eliminating context-switching between HTML and CSS files.',
    prerequisites: ['Responsive Design (Flexbox & Grid)'],
    whatToLearn: ['Tailwind configuration & design tokens', 'Responsive variants (sm, md, lg)', 'Arbitrary values & theme extensions', 'Headless UI & component styling'],
    estimatedDays: 4,
    resources: [
      { title: 'Tailwind CSS Official Documentation', type: 'doc', label: 'Official Doc', source: 'Tailwind Labs' },
      { title: 'Tailwind From Scratch', type: 'course', label: 'Video Course', source: 'Brad Traversy' },
      { title: 'Tailwind Component Sandboxes', type: 'practice', label: 'Practice', source: 'Tailwind Play' },
      { title: 'Modern SaaS Pricing & Marketing Page', type: 'project', label: 'Project', source: 'Portfolio Template' },
    ]
  },
  'fe-js': {
    id: 'fe-js',
    title: 'JavaScript Fundamentals (ES6+)',
    category: 'Programming',
    status: 'completed',
    whatIsIt: 'The core programming language of the web: data types, closures, arrow functions, destructuring, and scope.',
    whyLearnIt: 'JavaScript turns static documents into dynamic web applications. It is the single most essential skill in modern web development.',
    prerequisites: ['Modern CSS & Box Model'],
    whatToLearn: ['Data types, mutability & equality', 'Scoping, closures & execution contexts', 'Array methods (map, filter, reduce)', 'Destructuring, rest/spread operators'],
    estimatedDays: 8,
    resources: [
      { title: 'JavaScript.info: The Modern Guide', type: 'doc', label: 'Official Doc', source: 'JavaScript.info' },
      { title: 'JavaScript: The Hard Parts', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: '30 Days of Modern JavaScript', type: 'practice', label: 'Practice', source: 'LeetCode / Codewars' },
      { title: 'Expense Tracker & Budget Simulator', type: 'project', label: 'Project', source: 'Vanilla JS App' },
    ]
  },
  'fe-dom': {
    id: 'fe-dom',
    title: 'DOM Manipulation & Events',
    category: 'Programming',
    status: 'completed',
    whatIsIt: 'Interacting with the Document Object Model: querying nodes, attaching event listeners, event delegation, and dynamic rendering.',
    whyLearnIt: 'Frameworks like React abstract DOM manipulation, but understanding the raw DOM is vital for custom widgets, performance, and debugging.',
    prerequisites: ['JavaScript Fundamentals (ES6+)'],
    whatToLearn: ['querySelector and element traversal', 'Event bubbling, capturing & delegation', 'Form submit handling & FormData', 'Dynamic element insertion & fragments'],
    estimatedDays: 4,
    resources: [
      { title: 'DOM & Events API Documentation', type: 'doc', label: 'Official Doc', source: 'MDN' },
      { title: 'Vanilla JS DOM Masterclass', type: 'course', label: 'Video Course', source: 'Wes Bos' },
      { title: 'Interactive Form Validator Challenge', type: 'practice', label: 'Practice', source: 'Frontend Mentor' },
      { title: 'Kanban Board with Drag & Drop', type: 'project', label: 'Project', source: 'Production Ready' },
    ]
  },
  'fe-async': {
    id: 'fe-async',
    title: 'Async JS, Promises & Fetch',
    category: 'Programming',
    status: 'completed',
    whatIsIt: 'Handling non-blocking operations: Callbacks, Promises, async/await syntax, and native Fetch API requests.',
    whyLearnIt: 'Every modern app talks to remote APIs. Handling loading states, error boundaries, and race conditions is fundamental.',
    prerequisites: ['JavaScript Fundamentals (ES6+)'],
    whatToLearn: ['Event Loop, Call Stack & Microtask Queue', 'Creating & chaining Promises', 'async/await error handling with try/catch', 'AbortController & request timeouts'],
    estimatedDays: 5,
    resources: [
      { title: 'Using the Fetch API', type: 'doc', label: 'Official Doc', source: 'MDN' },
      { title: 'Deep JavaScript Foundations: Asynchronous', type: 'course', label: 'Video Course', source: 'Kyle Simpson' },
      { title: 'Async Sequence & Retry Algorithm', type: 'practice', label: 'Practice', source: 'Exercism' },
      { title: 'Live Weather Dashboard with OpenWeather API', type: 'project', label: 'Project', source: 'Live App' },
    ]
  },
  'fe-browser': {
    id: 'fe-browser',
    title: 'Browser APIs & Storage',
    category: 'Programming',
    status: 'completed',
    whatIsIt: 'Browser platform capabilities including LocalStorage, SessionStorage, IndexedDB, Cookies, and Web Workers.',
    whyLearnIt: 'Enables client-side caching, offline functionality, user preference persistence, and background computations.',
    prerequisites: ['DOM Manipulation & Events'],
    whatToLearn: ['localStorage vs sessionStorage vs cookies', 'IndexedDB for offline structured data', 'Intersection Observer for lazy loading', 'Geolocation & Clipboard APIs'],
    estimatedDays: 3,
    resources: [
      { title: 'Web Storage API Spec', type: 'doc', label: 'Official Doc', source: 'MDN' },
      { title: 'Browser APIs You Should Know', type: 'course', label: 'Video Course', source: 'YouTube / fireship' },
      { title: 'Offline Note App with IndexedDB', type: 'practice', label: 'Practice', source: 'Mapped Lab' },
      { title: 'Infinite Scroll Gallery with IntersectionObserver', type: 'project', label: 'Project', source: 'Component Showcase' },
    ]
  },
  'fe-git': {
    id: 'fe-git',
    title: 'Git & GitHub Collaboration',
    category: 'Workflow',
    status: 'completed',
    whatIsIt: 'Distributed version control: tracking revisions, staging commits, branching, merging, rebasing, and collaborating via pull requests.',
    whyLearnIt: 'Engineering in the real world is collaborative. Professional Git hygiene is the bedrock of team software delivery.',
    prerequisites: ['JavaScript Fundamentals (ES6+)'],
    whatToLearn: ['Commit best practices & semantic messages', 'Feature branch workflow & rebasing', 'Resolving merge conflicts gracefully', 'GitHub PR reviews, drafts & squash merges'],
    estimatedDays: 3,
    resources: [
      { title: 'Pro Git Book (Free)', type: 'doc', label: 'Official Doc', source: 'Git-SCM' },
      { title: 'Git & GitHub Bootcamp', type: 'course', label: 'Video Course', source: 'Colt Steele' },
      { title: 'Learn Git Branching (Interactive Visualizer)', type: 'practice', label: 'Practice', source: 'GitHub Community' },
      { title: 'Contribute to an Open Source Repository', type: 'project', label: 'Project', source: 'Open Source' },
    ]
  },
  'fe-npm': {
    id: 'fe-npm',
    title: 'Package Managers & npm/pnpm',
    category: 'Workflow',
    status: 'completed',
    whatIsIt: 'Managing third-party libraries, package.json dependencies, lockfiles, semantic versioning, and npm scripts.',
    whyLearnIt: 'Modern apps depend on hundreds of packages. Knowing how to audit vulnerabilities and prevent dependency conflicts is essential.',
    prerequisites: ['Git & GitHub Collaboration'],
    whatToLearn: ['package.json vs package-lock.json', 'dependencies vs devDependencies', 'Semantic versioning (^, ~, exact)', 'npx and executable CLI scripts'],
    estimatedDays: 2,
    resources: [
      { title: 'npm CLI Documentation', type: 'doc', label: 'Official Doc', source: 'npm Docs' },
      { title: 'Modern JavaScript Tooling', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Publishing Your First npm Package', type: 'practice', label: 'Practice', source: 'Egghead' },
      { title: 'Reusable Utility Library Package', type: 'project', label: 'Project', source: 'npm Registry' },
    ]
  },
  'fe-ts': {
    id: 'fe-ts',
    title: 'TypeScript Foundations',
    category: 'Language',
    status: 'completed',
    whatIsIt: 'A strongly typed superset of JavaScript that catches errors at compile time, enables auto-complete, and documents code contracts.',
    whyLearnIt: 'TypeScript is required in over 85% of modern frontend job listings. It prevents entire classes of runtime bugs.',
    prerequisites: ['JavaScript Fundamentals (ES6+)', 'Git & GitHub Collaboration'],
    whatToLearn: ['Primitive types, Unions & Literals', 'Interfaces vs Type Aliases', 'Function signatures & optional properties', 'Compiler flags (strict mode)'],
    estimatedDays: 6,
    resources: [
      { title: 'TypeScript Handbook Official', type: 'doc', label: 'Official Doc', source: 'Microsoft' },
      { title: 'Total TypeScript Essentials', type: 'course', label: 'Video Course', source: 'Matt Pocock' },
      { title: 'Type Challenges (Beginner to Intermediate)', type: 'practice', label: 'Practice', source: 'GitHub / type-challenges' },
      { title: 'Strictly Typed CLI Data Processor', type: 'project', label: 'Project', source: 'TypeScript Project' },
    ]
  },
  'fe-ts-advanced': {
    id: 'fe-ts-advanced',
    title: 'TypeScript Generics & Types',
    category: 'Language',
    status: 'completed',
    whatIsIt: 'Advanced typing constructs: generic functions and classes, utility types (Partial, Pick, Omit), conditional types, and keyof.',
    whyLearnIt: 'Allows writing bulletproof reusable component libraries and typing complex API responses with zero runtime overhead.',
    prerequisites: ['TypeScript Foundations'],
    whatToLearn: ['Generics in functions & interfaces', 'Built-in utility types (Record, Pick, Omit)', 'keyof and typeof operators', 'Type narrowing & type guards'],
    estimatedDays: 5,
    resources: [
      { title: 'TypeScript Generics Deep Dive', type: 'doc', label: 'Official Doc', source: 'TypeScript Docs' },
      { title: 'Advanced TypeScript Patterns', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Generic Component Builder Challenge', type: 'practice', label: 'Practice', source: 'Exercism' },
      { title: 'Typed API Client & Schema Validator', type: 'project', label: 'Project', source: 'Portfolio Template' },
    ]
  },
  'fe-react': {
    id: 'fe-react',
    title: 'React Fundamentals',
    category: 'Framework',
    status: 'completed',
    whatIsIt: 'The industry-standard declarative UI library using reusable components, JSX syntax, and virtual DOM diffing.',
    whyLearnIt: 'Powers millions of modern web applications. The React component mental model is the foundation of modern interface engineering.',
    prerequisites: ['JavaScript Fundamentals (ES6+)', 'TypeScript Foundations'],
    whatToLearn: ['Component breakdown & unidirectional data flow', 'JSX syntax rules & conditional rendering', 'Props vs State fundamentals', 'Lifting state up & component composition'],
    estimatedDays: 8,
    resources: [
      { title: 'React Documentation (react.dev)', type: 'doc', label: 'Official Doc', source: 'Meta React Team' },
      { title: 'Epic React Foundations', type: 'course', label: 'Video Course', source: 'Kent C. Dodds' },
      { title: 'React Component Refactoring Drills', type: 'practice', label: 'Practice', source: 'Mapped Sandbox' },
      { title: 'Interactive Task Management Kanban', type: 'project', label: 'Project', source: 'React Portfolio' },
    ]
  },
  'fe-routing': {
    id: 'fe-routing',
    title: 'Client Routing (React Router)',
    category: 'Framework',
    status: 'completed',
    whatIsIt: 'Managing multi-page single-page applications: route definitions, URL parameters, nested layouts, protected routes, and navigation.',
    whyLearnIt: 'Users expect web apps to have deep-linkable URLs, back/forward history support, and smooth page transitions without page reloads.',
    prerequisites: ['React Fundamentals'],
    whatToLearn: ['BrowserRouter, Routes, and Route setup', 'Dynamic URL params (useParams)', 'Nested layouts & <Outlet /> pattern', 'Programmatic navigation (useNavigate)'],
    estimatedDays: 4,
    resources: [
      { title: 'React Router v6 Official Docs', type: 'doc', label: 'Official Doc', source: 'Remix / Shopify' },
      { title: 'Single Page App Routing in Depth', type: 'course', label: 'Video Course', source: 'Academind' },
      { title: 'Multi-step Checkout Routing Sandbox', type: 'practice', label: 'Practice', source: 'CodeSandbox' },
      { title: 'Multi-view E-Commerce Storefront', type: 'project', label: 'Project', source: 'Live Demo' },
    ]
  },
  'fe-build': {
    id: 'fe-build',
    title: 'Modern Bundlers & Vite',
    category: 'Workflow',
    status: 'completed',
    whatIsIt: 'Modern ESM build tooling: Vite, Rollup, Hot Module Replacement (HMR), environment variables, and production bundling.',
    whyLearnIt: 'Sub-second dev server boots and optimized production chunks make you dramatically more productive during day-to-day engineering.',
    prerequisites: ['React Fundamentals', 'Package Managers & npm/pnpm'],
    whatToLearn: ['Vite dev server vs Webpack architecture', 'Configuring vite.config.ts plugins', 'Environment variables (.env and import.meta.env)', 'Production build chunking & asset hashing'],
    estimatedDays: 3,
    resources: [
      { title: 'Vite Guide & Configuration Spec', type: 'doc', label: 'Official Doc', source: 'Vite Team' },
      { title: 'Modern Frontend Tooling Deep Dive', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Custom Vite Plugin Development', type: 'practice', label: 'Practice', source: 'Vite Community' },
      { title: 'Production App Build Optimization', type: 'project', label: 'Project', source: 'Case Study' },
    ]
  },
  'fe-hooks': {
    id: 'fe-hooks',
    title: 'React Hooks & Lifecycle',
    category: 'Framework',
    status: 'current',
    whatIsIt: 'Functional state and lifecycle primitives: useState, useEffect, useRef, useMemo, useCallback, and building custom hooks.',
    whyLearnIt: 'Hooks are how modern React code is organized. Mastering useEffect dependencies and custom hooks separates juniors from mid-level engineers.',
    prerequisites: ['React Fundamentals', 'JavaScript Fundamentals (ES6+)'],
    whatToLearn: ['useState & functional updates', 'useEffect dependency array rules & cleanup', 'useRef for DOM nodes and mutable instance variables', 'Writing reusable Custom Hooks (useDebounce, useWindowSize)'],
    estimatedDays: 6,
    resources: [
      { title: 'Rules of Hooks & Built-in Hooks Reference', type: 'doc', label: 'Official Doc', source: 'react.dev' },
      { title: 'React Hooks Deep Dive & Anti-patterns', type: 'course', label: 'Video Course', source: 'Dan Abramov / Frontend Masters' },
      { title: 'Custom Hook Design Challenge', type: 'practice', label: 'Practice', source: 'CodeSandbox' },
      { title: 'Audio Player & Waveform Visualizer Hook', type: 'project', label: 'Project', source: 'Open Source Package' },
    ]
  },
  'fe-state': {
    id: 'fe-state',
    title: 'State Management (Zustand & Context)',
    category: 'Architecture',
    status: 'locked',
    whatIsIt: 'Architecting global application state: React Context API, useReducer pattern, Zustand, and separating client from server state.',
    whyLearnIt: 'Prevents prop-drilling across deeply nested components and establishes clean separation between UI state and server cache.',
    prerequisites: ['React Hooks & Lifecycle'],
    whatToLearn: ['React Context API & performance optimization', 'useReducer state machine pattern', 'Zustand minimal store pattern', 'Server state vs client state distinction'],
    estimatedDays: 6,
    resources: [
      { title: 'Zustand Official Documentation', type: 'doc', label: 'Official Doc', source: 'PMNDRS' },
      { title: 'State Management in Modern React', type: 'course', label: 'Video Course', source: 'TkDodo' },
      { title: 'Refactoring Context to Zustand Store', type: 'practice', label: 'Practice', source: 'Mapped Lab' },
      { title: 'Collaborative Real-Time Canvas App', type: 'project', label: 'Project', source: 'Portfolio System' },
    ]
  },
  'fe-api': {
    id: 'fe-api',
    title: 'API Integration & TanStack Query',
    category: 'Data Layer',
    status: 'locked',
    whatIsIt: 'Fetching, caching, and synchronizing asynchronous server state using TanStack Query (React Query) and Axios/Fetch.',
    whyLearnIt: 'Eliminates boilerplate loading spinners, auto-retries failed queries, handles background revalidation, and optimizes bandwidth.',
    prerequisites: ['State Management (Zustand & Context)', 'Async JS, Promises & Fetch'],
    whatToLearn: ['useQuery & useMutation hooks', 'Stale-while-revalidate caching strategies', 'Optimistic UI updates', 'Pagination and infinite scrolling queries'],
    estimatedDays: 5,
    resources: [
      { title: 'TanStack Query Documentation', type: 'doc', label: 'Official Doc', source: 'TanStack' },
      { title: 'Practical React Query Course', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Optimistic UI Mutation Sandbox', type: 'practice', label: 'Practice', source: 'CodeSandbox' },
      { title: 'Full Social Feed with Likes & Infinite Scroll', type: 'project', label: 'Project', source: 'Full App' },
    ]
  },
  'fe-testing': {
    id: 'fe-testing',
    title: 'Testing (Vitest & RTL)',
    category: 'Quality',
    status: 'locked',
    whatIsIt: 'Writing automated unit and integration tests using Vitest and React Testing Library from the user perspective.',
    whyLearnIt: 'Guarantees refactor safety and prevents regressions. High test coverage is a primary requirement in high-paying enterprise teams.',
    prerequisites: ['API Integration & TanStack Query'],
    whatToLearn: ['React Testing Library user-event philosophies', 'Testing forms, user interactions & errors', 'Mocking network calls with MSW (Mock Service Worker)', 'End-to-end testing basics with Playwright'],
    estimatedDays: 6,
    resources: [
      { title: 'React Testing Library Principles', type: 'doc', label: 'Official Doc', source: 'Testing Library' },
      { title: 'Testing JavaScript Applications', type: 'course', label: 'Video Course', source: 'Kent C. Dodds' },
      { title: 'Writing MSW Network Handlers', type: 'practice', label: 'Practice', source: 'Mapped Testing Lab' },
      { title: 'Mission-Critical Checkout Flow Test Suite', type: 'project', label: 'Project', source: 'CI/CD Portfolio' },
    ]
  },
  'fe-performance': {
    id: 'fe-performance',
    title: 'Web Performance & Core Web Vitals',
    category: 'Optimization',
    status: 'locked',
    whatIsIt: 'Optimizing render speeds: LCP, INP, CLS metrics, bundle splitting, lazy loading, image optimization, and memoization.',
    whyLearnIt: 'Every 100ms of latency reduction drives conversions. Fast websites rank higher on Google search results.',
    prerequisites: ['Testing (Vitest & RTL)'],
    whatToLearn: ['Core Web Vitals (LCP, INP, CLS)', 'Code-splitting with React.lazy and Suspense', 'Tree-shaking and bundle analyzers', 'Image format optimization (WebP/AVIF)'],
    estimatedDays: 5,
    resources: [
      { title: 'Web Vitals Guide — web.dev', type: 'doc', label: 'Official Doc', source: 'Google Chrome Team' },
      { title: 'Web Performance Masterclass', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Chrome DevTools Performance Profiling', type: 'practice', label: 'Practice', source: 'Google Developers' },
      { title: 'Optimizing a Sluggish Dashboard to 100 Lighthouse', type: 'project', label: 'Project', source: 'Case Study' },
    ]
  },
  'fe-deployment': {
    id: 'fe-deployment',
    title: 'CI/CD & Edge Deployment',
    category: 'DevOps',
    status: 'locked',
    whatIsIt: 'Configuring Vite bundlers, GitHub Actions automation, preview deployments on Vercel/Netlify, and production domain setups.',
    whyLearnIt: 'A project isn’t finished until it is live, monitored, and automated for continuous deployment on every pull request.',
    prerequisites: ['Web Performance & Core Web Vitals', 'Git & GitHub Collaboration'],
    whatToLearn: ['Vite configuration & environment variables', 'Automated GitHub Actions linting & test pipelines', 'Edge deployments on Vercel/Cloudflare Pages', 'Custom domains, DNS records & SSL'],
    estimatedDays: 4,
    resources: [
      { title: 'Vite Production Guide', type: 'doc', label: 'Official Doc', source: 'Vite' },
      { title: 'CI/CD with GitHub Actions', type: 'course', label: 'Video Course', source: 'Academind' },
      { title: 'Deploying Multi-Environment Web Apps', type: 'practice', label: 'Practice', source: 'Vercel Guides' },
      { title: 'Production Ready Portfolio with Automated CI', type: 'project', label: 'Project', source: 'Live Production' },
    ]
  },
  'fe-ready': {
    id: 'fe-ready',
    title: 'JOB READY: Frontend Engineer',
    category: 'Milestone',
    status: 'locked',
    whatIsIt: 'The capstone achievement: resume-ready portfolio, system design interview prep, and live technical challenge readiness.',
    whyLearnIt: 'Validates your end-to-end frontend capabilities and prepares you to land high-paying software engineering roles.',
    prerequisites: ['CI/CD & Edge Deployment'],
    whatToLearn: ['Frontend System Design interview patterns', 'Building a memorable production portfolio', 'Live coding interview practice (BFE.dev / LeetCode)', 'Behavioral STAR methodology responses'],
    estimatedDays: 14,
    resources: [
      { title: 'Front End Interview Handbook', type: 'doc', label: 'Official Doc', source: 'Yangshun Tay' },
      { title: 'Frontend System Design Masterclass', type: 'course', label: 'Video Course', source: 'GreatFrontEnd' },
      { title: 'Mock Technical Interview Simulations', type: 'practice', label: 'Practice', source: 'Pramp' },
      { title: 'Capstone Full-Stack Production Application', type: 'project', label: 'Project', source: 'Career Capstone' },
    ]
  },

  // ==========================================
  // BACKEND TOPICS (Detailed Metadata)
  // ==========================================
  'be-start': {
    id: 'be-start',
    title: 'Backend Fundamentals & Architecture',
    category: 'Foundation',
    status: 'completed',
    whatIsIt: 'Introduction to server-client architecture, HTTP protocol specifications, web servers, and request lifecycles.',
    whyLearnIt: 'Clear understanding of the request-response cycle is the core prerequisite for writing any backend service.',
    prerequisites: ['Terminal Shell Basics', 'Computer Networking Essentials'],
    whatToLearn: ['Client-Server request lifecycle', 'HTTP methods & status code semantics', 'Statelessness & session concepts', 'Server environments (Linux/Unix)'],
    estimatedDays: 3,
    resources: [
      { title: 'HTTP Semantics & Architecture Specification', type: 'doc', label: 'Official Doc', source: 'MDN' },
      { title: 'Backend Engineering Foundations', type: 'course', label: 'Video Course', source: 'Hussein Nasser' },
      { title: 'cURL & Netcat Network Experiments', type: 'practice', label: 'Practice', source: 'Mapped Lab' },
      { title: 'Raw Socket HTTP Server in C/Java/Node', type: 'project', label: 'Project', source: 'Classic Project' },
    ]
  },
  'be-lang': {
    id: 'be-lang',
    title: 'Server Programming Language (Java / Go / Node)',
    category: 'Core Language',
    status: 'completed',
    whatIsIt: 'Deep proficiency in a typed server programming language (Java, Go, or TypeScript/Node.js) with OOP and data structures.',
    whyLearnIt: 'Production servers require high memory efficiency, concurrency safety, and robust type guarantees.',
    prerequisites: ['Backend Fundamentals & Architecture'],
    whatToLearn: ['OOP, memory management & garbage collection', 'Concurrency, threads & async event loops', 'Package ecosystems & dependency managers', 'File I/O and process execution'],
    estimatedDays: 10,
    resources: [
      { title: 'Official Language Specification & Docs', type: 'doc', label: 'Official Doc', source: 'Language Reference' },
      { title: 'Server-Side Software Design Patterns', type: 'course', label: 'Video Course', source: 'Frontend Masters' },
      { title: 'Concurrency & Thread Safety Drills', type: 'practice', label: 'Practice', source: 'LeetCode' },
      { title: 'High-Throughput File Processor', type: 'project', label: 'Project', source: 'Portfolio System' },
    ]
  },
  'be-api': {
    id: 'be-api',
    title: 'RESTful API Design & Best Practices',
    category: 'Protocol',
    status: 'completed',
    whatIsIt: 'Designing resource-oriented RESTful endpoints, URL path hygiene, payload validation, status codes, and OpenAPI documentation.',
    whyLearnIt: 'Clean, predictable APIs enable frontend and mobile teams to build client features rapidly with minimal coordination friction.',
    prerequisites: ['Server Programming Language (Java / Go / Node)'],
    whatToLearn: ['REST architectural constraints', 'Request payload validation & DTOs', 'Idempotency in PUT/DELETE/POST', 'Swagger / OpenAPI 3.0 specifications'],
    estimatedDays: 5,
    resources: [
      { title: 'OpenAPI Specification Standard', type: 'doc', label: 'Official Doc', source: 'OpenAPI Initiative' },
      { title: 'Designing RESTful Web APIs', type: 'course', label: 'Video Course', source: 'O\'Reilly' },
      { title: 'API Endpoint Validation Drills', type: 'practice', label: 'Practice', source: 'Postman Academy' },
      { title: 'Production Ready CRUD REST Service', type: 'project', label: 'Project', source: 'Backend Repo' },
    ]
  },
  'be-db-sql': {
    id: 'be-db-sql',
    title: 'Relational Databases (PostgreSQL / MySQL)',
    category: 'Database',
    status: 'completed',
    whatIsIt: 'Relational database schema modeling, ACID guarantees, SQL joins, indexes (B-Tree), transactions, and connection pools.',
    whyLearnIt: 'Enterprise systems rely on relational databases for mission-critical transactional consistency and financial integrity.',
    prerequisites: ['Backend Fundamentals & Architecture'],
    whatToLearn: ['DDL, DML, and complex JOIN queries', 'Indexes, EXPLAIN ANALYZE & query plans', 'Foreign keys & normalization (3NF)', 'Connection pool management (HikariCP)'],
    estimatedDays: 8,
    resources: [
      { title: 'PostgreSQL Official Documentation', type: 'doc', label: 'Official Doc', source: 'PostgreSQL.org' },
      { title: 'Complete SQL & Database Bootcamp', type: 'course', label: 'Video Course', source: 'Colt Steele' },
      { title: 'SQL Murder Mystery & Complex Queries', type: 'practice', label: 'Practice', source: 'Interactive SQL' },
      { title: 'Normalized Database Schema for E-Commerce', type: 'project', label: 'Project', source: 'Schema Design' },
    ]
  },
  'be-spring': {
    id: 'be-spring',
    title: 'Spring Boot & Enterprise Framework',
    category: 'Framework',
    status: 'current',
    whatIsIt: 'Enterprise Java framework for rapid microservices: Inversion of Control (IoC), Dependency Injection, Spring Web, and Auto-configuration.',
    whyLearnIt: 'Spring Boot powers the majority of Fortune 500 enterprise backend architectures, banking platforms, and transactional gateways.',
    prerequisites: ['Server Programming Language (Java / Go / Node)', 'Relational Databases (PostgreSQL / MySQL)'],
    whatToLearn: ['IoC container & @Autowired dependency injection', '@RestController & request mapping annotations', 'Spring Data JPA & Repository interfaces', 'Exception handling with @ControllerAdvice'],
    estimatedDays: 8,
    resources: [
      { title: 'Spring Boot Reference Documentation', type: 'doc', label: 'Official Doc', source: 'Pivotal / VMware' },
      { title: 'Spring Boot 3 Masterclass', type: 'course', label: 'Video Course', source: 'Amigoscode' },
      { title: 'Spring Data JPA Repository Drills', type: 'practice', label: 'Practice', source: 'Baeldung Labs' },
      { title: 'Full RESTful Microservice with Postgres', type: 'project', label: 'Project', source: 'Enterprise Repo' },
    ]
  },
  'be-auth': {
    id: 'be-auth',
    title: 'Authentication & Security (JWT & OAuth2)',
    category: 'Security',
    status: 'locked',
    whatIsIt: 'Implementing stateless JWT access/refresh token pairs, password hashing (BCrypt), role-based access control (RBAC), and OAuth2.',
    whyLearnIt: 'Security vulnerabilities cause devastating data leaks. Production backend engineers are expected to secure endpoints correctly.',
    prerequisites: ['RESTful API Design & Best Practices', 'Spring Boot & Enterprise Framework'],
    whatToLearn: ['Password hashing with salt & BCrypt', 'JWT token generation, signature & verification', 'Refresh token rotation strategy', 'Role-based authorization middleware'],
    estimatedDays: 6,
    resources: [
      { title: 'OWASP Top 10 Security Risks', type: 'doc', label: 'Official Doc', source: 'OWASP' },
      { title: 'OAuth2 & JWT Architecture Explained', type: 'course', label: 'Video Course', source: 'YouTube' },
      { title: 'Auth Token Middleware Security Drills', type: 'practice', label: 'Practice', source: 'Mapped Security' },
      { title: 'Secure Authentication & RBAC Microservice', type: 'project', label: 'Project', source: 'Production Auth' },
    ]
  },
  'be-cache': {
    id: 'be-cache',
    title: 'Caching Strategies & Redis',
    category: 'Performance',
    status: 'locked',
    whatIsIt: 'Accelerating read performance: in-memory key-value stores (Redis), cache-aside pattern, eviction policies (LRU), and TTL expiration.',
    whyLearnIt: 'Sub-millisecond latency at scale requires offloading read-heavy queries from relational databases to distributed caches.',
    prerequisites: ['Relational Databases (PostgreSQL / MySQL)'],
    whatToLearn: ['Redis data structures (Strings, Hashes, Sets, ZSets)', 'Cache-aside & write-through caching patterns', 'Cache invalidation, stampede & penetration', 'Distributed session storage with Redis'],
    estimatedDays: 5,
    resources: [
      { title: 'Redis Official Documentation', type: 'doc', label: 'Official Doc', source: 'Redis.io' },
      { title: 'High-Performance Caching with Redis', type: 'course', label: 'Video Course', source: 'Redis University' },
      { title: 'Rate Limiter & Cache Drills', type: 'practice', label: 'Practice', source: 'Mapped Lab' },
      { title: 'Distributed Rate Limiter & Leaderboard Service', type: 'project', label: 'Project', source: 'Microservice' },
    ]
  },
  'be-docker': {
    id: 'be-docker',
    title: 'Docker & Containerization',
    category: 'DevOps',
    status: 'locked',
    whatIsIt: 'Packaging backend applications into isolated containers using Dockerfile instructions, multi-stage builds, and Docker Compose.',
    whyLearnIt: 'Eliminates "works on my machine" bugs and serves as the universal deployment packaging standard for cloud platforms.',
    prerequisites: ['Backend Fundamentals & Architecture'],
    whatToLearn: ['Dockerfile syntax & layer caching', 'Multi-stage builds for small production images', 'Docker Compose for multi-service environments', 'Container networking & volume persistence'],
    estimatedDays: 5,
    resources: [
      { title: 'Docker Official Reference Guide', type: 'doc', label: 'Official Doc', source: 'Docker Docs' },
      { title: 'Docker & Kubernetes Bootcamp', type: 'course', label: 'Video Course', source: 'Bret Fisher' },
      { title: 'Multi-service Containerization Drills', type: 'practice', label: 'Practice', source: 'Play with Docker' },
      { title: 'Containerized Multi-tier App with Compose', type: 'project', label: 'Project', source: 'GitHub Repo' },
    ]
  },
  'be-ready': {
    id: 'be-ready',
    title: 'JOB READY: Backend Engineer',
    category: 'Milestone',
    status: 'locked',
    whatIsIt: 'Validating end-to-end backend engineering competencies: system design interviews, database schema design, and technical challenge readiness.',
    whyLearnIt: 'Equips you to pass senior technical interviews and take full ownership of production backend infrastructure.',
    prerequisites: ['Docker & Containerization', 'Authentication & Security (JWT & OAuth2)'],
    whatToLearn: ['Backend System Design patterns (Load balancers, queues)', 'Database sharding & replication strategies', 'Coding interview data structures & algorithms', 'Production incident post-mortems'],
    estimatedDays: 14,
    resources: [
      { title: 'System Design Primer', type: 'doc', label: 'Official Doc', source: 'Donne Martin' },
      { title: 'Designing Data-Intensive Applications', type: 'course', label: 'Video Course', source: 'Martin Kleppmann' },
      { title: 'Mock System Design Interviews', type: 'practice', label: 'Practice', source: 'Pramp' },
      { title: 'Production Capstone Microservices System', type: 'project', label: 'Project', source: 'Career Capstone' },
    ]
  }
};

// ==========================================
// 25 FRONTEND NODES (React Flow Layout)
// ==========================================
export const INITIAL_FRONTEND_NODES: Node[] = [
  {
    id: 'fe-start',
    type: 'roadmapNode',
    position: { x: 300, y: 40 },
    data: { topicId: 'fe-start', title: 'START: Workstation & Shell', category: 'Foundation', status: 'completed', stepNumber: '01' }
  },
  {
    id: 'fe-internet',
    type: 'roadmapNode',
    position: { x: 300, y: 160 },
    data: { topicId: 'fe-internet', title: 'Internet & Network Protocols', category: 'Network', status: 'completed', stepNumber: '02' }
  },
  {
    id: 'fe-html',
    type: 'roadmapNode',
    position: { x: 180, y: 280 },
    data: { topicId: 'fe-html', title: 'Semantic HTML5', category: 'Core Web', status: 'completed', stepNumber: '03' }
  },
  {
    id: 'fe-a11y',
    type: 'roadmapNode',
    position: { x: 440, y: 280 },
    data: { topicId: 'fe-a11y', title: 'Web Accessibility (a11y)', category: 'Standards', status: 'completed', stepNumber: '04' }
  },
  {
    id: 'fe-css',
    type: 'roadmapNode',
    position: { x: 180, y: 400 },
    data: { topicId: 'fe-css', title: 'Modern CSS & Box Model', category: 'Styling', status: 'completed', stepNumber: '05' }
  },
  {
    id: 'fe-responsive',
    type: 'roadmapNode',
    position: { x: 180, y: 520 },
    data: { topicId: 'fe-responsive', title: 'Flexbox & CSS Grid Layouts', category: 'Styling', status: 'completed', stepNumber: '06' }
  },
  {
    id: 'fe-tailwind',
    type: 'roadmapNode',
    position: { x: 440, y: 520 },
    data: { topicId: 'fe-tailwind', title: 'Utility CSS & Tailwind', category: 'Styling', status: 'completed', stepNumber: '07' }
  },
  {
    id: 'fe-js',
    type: 'roadmapNode',
    position: { x: 300, y: 640 },
    data: { topicId: 'fe-js', title: 'JavaScript Fundamentals (ES6+)', category: 'Core JS', status: 'completed', stepNumber: '08' }
  },
  {
    id: 'fe-dom',
    type: 'roadmapNode',
    position: { x: 40, y: 760 },
    data: { topicId: 'fe-dom', title: 'DOM & Event Delegation', category: 'Browser', status: 'completed', stepNumber: '09a' }
  },
  {
    id: 'fe-async',
    type: 'roadmapNode',
    position: { x: 300, y: 760 },
    data: { topicId: 'fe-async', title: 'Async JS, Promises & Fetch', category: 'Core JS', status: 'completed', stepNumber: '09b' }
  },
  {
    id: 'fe-browser',
    type: 'roadmapNode',
    position: { x: 560, y: 760 },
    data: { topicId: 'fe-browser', title: 'Browser APIs & Local Storage', category: 'Browser', status: 'completed', stepNumber: '09c' }
  },
  {
    id: 'fe-git',
    type: 'roadmapNode',
    position: { x: 180, y: 890 },
    data: { topicId: 'fe-git', title: 'Git & GitHub Workflows', category: 'Workflow', status: 'completed', stepNumber: '10' }
  },
  {
    id: 'fe-npm',
    type: 'roadmapNode',
    position: { x: 440, y: 890 },
    data: { topicId: 'fe-npm', title: 'Package Managers (npm/pnpm)', category: 'Tooling', status: 'completed', stepNumber: '11' }
  },
  {
    id: 'fe-ts',
    type: 'roadmapNode',
    position: { x: 300, y: 1010 },
    data: { topicId: 'fe-ts', title: 'TypeScript Foundations', category: 'Language', status: 'completed', stepNumber: '12' }
  },
  {
    id: 'fe-ts-advanced',
    type: 'roadmapNode',
    position: { x: 560, y: 1010 },
    data: { topicId: 'fe-ts-advanced', title: 'TypeScript Generics & Types', category: 'Language', status: 'completed', stepNumber: '13' }
  },
  {
    id: 'fe-react',
    type: 'roadmapNode',
    position: { x: 300, y: 1140 },
    data: { topicId: 'fe-react', title: 'React Fundamentals', category: 'Framework', status: 'completed', stepNumber: '14' }
  },
  {
    id: 'fe-routing',
    type: 'roadmapNode',
    position: { x: 80, y: 1260 },
    data: { topicId: 'fe-routing', title: 'Client Routing (React Router)', category: 'Navigation', status: 'completed', stepNumber: '15' }
  },
  {
    id: 'fe-build',
    type: 'roadmapNode',
    position: { x: 520, y: 1260 },
    data: { topicId: 'fe-build', title: 'Vite Bundler & Dev Server', category: 'Build Tools', status: 'completed', stepNumber: '16' }
  },
  {
    id: 'fe-hooks',
    type: 'roadmapNode',
    position: { x: 300, y: 1390 },
    data: { topicId: 'fe-hooks', title: 'React Hooks Deep Dive', category: 'Framework', status: 'current', stepNumber: '17' }
  },
  {
    id: 'fe-state',
    type: 'roadmapNode',
    position: { x: 120, y: 1520 },
    data: { topicId: 'fe-state', title: 'State Management (Zustand)', category: 'Architecture', status: 'locked', stepNumber: '18' }
  },
  {
    id: 'fe-api',
    type: 'roadmapNode',
    position: { x: 480, y: 1520 },
    data: { topicId: 'fe-api', title: 'TanStack Query (React Query)', category: 'Data Layer', status: 'locked', stepNumber: '19' }
  },
  {
    id: 'fe-testing',
    type: 'roadmapNode',
    position: { x: 300, y: 1650 },
    data: { topicId: 'fe-testing', title: 'Vitest & Testing Library', category: 'Quality', status: 'locked', stepNumber: '20' }
  },
  {
    id: 'fe-performance',
    type: 'roadmapNode',
    position: { x: 180, y: 1780 },
    data: { topicId: 'fe-performance', title: 'Core Web Vitals & Perf', category: 'Optimization', status: 'locked', stepNumber: '21' }
  },
  {
    id: 'fe-deployment',
    type: 'roadmapNode',
    position: { x: 440, y: 1780 },
    data: { topicId: 'fe-deployment', title: 'CI/CD & Edge Deployment', category: 'DevOps', status: 'locked', stepNumber: '22' }
  },
  {
    id: 'fe-ready',
    type: 'roadmapNode',
    position: { x: 300, y: 1910 },
    data: { topicId: 'fe-ready', title: 'JOB READY: Frontend Engineer', category: 'Milestone', status: 'locked', stepNumber: 'GOAL' }
  }
];

export const INITIAL_FRONTEND_EDGES: Edge[] = [
  { id: 'e-start-internet', source: 'fe-start', target: 'fe-internet', type: 'smoothstep' },
  { id: 'e-internet-html', source: 'fe-internet', target: 'fe-html', type: 'smoothstep' },
  { id: 'e-html-a11y', source: 'fe-html', target: 'fe-a11y', type: 'smoothstep', style: { strokeDasharray: '4' } },
  { id: 'e-html-css', source: 'fe-html', target: 'fe-css', type: 'smoothstep' },
  { id: 'e-css-resp', source: 'fe-css', target: 'fe-responsive', type: 'smoothstep' },
  { id: 'e-resp-tailwind', source: 'fe-responsive', target: 'fe-tailwind', type: 'smoothstep', style: { strokeDasharray: '4' } },
  { id: 'e-resp-js', source: 'fe-responsive', target: 'fe-js', type: 'smoothstep' },
  { id: 'e-tailwind-js', source: 'fe-tailwind', target: 'fe-js', type: 'smoothstep' },
  
  // JS Branching
  { id: 'e-js-dom', source: 'fe-js', target: 'fe-dom', type: 'smoothstep' },
  { id: 'e-js-async', source: 'fe-js', target: 'fe-async', type: 'smoothstep' },
  { id: 'e-js-browser', source: 'fe-js', target: 'fe-browser', type: 'smoothstep' },
  
  // Merge into Workflow
  { id: 'e-dom-git', source: 'fe-dom', target: 'fe-git', type: 'smoothstep' },
  { id: 'e-async-git', source: 'fe-async', target: 'fe-git', type: 'smoothstep' },
  { id: 'e-browser-npm', source: 'fe-browser', target: 'fe-npm', type: 'smoothstep' },
  { id: 'e-git-npm', source: 'fe-git', target: 'fe-npm', type: 'smoothstep' },

  // TypeScript layer
  { id: 'e-git-ts', source: 'fe-git', target: 'fe-ts', type: 'smoothstep' },
  { id: 'e-ts-adv', source: 'fe-ts', target: 'fe-ts-advanced', type: 'smoothstep', style: { strokeDasharray: '4' } },
  { id: 'e-ts-react', source: 'fe-ts', target: 'fe-react', type: 'smoothstep' },
  { id: 'e-ts-adv-react', source: 'fe-ts-advanced', target: 'fe-react', type: 'smoothstep' },

  // React ecosystem branching
  { id: 'e-react-routing', source: 'fe-react', target: 'fe-routing', type: 'smoothstep' },
  { id: 'e-react-build', source: 'fe-react', target: 'fe-build', type: 'smoothstep' },
  { id: 'e-react-hooks', source: 'fe-react', target: 'fe-hooks', type: 'smoothstep', animated: true },
  { id: 'e-routing-hooks', source: 'fe-routing', target: 'fe-hooks', type: 'smoothstep' },
  { id: 'e-build-hooks', source: 'fe-build', target: 'fe-hooks', type: 'smoothstep' },

  // Hooks branching into State & TanStack Query
  { id: 'e-hooks-state', source: 'fe-hooks', target: 'fe-state', type: 'smoothstep' },
  { id: 'e-hooks-api', source: 'fe-hooks', target: 'fe-api', type: 'smoothstep' },

  // Merge into Testing
  { id: 'e-state-testing', source: 'fe-state', target: 'fe-testing', type: 'smoothstep' },
  { id: 'e-api-testing', source: 'fe-api', target: 'fe-testing', type: 'smoothstep' },

  // Testing to Perf & Deployment
  { id: 'e-testing-perf', source: 'fe-testing', target: 'fe-performance', type: 'smoothstep' },
  { id: 'e-testing-deploy', source: 'fe-testing', target: 'fe-deployment', type: 'smoothstep' },
  
  // Capstone
  { id: 'e-perf-ready', source: 'fe-performance', target: 'fe-ready', type: 'smoothstep' },
  { id: 'e-deploy-ready', source: 'fe-deployment', target: 'fe-ready', type: 'smoothstep' },
];

// Backend Roadmap Nodes & Topics
export const BACKEND_NODES: Node[] = [
  {
    id: 'be-start',
    type: 'roadmapNode',
    position: { x: 260, y: 40 },
    data: { topicId: 'be-start', title: 'START: Backend Basics', category: 'Foundation', status: 'completed', stepNumber: '01' }
  },
  {
    id: 'be-lang',
    type: 'roadmapNode',
    position: { x: 260, y: 160 },
    data: { topicId: 'be-lang', title: 'Language (Java / Go / Node)', category: 'Core', status: 'completed', stepNumber: '02' }
  },
  {
    id: 'be-api',
    type: 'roadmapNode',
    position: { x: 120, y: 280 },
    data: { topicId: 'be-api', title: 'REST & HTTP APIs', category: 'Protocol', status: 'completed', stepNumber: '03a' }
  },
  {
    id: 'be-db-sql',
    type: 'roadmapNode',
    position: { x: 400, y: 280 },
    data: { topicId: 'be-db-sql', title: 'Relational DBs (PostgreSQL)', category: 'Data', status: 'completed', stepNumber: '03b' }
  },
  {
    id: 'be-spring',
    type: 'roadmapNode',
    position: { x: 260, y: 400 },
    data: { topicId: 'be-spring', title: 'Framework (Spring Boot)', category: 'Framework', status: 'current', stepNumber: '04' }
  },
  {
    id: 'be-auth',
    type: 'roadmapNode',
    position: { x: 120, y: 520 },
    data: { topicId: 'be-auth', title: 'Authentication (JWT & OAuth2)', category: 'Security', status: 'locked', stepNumber: '05a' }
  },
  {
    id: 'be-cache',
    type: 'roadmapNode',
    position: { x: 400, y: 520 },
    data: { topicId: 'be-cache', title: 'Caching (Redis)', category: 'Performance', status: 'locked', stepNumber: '05b' }
  },
  {
    id: 'be-docker',
    type: 'roadmapNode',
    position: { x: 260, y: 640 },
    data: { topicId: 'be-docker', title: 'Docker Containers', category: 'DevOps', status: 'locked', stepNumber: '06' }
  },
  {
    id: 'be-ready',
    type: 'roadmapNode',
    position: { x: 260, y: 770 },
    data: { topicId: 'be-ready', title: 'JOB READY: Backend Engineer', category: 'Milestone', status: 'locked', stepNumber: 'GOAL' }
  }
];

export const BACKEND_EDGES: Edge[] = [
  { id: 'be-e1', source: 'be-start', target: 'be-lang', type: 'smoothstep' },
  { id: 'be-e2', source: 'be-lang', target: 'be-api', type: 'smoothstep' },
  { id: 'be-e3', source: 'be-lang', target: 'be-db-sql', type: 'smoothstep' },
  { id: 'be-e4', source: 'be-api', target: 'be-spring', type: 'smoothstep' },
  { id: 'be-e5', source: 'be-db-sql', target: 'be-spring', type: 'smoothstep' },
  { id: 'be-e6', source: 'be-spring', target: 'be-auth', type: 'smoothstep', animated: true },
  { id: 'be-e7', source: 'be-spring', target: 'be-cache', type: 'smoothstep' },
  { id: 'be-e8', source: 'be-auth', target: 'be-docker', type: 'smoothstep' },
  { id: 'be-e9', source: 'be-cache', target: 'be-docker', type: 'smoothstep' },
  { id: 'be-e10', source: 'be-docker', target: 'be-ready', type: 'smoothstep' },
];
