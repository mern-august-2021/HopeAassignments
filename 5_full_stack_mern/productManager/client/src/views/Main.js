import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductsForm from '../componenets/ProductsForm';
import ProductsList from '../componenets/ProductsList';


const Main = (props) => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            console.log(res.data);
            console.log(res);
            setProduct(res.data);
            setLoaded(true);
        })
        .catch((err)=>console.log(err));
    }, [])

    return (
        <div>
            <ProductsForm product= {product}
            setProduct = {setProduct}
            />
            <hr/>
            { loaded && <ProductsList product= {product}/>}
        </div>
    )
}
export default Main;