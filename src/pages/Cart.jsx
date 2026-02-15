import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Delete02Icon, Add01Icon, Remove01Icon, ShoppingCart01Icon, ArrowRight01Icon } from 'hugeicons-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, getSubtotal } = useCart();
    const subtotal = getSubtotal();

    if (cart.length === 0) {
        return (
            <div className="pt-48 pb-32 px-6 text-center space-y-8">
                <div className="flex justify-center">
                    <ShoppingCart01Icon size={80} className="text-gray-800" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-mega">BAG IS EMPTY.</h1>
                <p className="text-gray-500 uppercase tracking-widest text-xs">Looks like you haven't added anything to your movement yet.</p>
                <Link to="/shop" className="btn-primary inline-block">
                    START SHOPPING
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-7xl font-black uppercase mb-12 border-b border-white/10 pb-8">YOUR BAG</h1>

            <div className="flex flex-col lg:flex-row gap-16">
                {/* Left: Items */}
                <div className="lg:w-2/3 space-y-12">
                    <AnimatePresence>
                        {cart.map((item) => (
                            <motion.div
                                key={`${item.id}-${item.size}-${item.color}`}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                className="flex flex-col sm:flex-row gap-8 pb-12 border-b border-white/5 group"
                            >
                                <Link to={`/product/${item.id}`} className="w-full sm:w-40 aspect-[3/4] bg-brand-gray-900 border border-white/5 overflow-hidden grayscale hover:grayscale-0 transition-all">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </Link>

                                <div className="flex-grow flex flex-col justify-between py-2">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-2xl font-black tracking-widest uppercase mb-2">{item.name}</h3>
                                            <div className="flex gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                                <span>SIZE: {item.size}</span>
                                                <span>COLOR: {item.color}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id, item.size, item.color)}
                                            className="text-gray-500 hover:text-accent transition-colors"
                                        >
                                            <Delete02Icon size={20} />
                                        </button>
                                    </div>

                                    <div className="flex justify-between items-end mt-8 sm:mt-0">
                                        <div className="flex items-center border border-white/10">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, item.color, -1)}
                                                className="p-3 hover:bg-white/5 transition-colors"
                                            >
                                                <Remove01Icon size={16} />
                                            </button>
                                            <span className="px-6 text-sm font-black">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.size, item.color, 1)}
                                                className="p-3 hover:bg-white/5 transition-colors"
                                            >
                                                <Add01Icon size={16} />
                                            </button>
                                        </div>
                                        <span className="text-2xl font-black tracking-widest">${item.price * item.quantity}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Right: Summary */}
                <div className="lg:w-1/3">
                    <div className="bg-brand-gray-900 border border-white/5 p-10 space-y-10 sticky top-32">
                        <h2 className="text-2xl font-black uppercase tracking-widest">Summary</h2>

                        <div className="space-y-6">
                            <div className="flex justify-between text-sm uppercase tracking-widest text-gray-400">
                                <span>Subtotal</span>
                                <span className="text-white">${subtotal}</span>
                            </div>
                            <div className="flex justify-between text-sm uppercase tracking-widest text-gray-400">
                                <span>Shipping</span>
                                <span className="text-accent font-black">Calculated at next step</span>
                            </div>
                            <div className="flex justify-between text-sm uppercase tracking-widest text-gray-400 border-t border-white/5 pt-6">
                                <span className="text-white font-black">Estimated Total</span>
                                <span className="text-white font-black text-2xl">${subtotal}</span>
                            </div>
                        </div>

                        <Link to="/checkout" className="w-full btn-primary flex items-center justify-center gap-4">
                            CHECKOUT NOW <ArrowRight01Icon size={20} />
                        </Link>

                        <div className="space-y-4">
                            <p className="text-[10px] text-gray-600 uppercase tracking-widest text-center">We accept</p>
                            <div className="flex justify-center gap-4 grayscale opacity-40">
                                <div className="w-10 h-6 bg-white/10 rounded" />
                                <div className="w-10 h-6 bg-white/10 rounded" />
                                <div className="w-10 h-6 bg-white/10 rounded" />
                                <div className="w-10 h-6 bg-white/10 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
