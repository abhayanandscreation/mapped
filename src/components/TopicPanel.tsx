import React from 'react';
import { X, CheckCircle2, Clock, BookOpen, ExternalLink, Video, Terminal, FolderGit2, Sparkles, Undo2 } from 'lucide-react';
import { RoadmapTopic, TopicStatus } from '../types';
import { TOPIC_DETAILS } from '../data/roadmapsData';

const formatPrerequisite = (prereq: string): string => {
  if (TOPIC_DETAILS[prereq]?.title) {
    return TOPIC_DETAILS[prereq].title;
  }
  return prereq;
};

interface TopicPanelProps {
  topic: RoadmapTopic | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleComplete: (topicId: string, title: string) => void;
  isCompleted: boolean;
  status: TopicStatus;
}

export const TopicPanel: React.FC<TopicPanelProps> = ({
  topic,
  isOpen,
  onClose,
  onToggleComplete,
  isCompleted,
  status,
}) => {
  if (!isOpen || !topic) return null;

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'doc':
        return BookOpen;
      case 'course':
        return Video;
      case 'practice':
        return Terminal;
      case 'project':
        return FolderGit2;
      default:
        return ExternalLink;
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-cream-card/95 backdrop-blur-md border-l border-brown/30 shadow-warm-xl flex flex-col animate-slideLeft">
      {/* Drawer Header */}
      <div className="p-6 border-b border-brown/20 bg-cream/80 flex items-start justify-between">
        <div className="space-y-1 pr-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded bg-brown/10 text-brown">
              {topic.category}
            </span>
            <span className="text-xs font-mono text-deep/60 flex items-center gap-1">
              <Clock className="w-3 h-3 text-burnt" />
              ~{topic.estimatedDays} days
            </span>
          </div>
          <h2 className="text-2xl font-bold font-editorial text-deep leading-tight">
            {topic.title}
          </h2>
          <div className="flex items-center gap-2 pt-1">
            <span
              className={`text-xs font-semibold px-2.5 py-0.5 rounded-full font-mono flex items-center gap-1.5 ${
                isCompleted
                  ? 'bg-cream text-brown border border-brown/30'
                  : status === 'current'
                  ? 'bg-burnt text-cream'
                  : 'bg-brown/15 text-deep/70'
              }`}
            >
              {isCompleted ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brown" />
                  Completed
                </>
              ) : status === 'current' ? (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  In Progress
                </>
              ) : (
                'Upcoming Topic'
              )}
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg text-deep/60 hover:text-deep hover:bg-cream-dark transition-colors"
          aria-label="Close drawer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* What is it? */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brown mb-2">
            What is it?
          </h4>
          <p className="text-sm text-deep/80 leading-relaxed bg-cream/70 p-3.5 rounded-lg border border-brown/15">
            {topic.whatIsIt}
          </p>
        </div>

        {/* Why learn it? */}
        <div>
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brown mb-2">
            Why learn it?
          </h4>
          <p className="text-sm text-deep/80 leading-relaxed bg-burnt/5 p-3.5 rounded-lg border border-burnt/20">
            {topic.whyLearnIt}
          </p>
        </div>

        {/* Prerequisites */}
        {topic.prerequisites && topic.prerequisites.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brown mb-2">
              Prerequisites
            </h4>
            <div className="flex flex-wrap gap-2">
              {topic.prerequisites.map((prereq) => (
                <span
                  key={prereq}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-cream-dark/90 text-deep border border-brown/20"
                >
                  <CheckCircle2 className="w-3 h-3 text-brown" />
                  {formatPrerequisite(prereq)}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* What to Learn Checklist */}
        {topic.whatToLearn && topic.whatToLearn.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brown mb-2">
              Core Concepts to Master
            </h4>
            <ul className="space-y-2">
              {topic.whatToLearn.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-deep/85 bg-cream/50 p-2 rounded border border-brown/10"
                >
                  <span className="w-4 h-4 rounded-full bg-burnt/10 text-burnt font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Curated Resources */}
        {topic.resources && topic.resources.length > 0 && (
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brown mb-3">
              Curated Learning Resources
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {topic.resources.map((res, index) => {
                const Icon = getResourceIcon(res.type);
                return (
                  <div
                    key={index}
                    className="p-3 bg-cream/90 rounded-lg border border-brown/20 hover:border-burnt/60 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono uppercase font-semibold text-burnt px-1.5 py-0.5 rounded bg-burnt/10">
                        {res.label}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-brown/70 group-hover:text-burnt transition-colors" />
                    </div>
                    <div className="text-xs font-bold text-deep group-hover:text-burnt transition-colors line-clamp-2">
                      {res.title}
                    </div>
                    <div className="text-[11px] text-deep/50 mt-1">
                      {res.source}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Drawer Footer Actions */}
      <div className="p-4 sm:p-6 border-t border-brown/20 bg-cream/90">
        <button
          onClick={() => onToggleComplete(topic.id, topic.title)}
          className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-warm flex items-center justify-center gap-2 ${
            isCompleted
              ? 'bg-brown hover:bg-brown-hover text-cream'
              : 'bg-burnt hover:bg-burnt-hover text-cream hover:shadow-glow-orange active:scale-[0.99]'
          }`}
        >
          {isCompleted ? (
            <>
              <Undo2 className="w-4 h-4" />
              Mark as Incomplete
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
              Mark as Complete
            </>
          )}
        </button>
      </div>
    </div>
  );
};
