import { useState } from 'react';
import Sidebar from './Sidebar';
import ChatSection from './ChatSection';
import ProjectsSection from './ProjectsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';
import FunSection from './FunSection';
import ReviewSection from './ReviewSection';

const PortfolioLayout = () => {
  const [activeSection, setActiveSection] = useState('chat');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'chat':
        return <ChatSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'contact':
        return <ContactSection />;
      case 'fun':
        return <FunSection />;
      case 'review':
        return <ReviewSection />;
      default:
        return <ChatSection />;
    }
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={(section) => {
          setActiveSection(section);
          setIsMobileMenuOpen(false);
        }}
        isMobileMenuOpen={isMobileMenuOpen}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      
      {/* Main Content */}
      <main className="flex-1 md:ml-sidebar overflow-y-auto">
        <div className="min-h-full">
          {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default PortfolioLayout;