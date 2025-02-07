import React from 'react';
import { FaHeadset, FaMoneyBillWave, FaShippingFast } from 'react-icons/fa';

function InfoSection() {
    const infoItems = [
        {
            icon: <FaShippingFast className="text-3xl text-red-600" />,
            title: "Free Shipping",
            description: "Get your orders delivered with no extra cost.",
        },
        {
            icon: <FaHeadset className="text-3xl text-red-600" />,
            title: "24/7 Support",
            description: "Our team is available round the clock to assist you.",
        },
        {
            icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
            title: "Secure Payments",
            description: "All transactions are safe and encrypted.",
        },
    ];

    return (
        <div className='bg-white pb-8 pt-12'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                { infoItems.map((items,index)=>(
                    <div key={index}>
                        {item.icon}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        </div>
                )
                )
                }

            </div>
        </div>
    );
}

export default InfoSection;
