import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Compass, 
  RotateCcw,
  Check
} from 'lucide-react';
import { SkillChip } from '../components/SkillChip';
import { useCareer } from '../context/CareerContext';
import { ALL_SKILLS_POOL, ROLE_REQUIREMENTS } from '../data/skillGapData';

export const SkillGapPage: React.FC = () => {
  const { currentSkills, toggleSkill, setSkills, setTargetRole: setGlobalRole } = useCareer();

  const roleKeys = Object.keys(ROLE_REQUIREMENTS);
  const [selectedRoleKey, setSelectedRoleKey] = useState<string>('backend');
  const [hasAnalyzed, setHasAnalyzed] = useState<boolean>(true);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const activeRequirement = ROLE_REQUIREMENTS[selectedRoleKey] || ROLE_REQUIREMENTS['backend'];

  // Handle role change
  const handleRoleChange = (roleKey: string) => {
    setSelectedRoleKey(roleKey);
    setGlobalRole(ROLE_REQUIREMENTS[roleKey]?.title || 'Backend Developer');
  };

  // Run analysis animation
  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
      // Smooth scroll to analysis result
      const el = document.getElementById('analysis-results');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  };

  // Quick preset buttons to demonstrate USP
  const applyPreset = (presetType: 'junior-java' | 'frontend-react' | 'blank') => {
    if (presetType === 'junior-java') {
      setSelectedRoleKey('java');
      setSkills(['Java', 'SQL', 'Git', 'OOP', 'Data Structures']);
      setGlobalRole('Java Developer');
    } else if (presetType === 'frontend-react') {
      setSelectedRoleKey('frontend');
      setSkills(['HTML', 'CSS', 'JavaScript', 'Git', 'React']);
      setGlobalRole('Frontend Developer');
    } else {
      setSkills([]);
    }
    setHasAnalyzed(true);
  };

  // Compute Strong Skills vs High Priority vs Low Priority
  const analysisBreakdown = useMemo(() => {
    const required = activeRequirement.skills;
    const strong = required.filter((s) => currentSkills.includes(s.name));
    const missing = required.filter((s) => !currentSkills.includes(s.name));
    const highPriority = missing.filter((s) => s.priority === 'high');
    const lowerPriority = missing.filter((s) => s.priority !== 'high');

    // Calculate score
    const totalWeight = required.reduce((acc, s) => acc + (s.priority === 'high' ? 3 : 1), 0);
    const earnedWeight = strong.reduce((acc, s) => acc + (s.priority === 'high' ? 3 : 1), 0);
    const calculatedPercentage = totalWeight > 0 ? Math.round((earnedWeight / totalWeight) * 100) : 0;
    
    // Clamp to realistic 40% - 90% range if user has some skills
    const readinessScore = strong.length === 0 ? 15 : Math.max(calculatedPercentage, 45);

    return {
      strong,
      highPriority,
      lowerPriority,
      readinessScore,
    };
  }, [activeRequirement, currentSkills]);

  // Compute Personalized Roadmap Sequence (Demonstrating USP)
  const personalizedSequence = useMemo(() => {
    const standard = activeRequirement.standardPath;
    let nextIdentified = false;

    return standard.map((step, index) => {
      // Check if user already knows any skill required by this step
      const stepLower = step.name.toLowerCase();
      const isKnown = currentSkills.some((skill) => {
        const skillLower = skill.toLowerCase();
        // Avoid false positive where "React" matches "React Hooks"
        if (skillLower === 'react' && stepLower.includes('hook')) return false;
        return stepLower.includes(skillLower);
      });

      let status: 'known' | 'next' | 'future' = 'future';
      if (isKnown) {
        status = 'known';
      } else if (!nextIdentified) {
        status = 'next';
        nextIdentified = true;
      }

      return {
        ...step,
        status,
        index: index + 1,
      };
    });
  }, [activeRequirement, currentSkills]);

  // Circular gauge SVG parameters
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (analysisBreakdown.readinessScore / 100) * circumference;

  return (
    <div className="min-h-screen bg-cream text-deep pb-24">
      {/* Header */}
      <div className="bg-deep text-cream py-12 sm:py-16 border-b border-brown/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-burnt-light">
            Core Differentiator
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-cream mt-2">
            Find Your Skill Gaps
          </h1>
          <p className="text-base sm:text-lg text-cream/75 mt-3 leading-relaxed">
            "Tell Mapped what you know. We'll show you what's missing."
          </p>

          {/* Quick Presets for Demo Presentation */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono">
            <span className="text-cream/50 mr-1">Demo Presets:</span>
            <button
              onClick={() => applyPreset('junior-java')}
              className="px-3 py-1 rounded-lg bg-deep-card border border-brown/40 text-cream/90 hover:text-burnt-light hover:border-burnt transition-all"
            >
              Junior Java Dev (Java + SQL + Git)
            </button>
            <button
              onClick={() => applyPreset('frontend-react')}
              className="px-3 py-1 rounded-lg bg-deep-card border border-brown/40 text-cream/90 hover:text-burnt-light hover:border-burnt transition-all"
            >
              Frontend Starter (HTML + CSS + React)
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">
        
        {/* INPUT STEPS CONTAINER */}
        <div className="bg-cream-card/90 border border-brown/25 rounded-2xl p-6 sm:p-8 shadow-warm space-y-8">
          
          {/* STEP 1 — TARGET ROLE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-7 rounded-lg bg-burnt text-cream font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <h2 className="text-xl font-bold font-editorial text-deep">
                Select Your Target Role
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {roleKeys.map((key) => {
                const role = ROLE_REQUIREMENTS[key];
                const isSelected = selectedRoleKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleRoleChange(key)}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-burnt text-cream border-burnt shadow-warm scale-[1.02]'
                        : 'bg-cream text-deep border-brown/20 hover:border-brown/40'
                    }`}
                  >
                    <span className="font-bold text-xs sm:text-sm leading-tight">
                      {role.title}
                    </span>
                    <span
                      className={`text-[10px] font-mono mt-2 ${
                        isSelected ? 'text-cream/80' : 'text-brown'
                      }`}
                    >
                      {role.skills.length} core skills
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2 — CURRENT SKILLS */}
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg bg-burnt text-cream font-mono font-bold text-xs flex items-center justify-center">
                  02
                </span>
                <div>
                  <h2 className="text-xl font-bold font-editorial text-deep">
                    What skills do you already know?
                  </h2>
                  <p className="text-xs text-deep/60">
                    Click to select your current competencies. Mapped will skip the basics for these.
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-deep/70">
                <strong>{currentSkills.length}</strong> selected
              </div>
            </div>

            {/* Interactive Skill Chips */}
            <div className="flex flex-wrap gap-2.5 p-4 bg-cream rounded-xl border border-brown/20 max-h-56 overflow-y-auto">
              {ALL_SKILLS_POOL.map((skill) => {
                const isSelected = currentSkills.includes(skill);
                return (
                  <SkillChip
                    key={skill}
                    name={skill}
                    selected={isSelected}
                    onToggle={toggleSkill}
                  />
                );
              })}
            </div>
          </div>

          {/* STEP 3 — ANALYZE BUTTON */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-brown/20">
            <div className="text-xs text-deep/70 font-mono">
              Role: <strong className="text-burnt">{activeRequirement.title}</strong> • Skills evaluated: <strong>{currentSkills.length}</strong>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="bg-burnt hover:bg-burnt-hover text-cream px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-warm hover:shadow-glow-orange transition-all duration-200 flex items-center justify-center gap-2 group active:scale-[0.98]"
            >
              {isAnalyzing ? (
                <>
                  <RotateCcw className="w-4 h-4 animate-spin" />
                  Calculating Career Path...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Analyze My Skills
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </div>

        </div>

        {/* ANALYSIS RESULTS SECTION */}
        {hasAnalyzed && (
          <div id="analysis-results" className="space-y-10 animate-fadeIn">
            
            {/* Top Score Banner & Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left: Circular Readiness Gauge */}
              <div className="lg:col-span-4 bg-cream-card border-2 border-brown/30 rounded-2xl p-7 shadow-warm flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brown mb-3">
                  Your Job Readiness
                </span>

                {/* Animated Circular Progress Gauge */}
                <div className="relative w-44 h-44 my-2 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      stroke="rgba(113, 54, 0, 0.15)"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      stroke="#C05800"
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>

                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-4xl font-extrabold font-mono text-deep tracking-tight">
                      {analysisBreakdown.readinessScore}%
                    </span>
                    <span className="text-[10px] font-mono text-burnt font-semibold uppercase tracking-wider mt-0.5">
                      {activeRequirement.title}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-deep/75 mt-3 leading-relaxed">
                  {analysisBreakdown.readinessScore >= 70
                    ? '🎉 You have strong baseline skills! Focus on the remaining high-priority gaps to reach interview screening readiness.'
                    : '⚡ You have essential foundations in place. Target the high-priority missing skills below to accelerate your hiring potential.'}
                </p>
              </div>

              {/* Right: Skills Breakdown (Strong vs High Priority vs Low Priority) */}
              <div className="lg:col-span-8 bg-cream-card border border-brown/25 rounded-2xl p-6 sm:p-7 shadow-warm flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold font-editorial text-deep mb-4">
                    Gap Analysis for {activeRequirement.title}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {/* Strong Skills */}
                    <div className="p-4 rounded-xl bg-cream border border-brown/20 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-brown uppercase">
                        <CheckCircle2 className="w-4 h-4 text-brown stroke-[2.5]" />
                        Strong Skills ({analysisBreakdown.strong.length})
                      </div>
                      <p className="text-[11px] text-deep/60">
                        You already know these. Basics will be skipped.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {analysisBreakdown.strong.length === 0 ? (
                          <span className="text-xs text-deep/40 italic">None selected yet</span>
                        ) : (
                          analysisBreakdown.strong.map((s) => (
                            <span
                              key={s.name}
                              className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cream-dark text-deep border border-brown/20 flex items-center gap-1"
                            >
                              ✓ {s.name}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                    {/* High Priority Gaps */}
                    <div className="p-4 rounded-xl bg-burnt/10 border border-burnt/30 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-burnt uppercase">
                        <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
                        High Priority ({analysisBreakdown.highPriority.length})
                      </div>
                      <p className="text-[11px] text-deep/70">
                        Critical for technical screens. Learn first!
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {analysisBreakdown.highPriority.length === 0 ? (
                          <span className="text-xs text-deep/70">All high priority skills covered! 🎯</span>
                        ) : (
                          analysisBreakdown.highPriority.map((s) => (
                            <span
                              key={s.name}
                              className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-burnt text-cream shadow-sm"
                            >
                              🔴 {s.name}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                    {/* Lower Priority Gaps */}
                    <div className="p-4 rounded-xl bg-cream border border-brown/20 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-deep/70 uppercase">
                        <Clock className="w-3.5 h-3.5 text-brown" />
                        Lower Priority ({analysisBreakdown.lowerPriority.length})
                      </div>
                      <p className="text-[11px] text-deep/60">
                        Recommended after core milestones.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1.5">
                        {analysisBreakdown.lowerPriority.length === 0 ? (
                          <span className="text-xs text-deep/40 italic">None</span>
                        ) : (
                          analysisBreakdown.lowerPriority.map((s) => (
                            <span
                              key={s.name}
                              className="text-xs font-mono px-2 py-0.5 rounded bg-cream-dark text-deep/80 border border-brown/20"
                            >
                              🟠 {s.name}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brown/20 flex items-center justify-between text-xs font-mono text-deep/70">
                  <span>
                    ⚡ Estimated study time to eliminate high-priority gaps: <strong>~3 to 4 weeks</strong>
                  </span>
                  <Link
                    to="/ai-mentor"
                    className="text-burnt font-bold flex items-center gap-1 hover:underline"
                  >
                    Ask AI for Custom Plan
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>

            {/* PERSONALIZED PATH VISUALIZATION (CORE USP) */}
            <div className="bg-cream-card border-2 border-brown/30 rounded-2xl p-6 sm:p-8 shadow-warm">
              <div className="max-w-3xl mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-burnt bg-burnt/10 px-2.5 py-0.5 rounded">
                  <Compass className="w-3.5 h-3.5" />
                  The Mapped Difference
                </div>
                <h3 className="text-2xl font-bold font-editorial text-deep mt-1">
                  Your Personalized Learning Route
                </h3>
                <p className="text-xs sm:text-sm text-deep/75 mt-1 leading-relaxed">
                  Notice how known fundamentals are collapsed or skipped, immediately positioning you at your highest-impact next topic.
                </p>
              </div>

              {/* Interactive Visual Sequence */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                {personalizedSequence.map((step) => {
                  return (
                    <div
                      key={step.name}
                      className={`p-4 rounded-xl border transition-all relative ${
                        step.status === 'next'
                          ? 'bg-burnt text-cream border-burnt-light shadow-warm-lg ring-4 ring-burnt/25 scale-[1.03] z-10'
                          : step.status === 'known'
                          ? 'bg-cream text-deep border-brown/30'
                          : 'bg-cream-card/60 text-deep/70 border-brown/15'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            step.status === 'next'
                              ? 'bg-cream text-burnt'
                              : step.status === 'known'
                              ? 'bg-brown/10 text-brown'
                              : 'bg-deep/10 text-deep/50'
                          }`}
                        >
                          Step {step.index}
                        </span>
                        <span className="text-[11px] font-mono">
                          {step.estimatedDays} Days
                        </span>
                      </div>

                      <h4 className="font-bold text-sm leading-snug">
                        {step.name}
                      </h4>

                      <div className="mt-4 pt-2 border-t border-current/10 flex items-center justify-between text-xs font-mono">
                        {step.status === 'known' ? (
                          <span className="flex items-center gap-1 text-brown font-bold">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                            Known • Skipped
                          </span>
                        ) : step.status === 'next' ? (
                          <span className="flex items-center gap-1 font-bold text-cream underline decoration-cream/50">
                            ★ LEARN NEXT
                          </span>
                        ) : (
                          <span className="text-deep/50">
                            Upcoming
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-4 border-t border-brown/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-deep/70">
                  Ready to start? Follow your custom route step-by-step on the interactive canvas.
                </span>
                <Link
                  to={`/roadmap/${selectedRoleKey === 'java' || selectedRoleKey === 'backend' ? 'backend' : 'frontend'}`}
                  className="bg-burnt hover:bg-burnt-hover text-cream px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-warm transition-all flex items-center justify-center gap-2"
                >
                  Launch Interactive Roadmap
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
