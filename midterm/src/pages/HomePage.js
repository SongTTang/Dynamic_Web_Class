import React from 'react'
import { products } from '../ProductList'
import SlideCard from '../components/SlideCard';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  return (
    <div className="pt-20">
      <h1 className="text-3xl font-bold my-5">Special Recommendation</h1>
      <div>
        <SlideCard />
      </div>

      <h1 className="text-2xl font-semibold my-5">Today's Fresh</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product, key) => 
        <ProductCard key={key} data={product} />
        )}
      </div>
    </div>
  )
}

export default HomePage
