import React from 'react'
import ProductList from './ProductList'

const CatagoryList = (props) => {
    // const ProductList = [
    //     {id:"phone", name:"Realme", price: 15000 },
    //     {id:"laptop", name:"Asus", price: 45000 },
    //     {id:"watch", name:"Noise", price: 5000 }
    // ];

    const productList = props.products.map((product)=> ({id:product.id , name:"Realme", price: 15000, text: product.text }))
    console.log(productList);


  return (
    <ProductList productDetails={productList}/>
  )
}

export default CatagoryList