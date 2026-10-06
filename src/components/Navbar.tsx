import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Compass, GitFork, MessageSquareCode, LayoutDashboard, Sparkles, Menu, X, ArrowRight, User } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/', icon: Compass },
    { name: 'Roadmaps', path: '/roadmaps', icon: GitFork },
    { name: 'Skill Gap', path: '/skill-gap', icon: MapPin },
    { name: 'AI Mentor', path: '/ai-mentor', icon: MessageSquareCode },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 bg-deep text-cream border-b border-deep-border/50 backdrop-blur-md shadow-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="w-10 h-10 rounded-lg bg-burnt flex items-center justify-center text-cream shadow-warm transition-colors group-hover:bg-burnt-hover">
              {/* Distinctive Map / Waypoint Icon */}
              <svg 
                className="w-5 h-5 transition-transform group-hover:rotate-12 duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" y1="3" x2="9" y2="18" />
                <line x1="15" y1="6" x2="15" y2="21" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold tracking-wider text-xl sm:text-2xl font-mono text-cream">
                MAPPED
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-widest text-cream/60 -mt-1 font-medium">
                Career Navigation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 bg-deep-surface/80 px-3 py-1.5 rounded-full border border-brown/30">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? 'bg-burnt text-cream shadow-warm-sm'
                      : 'text-cream/80 hover:text-cream hover:bg-deep-card'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${active ? 'text-cream' : 'text-burnt'}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                location.pathname === '/dashboard'
                  ? 'bg-deep-card text-cream border-burnt'
                  : 'border-brown/40 text-cream/90 hover:bg-deep-card hover:text-cream'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-burnt" />
              Dashboard
            </Link>

            <Link
              to="/profile"
              title="View Profile"
              className={`p-2 rounded-lg border transition-all duration-200 ${
                location.pathname === '/profile'
                  ? 'bg-deep-card text-cream border-burnt'
                  : 'border-brown/40 text-cream/90 hover:bg-deep-card'
              }`}
            >
              <User className="w-4 h-4 text-cream/80" />
            </Link>

            <Link
              to="/roadmaps"
              className="flex items-center gap-1.5 bg-burnt hover:bg-burnt-hover text-cream px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider shadow-warm transition-all duration-200 hover:shadow-glow-orange active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5 text-cream" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/dashboard"
              className="p-2 text-cream/90 hover:text-cream"
              title="Dashboard"
            >
              <LayoutDashboard className="w-5 h-5 text-burnt" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-cream/90 hover:text-cream hover:bg-deep-card transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-deep border-b border-brown/30 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-semibold ${
                    active ? 'bg-burnt text-cream' : 'bg-deep-card text-cream/80'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cream" />
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-brown/30 flex flex-col gap-2">
            <Link
              to="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-deep-card text-xs font-semibold text-cream"
            >
              <span className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4 text-burnt" />
                Your Dashboard
              </span>
              <ArrowRight className="w-4 h-4 text-cream/40" />
            </Link>
            <Link
              to="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-deep-card text-xs font-semibold text-cream"
            >
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-burnt" />
                Developer Profile
              </span>
              <ArrowRight className="w-4 h-4 text-cream/40" />
            </Link>
            <Link
              to="/roadmaps"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-burnt text-cream py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
            >
              Explore All Roadmaps
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
