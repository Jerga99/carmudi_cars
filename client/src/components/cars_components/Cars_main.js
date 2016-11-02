import React from 'react';
import CarsList from './Cars_list';

class Cars extends React.Component {

    render(){
        return(
            <div className='row'>
                <CarsList></CarsList>
            </div>
        );
    }
}

export default Cars;
