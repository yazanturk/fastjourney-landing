import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Mail, User, MessageSquare, Phone } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  in: { opacity: 1, x: 0 },
  out: { opacity: 0, x: 100 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.6,
};

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      // Save to localStorage
      try {
        const existingMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
        localStorage.setItem('contactMessages', JSON.stringify([...existingMessages, formData]));
        
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out! We'll get back to you soon.",
          variant: "default",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } catch (error) {
        console.error("Failed to save message to localStorage", error);
        toast({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 flex flex-col items-center"
    >
      <motion.h1 
        className="text-4xl font-bold text-primary mb-8 text-center sm:text-5xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>
      <motion.p 
        className="text-lg text-muted-foreground mb-12 text-center max-w-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg space-y-8 p-8 sm:p-10 bg-card shadow-2xl rounded-xl border border-border glassmorphic-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-lg font-medium text-foreground flex items-center">
            <User className="mr-2 h-5 w-5 text-primary" />
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Nour Ahmad"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-background/70 border-primary/50 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-lg font-medium text-foreground flex items-center">
            <Mail className="mr-2 h-5 w-5 text-primary" />
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. nour@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-background/70 border-primary/50 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-lg font-medium text-foreground flex items-center">
            <Phone className="mr-2 h-5 w-5 text-primary" />
            Phone Number (Optional)
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="e.g. +962 79 123 4567"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background/70 border-primary/50 focus:border-primary focus:ring-primary"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-lg font-medium text-foreground flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-primary" />
            Your Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us what's on your mind..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="bg-background/70 border-primary/50 focus:border-primary focus:ring-primary"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.form>
    </motion.div>
  );
};

export default ContactPage;