import React from 'react';
import CarsDetail from './Cars_detail';
import { browserHistory } from 'react-router';

class CarsList extends React.Component {

    constructor(props){
        super(props);
    }

    redirectToSingleView(id){
        return function() {
            /* eslint-disable no-alert, no-console */
            browserHistory.push(`car/${id}`);};
    }

    renderCars(){
        /* eslint-disable no-alert, no-console */
        console.log(this.props.cars);

        return this.props.cars.map((carObj) => {
           return <li><CarsDetail onClickHandler={this.redirectToSingleView(carObj.id)} key = {carObj.id} image = {carObj.thumbnail} location = {carObj.location} price = {carObj.price} name = {carObj.name}></CarsDetail></li>;
        });
    }

        render(){

            return(
                <ul>
                    {this.renderCars()}
                </ul>
            );
        }
    }


export default (CarsList);
