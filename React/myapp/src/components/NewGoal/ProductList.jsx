import React from 'react'

const ProductList = (props) => {
    console.log(props);
    
  return (
    <>
    <ul>
        {props.productDetails.map((productDetail)=>(<li key={productDetail.id}><span>  {productDetail.id}</span><span> {productDetail.name}</span><span>  {productDetail.price}</span><span> {productDetail.text}</span></li>))}
    </ul>
    </>
  )
}

export default ProductList