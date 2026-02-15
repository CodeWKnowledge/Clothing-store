import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import { FilterIcon, ArrowDown01Icon, Cancel01Icon } from 'hugeicons-react';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('Newest');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredProducts = products
        .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
        .sort((a, b) => {
            if (sortBy === 'Price Low–High') return a.price - b.price;
            if (sortBy === 'Price High–Low') return b.price - a.price;
            return 0; // Newest (default)
        });

    return (
        <div className="pt-32 pb-20 px-6 md:px-16 max-w-[1800px] mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 space-y-6 md:space-y-0">
                <div>
                    <h1 className="text-4xl md:text-6xl font-black mb-4">THE SHOP</h1>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                        Showing {filteredProducts.length} results
                    </p>
                </div>

                <div className="flex items-center space-x-6 w-full md:w-auto">
                    <button
                        onClick={() => setIsFilterOpen(true)}
                        className="flex-grow md:flex-none flex items-center justify-center gap-2 border border-white/10 px-6 py-3 text-xs font-black tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                        <FilterIcon size={16} /> FILTERS
                    </button>

                    <div className="relative flex-grow md:flex-none">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full appearance-none bg-black border border-white/10 px-8 py-3 text-xs font-black tracking-widest outline-none pr-12 cursor-pointer"
                        >
                            <option>Newest</option>
                            <option>Price Low–High</option>
                            <option>Price High–Low</option>
                        </select>
                        <ArrowDown01Icon size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Filter Sidebar/Drawer */}
            <AnimatePresence>
                {isFilterOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsFilterOpen(false)}
                            className="fixed inset-0 bg-black/80 z-[60] backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-full max-w-md bg-black z-[70] p-12 overflow-y-auto"
                        >
                            <div className="flex justify-between items-center mb-16">
                                <h2 className="text-2xl font-black tracking-widest uppercase">Filter</h2>
                                <button onClick={() => setIsFilterOpen(false)}>
                                    <Cancel01Icon size={24} />
                                </button>
                            </div>

                            <div className="space-y-12">
                                {/* Categories */}
                                <div>
                                    <h3 className="text-[10px] font-black tracking-mega text-gray-500 uppercase mb-6">Categories</h3>
                                    <div className="flex flex-col space-y-4">
                                        {categories.map((cat) => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`text-left text-lg font-bold tracking-widest uppercase transition-colors ${selectedCategory === cat ? 'text-accent' : 'text-white hover:text-gray-400'}`}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Size (Dummy for now) */}
                                <div>
                                    <h3 className="text-[10px] font-black tracking-mega text-gray-500 uppercase mb-6">Size</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                            <button key={size} className="w-12 h-12 border border-white/10 flex items-center justify-center text-xs font-black transition-colors hover:border-white">
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Price Range (Dummy) */}
                                <div>
                                    <h3 className="text-[10px] font-black tracking-mega text-gray-500 uppercase mb-6">Price Range</h3>
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-bold">$0</span>
                                        <div className="h-px flex-grow bg-white/10 relative">
                                            <div className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-white -translate-y-1/2" />
                                            <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-white -translate-y-1/2" />
                                        </div>
                                        <span className="text-xs font-bold">$500+</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16 flex gap-4">
                                <button
                                    onClick={() => { setSelectedCategory('All'); setIsFilterOpen(false); }}
                                    className="flex-grow bg-white text-black py-4 text-xs font-black tracking-widest uppercase"
                                >
                                    APPLY FILTERS
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Shop;
