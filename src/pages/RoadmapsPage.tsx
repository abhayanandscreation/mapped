import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, ArrowRight, BookOpen, Layers, Code2, Server, Cpu, CloudCog, Database, Terminal, Filter } from 'lucide-react';
import { CAREER_PATHS } from '../data/roadmapsData';
import { ProgressBar } from '../components/ProgressBar';
import { useCareer } from '../context/CareerContext';

export const RoadmapsPage: React.FC = () => {
  const { completedTopicIds } = useCareer();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack', 'AI/ML', 'DevOps'];

  const filteredPaths = CAREER_PATHS.filter((path) => {
    const matchesSearch =
      path.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      path.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || path.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const getPathIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return Code2;
      case 'backend':
      case 'java':
        return Server;
      case 'fullstack':
        return Layers;
      case 'aiml':
        return Cpu;
      case 'devops':
        return CloudCog;
      case 'data-analyst':
        return Database;
      default:
        return Terminal;
    }
  };

  const getPathProgress = (id: string) => {
    if (id === 'frontend') {
      const feCompleted = completedTopicIds.filter((tid) => tid.startsWith('fe-')).length;
      return Math.min(Math.round((feCompleted / 25) * 100), 100);
    }
    if (id === 'backend') {
      const beCompleted = completedTopicIds.filter((tid) => tid.startsWith('be-')).length;
      return Math.min(Math.round((beCompleted / 9) * 100), 100);
    }
    if (id === 'java') {
      const javaCompleted = completedTopicIds.filter((tid) => tid.startsWith('java-') || tid === 'be-lang').length;
      return Math.min(Math.round((javaCompleted / 22) * 100), 100);
    }
    return 0;
  };

  return (
    <div className="min-h-screen bg-cream text-deep pb-24">
      {/* Header Section */}
      <div className="bg-deep text-cream py-14 sm:py-20 border-b border-brown/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-burnt-light">
              Career Catalog
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-editorial text-cream mt-2">
              Explore Career Maps
            </h1>
            <p className="text-base sm:text-lg text-cream/75 mt-3 leading-relaxed">
              "Choose a destination. We'll show you the path."
            </p>
          </div>

          {/* Search Bar & Filters */}
          <div className="mt-8 space-y-4">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-cream/50" />
              <input
                type="text"
                placeholder="Search career paths (e.g. Frontend, Java, Docker, Machine Learning)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-deep-card border border-brown/40 rounded-xl pl-11 pr-4 py-3 text-sm text-cream placeholder-cream/40 focus:outline-none focus:border-burnt focus:ring-1 focus:ring-burnt transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-cream/50 hover:text-cream"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-xs font-mono text-cream/50 flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5" />
                Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shrink-0 transition-all ${
                    selectedCategory === cat
                      ? 'bg-burnt text-cream shadow-warm-sm'
                      : 'bg-deep-surface text-cream/70 hover:text-cream border border-brown/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmaps Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-mono text-deep/70">
            Showing <strong>{filteredPaths.length}</strong> verified career paths
          </p>
        </div>

        {filteredPaths.length === 0 ? (
          <div className="bg-cream-card/50 border border-brown/20 rounded-2xl p-12 text-center max-w-md mx-auto space-y-3">
            <Search className="w-8 h-8 text-brown mx-auto" />
            <h3 className="text-lg font-bold font-editorial">No matching career paths</h3>
            <p className="text-xs text-deep/70">
              Try adjusting your search query or switching to another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="mt-2 text-xs font-bold text-burnt underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPaths.map((path) => {
              const Icon = getPathIcon(path.id);
              const progress = getPathProgress(path.id);

              return (
                <div
                  key={path.id}
                  className="bg-cream-card/90 border border-brown/25 hover:border-burnt/60 rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-burnt/10 border border-burnt/20 flex items-center justify-center text-burnt group-hover:bg-burnt group-hover:text-cream transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-cream-dark text-brown border border-brown/20">
                          {path.difficulty}
                        </span>
                        <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-brown/10 text-deep">
                          {path.category}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold font-editorial text-deep group-hover:text-burnt transition-colors">
                      {path.title}
                    </h2>
                    <p className="text-xs text-brown/90 font-medium mt-1">
                      {path.tagline}
                    </p>
                    <p className="text-xs text-deep/75 mt-3 leading-relaxed line-clamp-3">
                      {path.description}
                    </p>
                  </div>

                  {/* Bottom Stats & Action */}
                  <div className="mt-6 pt-4 border-t border-brown/20 space-y-4">
                    {/* Quick Meta */}
                    <div className="flex items-center justify-between text-xs font-mono text-deep/70">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-burnt" />
                        {path.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5 text-burnt" />
                        {path.totalTopics} topics
                      </span>
                    </div>

                    {/* Progress Bar */}
                    {progress > 0 && (
                      <ProgressBar
                        value={progress}
                        label="Your Progress"
                        size="sm"
                      />
                    )}

                    {/* View Map CTA */}
                    <Link
                      to={`/roadmap/${path.id}`}
                      className="w-full py-2.5 px-4 rounded-xl bg-brown hover:bg-burnt text-cream text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-warm-sm group-hover:shadow-warm active:scale-[0.99]"
                    >
                      View Map
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
