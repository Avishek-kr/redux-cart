import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Recommended from './Recommended/Recommended'
import Products from './Products/Products'

const ProductDetails = ({ handleChange, handleClick, result, query, handleInputChange, selectedCategory }) => {
  return <>
        <Sidebar handleChange={handleChange} />
        <Recommended handleClick={handleClick} handleInputChange={handleInputChange} query={query} selectedCategory={selectedCategory} />
        <Products result={result} />
    </>
}

export default ProductDetails