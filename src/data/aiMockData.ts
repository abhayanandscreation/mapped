import { ChatMessage } from '../types';

export const SUGGESTED_PROMPTS = [
  "What should I learn next?",
  "Am I ready for a backend internship?",
  "Create a 3-month learning plan.",
  "What skills am I missing for Java Developer?",
  "Suggest a project based on my skills.",
];

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-init-1',
    sender: 'ai',
    text: "Hello! I am **Mapped AI**, your personal career strategist. Unlike generic tutors, I analyze where you stand today, cut out what you already know, and calculate your shortest path to job readiness.\n\nAsk me about your roadmap, skill gaps, or interview readiness!",
    timestamp: 'Just now'
  }
];

export function getMockAIResponse(
  userQuery: string,
  userSkills: string[],
  targetRole: string
): ChatMessage {
  const queryLower = userQuery.toLowerCase();
  const knowsJava = userSkills.includes('Java');
  const knowsReact = userSkills.includes('React');
  const knowsSQL = userSkills.includes('SQL');
  const knowsDocker = userSkills.includes('Docker');
  const knowsSpringBoot = userSkills.includes('Spring Boot');

  // Case 1: "What should I learn next?"
  if (queryLower.includes('learn next') || queryLower.includes('what should i learn') || queryLower.includes('next step')) {
    if (knowsJava && knowsSQL && !knowsSpringBoot) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Based on your current profile (**Java** + **SQL**), **Spring Boot** is your highest-leverage next step.\n\nYou have already cleared the core language hurdles, so spending more time on Java syntax or basic algorithms has diminishing returns right now. Your immediate priority is enterprise framework competency.`,
        timestamp: 'Just now',
        pathRecommendation: [
          { step: '01', title: 'Spring Boot Fundamentals (IoC & DI)', duration: '7 Days', highlight: true },
          { step: '02', title: 'REST API Development & Validation', duration: '5 Days' },
          { step: '03', title: 'Spring Data JPA & Hibernate Mappings', duration: '6 Days' },
          { step: '04', title: 'Spring Security & JWT Tokens', duration: '7 Days' },
          { step: '05', title: 'Docker Containerization for Spring Services', duration: '5 Days' },
        ],
        verdict: 'Current primary gap: Enterprise backend framework integration.'
      };
    } else if (targetRole === 'Frontend Developer' || knowsReact) {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Looking at your **Frontend** trajectory, you have strong JavaScript and React component foundations. Your critical next frontier is **TanStack Query (React Query) & State Architecture**.\n\nModern engineering teams expect you to handle server cache invalidation, pagination, and optimistic updates without excessive boilerplate.`,
        timestamp: 'Just now',
        pathRecommendation: [
          { step: '01', title: 'TanStack Query (React Query) Cache Sync', duration: '5 Days', highlight: true },
          { step: '02', title: 'Zustand Global State Store Patterns', duration: '4 Days' },
          { step: '03', title: 'Vitest & React Testing Library', duration: '6 Days' },
          { step: '04', title: 'Core Web Vitals Performance Profiling', duration: '5 Days' },
        ],
        verdict: 'Current primary gap: Production data synchronization & testing.'
      };
    } else {
      return {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: `Looking at your target role as **${targetRole}**, your top recommendation is to master **REST API Architecture & Containerization**.\n\nYou already possess fundamental programming skills. Building production-grade microservices will elevate your resume past 80% of applicant pools.`,
        timestamp: 'Just now',
        pathRecommendation: [
          { step: '01', title: 'RESTful API Design & HTTP Status Hygiene', duration: '5 Days', highlight: true },
          { step: '02', title: 'Relational DB Schemas & Indexing (PostgreSQL)', duration: '6 Days' },
          { step: '03', title: 'Dockerizing Applications & Compose Services', duration: '5 Days' },
          { step: '04', title: 'GitHub Actions Automated CI/CD Pipeline', duration: '4 Days' },
        ],
        verdict: 'Current primary gap: Full application deployment workflow.'
      };
    }
  }

  // Case 2: "Am I ready for a backend internship?" / "internship" / "ready"
  if (queryLower.includes('intern') || queryLower.includes('ready') || queryLower.includes('job ready')) {
    const score = (knowsJava ? 20 : 0) + (knowsSQL ? 20 : 0) + (knowsSpringBoot ? 25 : 0) + (knowsDocker ? 20 : 0) + 15;
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `Here is your objective readiness assessment for an entry-level / internship backend role:\n\n• **Estimated Readiness:** ~**${Math.min(score, 85)}%**\n• **Strengths:** Your core foundation in ${userSkills.slice(0, 3).join(', ')} is solid.\n• **Missing Blocks:** ${!knowsSpringBoot ? 'Spring Boot framework' : ''} ${!knowsDocker ? ', Docker containerization' : ''}, and a verifiable GitHub project with automated CI/CD.\n\n**Verdict:** You are 3 to 4 weeks of focused effort away from passing technical screeners.`,
      timestamp: 'Just now',
      pathRecommendation: [
        { step: '01', title: 'Deploy a Multi-service REST API to AWS/Railway', duration: '7 Days', highlight: true },
        { step: '02', title: 'Containerize with Docker & Docker Compose', duration: '4 Days' },
        { step: '03', title: 'System Design Basics: Caching & Rate Limiting', duration: '5 Days' },
      ],
      verdict: 'Action item: Build 1 portfolio project that includes a live URL and Dockerfile.'
    };
  }

  // Case 3: "3-month learning plan" / "3 month"
  if (queryLower.includes('3-month') || queryLower.includes('3 month') || queryLower.includes('plan')) {
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `Here is your high-impact **90-Day Execution Roadmap** tailored to your ${targetRole} goals:\n\n**Month 1: Core Framework Mastery & API Design**\nFocus entirely on real-world framework primitives. Build 2 small CRUD services with authentication and database migrations.\n\n**Month 2: Architecture, Testing & Tooling**\nIntegrate Redis caching, automated unit/integration tests with 75%+ code coverage, and Docker containerization.\n\n**Month 3: Capstone Deployment & Interview Preparation**\nShip an end-to-end fullstack or distributed application, configure GitHub Actions CI/CD, and practice behavioral & technical mock interviews.`,
      timestamp: 'Just now',
      pathRecommendation: [
        { step: 'M1', title: 'Month 1: Enterprise Framework & Database Modeling', duration: '30 Days', highlight: true },
        { step: 'M2', title: 'Month 2: Caching, Security & Automated Testing', duration: '30 Days' },
        { step: 'M3', title: 'Month 3: Production Deployment & Technical Interviewing', duration: '30 Days' },
      ],
      verdict: 'Rule of thumb: Spend 30% time watching/reading and 70% time writing code.'
    };
  }

  // Case 4: "Suggest a project based on my skills"
  if (queryLower.includes('project') || queryLower.includes('portfolio') || queryLower.includes('build')) {
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `Do not build another generic Todo List or Weather App! Technical interviewers see dozens every week.\n\nHere are two distinctive project concepts that showcase production competency:\n\n1. **High-Throughput Webhook Relay & Notification Engine**\n• Receive incoming webhooks (e.g., Stripe/GitHub), queue them with Redis/RabbitMQ, and retry delivery with exponential backoff.\n• *Skills demonstrated:* Concurrency, failure handling, Redis, REST APIs, Docker.\n\n2. **Collaborative Document Workspace with Version History**\n• Multi-user editing, delta diffing, JWT authentication, and automated Postgres backups.\n• *Skills demonstrated:* Database normalization, security tokens, caching, deployment.`,
      timestamp: 'Just now',
      pathRecommendation: [
        { step: '01', title: 'Design Database Schema & System Architecture Diagram', duration: '2 Days', highlight: true },
        { step: '02', title: 'Implement Core Endpoints & Authentication Middleware', duration: '5 Days' },
        { step: '03', title: 'Add Asynchronous Queue Processing & Testing', duration: '5 Days' },
      ],
      verdict: 'Tip: Include a detailed architectural diagram in your repository README.'
    };
  }

  // Case 5: "skills am i missing" / "gap"
  if (queryLower.includes('missing') || queryLower.includes('gap') || queryLower.includes('skills')) {
    return {
      id: `ai-${Date.now()}`,
      sender: 'ai',
      text: `Analyzing your gap matrix against standard job listings for **${targetRole}**:\n\n• **Acquired Foundations:** ${userSkills.slice(0, 4).join(', ') || 'Core Programming Fundamentals'}\n• **High-Priority Omissions:** Spring Boot / React framework depth, Docker containerization, and API security (JWT).\n• **Secondary Gaps:** Redis caching, CI/CD pipeline automation, and AWS hosting.\n\nBy addressing just the high-priority omissions, your candidate percentile jumps from the 45th to the 80th percentile.`,
      timestamp: 'Just now',
      pathRecommendation: [
        { step: 'Priority 1', title: 'Framework Architecture & Dependency Injection', duration: '8 Days', highlight: true },
        { step: 'Priority 2', title: 'Docker Containers & Multi-stage Builds', duration: '5 Days' },
        { step: 'Priority 3', title: 'JWT Authentication & Role-Based Access Control', duration: '6 Days' },
      ],
      verdict: 'Estimated time to close all high-priority gaps: 19 days at 2 hrs/day.'
    };
  }

  // Generic fallback response
  return {
    id: `ai-${Date.now()}`,
    sender: 'ai',
    text: `That is an excellent career strategy question. Based on your current focus on **${targetRole}** and existing toolkit (${userSkills.join(', ')}):\n\nTraditional learning platforms would push you into a 60-hour comprehensive video course starting from "Hello World". With **Mapped**, we recommend bypassing redundant syntax and immediately working on **production-grade API design, containerization with Docker, and cloud deployments**.\n\nWould you like me to generate a 30-day sprint or analyze a specific technology?`,
    timestamp: 'Just now',
    pathRecommendation: [
      { step: '01', title: 'Verify Skill Gap Analyzer Results', duration: 'Immediate', highlight: true },
      { step: '02', title: 'Follow the Interactive Roadmap Node by Node', duration: 'Ongoing' },
      { step: '03', title: 'Track Velocity on your Personal Dashboard', duration: 'Weekly' },
    ],
    verdict: 'Recommendation: Check your customized Skill Gap score on the /skill-gap page.'
  };
}
