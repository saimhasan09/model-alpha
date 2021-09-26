import React from 'react';
import './ChoiseList.css';

const ChoiseList = ({ ChoiseList }) => {

    let total = 0;
    for (const cost of ChoiseList) {
        total = total + cost.booking_cost;

    }
    return (
        <div>
            <h3 className="choise"><i class="far fa-user"></i> Choise List : {ChoiseList.length}</h3>
            <h3 className="cost">Total cost: <i class="fas fa-dollar-sign"></i> {total} </h3>
            {
                ChoiseList.map(data => <div className="cart">
                    <img className="cart-img" src={data.img} alt="" />
                    <h1 className="person-name">{data.name}</h1>
                    
                </div>)
            }
        </div>
    );
};

export default ChoiseList;