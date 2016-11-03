import React from 'react';
import CarsList from './Cars_list';
import algorithms from '../../algorithms/index';
import {connect} from 'react-redux';
import InputSearch from '../common/input_search';

class Cars extends React.Component {

    constructor(props){
        super(props);
    }

    renderCars(){
        var cars;

        if(!this.props.carsJson){
            return (<h1>LOADING...</h1>);
        }
        else {
            cars = algorithms.parseJson(this.props.carsJson);

            return(<div className='row'>
                    <InputSearch></InputSearch>
                    <CarsList cars={cars}></CarsList>
                </div>
            );
        }
    }

    render(){

        return(
            <div>
                {this.renderCars()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carsJson: state.carsJson
    };
}

export default connect(mapStateToProps)(Cars);
