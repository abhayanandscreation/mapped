import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowUpRight, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep text-cream border-t border-brown/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-burnt flex items-center justify-center text-cream">
                <Compass className="w-4 h-4" />
              </div>
              <span className="font-extrabold tracking-wider text-xl font-mono text-cream">
                MAPPED
              </span>
            </div>
            <p className="text-sm text-cream/75 max-w-md leading-relaxed">
              Traditional roadmap platforms tell you what technologies exist in the industry. 
              <strong className="text-burnt-light font-semibold"> Mapped</strong> guides you to where you are, 
              what you are missing, and exactly what to learn next based on your target role and current skills.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-cream/60">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-deep-card border border-brown/40 text-cream/80 font-mono">
                <span className="w-2 h-2 rounded-full bg-burnt animate-pulse" />
                Prototype v1.0 • College Mini-Project
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-cream/50 mb-4 font-semibold">
              Platform Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-cream/80">
              <li>
                <Link to="/roadmaps" className="hover:text-burnt-light transition-colors flex items-center gap-1">
                  Explore Career Maps
                  <ArrowUpRight className="w-3 h-3 text-cream/40" />
                </Link>
              </li>
              <li>
                <Link to="/roadmap/frontend" className="hover:text-burnt-light transition-colors flex items-center gap-1">
                  Frontend Interactive Graph
                  <ArrowUpRight className="w-3 h-3 text-cream/40" />
                </Link>
              </li>
              <li>
                <Link to="/skill-gap" className="hover:text-burnt-light transition-colors flex items-center gap-1">
                  Skill Gap Analyzer
                  <ArrowUpRight className="w-3 h-3 text-cream/40" />
                </Link>
              </li>
              <li>
                <Link to="/ai-mentor" className="hover:text-burnt-light transition-colors flex items-center gap-1">
                  Mapped AI Career Mentor
                  <ArrowUpRight className="w-3 h-3 text-cream/40" />
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-burnt-light transition-colors flex items-center gap-1">
                  Developer Dashboard
                  <ArrowUpRight className="w-3 h-3 text-cream/40" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Philosophy */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-mono text-cream/50 mb-4 font-semibold">
              The Mapped Formula
            </h4>
            <div className="space-y-3 text-xs text-cream/70 font-mono">
              <div className="p-2.5 rounded bg-deep-card border border-brown/30">
                <span className="text-burnt-light font-bold">01. LOCATION</span>
                <p className="text-[11px] text-cream/60 mt-0.5">Diagnose current competencies</p>
              </div>
              <div className="p-2.5 rounded bg-deep-card border border-brown/30">
                <span className="text-burnt-light font-bold">02. DESTINATION</span>
                <p className="text-[11px] text-cream/60 mt-0.5">Target production-grade job roles</p>
              </div>
              <div className="p-2.5 rounded bg-deep-card border border-brown/30">
                <span className="text-burnt-light font-bold">03. DIRECT PATH</span>
                <p className="text-[11px] text-cream/60 mt-0.5">Skip what you know, master gaps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-brown/30 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
          <p>© {new Date().getFullYear()} MAPPED. Your Career, Mapped. All rights reserved.</p>
          <div className="flex items-center gap-1 text-cream/60">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-burnt fill-burnt" />
            <span>for developer career progression</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
