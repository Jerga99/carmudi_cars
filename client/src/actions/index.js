import axios from 'axios';
import {types} from './types';

const fetchOfferSuccess = (JSON) => {
    const carsJSON = JSON.data.cars;
    return {
        type: types.FETCH_CARS,
        carsJSON
    };
};

export const fetchCars = () => {

    return (dispatch) => {
        axios.get('/cars').then( resp => {
           return dispatch(fetchOfferSuccess(resp));
        });
    };
};


export const setSearchText = (searchText) => {

    return {
        type: types.SET_SEARCH_TEXT,
        searchText
    };
};