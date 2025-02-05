import React from 'react'
import { Categories } from '../assets/mockData'
import HeroImage from '../assets/Images/hero-page.jpg'
const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>SHOP BY CATEGORIES</div>
            <ul>
              {Categories.map((category, index) =>(
                <li key={index}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img src={HeroImage} alt="" />
            <div>
              <p>Best products available</p>
              <h2>WELCOME TO E-SHOP</h2>
              <p>MILLIONS+ PRODUCTS</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
