import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  companyUrl: string;
  rating: number;
  review: string;
  project: string;
  date: string;
  avatar: string;
}

const ReviewSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews: Review[] = [
    {
      id: '1',
      name: 'Sarah Chen',
      role: 'Product Manager',
      company: 'TechFlow Inc.',
      companyUrl: '#',
      rating: 5,
      review: "John exceeded our expectations in every way. His technical expertise and attention to detail resulted in a flawless e-commerce platform that increased our sales by 40%. He's not just a developer, he's a problem solver who truly understands business needs.",
      project: 'E-commerce Platform Redesign',
      date: 'December 2023',
      avatar: 'SC'
    },
    {
      id: '2',
      name: 'Michael Rodriguez',
      role: 'CTO',
      company: 'StartupXYZ',
      companyUrl: '#',
      rating: 5,
      review: "Working with John was a game-changer for our startup. He built our entire backend infrastructure and delivered ahead of schedule. His code quality is exceptional, and he provided excellent documentation. I highly recommend him for any complex project.",
      project: 'SaaS Platform Development',
      date: 'October 2023',
      avatar: 'MR'
    },
    {
      id: '3',
      name: 'Emily Watson',
      role: 'Design Director',
      company: 'Creative Agency Pro',
      companyUrl: '#',
      rating: 5,
      review: "John has an incredible ability to bring designs to life with pixel-perfect precision. His collaboration with our design team was seamless, and he implemented complex animations and interactions that truly elevated our client's brand experience.",
      project: 'Brand Website & Portal',
      date: 'August 2023',
      avatar: 'EW'
    },
    {
      id: '4',
      name: 'David Park',
      role: 'Founder',
      company: 'FinTech Solutions',
      companyUrl: '#',
      rating: 5,
      review: "Security and performance were critical for our financial platform, and John delivered both. His expertise in backend development and database optimization resulted in a system that handles millions of transactions seamlessly. Outstanding work!",
      project: 'Financial Dashboard Platform',
      date: 'June 2023',
      avatar: 'DP'
    },
    {
      id: '5',
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Growth Co.',
      companyUrl: '#',
      rating: 5,
      review: "John built our analytics dashboard that tracks marketing performance across multiple channels. The insights we've gained have been invaluable, and the interface is so intuitive that our entire team adopted it immediately. Excellent communication throughout!",
      project: 'Marketing Analytics Dashboard',
      date: 'April 2023',
      avatar: 'LT'
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Client Reviews</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          What clients say about working with me on their projects
        </p>
      </div>


      {/* Featured Review Carousel */}
      <div className="portfolio-card mb-6 md:mb-8">
        <div className="relative">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-lg md:text-xl font-semibold text-foreground">Featured Reviews</h2>
            <div className="flex gap-1 md:gap-2">
              <button
                onClick={prevReview}
                className="w-8 h-8 md:w-10 md:h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-8 h-8 md:w-10 md:h-10 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
                    {/* Review Content */}
                    <div className="flex-1">
                      <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3 md:mb-4" />
                      <p className="text-base md:text-lg text-foreground leading-relaxed mb-4 md:mb-6 italic">
                        "{review.review}"
                      </p>
                      
                      <div className="flex items-center gap-1 mb-3 md:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 md:w-4 md:h-4 ${
                              i < review.rating
                                ? 'text-yellow-500 fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      
                      <div className="text-xs md:text-sm text-muted-foreground">
                        <div className="font-medium text-foreground">Project: {review.project}</div>
                        <div>{review.date}</div>
                      </div>
                    </div>

                    {/* Reviewer Info */}
                    <div className="lg:w-80">
                      <div className="flex items-start gap-3 md:gap-4">
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm md:text-lg font-bold">
                          {review.avatar}
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-semibold text-foreground">{review.name}</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">{review.role}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <a
                              href={review.companyUrl}
                              className="text-primary hover:text-primary-glow text-xs md:text-sm font-medium transition-colors"
                            >
                              {review.company}
                            </a>
                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>


      {/* Call to Action */}
      <div className="text-center p-6 md:p-8 bg-gradient-card rounded-2xl border border-border">
        <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Ready to Start Your Project?</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
          Join these satisfied clients and let's build something amazing together.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
          <button className="portfolio-button primary text-sm md:text-base">
            <span>Get Started Today</span>
          </button>
          <button className="portfolio-button secondary text-sm md:text-base">
            <span>View My Process</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;