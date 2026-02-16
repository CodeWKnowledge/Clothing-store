import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ShoppingCart01Icon,
    FavouriteIcon, // Changed from HeartAddIcon
    Tick01Icon,
    Share01Icon,
    InformationCircleIcon,
    RulerIcon,
    TruckDeliveryIcon,
    ViewIcon,
    FireIcon,
    Add01Icon,
    Remove01Icon
} from 'hugeicons-react';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(p => p.id === id);

    if (!product) return <div className="pt-32 text-center">Product not found.</div>;

    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [activeTab, setActiveTab] = useState('description');
    const [isAdded, setIsAdded] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor, quantity);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    return (
        <div className="pt-32 pb-20">
            <div className="px-6 md:px-16 max-w-[1600px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    {/* Left: Gallery */}
                    <div className="lg:w-3/5 flex flex-col md:flex-row gap-6">
                        {/* Thumbnails */}
                        <div className="flex md:flex-col gap-4 order-2 md:order-1">
                            {product.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedImage(img)}
                                    className={`w-20 aspect-[3/4] border ${selectedImage === img ? 'border-accent' : 'border-white/10'} lg:grayscale lg:hover:grayscale-0 transition-all`}
                                >
                                    <img src={img} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-grow max-w-md order-1 md:order-2 relative aspect-[4/5] lg:aspect-[1/1] bg-brand-gray-900 group overflow-hidden mx-auto md:mx-0">
                            <motion.img
                                key={selectedImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                src={selectedImage}
                                alt={product.name}
                                className="w-full h-full object-cover lg:grayscale transition-all duration-700 lg:group-hover:grayscale-0 group-hover:scale-110 cursor-zoom-in"
                            />
                            <button className="absolute top-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-colors">
                                <FavouriteIcon size={24} /> {/* Changed from HeartAddIcon */}
                            </button>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="lg:w-2/5 space-y-10">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-black tracking-mega text-accent border border-accent/20 px-3 py-1 rounded-full uppercase">NEW DROP</span>
                                <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                    <ViewIcon size={14} className="text-accent" /> 12 people viewing
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-widest uppercase mb-4 leading-none">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-6">
                                <span className="text-3xl font-black">${product.price}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-widest line-through">$180.00</span>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                            {product.description}
                        </p>

                        {/* Selectors */}
                        <div className="space-y-8">
                            {/* Color */}
                            <div className="space-y-4">
                                <span className="text-[10px] font-black tracking-mega text-gray-500 uppercase">Select Color: {selectedColor}</span>
                                <div className="flex gap-4">
                                    {product.colors.map(color => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-10 h-10 border ${selectedColor === color ? 'border-accent' : 'border-white/10'} p-0.5 transition-all`}
                                        >
                                            <div className={`w-full h-full ${color.toLowerCase() === 'black' ? 'bg-black' : color.toLowerCase() === 'white' ? 'bg-white' : 'bg-gray-500'}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Size */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-black tracking-mega text-gray-500 uppercase">Select Size: {selectedSize}</span>
                                    <button className="text-[10px] font-black tracking-widest text-accent flex items-center gap-2 underline underline-offset-4">
                                        <RulerIcon size={14} /> SIZE GUIDE
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    {product.sizes.map(size => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-16 h-16 border ${selectedSize === size ? 'border-accent bg-accent text-black' : 'border-white/10 text-white'} flex items-center justify-center text-xs font-black transition-all hover:border-accent`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="space-y-4">
                            <span className="text-[10px] font-black tracking-mega text-gray-500 uppercase">Quantity</span>
                            <div className="flex items-center w-max border border-white/10 p-1">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="p-3 hover:bg-white/5 transition-colors"
                                >
                                    <Remove01Icon size={16} />
                                </button>
                                <span className="px-8 text-sm font-black min-w-[3rem] text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="p-3 hover:bg-white/5 transition-colors"
                                >
                                    <Add01Icon size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Urgency */}
                        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 p-4">
                            <FireIcon size={20} className="text-red-500" />
                            <p className="text-xs font-bold text-red-500 tracking-widest uppercase">Only 5 left in stock. Don't miss out.</p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                className={`w-full py-6 font-black tracking-mega text-sm uppercase flex items-center justify-center gap-4 transition-all duration-300 ${isAdded ? 'bg-accent text-black' : 'bg-white text-black hover:bg-accent'}`}
                            >
                                {isAdded ? (
                                    <>ITEM ADDED <Tick01Icon size={20} /></>
                                ) : (
                                    <>ADD TO BAG <ShoppingCart01Icon size={20} /></>
                                )}
                            </button>
                            <button className="w-full border border-white/10 py-6 text-xs font-black tracking-widest uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-4">
                                ADD TO WISHLIST <FavouriteIcon size={20} />
                            </button>
                        </div>

                        {/* Extra Info */}
                        <div className="pt-10 grid grid-cols-2 gap-8 border-t border-white/10">
                            <div className="flex items-start gap-4">
                                <TruckDeliveryIcon size={20} className="text-accent shrink-0" />
                                <div>
                                    <p className="text-[10px] font-black tracking-widest uppercase">Free Shipping</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">On orders over $200</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Share01Icon size={20} className="text-accent shrink-0" />
                                <div>
                                    <p className="text-[10px] font-black tracking-widest uppercase">Spread Style</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Invite friends for rewards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs / Description */}
                <div className="mt-32">
                    <div className="flex border-b border-white/10 mb-12 overflow-x-auto no-scrollbar">
                        {['description', 'fabric', 'reviews'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-12 py-6 text-xs font-black tracking-mega uppercase transition-all relative ${activeTab === tab ? 'text-white' : 'text-gray-500'}`}
                            >
                                {tab}
                                {activeTab === tab && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 w-full h-1 bg-accent" />}
                            </button>
                        ))}
                    </div>

                    <div className="max-w-3xl">
                        {activeTab === 'description' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                                <p className="text-gray-400 leading-relaxed italic">"Built for those who refuse to conform. This piece represents the intersection of high fashion and street grit."</p>
                                <p className="text-gray-400 leading-relaxed text-sm">{product.details}</p>
                                <ul className="text-xs text-gray-500 space-y-3 uppercase tracking-widest list-disc pl-4">
                                    <li>Signature oversized fit</li>
                                    <li>Premium heavyweight material</li>
                                    <li>Ethically sourced textiles</li>
                                    <li>Reinforced stitching for durability</li>
                                </ul>
                            </motion.div>
                        )}
                        {activeTab === 'fabric' && (
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-gray-400">
                                100% Premium Cotton. 240GSM. Machine wash cold, hang dry. Do not iron directly on graphics.
                            </motion.div>
                        )}
                    </div>
                </div>

                {/* Related */}
                <div className="mt-32">
                    <h2 className="text-3xl font-black tracking-mega mb-12">COMPLEMENT THE FIT</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relatedProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
