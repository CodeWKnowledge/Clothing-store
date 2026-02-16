import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ShoppingCart01Icon, ArrowRight01Icon, FireIcon, PlugSocketIcon } from 'hugeicons-react';

const Home = () => {
    const featuredDrop = products.slice(0, 4);
    const bestSellers = products.slice(2, 6);

    const categories = [
        { name: 'T-Shirts', image: '/Images/T-shirt/Top-1.jpg', size: 'col-span-1 md:col-span-2' },
        { name: 'Jeans', image: '/Images/Trousers/Jeans-1.jpg', size: 'col-span-1' },
        { name: 'Hoodies', image: '/Images/Trousers/Sweatpant-1.jpg', size: 'col-span-1' },
        { name: 'Caps', image: '/Images/Caps/Cap-1.jpg', size: 'col-span-1' },
        { name: 'Beanies', image: '/Images/Caps/Beanie-1.jpg', size: 'col-span-1' },
    ];

    return (
        <div className="pb-20">
            {/* 1. Hero Section - Redesigned Split Layout */}
            <section className="relative h-screen w-full flex flex-col md:flex-row bg-black overflow-hidden">
                {/* Left: Text Content */}
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:px-16 relative z-10 space-y-8 bg-black/40 md:bg-black">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-accent text-xs font-black tracking-widest uppercase mb-4">Established 2026</h2>
                        <h1 className="text-5xl md:text-7xl  font-black tracking-mega md:leading-[0.85] text-white">
                            KLASSIC <br /> PLUG
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-base md:text-lg text-gray-400 uppercase tracking-widest max-w-sm"
                    >
                        UNCOMPROMISING STREETWEAR FOR THE CULTURALLY DISRUPTIVE. THE PLUG YOU'VE BEEN WAITING FOR.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-start gap-6 pt-4"
                    >
                        <Link to="/shop" className="btn-primary flex items-center gap-3 w-full sm:w-auto justify-center">
                            GET PLUGGED <PlugSocketIcon size={20} />
                        </Link>
                        <Link to="/shop" className="btn-outline w-full sm:w-auto justify-center">
                            LATEST DROP
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Visual Content - Absolute on mobile as background, Relative on desktop */}
                <div className="absolute inset-0 md:relative md:w-1/2 md:h-full overflow-hidden bg-brand-gray-900 border-l border-white/5">
                    <motion.div
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000"
                    >
                        <img
                            src="/Images/T-shirt/Top-8.jpg"
                            alt="Front Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:hidden" />
                    </motion.div>
                    {/* 
                    Scrolling Vertical Marquee
                    <div className="absolute top-0 right-0 h-full w-12 md:w-20 bg-accent flex flex-col overflow-hidden items-center justify-center whitespace-nowrap pointer-events-none">
                        <div className="flex flex-col animate-marquee-vertical" style={{ animation: 'marqueeVertical 15s linear infinite' }}>
                            {[...Array(10)].map((_, i) => (
                                <span key={i} className="text-black font-black text-sm md:text-base tracking-[0.5em] uppercase [writing-mode:vertical-rl] py-8">
                                    STICK TO THE PLUG • STICK TO THE PLUG •
                                </span>
                            ))}
                        </div>
                    </div> */}
                </div>

                {/* Global Grid Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                    <div className="w-full h-full border-x border-white/20 grid grid-cols-4 md:grid-cols-12 divide-x divide-white/10" />
                </div>
            </section>

            {/* 2. Shop by Category Grid */}
            <section className="section-padding max-w-[1800px] mx-auto">
                <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-6">
                    <h2 className="text-3xl md:text-5xl font-black">CATEGORIES</h2>
                    <Link to="/shop" className="text-xs font-bold tracking-widest text-accent hover:border-b border-accent pb-1">
                        VIEW ALL
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative h-[500px] group overflow-hidden ${cat.size}`}
                        >
                            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-4xl font-black mb-6">{cat.name}</h3>
                                <Link to="/shop" className="bg-white text-black px-8 py-3 font-black text-xs tracking-widest translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    EXPLORE
                                </Link>
                            </div>
                            {/* Desktop Always Visible Label */}
                            <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity">
                                <span className="text-sm font-black tracking-mega border-b-2 border-accent pb-2">
                                    0{idx + 1} {cat.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. Limited Drop Section */}
            <section className="bg-brand-gray-900 section-padding overflow-hidden">
                <div className="max-w-[1800px] mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0 text-center md:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full mb-4">
                                <FireIcon size={16} className="text-accent" />
                                <span className="text-accent text-[10px] font-black tracking-widest uppercase">Limited Drop</span>
                            </div>
                            <h2 className="text-4xl md:text-7xl font-black">FALL COLLECTION '26</h2>
                        </div>

                        <div className="flex gap-8 text-center uppercase">
                            <div>
                                <div className="text-4xl font-black">24</div>
                                <div className="text-[10px] text-gray-500">Hours</div>
                            </div>
                            <div className="text-gray-700 text-4xl">:</div>
                            <div>
                                <div className="text-4xl font-black">52</div>
                                <div className="text-[10px] text-gray-500">Min</div>
                            </div>
                            <div className="text-gray-700 text-4xl">:</div>
                            <div>
                                <div className="text-4xl font-black">18</div>
                                <div className="text-[10px] text-gray-500">Sec</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredDrop.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Best Sellers Section */}
            <section className="section-padding max-w-[1800px] mx-auto">
                <h2 className="text-3xl font-black tracking-mega mb-12 flex items-center gap-4">
                    <span className="w-12 h-px bg-white/20" /> BEST SELLERS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {bestSellers.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* 5. Newsletter */}
            <section className="section-padding border-y border-white/10">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl md:text-6xl font-black tracking-mega leading-tight">
                        JOIN THE <br /> MOVEMENT.
                    </h2>
                    <p className="text-gray-400 uppercase tracking-widest text-sm">
                        Subscribe to get early access to drops and exclusive content. No rules, just style.
                    </p>
                    <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                        <input
                            type="email"
                            placeholder="ENTER YOUR EMAIL"
                            className="flex-grow bg-brand-gray-900 border border-white/10 px-8 py-4 outline-none focus:border-accent transition-colors text-xs tracking-widest uppercase"
                        />
                        <button className="bg-white text-black px-12 py-4 font-black text-xs tracking-mega hover:bg-accent transition-colors">
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
