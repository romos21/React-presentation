// libs imports
import React, {useState} from 'react';
import CarCard from "../CarCard/CarCard";
import CarsMarket from "../CarsMarket/CarsMarket";


// components

const UserCard = ({user}) => {

    const [isMarketOpened, setIsMarketOpened] = useState(false)

    const {name, avatar, cars} = user

    return (
        <div className='user-card'>
            <div className='user-info'>
                <img src={avatar} alt={name}/>
                <h2>{name}</h2>
            </div>
            <div>
                <h2>Cars:</h2>
                <div className='user-card-cars-list'>
                    {
                        cars?.length ?
                            cars.map(car => (
                                <CarCard
                                    key={car.title}
                                    car={car}
                                    userName={name}
                                    listType='user'
                                />
                            ))
                            : <p>Empty garage...</p>
                    }
                </div>
                <button onClick={() => setIsMarketOpened(true)}>buy car</button>
                {
                    isMarketOpened &&
                    <CarsMarket
                        userName={name}
                        onClose={() => setIsMarketOpened(false)}
                    />
                }
            </div>
        </div>
    );
};

export default UserCard;