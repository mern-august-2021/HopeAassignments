import React from 'react';

const ProductsList = (props) => {
    return (
        <div>
            hello
            {
            props.product?
            props.product.map((oneProduct, idx)=>(
                <p key={idx}>{oneProduct.title}, {oneProduct.price}, {oneProduct.description}</p>
        
            ))
            :null
        }
        </div>
    )
}
export default ProductsList;