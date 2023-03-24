// libs imports
import React from 'react';
import {useSelector} from "react-redux";
import CarCard from "../CarCard/CarCard";


// components

const CarsMarket = ({onClose, userName}) => {

    const cars = useSelector(state => state.cars)

    return (
        <div className='modal-wrapper'>
            <div className='modal-sec'>
                <button className='close-modal-btn' onClick={onClose}>Close</button>
                <div className='cars-market-list'>
                    {
                        cars?.length ?
                            cars.map(car => (
                                <CarCard
                                    key={car.title}
                                    car={car}
                                    userName={userName}
                                    listType='market'
                                />
                            ))
                            : <p>No Available Cars On The Market...</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default CarsMarket;