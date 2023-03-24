// libs imports
import React from 'react';
import {useSelector} from "react-redux";
import UserCard from "../UserCard/UserCard";


// components

const GuyCars = props => {

    const users = useSelector((state) => state.users)

    return (
        <div>
            {
                users.map(user => (
                    <UserCard
                        key={user.name}
                        user={user}
                    />
                ))
            }
        </div>
    );
};

export default GuyCars;