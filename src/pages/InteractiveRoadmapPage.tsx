import React, { useState, useMemo, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ReactFlow,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  BackgroundVariant
} from '@xyflow/react';
import { 
  ArrowLeft, 
  ListFilter
} from 'lucide-react';
import { CustomRoadmapNode } from '../components/CustomRoadmapNode';
import { TopicPanel } from '../components/TopicPanel';
import { ProgressBar } from '../components/ProgressBar';
import { useCareer } from '../context/CareerContext';
import { 
  INITIAL_FRONTEND_NODES, 
  INITIAL_FRONTEND_EDGES, 
  BACKEND_NODES, 
  BACKEND_EDGES, 
  TOPIC_DETAILS, 
  CAREER_PATHS 
} from '../data/roadmapsData';
import { RoadmapTopic, TopicStatus } from '../types';

const nodeTypes = {
  roadmapNode: CustomRoadmapNode,
};

export const InteractiveRoadmapPage: React.FC = () => {
  const { id = 'frontend' } = useParams<{ id: string }>();
  const { completedTopicIds, markTopicComplete, markTopicIncomplete } = useCareer();

  const careerInfo = CAREER_PATHS.find((p) => p.id === id) || CAREER_PATHS[0];

  // Pick initial data based on route
  const baseNodes = id === 'backend' || id === 'java' ? BACKEND_NODES : INITIAL_FRONTEND_NODES;
  const baseEdges = id === 'backend' || id === 'java' ? BACKEND_EDGES : INITIAL_FRONTEND_EDGES;

  // Selected topic for side panel
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>('fe-hooks');
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'current' | 'locked'>('all');
  const [viewMode, setViewMode] = useState<'graph' | 'stacked'>('graph');

  // Compute dynamic nodes reflecting current completion state
  const computedNodes: Node[] = useMemo(() => {
    return baseNodes.map((node) => {
      const isCompleted = completedTopicIds.includes(node.id);
      let dynamicStatus: TopicStatus = (node.data.status as TopicStatus) || 'locked';

      if (isCompleted) {
        dynamicStatus = 'completed';
      } else if (node.id === 'fe-hooks' || node.id === 'be-spring') {
        dynamicStatus = 'current';
      } else if (node.id === 'fe-a11y') {
        dynamicStatus = 'optional';
      }

      return {
        ...node,
        data: {
          ...node.data,
          status: dynamicStatus,
          isCompleted,
        },
      };
    });
  }, [baseNodes, completedTopicIds]);

  const [nodes, setNodes, onNodesChange] = useNodesState(computedNodes);
  const [edges, , onEdgesChange] = useEdgesState(baseEdges);

  // Keep nodes in sync when computedNodes changes
  React.useEffect(() => {
    setNodes(computedNodes);
  }, [computedNodes, setNodes]);

  // Node click handler
  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedTopicId(node.id);
    setIsPanelOpen(true);
  }, []);

  // Filter nodes if filter applied
  const displayedNodes = useMemo(() => {
    if (statusFilter === 'all') return nodes;
    return nodes.filter((n) => (n.data.status as string) === statusFilter);
  }, [nodes, statusFilter]);

  // Selected topic data object
  const currentTopicData: RoadmapTopic | null = useMemo(() => {
    if (!selectedTopicId) return null;
    if (TOPIC_DETAILS[selectedTopicId]) {
      return TOPIC_DETAILS[selectedTopicId];
    }
    // Fallback topic metadata
    const activeNode = baseNodes.find((n) => n.id === selectedTopicId);
    return {
      id: selectedTopicId,
      title: (activeNode?.data.title as string) || selectedTopicId,
      category: (activeNode?.data.category as string) || 'Engineering',
      status: completedTopicIds.includes(selectedTopicId) ? 'completed' : 'locked',
      whatIsIt: `Comprehensive mastery of ${(activeNode?.data.title as string) || selectedTopicId} for modern software engineering teams.`,
      whyLearnIt: 'Critical foundational competency tested heavily during technical job screener interviews.',
      prerequisites: ['Foundational Programming'],
      whatToLearn: [
        'Architecture and Core Principles',
        'Industry Best Practices and Patterns',
        'Performance, Security and Testing Guidelines',
      ],
      estimatedDays: 6,
      resources: [
        { title: 'Official Documentation & Guides', type: 'doc', label: 'Official Doc', source: 'Standard Spec' },
        { title: 'Deep Dive Video Masterclass', type: 'course', label: 'Video Course', source: 'Mapped Academy' },
        { title: 'Hands-on Coding Drills', type: 'practice', label: 'Practice', source: 'Sandbox Drills' },
        { title: 'Production Capstone Integration', type: 'project', label: 'Project', source: 'Portfolio Template' },
      ],
    };
  }, [selectedTopicId, baseNodes, completedTopicIds]);

  // Progress calculations
  const totalTopicsCount = baseNodes.length;
  const completedInPath = baseNodes.filter((n) => completedTopicIds.includes(n.id)).length;
  const progressPercent = totalTopicsCount > 0
    ? Math.min(Math.round((completedInPath / totalTopicsCount) * 100), 100)
    : 0;

  const displayCompletedCount = completedInPath;
  const displayTotalCount = totalTopicsCount;

  return (
    <div className="h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] flex flex-col bg-cream overflow-hidden">
      {/* 1. Header Toolbar */}
      <div className="bg-cream-card/90 border-b border-brown/25 px-4 sm:px-6 py-3 shrink-0 shadow-warm-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Left: Career Title & Subtitle */}
        <div className="flex items-center gap-3">
          <Link
            to="/roadmaps"
            className="p-2 rounded-lg text-deep/70 hover:text-deep hover:bg-cream-dark transition-colors border border-brown/20"
            title="Back to All Roadmaps"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold font-editorial text-deep leading-tight">
                {careerInfo.title}
              </h1>
              <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-burnt/10 text-burnt border border-burnt/20">
                Interactive Graph
              </span>
            </div>
            <p className="text-xs text-deep/70 hidden sm:block">
              {careerInfo.tagline}
            </p>
          </div>
        </div>

        {/* Right: Progress & View Controls */}
        <div className="flex items-center justify-between sm:justify-end gap-4">
          {/* Completion Meter */}
          <div className="w-44 sm:w-56">
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="font-bold text-deep">
                {progressPercent}% Complete
              </span>
              <span className="text-deep/60">
                {displayCompletedCount} / {displayTotalCount} topics
              </span>
            </div>
            <ProgressBar value={progressPercent} showPercentage={false} size="sm" />
          </div>

          {/* Graph vs Stacked Toggle (Mobile Friendly) */}
          <div className="flex items-center bg-cream-dark rounded-lg p-0.5 border border-brown/20">
            <button
              onClick={() => setViewMode('graph')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md font-semibold transition-all ${
                viewMode === 'graph' ? 'bg-burnt text-cream shadow-sm' : 'text-deep/70 hover:text-deep'
              }`}
              title="Interactive Flow Graph"
            >
              Graph
            </button>
            <button
              onClick={() => setViewMode('stacked')}
              className={`px-2.5 py-1 text-xs font-mono rounded-md font-semibold transition-all ${
                viewMode === 'stacked' ? 'bg-burnt text-cream shadow-sm' : 'text-deep/70 hover:text-deep'
              }`}
              title="Linear Stacked View"
            >
              List
            </button>
          </div>
        </div>
      </div>

      {/* 2. Secondary Filter Bar */}
      <div className="bg-cream px-4 sm:px-6 py-2 border-b border-brown/15 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          <span className="text-deep/50 flex items-center gap-1 shrink-0">
            <ListFilter className="w-3.5 h-3.5 text-burnt" />
            Filter Nodes:
          </span>
          {(['all', 'completed', 'current', 'locked'] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setStatusFilter(filter)}
              className={`px-2.5 py-0.5 rounded-full capitalize font-medium transition-colors shrink-0 ${
                statusFilter === filter
                  ? 'bg-brown text-cream'
                  : 'bg-cream-dark text-deep/70 hover:bg-cream-card border border-brown/20'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 text-deep/60 text-[11px]">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cream-card border-2 border-brown" />
            Completed
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-burnt animate-pulse" />
            Current Focus
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-cream border border-dashed border-brown/50" />
            Locked
          </span>
        </div>
      </div>

      {/* 3. Main Workspace Area */}
      <div className="flex-1 relative overflow-hidden">
        {viewMode === 'graph' ? (
          <div className="w-full h-full">
            <ReactFlow
              nodes={displayedNodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.25 }}
              minZoom={0.2}
              maxZoom={1.5}
              defaultEdgeOptions={{
                animated: false,
                style: { stroke: '#713600', strokeWidth: 2.5 },
              }}
            >
              <Background
                color="#713600"
                gap={24}
                size={1}
                variant={BackgroundVariant.Dots}
                className="opacity-15"
              />
              <Controls
                position="bottom-left"
                showInteractive={false}
                className="!bg-cream-card !border-brown/30"
              />
              <MiniMap
                position="bottom-right"
                nodeStrokeColor="#713600"
                nodeColor={(node) => {
                  if (node.data?.status === 'current') return '#C05800';
                  if (node.data?.status === 'completed') return '#EDE99C';
                  return '#FAF7C5';
                }}
                className="hidden sm:block"
                zoomable
                pannable
              />
            </ReactFlow>
          </div>
        ) : (
          /* Stacked List View (Great for accessibility & mobile) */
          <div className="h-full overflow-y-auto p-4 sm:p-8 max-w-3xl mx-auto space-y-3">
            {baseNodes.map((node, index) => {
              const isCompleted = completedTopicIds.includes(node.id);
              const isCurrent = node.id === 'fe-hooks' || node.id === 'be-spring';

              return (
                <div
                  key={node.id}
                  onClick={() => {
                    setSelectedTopicId(node.id);
                    setIsPanelOpen(true);
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    isCurrent
                      ? 'bg-burnt text-cream border-burnt-light shadow-warm'
                      : isCompleted
                      ? 'bg-cream-card text-deep border-brown/30'
                      : 'bg-cream-card/50 text-deep/60 border-brown/15'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                        isCurrent
                          ? 'bg-cream text-burnt'
                          : isCompleted
                          ? 'bg-brown/15 text-brown'
                          : 'bg-deep/10 text-deep/50'
                      }`}
                    >
                      {isCompleted ? '✓' : index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight">
                        {node.data.title as string}
                      </h4>
                      <span className="text-[11px] opacity-75 font-mono">
                        {node.data.category as string}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-semibold uppercase">
                    {isCurrent ? 'Focus' : isCompleted ? 'Completed' : 'Prerequisite'}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* 4. Slide-out Topic Detail Drawer */}
        <TopicPanel
          topic={currentTopicData}
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
          isCompleted={Boolean(selectedTopicId && completedTopicIds.includes(selectedTopicId))}
          status={
            selectedTopicId && completedTopicIds.includes(selectedTopicId)
              ? 'completed'
              : selectedTopicId === 'fe-hooks' || selectedTopicId === 'be-spring'
              ? 'current'
              : 'locked'
          }
          onToggleComplete={(topicId, title) => {
            if (completedTopicIds.includes(topicId)) {
              markTopicIncomplete(topicId);
            } else {
              markTopicComplete(topicId, title);
            }
          }}
        />
      </div>
    </div>
  );
};
