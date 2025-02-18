import React, { useEffect } from 'react';
import { Categories, mockData } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-page.jpg'; 
import CategorySection from '../components/CategorySection';
import { FaChevronRight } from 'react-icons/fa';
import InfoSection from '../components/infoSection';
import {setProducts} from '../redux/productSlice';
import {useDispatch , useSelector} from 'react-redux';
import ProductCart from '../components/ProductCart';

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData))
  }, [])
  return (
    <div className="bg-gray-50 mt-2 px-4 md:px-16 lg:px-24"> 
      <div className="container mx-auto py-6 flex flex-col md:flex-row gap-8">  
        <div className="w-full md:w-3/12 bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="bg-red-600 text-white text-sm font-semibold px-6 py-3 uppercase">
            Shop by Categories
          </div>
          <ul className="space-y-3 bg-white p-5">
            {Categories.map((category, index) => (
              <li 
                key={index} 
                className="flex items-center text-sm font-medium text-gray-700 py-2 px-4 rounded-lg hover:bg-red-50 hover:text-red-600 cursor-pointer transition duration-300"
              >
                <FaChevronRight className="text-xs text-red-500 mr-2" />
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Section */}
        <div className="w-full md:w-9/12 relative rounded-xl overflow-hidden shadow-lg">
          <img src={HeroImage} alt="Hero Banner" className="h-96 w-full object-cover" />
          <div className="absolute top-1/4 left-8 bg-white/80 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 mb-2 text-sm">Best products available</p>
            <h2 className="text-3xl font-bold text-gray-900">WELCOME TO E-SHOP</h2>
            <p className="text-lg mt-2 font-semibold text-gray-800">MILLIONS+ PRODUCTS</p>
            <button className="bg-red-600 text-white px-6 py-2 mt-4 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div> 
      <InfoSection />
      <CategorySection />
      <div>
        <h2>Top Products</h2>
        <div>
          {products.products.slice(0,5).map(((product) => (
            <ProductCart product={product} />
          )))  }
        </div>
      </div>
    </div>
  );
};

export default Home;
