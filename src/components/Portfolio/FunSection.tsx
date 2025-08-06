import { useState } from 'react';
import { Coffee, Music, Camera, Gamepad2, Plane, Book, Trophy, Heart } from 'lucide-react';

const FunSection = () => {
  const [activeHobby, setActiveHobby] = useState<string | null>(null);

  const hobbies = [
    {
      id: 'coffee',
      title: 'Coffee Enthusiast',
      icon: Coffee,
      description: 'Third-wave coffee obsessed. Currently exploring single-origin beans from Ethiopia.',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      stats: '☕ 547 cups this year'
    },
    {
      id: 'music',
      title: 'Music Producer',
      icon: Music,
      description: 'Creating ambient electronic music in my spare time. Released 3 tracks on Spotify.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      stats: '🎵 12 tracks produced'
    },
    {
      id: 'photography',
      title: 'Street Photography',
      icon: Camera,
      description: 'Capturing urban moments and city life. Published in 2 local magazines.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      stats: '📸 2.3k photos taken'
    },
    {
      id: 'gaming',
      title: 'Indie Game Dev',
      icon: Gamepad2,
      description: 'Building small games with Godot engine. Working on a puzzle platformer.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      stats: '🎮 1 game in progress'
    }
  ];

  const achievements = [
    { icon: Trophy, text: 'Completed 5 coding challenges this month' },
    { icon: Book, text: 'Read 12 tech books this year' },
    { icon: Plane, text: 'Worked remotely from 8 countries' },
    { icon: Heart, text: 'Mentored 15+ junior developers' }
  ];

  const quirkyFacts = [
    "I can solve a Rubik's cube in under 2 minutes",
    "My GitHub contribution graph looks like a heat map of my coffee consumption",
    "I've built a smart home system that plays music based on the weather",
    "I collect vintage keyboards (currently own 12)",
    "My code comments sometimes include haikus",
    "I maintain a 1,000+ day streak on Duolingo (learning Japanese)"
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Beyond the Code</h1>
        <p className="text-muted-foreground text-lg">
          The human side of this developer - hobbies, interests, and fun facts that make me, me.
        </p>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          const isActive = activeHobby === hobby.id;
          
          return (
            <div
              key={hobby.id}
              className={`portfolio-card cursor-pointer transition-all duration-300 ${
                isActive ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              onClick={() => setActiveHobby(isActive ? null : hobby.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${hobby.bgColor} flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${hobby.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{hobby.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{hobby.description}</p>
                  <div className="text-xs text-primary font-medium">{hobby.stats}</div>
                </div>
              </div>
              
              {isActive && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                  <p className="text-sm text-muted-foreground">
                    Click to close • This hobby takes up about 5-10 hours of my week and keeps me creatively energized!
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Achievements */}
      <div className="portfolio-card mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">Recent Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">{achievement.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quirky Facts */}
      <div className="portfolio-card mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">Random Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {quirkyFacts.map((fact, index) => (
            <div key={index} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
              <span className="text-primary text-lg mt-0.5">•</span>
              <span className="text-sm text-muted-foreground">{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Personality Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="portfolio-card">
          <h2 className="text-xl font-semibold text-foreground mb-4">Work Style</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Morning Person</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-5/6 h-full bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Collaboration</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-4/5 h-full bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Detail Oriented</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-full h-full bg-primary rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Adaptability</span>
              <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                <div className="w-5/6 h-full bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-card">
          <h2 className="text-xl font-semibold text-foreground mb-4">Current Obsessions</h2>
          <div className="space-y-3">
            <div className="p-3 bg-gradient-primary/10 rounded-lg">
              <div className="text-sm font-medium text-foreground">🚀 Learning Rust</div>
              <div className="text-xs text-muted-foreground mt-1">Systems programming meets web development</div>
            </div>
            <div className="p-3 bg-gradient-primary/10 rounded-lg">
              <div className="text-sm font-medium text-foreground">🎨 UI/UX Design</div>
              <div className="text-xs text-muted-foreground mt-1">Creating beautiful, intuitive interfaces</div>
            </div>
            <div className="p-3 bg-gradient-primary/10 rounded-lg">
              <div className="text-sm font-medium text-foreground">🌱 Sustainable Tech</div>
              <div className="text-xs text-muted-foreground mt-1">Building eco-friendly applications</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-gradient-card rounded-2xl border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-3">Want to Chat?</h2>
        <p className="text-muted-foreground mb-6">
          Whether it's about code, coffee, or creative projects - I'm always up for interesting conversations!
        </p>
        <div className="flex gap-3 justify-center">
          <button className="portfolio-button primary">
            <span>Let's Connect</span>
          </button>
          <button className="portfolio-button secondary">
            <span>View My Playlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunSection;