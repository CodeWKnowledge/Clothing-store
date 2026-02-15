import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('urban_street_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('urban_street_cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, size, color, quantity = 1) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id && item.size === size && item.color === color
            );

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id && item.size === size && item.color === color
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevCart, { ...product, size, color, quantity }];
        });
    };

    const removeFromCart = (id, size, color) => {
        setCart((prevCart) => prevCart.filter(
            (item) => !(item.id === id && item.size === size && item.color === color)
        ));
    };

    const updateQuantity = (id, size, color, delta) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id && item.size === size && item.color === color) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const getSubtotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getSubtotal }}>
            {children}
        </CartContext.Provider>
    );
};
