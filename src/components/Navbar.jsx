import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart01Icon, Menu01Icon, Cancel01Icon, Search01Icon, Plug01Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { cart } = useCart();
    const cartCount = cart.length;

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'SHOP', path: '/shop' },
        { name: 'COLLECTIONS', path: '/shop' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-4">
                <div className="flex items-center justify-between">
                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu01Icon size={24} />
                    </button>

                    {/* Logo */}
                    <Link to="/" className="text-2xl flex items-center font-black tracking-mega text-white">
                        KLASSIC PLUG <Plug01Icon size={24} />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-sm font-bold tracking-widest text-white hover:text-accent transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="flex items-center space-x-6">
                        <button className="text-white hover:text-accent transition-colors hidden sm:block">
                            <Search01Icon size={22} />
                        </button>
                        <Link to="/cart" className="relative group text-white hover:text-accent transition-colors">
                            <ShoppingCart01Icon size={24} />
                            {cartCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-accent text-black text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full scale-100 group-hover:scale-110 transition-transform">
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>

            </nav>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 z-40"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#0a0a0a] z-50 border-r border-white/10 p-8 flex flex-col"
                        >
                            <div className="flex items-center justify-between mb-16">
                                <span className="text-xl font-black tracking-widest">MENU</span>
                                <button onClick={() => setIsMobileMenuOpen(false)}>
                                    <Cancel01Icon size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-3xl font-black tracking-widest hover:text-accent transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto space-y-4">
                                <p className="text-xs text-gray-500 uppercase tracking-widest">Connect with us</p>
                                <div className="flex space-x-6">
                                    <span className="text-white text-sm">INSTAGRAM</span>
                                    <span className="text-white text-sm">TIKTOK</span>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
