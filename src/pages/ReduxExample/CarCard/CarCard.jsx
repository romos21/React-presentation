// libs imports
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sellCar, buyCar} from "../store";


// components

const CarCard = ({car, userName, listType}) => {

    const [ferrariError, setFerrariError] = useState(false)
    const {src, title} = car

    const ferrariUser = useSelector(state => {
        return state.users.find(user => user.name === 'Sebastian')
    })
    const dispatch = useDispatch()

    const onSellCar = () => {
        dispatch(sellCar({ userName, car }))
    }

    const onBuyCar = () => {
        if(car.title === 'Ferrari' && userName !== ferrariUser.name) {
            setFerrariError(true)
            setTimeout(() => setFerrariError(false), 2000)
            return
        }
        dispatch(buyCar({ userName, car }))
    }

    return (
        <>
            { ferrariError &&
                <div className='error-block'>
                    <div className='user-info'>
                        <img src={ferrariUser.avatar} alt={ferrariUser.name}/>
                        <p>Dear {userName}, don't touch ferrari!!!</p>
                    </div>
                </div>
            }
            <div className='car-card'>
                <img alt={title} src={src}/>
                <p>{title}</p>
                {
                    'user' === listType &&
                    <button onClick={onSellCar}>Sell {title}</button>
                }
                {
                    'market' === listType &&
                    <button onClick={onBuyCar}>Buy {title}</button>
                }
            </div>
        </>
    );
};

export default CarCard;