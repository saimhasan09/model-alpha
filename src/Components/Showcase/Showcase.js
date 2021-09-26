import React, { useEffect, useState } from 'react';

import Model from '../Model/Model';
import './Showcase.css';
import ChoiseList from '../ChoiseList/ChoiseList';

const Showcase = () => {


    const [choiseList, setChoiselist] = useState([]);
    const [displayModels, setDisplayModels] = useState([]);

    useEffect(() => {

        fetch('./model.JSON')
            .then(res => res.json())
            .then(data => {
                setDisplayModels(data);
            });
    }, []);



    const handleAddToCart = (model) => {
        const newChoiseList = [...choiseList, model];
        setChoiselist(newChoiseList);
    }




    return (
        <div className="showcase-container">

            <div className="model-container">
                {
                    displayModels.map(model => <Model
                        key={model.key}
                        model={model}
                        handleAddToCart={handleAddToCart}
                    >
                    </Model>)
                }
            </div>
            <div className="ChoiseList-container">
                <ChoiseList  ChoiseList={choiseList}></ChoiseList>


            </div>

        </div>
    );
};

export default Showcase;