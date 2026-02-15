export const products = [
    // T-SHIRTS
    {
        id: 't-1',
        name: 'URBAN OVERSIZE TEE',
        price: 45,
        category: 'T-Shirts',
        images: ['/Images/T-shirt/Top-1.jpg', '/Images/T-shirt/Top-2.jpg'],
        description: 'Premium heavyweight cotton oversized tee with a drop shoulder fit. Perfect for the urban explorer.',
        details: '100% Cotton. 240GSM. Preshrunk.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Gray']
    },
    {
        id: 't-2',
        name: 'GRAPHIC DROP TEE',
        price: 50,
        category: 'T-Shirts',
        images: ['/Images/T-shirt/Top-3.jpg', '/Images/T-shirt/Top-4.jpg'],
        description: 'Limited edition graphic tee featuring bold typography and clean lines.',
        details: '100% Organic Cotton. Reinforced seams.',
        sizes: ['M', 'L', 'XL'],
        colors: ['Black', 'Cream']
    },
    {
        id: 't-3',
        name: 'CORE STREET TEE',
        price: 40,
        category: 'T-Shirts',
        images: ['/Images/T-shirt/Top-5.jpg', '/Images/T-shirt/Top-6.jpg'],
        description: 'The foundation of every streetwear outfit. Clean, minimal, expressive.',
        details: 'Soft touch finish. Ribbed collar.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Wash Black', 'Olive']
    },
    // JEANS
    {
        id: 'j-1',
        name: 'ARCHIVE BAGGY JEANS',
        price: 120,
        category: 'Baggy Jeans',
        images: ['/Images/Trousers/Jeans-1.jpg', '/Images/Trousers/Jeans-2.jpg'],
        description: 'Classic baggy fit jeans with a wide leg opening and distressed details.',
        details: '14oz Denim. 5-pocket styling. Embossed brand patch.',
        sizes: ['30', '32', '34', '36'],
        colors: ['Blue', 'Black']
    },
    {
        id: 'j-2',
        name: 'STREET CARGO JEANS',
        price: 135,
        category: 'Baggy Jeans',
        images: ['/Images/Trousers/Jeans-3.jpg', '/Images/Trousers/Jeans-4.jpg'],
        description: 'Hybrid cargo jeans for maximum utility and style.',
        details: 'Multi-pocket design. Drawcord hem.',
        sizes: ['30', '32', '34', '36'],
        colors: ['Washed Gray', 'Midnight Blue']
    },
    // HOODIES (Mapped to Sweatpants images as placeholder if no hoodies found)
    {
        id: 'h-1',
        name: 'GHOST HOODIE',
        price: 85,
        category: 'Hoodies',
        images: ['/Images/Trousers/Sweatpant-1.jpg', '/Images/Trousers/Sweatpant-2.jpg'],
        description: 'High-density fleece hoodie for cold nights and bold statements.',
        details: 'French Terry Cotton. Oversized hood. Kangaroo pocket.',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Charcoal', 'Bone']
    },
    {
        id: 'h-2',
        name: 'NEON EDGE HOODIE',
        price: 95,
        category: 'Hoodies',
        images: ['/Images/Trousers/Sweatpant-3.jpg', '/Images/Trousers/Sweatpant-4.jpg'],
        description: 'Tech-wear inspired hoodie with subtle neon accents.',
        details: 'Water-resistant finish. Reflective hits.',
        sizes: ['M', 'L', 'XL'],
        colors: ['Black', 'Volt']
    },
    // CAPS
    {
        id: 'c-1',
        name: 'KLASSIC PLUG CAP',
        price: 35,
        category: 'Caps',
        images: ['/Images/Caps/Cap-1.jpg', '/Images/Caps/Cap-2.jpg'],
        description: 'Structured 5-panel cap with bold embroidery.',
        details: 'Adjustable strap. Breathable mesh.',
        sizes: ['One Size'],
        colors: ['Black', 'Red']
    },
    {
        id: 'c-2',
        name: 'URBAN ICON BEANIE',
        price: 30,
        category: 'Beanies', // Mapping some caps/images to beanies for variety
        images: ['/Images/Caps/Cap-3.jpg', '/Images/Caps/Cap-4.jpg'],
        description: 'Premium knit beanie for the winter drop.',
        details: 'Acrylic wool blend. Fold-over cuff.',
        sizes: ['One Size'],
        colors: ['Gray', 'Black']
    }
];

export const categories = ['All', 'T-Shirts', 'Baggy Jeans', 'Hoodies', 'Caps', 'Beanies'];
