import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, TwitterIcon, Facebook02Icon } from 'hugeicons-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-20 px-6 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="md:col-span-2 space-y-6">
                    <Link to="/" className="text-3xl font-black tracking-mega">KLASSIC PLUG.</Link>
                    <p className="text-gray-400 max-w-sm">
                        Uncompromising streetwear for the culturally disruptive. The plug you'VE been waiting for.
                    </p>
                    <div className="flex space-x-6">
                        <InstagramIcon className="hover:text-accent transition-colors cursor-pointer" />
                        <TwitterIcon className="hover:text-accent transition-colors cursor-pointer" />
                        <Facebook02Icon className="hover:text-accent transition-colors cursor-pointer" />
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-white font-black mb-6">SHOP</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-white transition-colors cursor-pointer">ALL PRODUCTS</li>
                        <li className="hover:text-white transition-colors cursor-pointer">T-SHIRTS</li>
                        <li className="hover:text-white transition-colors cursor-pointer">HOODIES</li>
                        <li className="hover:text-white transition-colors cursor-pointer">JEANS</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="text-white font-black mb-6">SUPPORT</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="hover:text-white transition-colors cursor-pointer">SHIPPING INFO</li>
                        <li className="hover:text-white transition-colors cursor-pointer">RETURNS</li>
                        <li className="hover:text-white transition-colors cursor-pointer">SIZE GUIDE</li>
                        <li className="hover:text-white transition-colors cursor-pointer">CONTACT</li>
                    </ul>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
                <p>&copy; 2026 KLASSIC PLUG CLOTHING BRAND. ALL RIGHTS RESERVED.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
