import React from 'react'
import MenCategory from '../assets/Images/men.jpg'
import WomenCategory from '../assets/Images/women.jpg'
import KidCategory from '../assets/Images/kids.jpg'

const categories = [
    {
        title: 'Men',
        imageUrl : ManCategory ,
    },
    {
        title: 'Women',
        imageUrl: WomenCategory,
    },
    {
        title: 'Kids',
        imageUrl: KidCategory
    }
]

function CategorySection() {
  return (
    <div>
        {categories.map((categories,index) =>(
            <div key={index}>
                <img src={categories.imageUrl} alt="" />
                <div>
                    <p>{categories.title}</p>
                    <p>View All</p>
                </div>
            </div> 
        ))}
    </div>
  )
}

export default CategorySection
