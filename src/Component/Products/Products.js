import React from 'react';
import { useHistory } from 'react-router';
import './Products.css'
const Products = ({ products }) => {
    const history = useHistory();
    const handleClick = id => {
        history.push(`product/${id}`)
    };

    return (
        <div className="products-card">
            <div className="products-container">
                <img src={products.img} alt="image" />
                <h2>{products.name}</h2>
                <h4>$ {products.price}</h4> <button className="btn btn-primary" onClick={() => handleClick(products._id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Products;