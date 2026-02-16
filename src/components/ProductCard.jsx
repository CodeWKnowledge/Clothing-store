import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart01Icon, HeartAddIcon } from 'hugeicons-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [isHovered, setIsHovered] = useState(false);

    const handleQuickAdd = (e) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, product.sizes[0], product.colors[0]);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-brand-gray-900 border border-white/5">
                {/* Image */}
                <div className="aspect-[3/4] overflow-hidden lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Labels & Icons */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-black/80 p-3 hover:bg-white hover:text-black transition-colors backdrop-blur-sm">
                        <HeartAddIcon size={20} />
                    </button>
                    <button
                        onClick={handleQuickAdd}
                        className="bg-accent p-3 text-black hover:bg-white transition-colors backdrop-blur-sm"
                    >
                        <ShoppingCart01Icon size={20} />
                    </button>
                </div>

                {/* Quick View Tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-black px-6 py-2 text-[10px] font-black uppercase tracking-widest border border-white/10 whitespace-nowrap">
                        Quick View
                    </span>
                </div>
            </Link>

            {/* Info */}
            <div className="mt-6 space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-sm font-black tracking-widest uppercase transition-colors group-hover:text-accent">
                        {product.name}
                    </h3>
                    <span className="text-sm font-bold text-gray-400">${product.price}</span>
                </div>
                <p className="text-[10px] text-gray-600 uppercase tracking-widest">{product.category}</p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
