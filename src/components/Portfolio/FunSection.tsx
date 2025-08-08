import { useState, useEffect } from 'react';
import { Coffee, Music, Camera, Gamepad2, Plane, Book, Trophy, Heart, Sparkles, Zap, Star } from 'lucide-react';

const FunSection = () => {
  const [activeHobby, setActiveHobby] = useState<string | null>(null);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [gameScore, setGameScore] = useState(0);
  const [animatingCards, setAnimatingCards] = useState<string[]>([]);

  const hobbies = [
    {
      id: 'coffee',
      title: 'Coffee Enthusiast ☕',
      icon: Coffee,
      description: 'Third-wave coffee obsessed. Currently exploring single-origin beans from Ethiopia.',
      color: 'text-amber-600',
      bgColor: 'bg-gradient-to-r from-amber-50 to-orange-50',
      stats: '☕ 547 cups this year',
      hoverColor: 'hover:from-amber-100 hover:to-orange-100'
    },
    {
      id: 'music',
      title: 'Music Producer 🎵',
      icon: Music,
      description: 'Creating ambient electronic music in my spare time. Released 3 tracks on Spotify.',
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-r from-purple-50 to-pink-50',
      stats: '🎵 12 tracks produced',
      hoverColor: 'hover:from-purple-100 hover:to-pink-100'
    },
    {
      id: 'photography',
      title: 'Street Photography 📸',
      icon: Camera,
      description: 'Capturing urban moments and city life. Published in 2 local magazines.',
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-r from-blue-50 to-cyan-50',
      stats: '📸 2.3k photos taken',
      hoverColor: 'hover:from-blue-100 hover:to-cyan-100'
    },
    {
      id: 'gaming',
      title: 'Indie Game Dev 🎮',
      icon: Gamepad2,
      description: 'Building small games with Godot engine. Working on a puzzle platformer.',
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-r from-green-50 to-emerald-50',
      stats: '🎮 1 game in progress',
      hoverColor: 'hover:from-green-100 hover:to-emerald-100'
    }
  ];

  const quirkyFacts = [
    "🧩 I can solve a Rubik's cube in under 2 minutes",
    "☕ My GitHub contribution graph looks like a heat map of my coffee consumption",
    "🏠 I've built a smart home system that plays music based on the weather",
    "⌨️ I collect vintage keyboards (currently own 12)",
    "🎯 My code comments sometimes include haikus",
    "🇯🇵 I maintain a 1,000+ day streak on Duolingo (learning Japanese)",
    "🌱 I grow my own herbs for cooking and tea",
    "📚 I've read every sci-fi novel by Isaac Asimov twice"
  ];

  const achievements = [
    { icon: Trophy, text: 'Completed 5 coding challenges this month', emoji: '🏆' },
    { icon: Book, text: 'Read 12 tech books this year', emoji: '📚' },
    { icon: Plane, text: 'Worked remotely from 8 countries', emoji: '✈️' },
    { icon: Heart, text: 'Mentored 15+ junior developers', emoji: '❤️' }
  ];

  // Rotate facts every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % quirkyFacts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleHobbyClick = (hobbyId: string) => {
    setActiveHobby(activeHobby === hobbyId ? null : hobbyId);
    
    // Add animation class
    setAnimatingCards(prev => [...prev, hobbyId]);
    setTimeout(() => {
      setAnimatingCards(prev => prev.filter(id => id !== hobbyId));
    }, 300);
  };

  const handleAchievementClick = () => {
    setGameScore(prev => prev + 1);
  };

  return (
    <div className="p-6">
      {/* Header with animated sparkles */}
      <div className="mb-8 relative">
        <div className="absolute -top-2 -right-2 animate-pulse">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-2 animate-fade-in">Beyond the Code ✨</h1>
        <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
          The human side of this developer - hobbies, interests, and fun facts that make me, me.
        </p>
      </div>

      {/* Interactive Mini Game */}
      <div className="portfolio-card mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 animate-fade-in">
        <div className="text-center">
          <div className="text-2xl mb-2">🎯 Fun Interaction!</div>
          <p className="text-muted-foreground mb-4">Click the achievements below to earn points! Current score: <span className="text-primary font-bold">{gameScore}</span></p>
        </div>
      </div>

      {/* Hobbies Grid with Enhanced Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon;
          const isActive = activeHobby === hobby.id;
          const isAnimating = animatingCards.includes(hobby.id);
          
          return (
            <div
              key={hobby.id}
              className={`portfolio-card cursor-pointer transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in ${
                isActive ? 'ring-2 ring-primary shadow-glow scale-105' : ''
              } ${isAnimating ? 'animate-pulse' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleHobbyClick(hobby.id)}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-lg ${hobby.bgColor} ${hobby.hoverColor} flex items-center justify-center transition-all duration-300 hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${hobby.color} transition-transform duration-300 ${isActive ? 'scale-125' : ''}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1 flex items-center gap-2">
                    {hobby.title}
                    {isActive && <Zap className="w-4 h-4 text-primary animate-pulse" />}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{hobby.description}</p>
                  <div className="text-xs text-primary font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    {hobby.stats}
                  </div>
                </div>
              </div>
              
              {isActive && (
                <div className="mt-4 pt-4 border-t border-border animate-fade-in">
                  <div className="bg-gradient-primary/10 p-3 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      ✨ This hobby takes up about 5-10 hours of my week and keeps me creatively energized! 
                      It's where I find inspiration for my development work.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive Achievements */}
      <div className="portfolio-card mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          Recent Achievements 🏆
          {gameScore > 5 && <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full animate-bounce">Wow! 🎉</span>}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div 
                key={index} 
                className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg cursor-pointer transition-all duration-300 hover:bg-muted hover:scale-105 hover:shadow-md"
                onClick={handleAchievementClick}
              >
                <div className="text-2xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {achievement.emoji}
                </div>
                <Icon className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-sm text-foreground">{achievement.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rotating Fun Facts */}
      <div className="portfolio-card mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
          Random Fun Facts 🎲
          <span className="text-xs text-muted-foreground">(Auto-rotating)</span>
        </h2>
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-lg text-center">
          <div key={currentFactIndex} className="animate-fade-in">
            <p className="text-lg text-foreground font-medium">
              {quirkyFacts[currentFactIndex]}
            </p>
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {quirkyFacts.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentFactIndex ? 'bg-primary scale-125' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* All facts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
          {quirkyFacts.map((fact, index) => (
            <div 
              key={index} 
              className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-muted/50 ${
                index === currentFactIndex ? 'bg-primary/10 border border-primary/20' : ''
              }`}
            >
              <span className="text-primary text-lg mt-0.5 animate-pulse">•</span>
              <span className="text-sm text-muted-foreground">{fact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Personality Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="portfolio-card">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            Work Style 💼
          </h2>
          <div className="space-y-3">
            {[
              { label: 'Morning Person ☀️', width: 'w-5/6', color: 'bg-gradient-to-r from-yellow-400 to-orange-400' },
              { label: 'Collaboration 🤝', width: 'w-4/5', color: 'bg-gradient-to-r from-blue-400 to-purple-400' },
              { label: 'Detail Oriented 🔍', width: 'w-full', color: 'bg-gradient-to-r from-green-400 to-emerald-400' },
              { label: 'Adaptability 🌊', width: 'w-5/6', color: 'bg-gradient-to-r from-cyan-400 to-blue-400' }
            ].map((trait, index) => (
              <div key={trait.label} className="flex justify-between items-center group">
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {trait.label}
                </span>
                <div className="w-24 h-3 bg-muted rounded-full overflow-hidden">
                  <div className={`${trait.width} h-full ${trait.color} rounded-full transition-all duration-1000 group-hover:scale-105`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portfolio-card">
          <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            Current Obsessions 🔥
          </h2>
          <div className="space-y-3">
            {[
              { title: '🚀 Learning Rust', desc: 'Systems programming meets web development', gradient: 'from-orange-400/20 to-red-400/20' },
              { title: '🎨 UI/UX Design', desc: 'Creating beautiful, intuitive interfaces', gradient: 'from-purple-400/20 to-pink-400/20' },
              { title: '🌱 Sustainable Tech', desc: 'Building eco-friendly applications', gradient: 'from-green-400/20 to-emerald-400/20' }
            ].map((obsession, index) => (
              <div 
                key={obsession.title}
                className={`p-3 bg-gradient-to-r ${obsession.gradient} rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm font-medium text-foreground">{obsession.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{obsession.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="flex justify-center mb-4">
          <div className="flex gap-2">
            {['🚀', '💫', '✨'].map((emoji, index) => (
              <span 
                key={emoji}
                className="text-2xl animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-3">Want to Chat? 💬</h2>
        <p className="text-muted-foreground mb-6">
          Whether it's about code, coffee, or creative projects - I'm always up for interesting conversations!
        </p>
        <div className="flex gap-3 justify-center">
          <button className="portfolio-button primary hover:scale-105 transition-transform duration-300">
            <span>Let's Connect ⚡</span>
          </button>
          <button className="portfolio-button secondary hover:scale-105 transition-transform duration-300">
            <span>View My Playlist 🎵</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunSection;