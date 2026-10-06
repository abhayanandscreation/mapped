import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  subtext?: string;
  icon: LucideIcon;
  badge?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  subtext,
  icon: Icon,
  badge,
}) => {
  return (
    <div className="bg-cream-card/90 border border-brown/25 hover:border-burnt/50 rounded-xl p-5 shadow-warm transition-all duration-200 hover:-translate-y-0.5 group">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-burnt/10 border border-burnt/20 flex items-center justify-center text-burnt group-hover:bg-burnt group-hover:text-cream transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        {badge && (
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cream-dark text-brown border border-brown/20">
            {badge}
          </span>
        )}
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-bold font-mono text-deep tracking-tight">
          {value}
        </div>
        <div className="text-xs uppercase tracking-wider font-semibold text-brown/90 mt-1">
          {label}
        </div>
        {subtext && (
          <div className="text-xs text-deep/60 mt-1">
            {subtext}
          </div>
        )}
      </div>
    </div>
  );
};
