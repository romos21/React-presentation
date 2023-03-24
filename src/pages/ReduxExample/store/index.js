import {createSlice, configureStore, combineReducers} from '@reduxjs/toolkit'

// cars
import bmw from '../../../assets/images/cars/bmw.jpeg'
import skubidu from '../../../assets/images/cars/skubidu.jpeg'
import batmanCar from '../../../assets/images/cars/batmanCar.jpeg'
import ferrari from '../../../assets/images/cars/ferrari.jpeg'

// users
import daniel from '../../../assets/images/users/daniel.png'
import zoran from '../../../assets/images/users/zoran.png'
import sebastian from '../../../assets/images/users/sebastian.png'
import maksim from '../../../assets/images/users/maksim.png'


const carsMarketSlice = createSlice({
    name: 'carsMarket',
    initialState: {
        cars: [],
        users: [
            {
                name: 'Zoran',
                avatar: zoran,
                cars: [
                    {
                        title: 'BMW',
                        src: bmw,
                    }
                ]
            },
            {
                name: 'Sebastian',
                avatar: sebastian,
                cars: [
                    {
                        title: 'Ferrari',
                        src: ferrari,
                    }
                ]
            },
            {
                name: 'Daniel',
                avatar: daniel,
                cars: [
                    {
                        title: 'batman car',
                        src: batmanCar,
                    }
                ]
            },
            {
                name: 'Maksim',
                avatar: maksim,
                cars: [
                    {
                        title: 'Skubidu',
                        src: skubidu,
                    }
                ]
            }
        ]
    },
    reducers: {
        sellCar: (state, {payload}) => {
            const cars = [...state.cars, payload.car]
            const users = state.users.map(user => {
                if(user.name === payload.userName) {
                    return {
                        ...user,
                        cars: user.cars.filter(car => car.title !== payload.car.title)
                    }
                }
                return user
            })
            return {
                cars,
                users
            }
        },
        buyCar: (state, {payload}) => {
            const cars = state.cars.filter(car => car.title !== payload.car.title)
            const users = state.users.map(user => {
                if(user.name === payload.userName) {
                    return {
                        ...user,
                        cars: [...user.cars, payload.car]
                    }
                }
                return user
            })
            return {
                cars,
                users
            }
        }
    },
})

export const { buyCar, sellCar } = carsMarketSlice.actions

export const store = configureStore({
    reducer: carsMarketSlice.reducer
})
