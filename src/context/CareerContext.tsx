import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActivityItem, ChatMessage } from '../types';
import { INITIAL_CHAT_MESSAGES } from '../data/aiMockData';
import confetti from 'canvas-confetti';

interface CareerContextType {
  completedTopicIds: string[];
  currentTopicId: string;
  targetRole: string;
  currentSkills: string[];
  streakDays: number;
  activityHistory: ActivityItem[];
  chatHistory: ChatMessage[];
  markTopicComplete: (topicId: string, title?: string) => void;
  markTopicIncomplete: (topicId: string) => void;
  toggleSkill: (skillName: string) => void;
  setSkills: (skills: string[]) => void;
  setTargetRole: (role: string) => void;
  addChatMessage: (message: ChatMessage) => void;
  calculateJobReadiness: (roleId?: string) => number;
  resetToDefaults: () => void;
}

const DEFAULT_COMPLETED_TOPICS = [
  'fe-start',
  'fe-internet',
  'fe-html',
  'fe-a11y',
  'fe-css',
  'fe-responsive',
  'fe-tailwind',
  'fe-js',
  'fe-dom',
  'fe-async',
  'fe-browser',
  'fe-git',
  'fe-npm',
  'fe-ts',
  'fe-ts-advanced',
  'fe-react',
  'fe-routing',
  'fe-build',
  // Completed topics across started tracks to total 27
  'be-start',
  'be-lang',
  'be-api',
  'be-db-sql',
  'java-core',
  'java-oop',
  'java-collections',
  'java-streams',
  'java-jdbc',
];

const DEFAULT_ACTIVITIES: ActivityItem[] = [
  { id: 'act-1', text: 'Completed JavaScript (ES6+)', date: '2 hours ago', type: 'completed' },
  { id: 'act-2', text: 'Completed Git & Collaboration', date: 'Yesterday', type: 'completed' },
  { id: 'act-3', text: 'Started React Hooks Deep Dive', date: 'Yesterday', type: 'started' },
  { id: 'act-4', text: 'Completed DOM & Events Manipulation', date: '3 days ago', type: 'completed' },
];

const DEFAULT_SKILLS = [
  'Java',
  'SQL',
  'Git',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'TypeScript',
  'OOP'
];

const CareerContext = createContext<CareerContextType | undefined>(undefined);

export const CareerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial from localStorage or defaults
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('mapped_completed_topics');
    return saved ? JSON.parse(saved) : DEFAULT_COMPLETED_TOPICS;
  });

  const [currentTopicId] = useState<string>('fe-hooks');

  const [targetRole, setTargetRoleState] = useState<string>(() => {
    return localStorage.getItem('mapped_target_role') || 'Frontend Developer';
  });

  const [currentSkills, setCurrentSkills] = useState<string[]>(() => {
    const saved = localStorage.getItem('mapped_user_skills');
    return saved ? JSON.parse(saved) : DEFAULT_SKILLS;
  });

  const [streakDays] = useState<number>(8);

  const [activityHistory, setActivityHistory] = useState<ActivityItem[]>(() => {
    const saved = localStorage.getItem('mapped_activity_history');
    return saved ? JSON.parse(saved) : DEFAULT_ACTIVITIES;
  });

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('mapped_chat_history');
    return saved ? JSON.parse(saved) : INITIAL_CHAT_MESSAGES;
  });

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('mapped_completed_topics', JSON.stringify(completedTopicIds));
  }, [completedTopicIds]);

  useEffect(() => {
    localStorage.setItem('mapped_target_role', targetRole);
  }, [targetRole]);

  useEffect(() => {
    localStorage.setItem('mapped_user_skills', JSON.stringify(currentSkills));
  }, [currentSkills]);

  useEffect(() => {
    localStorage.setItem('mapped_activity_history', JSON.stringify(activityHistory));
  }, [activityHistory]);

  useEffect(() => {
    localStorage.setItem('mapped_chat_history', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const markTopicComplete = (topicId: string, title?: string) => {
    if (!completedTopicIds.includes(topicId)) {
      setCompletedTopicIds((prev) => [...prev, topicId]);
      
      // Trigger celebration
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#C05800', '#713600', '#FDFBD4', '#38240D']
        });
      } catch {
        // Fallback gracefully
      }

      // Add to activity history
      const newActivity: ActivityItem = {
        id: `act-${Date.now()}`,
        text: `Completed ${title || topicId}`,
        date: 'Just now',
        type: 'completed',
        topicId
      };
      setActivityHistory((prev) => [newActivity, ...prev.slice(0, 10)]);
    }
  };

  const markTopicIncomplete = (topicId: string) => {
    setCompletedTopicIds((prev) => prev.filter((id) => id !== topicId));
  };

  const toggleSkill = (skillName: string) => {
    setCurrentSkills((prev) => {
      if (prev.includes(skillName)) {
        return prev.filter((s) => s !== skillName);
      } else {
        return [...prev, skillName];
      }
    });
  };

  const setSkills = (skills: string[]) => {
    setCurrentSkills(skills);
  };

  const setTargetRole = (role: string) => {
    setTargetRoleState(role);
  };

  const addChatMessage = (message: ChatMessage) => {
    setChatHistory((prev) => [...prev, message]);
  };

  const calculateJobReadiness = (_roleId?: string): number => {
    // Dynamic formula based on skills and completed topics
    const baseScore = 40;
    const skillBonus = Math.min(currentSkills.length * 4, 30);
    const topicsBonus = Math.min(completedTopicIds.length * 1.5, 25);
    return Math.min(Math.round(baseScore + skillBonus + topicsBonus), 88);
  };

  const resetToDefaults = () => {
    setCompletedTopicIds(DEFAULT_COMPLETED_TOPICS);
    setCurrentSkills(DEFAULT_SKILLS);
    setTargetRoleState('Frontend Developer');
    setActivityHistory(DEFAULT_ACTIVITIES);
    setChatHistory(INITIAL_CHAT_MESSAGES);
    localStorage.clear();
  };

  return (
    <CareerContext.Provider
      value={{
        completedTopicIds,
        currentTopicId,
        targetRole,
        currentSkills,
        streakDays,
        activityHistory,
        chatHistory,
        markTopicComplete,
        markTopicIncomplete,
        toggleSkill,
        setSkills,
        setTargetRole,
        addChatMessage,
        calculateJobReadiness,
        resetToDefaults,
      }}
    >
      {children}
    </CareerContext.Provider>
  );
};

export const useCareer = () => {
  const context = useContext(CareerContext);
  if (!context) {
    throw new Error('useCareer must be used within a CareerProvider');
  }
  return context;
};
