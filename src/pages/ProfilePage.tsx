import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Flame, 
  CheckCircle2, 
  RotateCcw, 
  ArrowRight
} from 'lucide-react';
import { useCareer } from '../context/CareerContext';
import { ProgressBar } from '../components/ProgressBar';

export const ProfilePage: React.FC = () => {
  const {
    targetRole,
    currentSkills,
    streakDays,
    completedTopicIds,
    calculateJobReadiness,
    resetToDefaults,
  } = useCareer();

  const readinessScore = calculateJobReadiness();
  const completedCount = completedTopicIds.length;
  const feCompletedCount = completedTopicIds.filter((id) => id.startsWith('fe-')).length;
  const feProgress = Math.min(Math.round((feCompletedCount / 25) * 100), 100);

  return (
    <div className="min-h-screen bg-cream text-deep pb-24">
      {/* Profile Header */}
      <div className="bg-deep text-cream py-12 sm:py-16 border-b border-brown/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-2xl bg-burnt flex items-center justify-center text-cream shadow-warm-lg border-2 border-burnt-light shrink-0">
              <User className="w-10 h-10" />
            </div>

            {/* User Meta */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-bold font-editorial text-cream">
                  Abhay Anand Singh
                </h1>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-deep-card border border-brown/40 text-burnt-light font-semibold">
                  Aspiring Software Engineer
                </span>
              </div>
              <p className="text-xs sm:text-sm text-cream/75">
                Target Role: <strong className="text-cream">{targetRole}</strong> • Current Level: <strong className="text-cream">Junior / Pre-internship</strong>
              </p>
            </div>

            {/* Reset Button */}
            <div>
              <button
                onClick={() => {
                  if (window.confirm('Reset all demo progress, skills, and chat to defaults?')) {
                    resetToDefaults();
                  }
                }}
                className="px-3.5 py-2 rounded-xl bg-deep-card border border-brown/40 hover:border-burnt text-xs font-mono text-cream/80 hover:text-cream transition-all flex items-center gap-1.5"
                title="Reset prototype state"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Demo Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-8">
        
        {/* Core Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-cream-card p-4 rounded-xl border border-brown/20 shadow-warm">
            <span className="text-[10px] font-mono font-bold uppercase text-brown block mb-1">
              Job Readiness
            </span>
            <span className="text-2xl font-bold font-mono text-burnt">
              {readinessScore}%
            </span>
          </div>

          <div className="bg-cream-card p-4 rounded-xl border border-brown/20 shadow-warm">
            <span className="text-[10px] font-mono font-bold uppercase text-brown block mb-1">
              Daily Streak
            </span>
            <span className="text-2xl font-bold font-mono text-deep flex items-center gap-1">
              <Flame className="w-5 h-5 text-burnt" />
              {streakDays} Days
            </span>
          </div>

          <div className="bg-cream-card p-4 rounded-xl border border-brown/20 shadow-warm">
            <span className="text-[10px] font-mono font-bold uppercase text-brown block mb-1">
              Completed Topics
            </span>
            <span className="text-2xl font-bold font-mono text-deep">
              {completedCount}
            </span>
          </div>

          <div className="bg-cream-card p-4 rounded-xl border border-brown/20 shadow-warm">
            <span className="text-[10px] font-mono font-bold uppercase text-brown block mb-1">
              Active Roadmaps
            </span>
            <span className="text-2xl font-bold font-mono text-deep">
              3
            </span>
          </div>
        </div>

        {/* Current Roadmap Progress */}
        <div className="bg-cream-card border border-brown/25 rounded-2xl p-6 sm:p-7 shadow-warm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-burnt">
                Primary Track
              </span>
              <h3 className="text-xl font-bold font-editorial text-deep">
                Frontend Developer
              </h3>
            </div>
            <Link
              to="/roadmap/frontend"
              className="bg-burnt hover:bg-burnt-hover text-cream px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-warm transition-all flex items-center gap-1.5"
            >
              Resume Roadmap
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <ProgressBar value={feProgress} label="Mastery Progress" size="md" />

          <div className="text-xs font-mono text-deep/60 flex items-center justify-between pt-1">
            <span>{feCompletedCount} / 25 Topics Complete</span>
            <span>Current Focus: React Hooks Deep Dive</span>
          </div>
        </div>

        {/* Skills Competency Portfolio */}
        <div className="bg-cream-card border border-brown/25 rounded-2xl p-6 sm:p-7 shadow-warm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold font-editorial text-deep">
                Recognized Competencies ({currentSkills.length})
              </h3>
              <p className="text-xs text-deep/65 mt-0.5">
                These skills are verified in your profile and bypassed on learning maps.
              </p>
            </div>
            <Link
              to="/skill-gap"
              className="text-xs font-bold text-burnt hover:underline font-mono"
            >
              Update Skills
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {currentSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cream text-deep border border-brown/20 flex items-center gap-1.5 shadow-sm"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brown stroke-[2.5]" />
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Career Milestone Summary */}
        <div className="bg-deep text-cream rounded-2xl p-6 sm:p-7 border border-brown/30 space-y-3">
          <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-burnt-light">
            Career Destination Target
          </h4>
          <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-sans">
            You are enrolled in the <strong className="text-cream">{targetRole}</strong> track. 
            At your current velocity of 6 topics per week, your estimated timeline to full job screener readiness is approximately <strong>3 to 4 weeks</strong>.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <Link
              to="/ai-mentor"
              className="text-xs font-bold text-burnt-light hover:underline flex items-center gap-1 font-mono"
            >
              Consult Mapped AI for interview drills
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
