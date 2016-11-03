import axios from 'axios';
import {types} from './types';

const fetchOfferSuccess = (JSON) => {
    /* eslint-disable no-alert, no-console */
    console.log(JSON);
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
