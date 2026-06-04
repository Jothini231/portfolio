import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

 
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: "Configuration Error: Web3Forms access key is missing. Please add VITE_WEB3FORMS_ACCESS_KEY to your .env file and restart your server." 
      });
      return;
    }

    
    setStatus({ submitting: true, success: false, error: null });

    try {
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey, 
          ...formData
        })
      });

      const result = await response.json();

      if (response.status === 200) {
        
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        
        
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        
        setStatus({ submitting: false, success: false, error: result.message || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      
      setStatus({ submitting: false, success: false, error: 'Network error. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16 text-center justify-center flex-col">
            <h2 className="text-3xl md:text-5xl font-bold text-primaryText">Get In Touch</h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
            <p className="text-secondaryText max-w-2xl text-lg mt-4">
              I'm currently looking for new opportunities. If you have any questions, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-primaryText mb-6">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-accent border border-border flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primaryText">Email</h4>
                  <p className="text-secondaryText">jothini231@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-accent border border-border flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primaryText">Phone</h4>
                  <p className="text-secondaryText">074 226 3724</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center text-accent border border-border flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primaryText">Location</h4>
                  <p className="text-secondaryText">Colombo,Sri Lanka</p>
                </div>
              </div>
            </div>

            
            <motion.form 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primaryText mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primaryText focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primaryText mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primaryText focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primaryText mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-primaryText focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              
              {status.success && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-center text-sm"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {status.error && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-center text-sm"
                >
                  {status.error}
                </motion.div>
              )}

              <button 
                type="submit"
                disabled={status.submitting}
                className={`w-full bg-accent text-white py-3 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-accent/20 ${
                  status.submitting 
                    ? 'opacity-70 cursor-not-allowed' 
                    : 'hover:bg-accentHover hover:-translate-y-1 hover:shadow-accent/40'
                }`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
