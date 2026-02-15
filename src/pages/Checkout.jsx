import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Tick01Icon, SecurityIcon, CreditCardIcon, TruckDeliveryIcon } from 'hugeicons-react';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { cart, getSubtotal } = useCart();
    const subtotal = getSubtotal();
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="pt-48 pb-32 px-6 text-center space-y-10 animate-fade-in">
                <div className="flex justify-center">
                    <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center">
                        <Tick01Icon size={48} className="text-black" />
                    </div>
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-mega">ORDER PLACED.</h1>
                <p className="text-gray-400 uppercase tracking-widest text-xs max-w-lg mx-auto leading-relaxed">
                    Your gear is being prepped. Check your email for confirmation. Welcome to the movement.
                </p>
                <Link to="/" className="btn-primary inline-block">
                    BACK TO HOME
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 px-6 md:px-16 max-w-[1400px] mx-auto">
            <h1 className="text-4xl md:text-7xl font-black uppercase mb-12">CHECKOUT</h1>

            <div className="flex flex-col lg:flex-row gap-20">
                {/* Left: Form */}
                <div className="lg:w-3/5 space-y-16">
                    <section className="space-y-8">
                        <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs">01</span>
                            SHIPPING INFORMATION
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="FIRST NAME" className="bg-transparent border border-white/10 px-6 py-4 outline-none focus:border-accent uppercase text-xs tracking-widest" />
                            <input type="text" placeholder="LAST NAME" className="bg-transparent border border-white/10 px-6 py-4 outline-none focus:border-accent uppercase text-xs tracking-widest" />
                            <input type="email" placeholder="EMAIL ADDRESS" className="md:col-span-2 bg-transparent border border-white/10 px-6 py-4 outline-none focus:border-accent uppercase text-xs tracking-widest" />
                            <input type="text" placeholder="SHIPPING ADDRESS" className="md:col-span-2 bg-transparent border border-white/10 px-6 py-4 outline-none focus:border-accent uppercase text-xs tracking-widest" />
                            <input type="text" placeholder="CITY" className="bg-transparent border border-white/10 px-6 py-4 outline-none focus:border-accent uppercase text-xs tracking-widest" />
                            <input type="text" placeholder="POSTAL CODE" className="bg-transparent border border-white/10 px-6 py-4 outline-none focus:border-accent uppercase text-xs tracking-widest" />
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-xl font-black uppercase tracking-widest flex items-center gap-4">
                            <span className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-xs">02</span>
                            PAYMENT METHOD
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border border-accent p-6 flex flex-col items-center gap-4 bg-accent/5">
                                <CreditCardIcon size={24} className="text-accent" />
                                <span className="text-[10px] font-black tracking-widest uppercase">Credit / Debit Card</span>
                            </div>
                            <div className="border border-white/5 p-6 flex flex-col items-center gap-4 bg-white/5 hover:border-white/20 cursor-pointer">
                                <div className="w-6 h-6 grayscale opacity-50" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-gray-500">Other Methods</span>
                            </div>
                        </div>
                    </section>

                    <div className="flex items-center gap-4 text-gray-600">
                        <SecurityIcon size={16} />
                        <p className="text-[10px] font-black tracking-widest uppercase">Secure SSL Encrypted Checkout</p>
                    </div>
                </div>

                {/* Right: Summary */}
                <div className="lg:w-2/5">
                    <div className="bg-brand-gray-900 border border-white/5 p-10 space-y-10">
                        <h2 className="text-2xl font-black uppercase tracking-widest">ORDER SUMMARY</h2>

                        <div className="max-h-60 overflow-y-auto space-y-6 pr-4 no-scrollbar">
                            {cart.map((item) => (
                                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                                    <div className="w-16 h-20 bg-black shrink-0">
                                        <img src={item.images[0]} alt="" className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-center">
                                        <p className="text-[10px] font-black uppercase tracking-widest">{item.name}</p>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">QTY: {item.quantity} | {item.size}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs font-black">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-white/5 pt-10 space-y-6">
                            <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400">
                                <span>Subtotal</span>
                                <span className="text-white">${subtotal}</span>
                            </div>
                            <div className="flex justify-between text-xs uppercase tracking-widest text-gray-400">
                                <span className="flex items-center gap-2"><TruckDeliveryIcon size={14} /> Shipping</span>
                                <span className="text-white">$15.00</span>
                            </div>
                            <div className="flex justify-between text-sm font-black uppercase tracking-widest border-t border-white/5 pt-6">
                                <span className="text-accent">Grand Total</span>
                                <span className="text-accent text-2xl">${subtotal + 15}</span>
                            </div>
                        </div>

                        <button
                            onClick={handlePayment}
                            className="w-full btn-primary"
                        >
                            PAY ${subtotal + 15}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
