import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Star, ExternalLink, Instagram, Facebook } from 'lucide-react';

const products = [
  {
    id: 1,
    title: "Glow & Nourish , 20 Simple Healthy Recipes for Women",
    subtitle: "Core recipes for daily energy",
    description: "Glow & Nourish is a simple, realistic digital cookbook created especially for women who want to eat healthier, feel more energized, and still enjoy delicious food.",
    price: "$7",
    badge: "Best Seller",
    imageUrl: "/20recipes.png",
    payhipUrl: "https://payhip.com/b/l8Vdc" // Placeholder
  },
  {
    id: 2,
    title: "Hormone-Friendly Dinners",
    subtitle: "Evening meals for balance",
    description: "Balance your hormones without complicated diets or boring meals. Hormone Harmony Plate is a 7 day digital meal guide packed with healthy food dishes and easy food recipes that fit into real life.",
    price: "$12",
    badge: "New",
    imageUrl: "/hormone.png",
    payhipUrl: "https://payhip.com/b/An9wl"
  },
  {
    id: 3,
    title: "15-Minute Lunches",
    subtitle: "Fast & nourishing",
    description: "Quick lunch formulas and recipes for busy days, helping you avoid the energy crash and stay focused all afternoon.",
    price: "$17",
    badge: "",
    imageUrl: "/busy.png",
    payhipUrl: "https://payhip.com/b/kDVYo"
  },
  
];

const NavbarSimple = () => (
  <nav className="bg-white border-b border-slate-100 sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <a href="/" className="flex items-center text-slate-600 hover:text-emerald-600 transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          <span className="text-sm font-medium">Back to Home</span>
        </a>
        <div className="font-bold text-slate-900 tracking-tight">Glow & Nourish</div>
        <div className="w-20"></div> {/* Spacer for balance */}
      </div>
    </div>
  </nav>
);

const FooterSimple = () => (
  <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h3 className="text-lg font-bold text-white mb-2">Glow & Nourish Recipes</h3>
      <div className="flex gap-4 mt-4 mb-8">
        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
          <Instagram size={20} />
        </a>
        <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors">
          <Facebook size={20} />
        </a>
      </div>
      <div className="text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Glow & Nourish Recipes. All rights reserved.
      </div>
    </div>
  </footer>
);

const Products = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <NavbarSimple />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Products Hero */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Shop all <span className="text-emerald-600">Glow & Nourish</span> recipe collections
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Choose the ebooks that match your season of life – from 15-minute lunches to hormone-supportive dinners. 
            All digitally delivered instantly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
              <Check size={16} className="text-emerald-500 mr-2" /> Instant Access
            </span>
            <span className="flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
              <Check size={16} className="text-emerald-500 mr-2" /> Mobile Friendly
            </span>
            <span className="flex items-center px-4 py-2 bg-white rounded-full border border-slate-100 shadow-sm">
              <Check size={16} className="text-emerald-500 mr-2" /> Secure Payment
            </span>
          </div>
        </motion.section>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.a 
              key={product.id}
              href={product.payhipUrl}
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group block bg-white rounded-xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-[700px] overflow-hidden bg-slate-100">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {product.badge}
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {product.title}
                  </h2>
                  <span className="text-lg font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                  {product.subtitle}
                </p>
                
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  {product.description}
                </p>
                
                <button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg group-hover:bg-emerald-600 transition-colors flex items-center justify-center">
                  Get this ebook <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Support Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 bg-emerald-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            You’re a few clicks away from your next nourishing meal
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8 text-left md:text-center">
            <div className="flex items-center md:flex-col md:items-center">
              <div className="p-2 bg-white rounded-full text-emerald-600 mr-4 md:mr-0 md:mb-3 shadow-sm">
                <Check size={20} />
              </div>
              <span className="text-slate-700 font-medium">Instant PDF Download</span>
            </div>
            <div className="flex items-center md:flex-col md:items-center">
              <div className="p-2 bg-white rounded-full text-emerald-600 mr-4 md:mr-0 md:mb-3 shadow-sm">
                <Check size={20} />
              </div>
              <span className="text-slate-700 font-medium">No Subscriptions</span>
            </div>
            <div className="flex items-center md:flex-col md:items-center">
              <div className="p-2 bg-white rounded-full text-emerald-600 mr-4 md:mr-0 md:mb-3 shadow-sm">
                <Check size={20} />
              </div>
              <span className="text-slate-700 font-medium">Keep Forever</span>
            </div>
          </div>
          
          <a href="#" className="text-emerald-700 font-semibold hover:text-emerald-800 hover:underline">
            Back to top
          </a>
        </motion.section>

      </main>
      
      <FooterSimple />
    </div>
  );
};

export default Products;