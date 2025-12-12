import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, X, CheckCircle, ArrowRight, Instagram, Facebook, Heart, Clock, Users, BookOpen
} from 'lucide-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './componement/Products.jsx';



const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-xl font-bold text-slate-900 tracking-tight">
              Glow & Nourish
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">About</a>
            <a href="#benefits" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">Benefits</a>
            <a href="#how-it-works" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">How it works</a>
            <a href="#faq" className="text-slate-600 hover:text-emerald-600 transition-colors text-sm font-medium">FAQ</a>
            <a 
              href="/products" 
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md"
            >
              Shop all recipes
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-slate-100"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md">About</a>
            <a href="#benefits" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md">Benefits</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-slate-50 rounded-md">How it works</a>
            <a href="/products" className="block w-full text-center mt-4 bg-emerald-600 text-white px-5 py-3 rounded-lg text-base font-medium hover:bg-emerald-700">
              Shop all recipes
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const Hero = () => (
  <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Healthy recipes for <span className="text-emerald-600">busy women</span> who want to glow.
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Easy, hormone-friendly meals your whole family will actually eat. 
            No separate meals, just real food for energy and balance.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center lg:justify-start sm:space-x-4 mb-10">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-full text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg hover:shadow-xl transition-all"
            >
              Shop all recipes
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/products" 
              className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
            >
              View bundles
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500">
            <div className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" /> 10+ Digital Collections</div>
            <div className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" /> Hormone Friendly</div>
            <div className="flex items-center"><CheckCircle size={16} className="text-emerald-500 mr-2" /> Family Approved</div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:h-full flex justify-center lg:justify-end"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-emerald-100 aspect-[4/5] w-full max-w-md">
            <img 
              src="https://i.pinimg.com/736x/47/b2/cc/47b2ccd0dc95304c8bc3e7c0702354e1.jpg" 
              alt="Healthy meal spread" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <div className="bg-emerald-50 py-8 border-y border-emerald-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { icon: BookOpen, label: "10 Digital Publications" },
          { icon: Clock, label: "Designed for Busy Women" },
          { icon: Users, label: "Family-Friendly Recipes" },
          { icon: CheckCircle, label: "Instant Access" },
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            <div className="p-3 bg-white rounded-full shadow-sm text-emerald-600">
              <item.icon size={20} />
            </div>
            <span className="text-sm font-medium text-slate-700">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-20 lg:py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        <motion.div 
          {...fadeInUp}
          className="lg:w-1/2"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-xl  max-w-sm mx-auto lg:mr-auto">
             <img 
              src="https://i.pinimg.com/736x/0b/98/85/0b98850ad78a556f92245d2b262cfe0b.jpg" 
              alt="Lina Akkad" 
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
        
        <motion.div 
          {...fadeInUp}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Glow & Nourish Recipes</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Meet Lina</h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Glow & Nourish was created by <strong className="text-emerald-700">Lina Akkad</strong> to make it easier for busy women to eat in a way that supports their energy, hormones, and glow – without cooking separate meals for the family.
            </p>
            <p>
              Each recipe collection focuses on simple steps, accessible ingredients, and balanced plates that work in real life. I believe you shouldn't have to choose between your health and your time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section id="benefits" className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        {...fadeInUp} 
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Glow & Nourish recipes?</h2>
        <p className="text-lg text-slate-600">Healthy meals that fit into a busy life, not the other way around.</p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        {[
          { title: "Support your hormones", desc: "Recipes designed with blood sugar balance and hormone health in mind.", icon: Heart },
          { title: "Boost daily energy", desc: "Balanced meals that help you avoid the mid-afternoon energy crash.", icon: CheckCircle },
          { title: "Family-friendly & realistic", desc: "No separate meals. One recipe that both you and your family will enjoy.", icon: Users },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100"
          >
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
              <item.icon size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const WhatsInside = () => (
  <section className="py-20 bg-emerald-50/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div {...fadeInUp}>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">What you’ll find inside</h2>
          <p className="text-lg text-slate-600 mb-8">Each Glow & Nourish publication is designed to be easy to follow and quick to use.</p>
          
          <ul className="space-y-4">
            {[
              "Step-by-step, easy-to-read recipes",
              "Time estimates and clear ingredient lists",
              "Hormone- and energy-supportive meal ideas",
              "Tips to adapt recipes for the whole family",
              "Downloadable PDF format for phone, tablet, or print"
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start"
              >
                <CheckCircle className="flex-shrink-0 text-emerald-500 mt-1 mr-3" size={20} />
                <span className="text-slate-700 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* <div className="relative mx-auto bg-white rounded-lg shadow-2xl p-6 max-w-md rotate-3 border border-slate-100">
            <div className="bg-slate-50 rounded h-64 flex items-center justify-center mb-4">
              <span className="text-slate-300 font-bold text-xl">Recipe Page Mockup</span>
            </div>
            <div className="h-4 bg-slate-100 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-slate-100 rounded w-1/2 mb-4"></div>
            <div className="space-y-2">
              <div className="h-2 bg-slate-100 rounded w-full"></div>
              <div className="h-2 bg-slate-100 rounded w-full"></div>
              <div className="h-2 bg-slate-100 rounded w-5/6"></div>
            </div>
          </div> */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-emerald-100 aspect-[4/5] w-full max-w-md">
            <img 
              src="https://i.pinimg.com/1200x/31/c8/07/31c807324821bd8982d5cc12ede311ca.jpg" 
              alt="Healthy meal spread" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          {/* Overlap card */}
          <div className="absolute top-4 -left-4 -z-10 bg-emerald-100 rounded-lg shadow-xl w-full h-full max-w-md -rotate-3"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeaturedProducts = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured recipe collections</h2>
        <p className="text-lg text-slate-600">A taste of what’s waiting for you inside the Glow & Nourish library.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Glow & Nourish Essentials", subtitle: "Core recipes for daily energy", img: "https://i.pinimg.com/1200x/a2/c6/cc/a2c6cc984381e4d709e0515e111419c8.jpg" },
          { title: "Hormone-Friendly Dinners", subtitle: "Evening meals for balance", img: "https://i.pinimg.com/1200x/54/fe/a2/54fea23d3b43d2188c6beee841515d3a.jpg" },
          { title: "15-Minute Lunches", subtitle: "Fast & nourishing", img: "https://i.pinimg.com/736x/fc/35/84/fc3584eed045de87e368cd7656968bf4.jpg" },
        ].map((prod, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-md hover:shadow-lg transition-all"
          >
            <div className="h-98 overflow-hidden">
              <img src={prod.img} alt={prod.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{prod.title}</h3>
              <p className="text-slate-500 mb-6 text-sm">{prod.subtitle}</p>
              <a href="/products" className="block w-full text-center border border-emerald-600 text-emerald-600 font-medium py-2 rounded-lg hover:bg-emerald-50 transition-colors">
                View Details
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a href="/products" className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700">
          View all collections <ArrowRight size={20} className="ml-2" />
        </a>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">How it works</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-700 -z-0"></div>

        {[
          { step: "1", title: "Browse collections", desc: "Visit the products page to explore all ebooks and bundles." },
          { step: "2", title: "Choose your fit", desc: "Pick the collections that match your current needs." },
          { step: "3", title: "Download & cook", desc: "Get instant digital access and start nourishing yourself." },
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative z-10 text-center"
          >
            <div className="w-24 h-24 mx-auto bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center mb-6 shadow-xl">
              <span className="text-3xl font-bold text-emerald-400">{item.step}</span>
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-slate-400 max-w-xs mx-auto">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/products" 
          className="inline-block px-8 py-3 bg-emerald-500 text-white font-bold rounded-full shadow-lg hover:bg-emerald-600"
        >
          Start browsing recipes
        </motion.a>
      </div>
    </div>
  </section>
);

const ForWho = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Made for busy women like you</h2>
      <p className="text-lg text-slate-600 mb-12">Whether you’re juggling work, kids, or both, these recipes are built for real life.</p>
      
      <div className="flex flex-wrap justify-center gap-4">
        {[
          "Busy professionals",
          "Moms needing family meals",
          "Hormone health focused",
          "Quick & easy cooking",
          "Energy seekers"
        ].map((label, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="px-6 py-3 rounded-full bg-emerald-50 text-emerald-800 font-medium border border-emerald-100"
          >
            {label}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What women are saying</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "Sophie", role: "Working mom", text: "Glow & Nourish took the guesswork out of weekday dinners. My kids love the recipes and I finally feel like I’m eating for my hormones too." },
          { name: "Amira", role: "Entrepreneur", text: "The 15-minute lunches have been a game changer for my energy. I actually look forward to cooking now." },
          { name: "Julie", role: "Teacher", text: "Everything is so easy to follow. No fancy ingredients, just real food and simple steps." },
        ].map((t, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative"
          >
            <div className="text-emerald-300 absolute top-6 left-6 opacity-30">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.923 14.941 15.082C15.557 14.24 16.634 13.593 18.173 13.14L18.173 10.992C15.939 11.239 14.821 12.333 14.821 14.275V15H17.485V21H14.017ZM8.017 21L8.017 18C8.017 16.896 8.325 15.923 8.941 15.082C9.557 14.24 10.634 13.593 12.173 13.14L12.173 10.992C9.939 11.239 8.821 12.333 8.821 14.275V15H11.485V21H8.017Z" /></svg>
            </div>
            <p className="text-slate-600 relative z-10 italic mb-6">"{t.text}"</p>
            <div>
              <p className="font-bold text-slate-900">{t.name}</p>
              <p className="text-sm text-emerald-600">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-20 bg-white">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently asked questions</h2>
      <div className="space-y-6">
        {[
          { q: "How do I access the recipes after I purchase?", a: "After you complete your purchase on Payhip, you’ll receive instant access to download your ebook in PDF format." },
          { q: "Are the recipes family-friendly?", a: "Yes. The recipes are designed to work for busy women and their families. You can easily adapt portions." },
          { q: "Do I need special ingredients?", a: "No. Most recipes use simple, accessible ingredients you can find in a regular grocery store." },
          { q: "Are these meal plans or just recipes?", a: "Most publications are recipe-focused, with simple guidance on how to combine them into balanced days." }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-b border-slate-100 pb-6"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h3>
            <p className="text-slate-600 leading-relaxed">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-20 bg-emerald-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        {...fadeInUp}
        className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-emerald-100"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Get a free glow-up recipe sampler</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">Join the Glow & Nourish list and receive a small selection of recipes to try this week.</p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-5 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button 
            type="submit" 
            className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors shadow-md"
          >
            Get the sampler
          </button>
        </form>
        <p className="text-xs text-slate-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Glow & Nourish Recipes</h3>
          <p className="text-sm max-w-xs">Healthy, hormone-friendly recipes for busy women and their families.</p>
        </div>
        
        <div className="flex gap-8">
          <a href="/products" className="hover:text-emerald-400 transition-colors">Shop all recipes</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
            <Facebook size={20} />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Glow & Nourish Recipes. All rights reserved.
      </div>
    </div>
  </footer>
);

function Homepage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Benefits />
        <WhatsInside />
        <FeaturedProducts />
        <HowItWorks />
        <ForWho />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
