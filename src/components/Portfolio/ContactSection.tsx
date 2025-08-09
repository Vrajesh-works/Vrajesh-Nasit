import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'john.doe@example.com',
      href: 'mailto:john.doe@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ];

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 md:mb-8 animate-fade-in">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Get In Touch</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Ready to bring your next project to life? Let's discuss how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {/* Contact Form */}
        <div className="portfolio-card animate-fade-in">
          <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">Send a Message</h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-3 animate-fade-in">
              <CheckCircle className="w-5 h-5 text-success" />
              <div>
                <p className="text-success font-medium">Message sent successfully!</p>
                <p className="text-success/80 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="portfolio-input text-sm md:text-base"
                  placeholder="Your full name"
                  aria-describedby="name-error"
                  autoComplete="given-name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="portfolio-input text-sm md:text-base"
                  placeholder="your.email@example.com"
                  aria-describedby="email-error"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                Subject <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="portfolio-input text-sm md:text-base"
                placeholder="What's this about?"
                aria-describedby="subject-error"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs md:text-sm font-medium text-foreground mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="portfolio-input resize-none text-sm md:text-base"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
                aria-describedby="message-error"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="portfolio-button primary w-full text-sm md:text-base"
              aria-describedby="submit-status"
            >
              {isSubmitting ? (
                <>
                  <Clock className="w-4 h-4 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            <p id="submit-status" className="sr-only">
              {isSubmitting ? "Sending your message" : "Ready to send your message"}
            </p>
          </form>
        </div>

        {/* Contact Info & Availability */}
        <div className="space-y-4 md:space-y-6">
          {/* Contact Information */}
          <div className="portfolio-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4 md:mb-6">Contact Information</h2>
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-3 md:gap-4 hover-lift p-2 rounded-lg">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-muted-foreground font-medium">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-sm md:text-base text-foreground font-medium hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-focus-ring rounded"
                        aria-label={`${info.label}: ${info.value}`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Availability */}
          <div className="portfolio-card">
            <h2 className="text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">Current Availability</h2>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium text-sm md:text-base">Available for new projects</span>
              </div>
              
              <div className="text-xs md:text-sm text-muted-foreground space-y-1 md:space-y-2">
                <p>• Response time: Within 24 hours</p>
                <p>• Preferred project duration: 2-6 months</p>
                <p>• Remote work: Available worldwide</p>
                <p>• Time zone: PST (UTC-8)</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ContactSection;