import React from 'react';
import MenCategory from '../assets/Images/men.jpg';
import WomenCategory from '../assets/Images/women.jpg';
import KidCategory from '../assets/Images/kids.jpg';

const categories = [
  {
    title: 'Men',
    imageUrl: MenCategory,
  },
  {
    title: 'Women',
    imageUrl: WomenCategory,
  },
  {
    title: 'Kids',
    imageUrl: KidCategory,
  },
];

function CategorySection() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-md bg-white"
            >
              <img
                src={category.imageUrl}
                alt={category.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
                <h3 className="text-xl text-white font-bold mb-2">
                  {category.title}
                </h3>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                  View All
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategorySection;

