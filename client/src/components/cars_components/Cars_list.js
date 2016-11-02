import React from 'react';
import CarsDetail from './Cars_detail';

class CarsList extends React.Component {

        render(){
            return(
                <ul>
                    <li> <CarsDetail></CarsDetail></li>
                    <li> <CarsDetail></CarsDetail></li>
                    <li> <CarsDetail></CarsDetail></li>
                    <li> <CarsDetail></CarsDetail></li>
                    <li> <CarsDetail></CarsDetail></li>
                    <li> <CarsDetail></CarsDetail></li>
                    <li> <CarsDetail></CarsDetail></li>
                </ul>
            );
        }
    }

export default CarsList;
