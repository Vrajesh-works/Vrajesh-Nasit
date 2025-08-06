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
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h1>
        <p className="text-muted-foreground text-lg">
          Ready to bring your next project to life? Let's discuss how we can work together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="portfolio-card">
          <h2 className="text-xl font-semibold text-foreground mb-6">Send a Message</h2>
          
          {isSubmitted && (
            <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-success" />
              <div>
                <p className="text-success font-medium">Message sent successfully!</p>
                <p className="text-success/80 text-sm">I'll get back to you within 24 hours.</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="portfolio-input"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="portfolio-input"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="portfolio-input"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="portfolio-input resize-none"
                placeholder="Tell me about your project, timeline, and any specific requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="portfolio-button primary w-full"
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
          </form>
        </div>

        {/* Contact Info & Availability */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="portfolio-card">
            <h2 className="text-xl font-semibold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
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
            <h2 className="text-xl font-semibold text-foreground mb-4">Current Availability</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-success font-medium">Available for new projects</span>
              </div>
              
              <div className="text-sm text-muted-foreground space-y-2">
                <p>• Response time: Within 24 hours</p>
                <p>• Preferred project duration: 2-6 months</p>
                <p>• Remote work: Available worldwide</p>
                <p>• Time zone: PST (UTC-8)</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="portfolio-card">
            <h2 className="text-xl font-semibold text-foreground mb-4">Let's Connect</h2>
            <div className="space-y-3">
              <a
                href="#"
                className="portfolio-button secondary w-full text-center"
              >
                Schedule a Call
              </a>
              <a
                href="#"
                className="portfolio-button ghost w-full text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 portfolio-card">
        <h2 className="text-xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-foreground mb-2">What's your typical project timeline?</h3>
            <p className="text-sm text-muted-foreground">Most projects take 2-6 months depending on complexity. I provide detailed timelines during our initial consultation.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">Do you work with international clients?</h3>
            <p className="text-sm text-muted-foreground">Absolutely! I work with clients worldwide and am flexible with different time zones and communication preferences.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">What's included in your development service?</h3>
            <p className="text-sm text-muted-foreground">Full-stack development, code reviews, testing, deployment assistance, and 30 days of post-launch support.</p>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">How do you handle project communication?</h3>
            <p className="text-sm text-muted-foreground">Regular updates via your preferred channel (email, Slack, or video calls) with weekly progress reports.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;