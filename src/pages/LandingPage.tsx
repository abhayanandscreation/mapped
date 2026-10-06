import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  GitFork, 
  Layers, 
  Compass, 
  BrainCircuit, 
  Target, 
  TrendingUp, 
  ShieldAlert, 
  XCircle, 
  Clock, 
  Terminal, 
  Server, 
  Code2, 
  Cpu, 
  CloudCog, 
  Check 
} from 'lucide-react';
import { CAREER_PATHS } from '../data/roadmapsData';

export const LandingPage: React.FC = () => {
  const popularPaths = CAREER_PATHS.filter((p) => p.popular);

  const getPathIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return Code2;
      case 'backend':
      case 'java':
        return Server;
      case 'fullstack':
        return Layers;
      case 'aiml':
        return Cpu;
      case 'devops':
        return CloudCog;
      default:
        return Terminal;
    }
  };

  return (
    <div className="min-h-screen bg-cream text-deep">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-dark border border-brown/20 text-xs font-mono font-semibold text-brown">
                <span className="w-2 h-2 rounded-full bg-burnt animate-pulse" />
                Next-Gen Career Navigation for Developers
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-editorial text-deep tracking-tight leading-[1.08]">
                Your Career, <br className="hidden sm:inline" />
                <span className="text-burnt underline decoration-brown/30 decoration-wavy decoration-1 underline-offset-8">
                  Mapped.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-deep/80 max-w-xl leading-relaxed font-sans font-normal">
                Stop guessing what to learn next. Map your skills, discover your gaps, and follow a career path built around your goals.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/skill-gap"
                  className="bg-burnt hover:bg-burnt-hover text-cream px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-warm hover:shadow-glow-orange transition-all duration-200 flex items-center gap-2 group active:scale-[0.98]"
                >
                  Map My Career
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to="/roadmaps"
                  className="bg-brown hover:bg-brown-hover text-cream px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 flex items-center gap-2 hover:shadow-warm active:scale-[0.98]"
                >
                  <Compass className="w-4 h-4 text-cream/80" />
                  Explore Roadmaps
                </Link>
              </div>

              {/* Trust & Proof Points */}
              <div className="pt-6 border-t border-brown/20 grid grid-cols-3 gap-4 text-xs font-mono text-deep/75">
                <div>
                  <div className="font-bold text-deep text-base sm:text-lg">9+ Paths</div>
                  <div className="text-deep/60">Curated by Seniors</div>
                </div>
                <div>
                  <div className="font-bold text-deep text-base sm:text-lg">100% Personal</div>
                  <div className="text-deep/60">Skip Known Tech</div>
                </div>
                <div>
                  <div className="font-bold text-deep text-base sm:text-lg">Real Readiness</div>
                  <div className="text-deep/60">Job-Ready Metrics</div>
                </div>
              </div>
            </div>

            {/* Hero Right Visual: Interactive Mini Roadmap */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm bg-cream-card/90 border-2 border-brown/30 rounded-2xl p-6 shadow-warm-xl relative">
                
                {/* Visual Top Badge */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-brown/20">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-burnt" />
                    <span className="font-mono text-xs font-bold text-deep uppercase tracking-wider">
                      Target: Backend Engineer
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-burnt/10 text-burnt px-2 py-0.5 rounded">
                    Personalized Path
                  </span>
                </div>

                {/* Vertical Mini Graph */}
                <div className="space-y-2 relative">
                  {/* Subtle vertical connector line */}
                  <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-brown/30 -z-0" />

                  {/* Node 1: START */}
                  <div className="relative z-10 flex items-center gap-3 bg-cream p-2.5 rounded-lg border border-brown/20">
                    <div className="w-8 h-8 rounded-full bg-cream-dark border border-brown/40 flex items-center justify-center font-mono text-xs font-bold text-brown">
                      ✓
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs font-bold font-mono">START: Onboarding</span>
                      <span className="text-[10px] font-mono text-brown">Done</span>
                    </div>
                  </div>

                  {/* Node 2: Java */}
                  <div className="relative z-10 flex items-center gap-3 bg-cream p-2.5 rounded-lg border border-brown/20">
                    <div className="w-8 h-8 rounded-full bg-cream-dark border border-brown/40 flex items-center justify-center font-mono text-xs font-bold text-brown">
                      ✓
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold">Java Syntax & Core</span>
                        <span className="block text-[10px] text-brown">Known Skill (Skipped)</span>
                      </div>
                      <span className="text-[10px] font-mono text-brown">0 Days</span>
                    </div>
                  </div>

                  {/* Node 3: OOP */}
                  <div className="relative z-10 flex items-center gap-3 bg-cream p-2.5 rounded-lg border border-brown/20">
                    <div className="w-8 h-8 rounded-full bg-cream-dark border border-brown/40 flex items-center justify-center font-mono text-xs font-bold text-brown">
                      ✓
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-bold">Object-Oriented Design</span>
                        <span className="block text-[10px] text-brown">Known Skill (Skipped)</span>
                      </div>
                      <span className="text-[10px] font-mono text-brown">0 Days</span>
                    </div>
                  </div>

                  {/* Node 4: Spring Boot (CURRENT / HIGHLIGHTED) */}
                  <div className="relative z-10 flex items-center gap-3 bg-burnt text-cream p-3 rounded-xl border-2 border-burnt-light shadow-warm-lg ring-4 ring-burnt/25 animate-pulse-subtle">
                    <div className="w-8 h-8 rounded-full bg-cream text-burnt font-mono text-xs font-extrabold flex items-center justify-center shrink-0">
                      ★
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold font-mono">Spring Boot</span>
                        <span className="text-[10px] font-mono bg-cream/20 px-1.5 py-0.5 rounded font-bold">
                          Next Focus
                        </span>
                      </div>
                      <p className="text-[11px] text-cream/90 mt-0.5">
                        High Priority Gap • Est. 8 Days
                      </p>
                    </div>
                  </div>

                  {/* Node 5: REST APIs */}
                  <div className="relative z-10 flex items-center gap-3 bg-cream-card/60 p-2.5 rounded-lg border border-brown/20 opacity-80">
                    <div className="w-8 h-8 rounded-full bg-cream border border-brown/30 flex items-center justify-center font-mono text-xs text-deep/50">
                      5
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs font-semibold text-deep/70">REST API Design</span>
                      <span className="text-[10px] font-mono text-deep/50">Upcoming</span>
                    </div>
                  </div>

                  {/* Node 6: Docker */}
                  <div className="relative z-10 flex items-center gap-3 bg-cream-card/60 p-2.5 rounded-lg border border-brown/20 opacity-80">
                    <div className="w-8 h-8 rounded-full bg-cream border border-brown/30 flex items-center justify-center font-mono text-xs text-deep/50">
                      6
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs font-semibold text-deep/70">Docker & Containers</span>
                      <span className="text-[10px] font-mono text-deep/50">Upcoming</span>
                    </div>
                  </div>

                  {/* Node 7: JOB READY */}
                  <div className="relative z-10 flex items-center gap-3 bg-deep text-cream p-2.5 rounded-lg border border-brown/40">
                    <div className="w-8 h-8 rounded-full bg-burnt text-cream flex items-center justify-center font-mono text-xs font-bold">
                      🎯
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs font-bold font-mono text-cream">JOB READY</span>
                      <span className="text-[10px] font-mono text-burnt-light">Target Reached</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-brown/20 text-center">
                  <span className="text-[11px] font-mono text-deep/70">
                    ⚡ <strong>Saved 4 weeks</strong> by bypassing fundamentals you already know.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM SECTION */}
      <section className="py-16 sm:py-24 bg-cream-card/50 border-b border-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-deep leading-tight">
              Learning to code is easy. <br />
              <span className="text-burnt">Knowing what to learn next isn't.</span>
            </h2>
            <p className="text-deep/75 text-base sm:text-lg mt-4 font-sans">
              Thousands of tutorials exist, but traditional roadmaps leave you stranded in decision paralysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Problem 1 */}
            <div className="bg-cream border border-brown/20 rounded-xl p-6 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Too Many Technologies
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Hundreds of libraries, databases, and frameworks scream for attention. Beginners waste months learning tools they will never use in production.
              </p>
            </div>

            {/* Problem 2 */}
            <div className="bg-cream border border-brown/20 rounded-xl p-6 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Generic Static Roadmaps
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Existing platforms force everyone down the exact same 80-topic flowchart regardless of whether they have a CS degree or self-taught experience.
              </p>
            </div>

            {/* Problem 3 */}
            <div className="bg-cream border border-brown/20 rounded-xl p-6 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                No Idea When You're Job-Ready
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                How many projects are enough? When are you qualified to apply for internships? Without metric-based readiness, imposter syndrome wins.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center p-6 bg-deep text-cream rounded-2xl max-w-2xl mx-auto shadow-warm">
            <p className="text-base sm:text-lg font-medium">
              ✨ <strong className="text-burnt-light">Mapped</strong> turns the static roadmap into a <span className="underline decoration-burnt decoration-2">personal career GPS</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. HOW MAPPED WORKS */}
      <section className="py-16 sm:py-24 border-b border-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-burnt">
              Step-by-Step Navigation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-deep mt-2">
              How Mapped Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-cream-card border border-brown/25 rounded-2xl p-7 relative shadow-warm hover:-translate-y-1 transition-transform duration-200">
              <div className="font-mono text-4xl font-extrabold text-burnt/30 mb-4">
                01
              </div>
              <h3 className="text-xl font-bold font-editorial text-deep mb-2">
                Tell us where you are
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Select your current programming languages, frameworks, tools, and background experience in our interactive skill matrix.
              </p>
              <div className="mt-6 pt-4 border-t border-brown/15 flex items-center gap-2 text-xs font-mono text-brown">
                <Check className="w-4 h-4 text-burnt" />
                Diagnose known vs unknown
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-cream-card border border-brown/25 rounded-2xl p-7 relative shadow-warm hover:-translate-y-1 transition-transform duration-200">
              <div className="font-mono text-4xl font-extrabold text-burnt/30 mb-4">
                02
              </div>
              <h3 className="text-xl font-bold font-editorial text-deep mb-2">
                Choose where you want to go
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Select your target career destination (Frontend, Backend, Java, AI/ML, DevOps) and your timeline to employment.
              </p>
              <div className="mt-6 pt-4 border-t border-brown/15 flex items-center gap-2 text-xs font-mono text-brown">
                <Target className="w-4 h-4 text-burnt" />
                Define role benchmarks
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-cream-card border border-brown/25 rounded-2xl p-7 relative shadow-warm hover:-translate-y-1 transition-transform duration-200">
              <div className="font-mono text-4xl font-extrabold text-burnt/30 mb-4">
                03
              </div>
              <h3 className="text-xl font-bold font-editorial text-deep mb-2">
                Follow your map
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Mapped identifies your critical skill gaps, eliminates repetitive basics, and gives you a sequenced roadmap to job readiness.
              </p>
              <div className="mt-6 pt-4 border-t border-brown/15 flex items-center gap-2 text-xs font-mono text-brown">
                <Compass className="w-4 h-4 text-burnt" />
                Follow sequenced milestones
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DIFFERENTIATOR SECTION (VERY IMPORTANT) */}
      <section className="py-16 sm:py-24 bg-deep text-cream border-b border-brown/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-burnt-light">
              The Mapped Difference
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-cream mt-2 leading-tight">
              Not just a roadmap. <br />
              <span className="text-burnt-light italic">Your roadmap.</span>
            </h2>
            <p className="text-cream/75 text-base sm:text-lg mt-4">
              See why developers choose Mapped over one-size-fits-all static websites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Comparison 1 */}
            <div className="bg-deep-card/90 border border-brown/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brown/30">
                <span className="text-xs font-mono uppercase text-cream/50">Scenario 1: Java Basics</span>
                <span className="text-[11px] font-mono text-burnt-light font-bold">Personalized Skip</span>
              </div>
              
              <div className="bg-deep-surface p-4 rounded-xl border border-brown/30">
                <div className="text-xs uppercase font-mono text-cream/50 mb-1">Traditional Roadmap</div>
                <div className="text-sm text-cream/80 font-medium">
                  "Step 1: Learn Java syntax, loops, and variables from scratch."
                </div>
              </div>

              <div className="bg-burnt/15 p-4 rounded-xl border border-burnt/40">
                <div className="text-xs uppercase font-mono text-burnt-light font-bold mb-1">Mapped Approach</div>
                <div className="text-sm text-cream font-semibold leading-relaxed">
                  "You already know Java → <span className="text-burnt-light underline">skip the basics</span> → learn Spring Boot next → estimated 8 days."
                </div>
              </div>
            </div>

            {/* Comparison 2 */}
            <div className="bg-deep-card/90 border border-brown/40 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-brown/30">
                <span className="text-xs font-mono uppercase text-cream/50">Scenario 2: Containerization</span>
                <span className="text-[11px] font-mono text-burnt-light font-bold">Priority Weighting</span>
              </div>
              
              <div className="bg-deep-surface p-4 rounded-xl border border-brown/30">
                <div className="text-xs uppercase font-mono text-cream/50 mb-1">Traditional Roadmap</div>
                <div className="text-sm text-cream/80 font-medium">
                  "Learn Docker. Learn Kubernetes. Learn Helm."
                </div>
              </div>

              <div className="bg-burnt/15 p-4 rounded-xl border border-burnt/40">
                <div className="text-xs uppercase font-mono text-burnt-light font-bold mb-1">Mapped Approach</div>
                <div className="text-sm text-cream font-semibold leading-relaxed">
                  "Docker is a <span className="text-burnt-light font-bold">medium-priority skill</span> for your selected Backend Developer path. Prioritize REST APIs and SQL first."
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/skill-gap"
              className="inline-flex items-center gap-2 bg-burnt hover:bg-burnt-hover text-cream px-8 py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-warm transition-all"
            >
              Experience Personalized Mapping
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. POPULAR CAREER PATHS */}
      <section className="py-16 sm:py-24 border-b border-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-burnt">
                Destinations
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-deep mt-1">
                Popular Career Paths
              </h2>
            </div>
            <Link
              to="/roadmaps"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brown hover:text-burnt transition-colors group"
            >
              View All 9 Roadmaps
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularPaths.map((path) => {
              const Icon = getPathIcon(path.id);
              return (
                <Link
                  key={path.id}
                  to={`/roadmap/${path.id}`}
                  className="bg-cream-card/80 border border-brown/25 hover:border-burnt/60 rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-1 flex flex-col group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-burnt/10 border border-burnt/20 flex items-center justify-center text-burnt group-hover:bg-burnt group-hover:text-cream transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cream-dark text-brown border border-brown/20">
                      {path.difficulty}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-editorial text-deep group-hover:text-burnt transition-colors">
                    {path.title}
                  </h3>
                  <p className="text-xs text-deep/75 mt-2 line-clamp-2 leading-relaxed flex-1">
                    {path.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-brown/20 flex items-center justify-between text-xs font-mono text-deep/70">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-burnt" />
                      <span>{path.duration}</span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-burnt">
                      <span>{path.totalTopics} topics</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. FEATURES SECTION */}
      <section className="py-16 sm:py-24 bg-cream-card/40 border-b border-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-burnt">
              Built for Modern Developers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-editorial text-deep mt-2">
              Everything You Need to Navigate Your Career
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-cream border border-brown/20 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <GitFork className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Personalized Roadmaps
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Dynamic learning graphs that branch, adapt, and automatically collapse prerequisites you have already demonstrated.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-brown/20 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Skill Gap Analyzer
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Pinpoint high-priority vs secondary gaps required by employers for your chosen engineering specialization.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-brown/20 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                AI Career Mentor
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Consult Mapped AI for contextual advice, resume-worthy project suggestions, and 90-day execution sprints.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-brown/20 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Job Readiness Index
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                A quantitative metric reflecting how close you are to clearing technical screeners and landing high-paying roles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-brown/20 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Progress & Streak Tracking
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Track completed milestones, weekly commit velocity, and build consistent daily momentum toward your dream job.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream border border-brown/20 shadow-warm">
              <div className="w-10 h-10 rounded-lg bg-burnt/10 text-burnt flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-editorial text-deep mb-2">
                Curated High-Yield Resources
              </h3>
              <p className="text-sm text-deep/75 leading-relaxed">
                Zero spam or 50-hour filler. Every topic provides direct links to authoritative docs, code sandboxes, and portfolio projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 sm:py-28 bg-cream text-deep relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-deep text-cream rounded-3xl p-8 sm:p-14 shadow-warm-xl border-2 border-brown/40 text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold font-editorial text-cream leading-tight">
              Know where you are. <br />
              <span className="text-burnt-light underline decoration-brown/40 underline-offset-8">
                Know where you're going.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-cream/80 max-w-xl mx-auto font-sans leading-relaxed">
              Take the guesswork out of learning. In 2 minutes, get your personalized career map and start closing your critical skill gaps today.
            </p>
            <div className="pt-4">
              <Link
                to="/skill-gap"
                className="bg-burnt hover:bg-burnt-hover text-cream px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-warm hover:shadow-glow-orange transition-all inline-flex items-center gap-2 group active:scale-[0.98]"
              >
                Create Your Map
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
