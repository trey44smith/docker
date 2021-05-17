import {useState, useEffect, useCallback} from 'react';
import rentalcontext from './rentalcontext';
import axios from 'axios';
const API = 'http://localhost:4000/api/rental';

const RentalProvider = ({children}) => {
    const [rentals, setRentals]= useState([]);
    
    useEffect(() => {
        axios.get(`${API}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }).then(({data}) => {
            setRentals(rentals.concat(data.rentals)); 

        }).catch(err => {
            console.log(err)
        })
    }, []);


    const addToList = (data) => {
        setRentals([...data, ...rentals])
    }


    return (
        <rentalcontext.Provider
            value={{
                rentals,
                addToList
            }}
        >
            {children}
        </rentalcontext.Provider>
    )
}

export default RentalProvider; 