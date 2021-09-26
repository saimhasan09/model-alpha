import React from 'react';
import './Model.css';

const Model = (props) => {


    // destructuring
    const { name, age, country,Company, height, booking_cost, img} = props.model;
    

    return (
        <div className="model">
            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="model-name">{name}</h4>
                <p>Age: {age}</p>
                <p>Country: {country}</p>
                <p>Company: {Company}</p>
                <p>Height:{height}</p>
                <h4>Booking Cost:{booking_cost}</h4>

                <button
                    onClick={() => props.handleAddToCart(props.model)}
                    className="btn-regular"
                > <i class="fas fa-plus"></i> Add to List</button>

            </div>
        </div>
    );
};

export default Model;