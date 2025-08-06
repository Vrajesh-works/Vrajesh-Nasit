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
  Coffee
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
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
    <div className="portfolio-sidebar h-screen w-sidebar fixed left-0 top-0 flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3 shadow-glow">
            JD
          </div>
          <h1 className="text-xl font-bold text-foreground">John Doe</h1>
          <p className="text-sm text-muted-foreground mt-1">Full Stack Developer</p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
            <MapPin className="w-3 h-3" />
            <span>San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`portfolio-nav-item w-full ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Social Links & Status */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center justify-center gap-1 text-xs text-success mb-4">
          <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
          <span>Available for work</span>
        </div>
        
        <div className="flex justify-center gap-3">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-200"
                aria-label={social.label}
              >
                <Icon className="w-4 h-4" />
              </a>
            );
          })}
        </div>
        
        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mt-3">
          <Coffee className="w-3 h-3" />
          <span>Fueled by coffee</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;