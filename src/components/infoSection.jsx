import React from 'react';
import { FaHeadset, FaLock, FaMoneyBillWave, FaShippingFast, FaTag } from 'react-icons/fa';

function InfoSection() {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-4xl text-red-600" />,
            title: "Free Shipping",
            description: "Get your orders delivered with no extra cost.",
        },
        {
            icon: <FaHeadset className="text-4xl text-red-600" />,
            title: "24/7 Support",
            description: "Our team is available round the clock to assist you.",
        },
        {
            icon: <FaMoneyBillWave className="text-4xl text-red-600" />,
            title: "Secure Payments",
            description: "All transactions are safe and encrypted.",
        },
        {
            icon: <FaLock className="text-4xl text-red-600" />,
            title: "Payment Secure",
            description: "Your payment information is safe with us.",
        },
        {
            icon: <FaTag className="text-4xl text-red-600" />,
            title: "Best Discounts",
            description: "Enjoy the best prices on our products.",
        },
    ];

    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
                {infoItems.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md 
                        hover:shadow-lg transition-transform duration-300 hover:scale-105 w-56"
                    >
                        {item.icon}
                        <h3 className="mt-3 text-lg font-semibold text-gray-800">{item.title}</h3>
                        <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default InfoSection;
