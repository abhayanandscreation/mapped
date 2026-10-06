import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { CheckCircle2, Lock, Flame, Bookmark, ArrowRight } from 'lucide-react';
import { TopicStatus } from '../types';

interface CustomNodeData {
  topicId: string;
  title: string;
  category: string;
  status: TopicStatus;
  stepNumber?: string;
  isOptional?: boolean;
}

export const CustomRoadmapNode = memo(({ data }: { data: CustomNodeData }) => {
  const { title, category, status, stepNumber, isOptional } = data;

  const renderStatusBadge = () => {
    switch (status) {
      case 'completed':
        return (
          <div className="flex items-center gap-1 text-[10px] font-bold text-brown uppercase tracking-wider font-mono">
            <CheckCircle2 className="w-3.5 h-3.5 text-brown stroke-[2.5]" />
            Completed
          </div>
        );
      case 'current':
        return (
          <div className="flex items-center gap-1 text-[10px] font-bold text-cream uppercase tracking-wider font-mono animate-pulse">
            <Flame className="w-3.5 h-3.5 text-cream fill-cream" />
            Current Focus
          </div>
        );
      case 'locked':
        return (
          <div className="flex items-center gap-1 text-[10px] font-medium text-deep/50 uppercase tracking-wider font-mono">
            <Lock className="w-3 h-3 text-deep/40" />
            Prerequisites
          </div>
        );
      case 'optional':
        return (
          <div className="flex items-center gap-1 text-[10px] font-medium text-brown/70 uppercase tracking-wider font-mono">
            <Bookmark className="w-3 h-3 text-brown/50" />
            Optional
          </div>
        );
      default:
        return null;
    }
  };

  // Status-dependent container styles
  const getNodeClasses = () => {
    if (status === 'current') {
      return 'bg-burnt text-cream border-2 border-burnt-light shadow-warm-lg ring-4 ring-burnt/30 scale-[1.02]';
    }
    if (status === 'completed') {
      return 'bg-cream-card text-deep border-2 border-brown/40 hover:border-burnt/60 shadow-warm hover:shadow-warm-lg';
    }
    if (status === 'optional' || isOptional) {
      return 'bg-cream/90 text-deep/80 border-2 border-dashed border-brown/30 hover:border-brown/60 shadow-sm';
    }
    // locked
    return 'bg-cream-card/50 text-deep/60 border border-brown/20 hover:border-brown/40 shadow-none';
  };

  return (
    <div
      className={`relative rounded-xl p-3.5 sm:p-4 min-w-[200px] max-w-[260px] transition-all duration-200 cursor-pointer group select-none ${getNodeClasses()}`}
    >
      {/* React Flow Handles for top/bottom/left/right connections */}
      <Handle
        type="target"
        position={Position.Top}
        className="!w-2.5 !h-2.5 !bg-brown !border-2 !border-cream rounded-full"
      />
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        className="!w-2.5 !h-2.5 !bg-brown !border-2 !border-cream rounded-full"
      />

      {/* Header bar inside node */}
      <div className="flex items-center justify-between gap-2 mb-1.5">
        <span
          className={`text-[9px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${
            status === 'current'
              ? 'bg-deep/30 text-cream'
              : 'bg-brown/10 text-brown'
          }`}
        >
          {category}
        </span>
        {stepNumber && (
          <span
            className={`text-[10px] font-mono font-bold ${
              status === 'current' ? 'text-cream/80' : 'text-deep/40'
            }`}
          >
            {stepNumber}
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`font-bold text-xs sm:text-sm leading-snug line-clamp-2 ${
          status === 'current' ? 'text-cream' : 'text-deep'
        }`}
      >
        {title}
      </h3>

      {/* Footer / Status Indicator */}
      <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between">
        {renderStatusBadge()}
        <span
          className={`transition-transform duration-200 group-hover:translate-x-1 ${
            status === 'current' ? 'text-cream' : 'text-burnt'
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="!w-2.5 !h-2.5 !bg-burnt !border-2 !border-cream rounded-full"
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        className="!w-2.5 !h-2.5 !bg-burnt !border-2 !border-cream rounded-full"
      />
    </div>
  );
});

CustomRoadmapNode.displayName = 'CustomRoadmapNode';
