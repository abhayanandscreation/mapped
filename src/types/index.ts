export type TopicStatus = 'completed' | 'current' | 'locked' | 'optional';

export interface ResourceItem {
  title: string;
  type: 'doc' | 'course' | 'practice' | 'project';
  label: string;
  source: string;
}

export interface RoadmapTopic {
  id: string;
  title: string;
  category: string;
  status: TopicStatus;
  whatIsIt: string;
  whyLearnIt: string;
  prerequisites: string[];
  whatToLearn: string[];
  estimatedDays: number;
  resources: ResourceItem[];
}

export interface CareerPathSummary {
  id: string;
  title: string;
  tagline: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  totalTopics: number;
  category: 'Frontend' | 'Backend' | 'Full Stack' | 'AI/ML' | 'DevOps' | 'Data' | 'Architecture';
  popular: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
}

export interface RoleRequirement {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    priority: 'high' | 'medium' | 'low';
    category: string;
  }[];
  standardPath: {
    name: string;
    stage: 'foundation' | 'core' | 'advanced' | 'ready';
    estimatedDays: number;
  }[];
}

export interface ActivityItem {
  id: string;
  text: string;
  date: string;
  type: 'completed' | 'started' | 'analyzed';
  topicId?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  pathRecommendation?: {
    step: string;
    title: string;
    duration: string;
    highlight?: boolean;
  }[];
  verdict?: string;
}
