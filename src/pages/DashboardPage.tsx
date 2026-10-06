import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GitFork, 
  CheckCircle2, 
  Flame, 
  Target, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Calendar,
  Layers,
  TrendingUp,
  BrainCircuit
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid 
} from 'recharts';
import { StatCard } from '../components/StatCard';
import { ProgressBar } from '../components/ProgressBar';
import { useCareer } from '../context/CareerContext';

const ANALYTICS_DATA = [
  { week: 'Week 1', completed: 4, velocity: 'Normal' },
  { week: 'Week 2', completed: 8, velocity: 'High' },
  { week: 'Week 3', completed: 15, velocity: 'Sprint' },
  { week: 'Week 4', completed: 21, velocity: 'High' },
  { week: 'Week 5', completed: 27, velocity: 'Sprint' },
];

export const DashboardPage: React.FC = () => {
  const { 
    completedTopicIds, 
    streakDays, 
    activityHistory, 
    calculateJobReadiness,
    targetRole
  } = useCareer();

  const readinessScore = calculateJobReadiness();
  const topicsCompletedCount = completedTopicIds.length;
  const feCompletedCount = completedTopicIds.filter((id) => id.startsWith('fe-')).length;
  const feProgressPercent = Math.min(Math.round((feCompletedCount / 25) * 100), 100);

  const recommendedTopics = [
    {
      title: 'React Hooks & Lifecycle',
      category: 'Framework',
      reason: 'Recommended because you completed JavaScript and DOM manipulation.',
      time: '6 Days',
      difficulty: 'Intermediate',
      path: '/roadmap/frontend',
      urgent: true,
    },
    {
      title: 'TypeScript Generics & Utilities',
      category: 'Language',
      reason: 'Recommended because you completed TypeScript Foundations.',
      time: '4 Days',
      difficulty: 'Intermediate',
      path: '/roadmap/frontend',
      urgent: false,
    },
    {
      title: 'REST API Integration with TanStack Query',
      category: 'Data Layer',
      reason: 'Recommended to connect your React client to live backend endpoints.',
      time: '5 Days',
      difficulty: 'Intermediate',
      path: '/roadmap/frontend',
      urgent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-cream text-deep pb-20">
      {/* Header Greeting */}
      <div className="bg-deep text-cream py-10 sm:py-14 border-b border-brown/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-deep-card border border-brown/30 text-[11px] font-mono text-burnt-light mb-2">
                <Sparkles className="w-3 h-3" />
                Active Focus: {targetRole}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-editorial text-cream leading-tight">
                Welcome back, Developer 👋
              </h1>
              <p className="text-xs sm:text-sm text-cream/70 mt-1">
                "Here's where your journey stands."
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/skill-gap"
                className="bg-deep-card hover:bg-deep-surface border border-brown/40 text-cream px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Target className="w-4 h-4 text-burnt" />
                Audit Skill Gaps
              </Link>
              <Link
                to="/ai-mentor"
                className="bg-burnt hover:bg-burnt-hover text-cream px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-warm"
              >
                <BrainCircuit className="w-4 h-4" />
                Ask Mapped AI
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Four Core Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatCard
            label="Roadmaps"
            value="3"
            subtext="Started & Tracked"
            icon={GitFork}
            badge="Active"
          />
          <StatCard
            label="Topics"
            value={topicsCompletedCount}
            subtext="Completed Milestones"
            icon={CheckCircle2}
            badge="Verified"
          />
          <StatCard
            label="Streak"
            value={`${streakDays} Days`}
            subtext="Daily Learning Habit"
            icon={Flame}
            badge="On Fire 🔥"
          />
          <StatCard
            label="Job Readiness"
            value={`${readinessScore}%`}
            subtext={`Target: ${targetRole}`}
            icon={Target}
            badge="Interviews"
          />
        </div>

        {/* Main Grid: Continue Learning + Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10">
          
          {/* Left Column (8 cols): Continue Learning & Analytics Chart */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* CONTINUE LEARNING CARD */}
            <div className="bg-cream-card border-2 border-brown/30 rounded-2xl p-6 sm:p-8 shadow-warm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnt/5 rounded-full -mr-10 -mt-10 blur-xl pointer-events-none" />

              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
                  <span className="text-xs font-mono uppercase font-bold tracking-wider text-brown">
                    Continue Learning
                  </span>
                </div>
                <span className="text-xs font-mono text-burnt font-bold bg-burnt/10 px-2.5 py-1 rounded-full border border-burnt/20">
                  {feProgressPercent}% Complete
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-editorial text-deep">
                    Frontend Developer
                  </h2>
                  <p className="text-xs sm:text-sm text-deep/75 mt-1">
                    Current Topic: <strong className="text-burnt">React Hooks & Functional Components</strong>
                  </p>
                </div>

                <ProgressBar value={feProgressPercent} label="Frontend Path Mastery" size="md" />

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs font-mono text-deep/60">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-burnt" />
                      Est. 6 Days Remaining
                    </span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-burnt" />
                      Topic {Math.min(feCompletedCount + 1, 25)} of 25 ({feCompletedCount} Completed)
                    </span>
                  </div>

                  <Link
                    to="/roadmap/frontend"
                    className="bg-burnt hover:bg-burnt-hover text-cream px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-warm transition-all duration-200 flex items-center justify-center gap-2 self-start sm:self-auto group active:scale-[0.98]"
                  >
                    Continue Learning
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* LEARNING ANALYTICS (RECHARTS) */}
            <div className="bg-cream-card border border-brown/25 rounded-2xl p-6 sm:p-7 shadow-warm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold font-editorial text-deep">
                    Learning Velocity & Analytics
                  </h3>
                  <p className="text-xs text-deep/65 mt-0.5">
                    Topics completed over the last 5 weeks.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-burnt font-bold bg-burnt/10 px-3 py-1 rounded-lg">
                  <TrendingUp className="w-3.5 h-3.5" />
                  +6 this week
                </div>
              </div>

              {/* Chart Container */}
              <div className="h-64 sm:h-72 w-full pt-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={ANALYTICS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C05800" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#C05800" stopOpacity={0.0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#713600" opacity={0.15} />
                    <XAxis 
                      dataKey="week" 
                      stroke="#713600" 
                      fontSize={11} 
                      tickLine={false} 
                      fontFamily="JetBrains Mono, monospace" 
                    />
                    <YAxis 
                      stroke="#713600" 
                      fontSize={11} 
                      tickLine={false} 
                      fontFamily="JetBrains Mono, monospace" 
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FAF7C5',
                        borderColor: 'rgba(113, 54, 0, 0.3)',
                        borderRadius: '10px',
                        fontSize: '12px',
                        fontFamily: 'JetBrains Mono, monospace',
                        boxShadow: '0 4px 14px rgba(56, 36, 13, 0.1)',
                      }}
                      itemStyle={{ color: '#C05800', fontWeight: 'bold' }}
                      formatter={(val: number) => [`${val} Topics`, 'Completed']}
                    />
                    <Area
                      type="monotone"
                      dataKey="completed"
                      stroke="#C05800"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#colorCompleted)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>

          {/* Right Column (4 cols): Recommended Next + Recent Activity */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* RECOMMENDED NEXT SECTION */}
            <div className="bg-cream-card border border-brown/25 rounded-2xl p-6 shadow-warm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-editorial text-deep">
                  What should you learn next?
                </h3>
                <span className="text-[10px] font-mono font-bold uppercase text-burnt bg-burnt/10 px-2 py-0.5 rounded">
                  AI Ranked
                </span>
              </div>

              <div className="space-y-3">
                {recommendedTopics.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-cream border border-brown/20 hover:border-burnt/60 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-brown/10 text-brown">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-mono text-deep/60">
                        {item.time}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-deep group-hover:text-burnt transition-colors">
                      {item.title}
                    </h4>

                    {/* Personalization Rationale */}
                    <p className="text-xs text-deep/75 mt-1.5 leading-relaxed bg-cream-card/70 p-2 rounded border border-brown/10">
                      💡 {item.reason}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-brown/10">
                      <span className="font-mono text-[11px] text-brown">
                        {item.difficulty}
                      </span>
                      <Link
                        to={item.path}
                        className="text-burnt font-semibold flex items-center gap-1 group-hover:underline text-[11px]"
                      >
                        Start Topic
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RECENT ACTIVITY TIMELINE */}
            <div className="bg-cream-card border border-brown/25 rounded-2xl p-6 shadow-warm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold font-editorial text-deep">
                  Recent Activity
                </h3>
                <span className="text-xs font-mono text-deep/50">History</span>
              </div>

              <div className="space-y-3">
                {activityHistory.slice(0, 5).map((act, index) => (
                  <div key={act.id || index} className="flex items-start gap-3 text-xs">
                    <div className="w-6 h-6 rounded-full bg-cream-dark border border-brown/30 flex items-center justify-center shrink-0 mt-0.5">
                      {act.type === 'completed' ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-brown stroke-[2.5]" />
                      ) : (
                        <Calendar className="w-3.5 h-3.5 text-burnt" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-deep leading-snug">
                        {act.text}
                      </p>
                      <span className="text-[10px] font-mono text-deep/50">
                        {act.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
