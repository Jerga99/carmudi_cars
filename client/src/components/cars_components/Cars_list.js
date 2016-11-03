import React from 'react';
import CarsDetail from './Cars_detail';
import algorithms from '../../algorithms/index';
import * as actions from '../../actions/index';
import {connect} from 'react-redux';

class CarsList extends React.Component {

    constructor(props){

        super(props);
        var {dispatch} = this.props;
        dispatch(actions.fetchCars());

        this.state = {
            cars: []
        };
    }

    renderCars(carsArr){

        return carsArr.map((carObj) => {
           return <li><CarsDetail image = {carObj.image} location = {carObj.location} price = {carObj.price} name = {carObj.name}></CarsDetail></li>;
        });
    }

        render(){
           var carsArr = algorithms.parseJson(this.props.carsJson);

            return(
                <ul>
                    {this.renderCars(carsArr)}
                </ul>
            );
        }
    }

function mapStateToProps(state) {
    return {
        carsJson: state.carsJson
    };
}

export default connect(mapStateToProps)(CarsList);
