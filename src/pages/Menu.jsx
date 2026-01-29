import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, IceCream, Coffee, Milk, Cookie, Utensils } from 'lucide-react';

const menuData = [
    {
        category: "Classic Scoops",
        icon: <IceCream className="w-6 h-6" />,
        items: [
            { name: "Vanilla", single: 30, double: 50 },
            { name: "Strawberry", single: 30, double: 50 },
            { name: "Chocolate", single: 40, double: 65 },
            { name: "Mango", single: 40, double: 65 },
            { name: "Butterscotch", single: 40, double: 65 },
            { name: "Blackcurrent", single: 50, double: 85 },
            { name: "Pista", single: 50, double: 85 },
            { name: "Coffee", single: 50, double: 85 },
        ]
    },
    {
        category: "Premium Scoops",
        icon: <IceCream className="w-6 h-6 text-amber-500" />,
        items: [
            { name: "Oreo", single: 60, double: 100 },
            { name: "Red Velvet", single: 60, double: 100 },
            { name: "Roasted Almond", single: 60, double: 100 },
            { name: "Fig and Honey", single: 60, double: 100 },
            { name: "Gulkan", single: 60, double: 100 },
            { name: "Pan Masala", single: 60, double: 100 },
            { name: "Gajar Halwa", single: 60, double: 100 },
            { name: "Muskmelon", single: 60, double: 100 },
            { name: "Guava Masala", single: 70, double: 120 },
            { name: "Jack Fruit", single: 70, double: 120 },
            { name: "Rasayana", single: 70, double: 120 },
            { name: "Chikku", single: 80, double: 130 },
            { name: "Seethapal", single: 80, double: 130 },
            { name: "Tender Coconut", single: 80, double: 130 },
            { name: "Lychee", single: 90, double: 150 },
        ]
    },
    {
        category: "Milkshakes",
        icon: <Milk className="w-6 h-6" />,
        items: [
            { name: "Vanilla Milkshake", price: 90 },
            { name: "Chocolate Milkshake", price: 100 },
            { name: "Mango Milkshake", price: 100 },
            { name: "Oreo Milkshake", price: 130 },
            { name: "Caramel Milkshake", price: 130 },
            { name: "Hazelnut Milkshake", price: 130 },
            { name: "Red-Velvet Milkshake", price: 150 },
            { name: "Biscoff Milkshake", price: 160 },
            { name: "Banana-Kulfi Milkshake", price: 160 },
            { name: "Silk Shake", price: 180 },
            { name: "Cold Coffee", price: 130 },
        ]
    },
    {
        category: "House of Indulgence",
        icon: <Cookie className="w-6 h-6" />,
        items: [
            { name: "Cookie Cream", price: 100 },
            { name: "Cookie Mocha Cream", price: 120 },
            { name: "Butterscotch Bananza", price: 120 },
            { name: "Blush Berry Crunch", price: 120 },
            { name: "Gudbud", price: 150 },
            { name: "Lotus Biscoff Sundae", price: 150 },
            { name: "Tiramisu", price: 150 },
            { name: "Tres Leches", price: 170 },
            { name: "Lychee Sundae", price: 170 },
            { name: "Grand Choco Scotch", price: 180 },
            { name: "Banana Bonanza", price: 180 },
            { name: "Dry Fruit Special Sundae", price: 180 },
        ]
    },
    {
        category: "Sundaes",
        icon: <IceCream className="w-6 h-6 text-red-500" />,
        items: [
            { name: "Death By Chocolate", price: 160 },
            { name: "Mocha Punch", price: 170 },
            { name: "Choco-Mocha Delight", price: 170 },
            { name: "Red Velvet", price: 180 },
        ]
    },
    {
        category: "Hot Chocolate Fudge",
        icon: <Coffee className="w-6 h-6 text-brown-500" />,
        items: [
            { name: "Vanilla", price: 80 },
            { name: "Double Choco", price: 90 },
            { name: "Mocha", price: 100 },
            { name: "Fig & Honey", price: 110 },
        ]
    }
];

const Menu = () => {
    return (
        <div className="min-h-screen bg-[#164e63] text-[#ecfeff] font-sans pb-20">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#164e63]/80 backdrop-blur-md border-b border-[#ecfeff]/10 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center bg-[#ecfeff]/10 py-2 px-2 rounded-full hover:opacity-80 transition-opacity">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="font-semibold md:text-lg text-sm">Back to Home</span>
                    </Link>
                    <h1 className="md:text-2xl text-xl font-bold tracking-tight italic" style={{ fontFamily: "'Fraunces', serif" }}>
                        Panda Scoops Menu
                    </h1>
                    <div className="w-24 hidden md:block"></div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
                        Happiness in Every Scoop
                    </h2>
                    <p className="text-[#ecfeff]/70 max-w-2xl mx-auto">
                        Explore our handcrafted range of ice creams, milkshakes, and sundaes. 100% Vegetarian and made with love.
                    </p>
                </motion.div>
            </section>

            {/* Menu Grid */}
            <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuData.map((section, idx) => (
                    <motion.div
                        key={section.category}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-[#0c4a6e] rounded-3xl p-6 border border-[#ecfeff]/10 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-[#ecfeff]/10 rounded-2xl">
                                {section.icon}
                            </div>
                            <h3 className="text-2xl font-bold" style={{ fontFamily: "'Fraunces', serif" }}>
                                {section.category}
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {section.items.map((item) => (
                                <div key={item.name} className="flex items-center justify-between group">
                                    <span className="text-lg group-hover:text-amber-400 transition-colors">{item.name}</span>
                                    <div className="flex gap-4">
                                        {item.single ? (
                                            <div className="text-right">
                                                <span className="text-xs opacity-50 block uppercase tracking-tighter text-amber-200">Sgl/Dbl</span>
                                                <span className="font-bold underline decoration-amber-500/30">₹{item.single}</span>
                                                <span className="mx-1 font-light">/</span>
                                                <span className="font-bold underline decoration-amber-500/30">₹{item.double}</span>
                                            </div>
                                        ) : (
                                            <span className="font-bold text-lg bg-[#ecfeff]/10 px-3 py-1 rounded-full border border-amber-500/20">
                                                ₹{item.price}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </main>

            {/* Extras & Info */}
            <section className="max-w-7xl mx-auto px-6 mt-16">
                <div className="bg-[#6b253d] rounded-3xl p-8 border border-amber-500/20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                    <div className="flex items-center gap-6">
                        <div className="bg-amber-500 p-4 rounded-full">
                            <Utensils className="w-8 h-8 text-[#451a03]" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-amber-500" style={{ fontFamily: "'Fraunces', serif" }}>Extra Toppings</h4>
                            <p className="text-amber-100/70">Cashew, Badam & More</p>
                        </div>
                    </div>
                    <div className="text-4xl font-bold text-amber-500">
                        ₹30 <span className="text-sm font-normal text-amber-100/50 italic">extra</span>
                    </div>
                    <div className="px-6 py-3 bg-amber-500 text-[#451a03] font-bold rounded-full uppercase tracking-widest text-sm shadow-lg">
                        GST Applicable
                    </div>
                </div>
            </section>

            {/* Footer Note */}
            <footer className="mt-20 text-center opacity-50 text-sm">
                <p>© 2026 Panda Scoops. From Scoops to Heart!</p>
            </footer>
        </div>
    );
};

export default Menu;
