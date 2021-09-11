import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const ProductsList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {
            props.product?
            props.product.map((oneProduct, idx)=>(
                <p key={idx}>
                    <Link to={"/product/" + oneProduct._id}>
                    {oneProduct.title}, {oneProduct.price}, {oneProduct.description}
                    </Link>
                    |
                    <Link to={"/product/" + oneProduct._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <button onClick={(e) => {deleteProduct(oneProduct._id)}}>
                        Delete
                    </button>
                </p>
                
        
            ))
            
            :null
            
        }
        
        </div>
    )
}
export default ProductsList;