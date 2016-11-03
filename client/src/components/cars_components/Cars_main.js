import React from 'react';
import CarsList from './Cars_list';
import {connect} from 'react-redux';

class Cars extends React.Component {


    render(){
        return(
            <div className='row'>
                <CarsList></CarsList>
            </div>
        );
    }
}



export default connect()(Cars);
