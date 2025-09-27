import { useState } from 'react';
import { 
  MessageCircle, 
  FolderOpen, 
  Briefcase, 
  Mail, 
  Heart, 
  Star,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Coffee,
  Menu,
  X
} from 'lucide-react';
import ProfileAvatar from '../ui/ProfileAvatar';
import ThemeToggle from '../ui/ThemeToggle';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isMobileMenuOpen: boolean;
  onMobileMenuToggle: () => void;
}

const Sidebar = ({ activeSection, onSectionChange, isMobileMenuOpen, onMobileMenuToggle }: SidebarProps) => {
  const navigationItems = [
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
    { id: 'fun', label: 'Fun', icon: Heart },
    { id: 'review', label: 'Reviews', icon: Star },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onMobileMenuToggle}
        className="fixed top-4 right-4 z-50 md:hidden bg-card border border-border rounded-lg p-2 shadow-md"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={onMobileMenuToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        portfolio-sidebar h-screen w-sidebar fixed left-0 top-0 flex flex-col z-50
        transform transition-transform duration-300 ease-in-out
        md:transform-none
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Profile Section */}
        <div className="p-4 md:p-6 border-b border-border bg-gradient-hero">
          <div className="flex flex-col items-center text-center animate-fade-in">
            <ProfileAvatar 
              size="lg" 
              showStatus={true}
              className="mb-3 md:mb-4 animate-bounce-gentle"
              alt="John Doe - Full Stack Developer"
            />
            <h1 className="text-lg md:text-xl font-bold text-foreground mb-1">John Doe</h1>
            <p className="text-sm text-muted-foreground font-medium">Full Stack Developer</p>
            <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2 opacity-80">
              <MapPin className="w-3 h-3" />
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 md:p-4 overflow-y-auto">
          <div className="space-y-1 md:space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`portfolio-nav-item w-full text-sm md:text-base ${isActive ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Social Links & Status */}
        <div className="p-3 md:p-4 border-t border-border bg-gradient-subtle">
          <div className="flex items-center justify-center gap-2 text-xs text-success mb-3 md:mb-4 font-medium">
            <div className="status-indicator">
              <div className="w-2 h-2 bg-success rounded-full"></div>
            </div>
            <span>Available for work</span>
          </div>
          
          <div className="flex justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 md:w-10 md:h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200 hover-lift focus:outline-none focus:ring-2 focus:ring-focus-ring focus:ring-offset-2"
                  aria-label={`Visit my ${social.label} profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              );
            })}
            <ThemeToggle />
          </div>
          
          <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground opacity-75">
            <Coffee className="w-3 h-3" />
            <span className="hidden sm:inline">Fueled by coffee</span>
            <span className="sm:hidden">Coffee ☕</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;