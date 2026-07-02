import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [status, setStatus]     = useState({ submitting:false, success:false, error:null });

  const handleChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus({ submitting:false, success:false, error:'Configuration Error: Web3Forms access key is missing.' });
      return;
    }
    setStatus({ submitting:true, success:false, error:null });
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method:'POST',
        headers:{ 'Content-Type':'application/json', Accept:'application/json' },
        body: JSON.stringify({ access_key:accessKey, ...formData }),
      });
      const result = await res.json();
      if (res.status === 200) {
        setStatus({ submitting:false, success:true, error:null });
        setFormData({ name:'', email:'', message:'' });
        setTimeout(() => setStatus(p => ({ ...p, success:false })), 5000);
      } else {
        setStatus({ submitting:false, success:false, error:result.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ submitting:false, success:false, error:'Network error. Please try again.' });
    }
  };

  const contacts = [
    { icon: <Mail size={22} />,   label:'Email',    value:'jothini231@gmail.com' },
    { icon: <Phone size={22} />,  label:'Phone',    value:'074 226 3724' },
    { icon: <MapPin size={22} />, label:'Location', value:'Colombo, Sri Lanka' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-14 bg-background">
      <div className="container mx-auto px-5 sm:px-8 md:px-12">
        <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true, margin:'-100px' }} transition={{ duration:0.6 }}
          className="max-w-5xl mx-auto">

          <div className="flex items-center gap-4 mb-8 md:mb-14 text-center justify-center flex-col">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primaryText">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-accent">Touch</span>
            </h2>
            <div className="flex items-center gap-2 mt-3">
              <div className="w-12 h-1 bg-accent rounded-full" />
              <div className="w-3 h-1 bg-accent rounded-full" />
              <div className="w-1 h-1 bg-accent rounded-full" />
            </div>
            <p className="text-secondaryText max-w-xl text-sm sm:text-base lg:text-lg mt-2">
              I'm currently looking for new opportunities. If you have any questions, I'll try my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact info */}
            <div className="space-y-5 sm:space-y-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primaryText mb-4 sm:mb-6">Contact Information</h3>
              {contacts.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card flex items-center justify-center text-accent border border-border flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-medium text-primaryText">{label}</h4>
                    <p className="text-secondaryText text-xs sm:text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <motion.form initial={{ opacity:0, x:50 }} whileInView={{ opacity:1, x:0 }}
              viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }}
              className="glass-card p-5 sm:p-8 rounded-2xl space-y-4 sm:space-y-6"
              onSubmit={handleSubmit}>

              {[
                { id:'name',    label:'Name',    type:'text',  placeholder:'John Doe' },
                { id:'email',   label:'Email',   type:'email', placeholder:'john@example.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-xs sm:text-sm font-medium text-primaryText mb-1.5 sm:mb-2">{label}</label>
                  <input type={type} id={id} value={formData[id]} onChange={handleChange} required placeholder={placeholder}
                    className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-primaryText text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors" />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-primaryText mb-1.5 sm:mb-2">Message</label>
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} required
                  placeholder="Your message here..."
                  className="w-full bg-background border border-border rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-primaryText text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" />
              </div>

              {status.success && (
                <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }}
                  className="p-3 sm:p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-lg text-center text-xs sm:text-sm">
                  Message sent successfully!
                </motion.div>
              )}
              {status.error && (
                <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }}
                  className="p-3 sm:p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-center text-xs sm:text-sm">
                  {status.error}
                </motion.div>
              )}

              <button type="submit" disabled={status.submitting}
                className={`w-full bg-accent text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 shadow-lg shadow-accent/20 ${
                  status.submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-accentHover hover:-translate-y-1 hover:shadow-accent/40'
                }`}>
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
