import React, { useState } from 'react';
import './DeleteProductsdDetails.css';

const DeleteProductsDetails = ({ pd }) => {
    const [event,setEvent] = useState([]);
    const [events,setEvents] = useState([]);
    const handleDeleteProduct = id => {
        // fetch(`http://localhost:5000/delete/${id}`, {
        fetch(`https://mighty-earth-48217.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result =>{
                if(result){
                    alert('Product Deleted')
                }
            })
            // const newEvents = event.filter(event => event._id !== id)
            // setEvents(newEvents)
            // console.log(events);

    }
    return (
        <div className="delete-container">
            <div>
                <h3>{pd.name}</h3>
                <h5>${pd.price}</h5>
                <button onClick={() => handleDeleteProduct(pd._id)}>Delete</button>
            </div>

        </div>
    );
};

export default DeleteProductsDetails;