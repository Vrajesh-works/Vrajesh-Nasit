import { useState, useEffect } from 'react';
import { Coffee, Music, Camera, Gamepad2, Plane, Book, Trophy, Heart, Sparkles, Zap, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

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
    <div className="p-4 md:p-6">
      {/* Header with animated sparkles */}
      <div className="mb-6 md:mb-8 relative">
        <div className="absolute -top-2 -right-2 animate-pulse">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 animate-fade-in">Beyond the Code ✨</h1>
        <p className="text-muted-foreground text-base md:text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
          The human side of this developer - hobbies, interests, and fun facts that make me, me.
        </p>
      </div>

      {/* Fun Moments Carousel */}
      <FunMomentsCarousel />



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

// Fun Moments Carousel Component
const FunMomentsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    skipSnaps: false,
    dragFree: true 
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const funMoments = [
    {
      id: 1,
      title: "Coffee Shop Coding ☕",
      description: "My favorite spot for weekend coding sessions",
      image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=400&h=300&fit=crop&crop=center",
      emoji: "☕"
    },
    {
      id: 2,
      title: "Team Building Day 🎯",
      description: "Annual hackathon with the crew",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
      emoji: "🎯"
    },
    {
      id: 3,
      title: "Mountain Hiking 🏔️",
      description: "Finding inspiration in nature",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop&crop=center",
      emoji: "🏔️"
    },
    {
      id: 4,
      title: "Music Studio Time 🎵",
      description: "Working on my latest electronic track",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&crop=center",
      emoji: "🎵"
    },
    {
      id: 5,
      title: "Street Photography 📸",
      description: "Capturing urban life in the city",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&crop=center",
      emoji: "📸"
    },
    {
      id: 6,
      title: "Game Dev Session 🎮",
      description: "Late night coding on my indie game",
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=300&fit=crop&crop=center",
      emoji: "🎮"
    },
    {
      id: 7,
      title: "Conference Speaking 🎤",
      description: "Sharing knowledge at TechConf 2024",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
      emoji: "🎤"
    },
    {
      id: 8,
      title: "Workspace Setup 💻",
      description: "My zen coding environment",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop&crop=center",
      emoji: "💻"
    }
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi]);

  return (
    <div className="portfolio-card mb-6 md:mb-8 animate-fade-in">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-foreground flex items-center gap-2">
          Fun Moments 📸
          <span className="text-xs text-muted-foreground">(Life highlights)</span>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:scale-110 transform duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:scale-110 transform duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>

      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex">
          {funMoments.map((moment, index) => (
            <div key={moment.id} className="embla__slide flex-[0_0_85%] md:flex-[0_0_50%] lg:flex-[0_0_33%] pl-4">
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-muted to-muted/50 hover:shadow-glow transition-all duration-300 hover:scale-105">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Emoji overlay */}
                  <div className="absolute top-3 right-3 text-2xl bg-background/80 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transform group-hover:scale-125 transition-transform duration-300">
                    {moment.emoji}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                    {moment.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {moment.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {funMoments.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
              index === selectedIndex 
                ? 'bg-primary scale-125' 
                : 'bg-muted hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <p className="text-xs md:text-sm text-muted-foreground mt-3 md:mt-4 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
        ✨ Swipe or use arrows to explore more moments from my journey
      </p>
    </div>
  );
};

export default FunSection;