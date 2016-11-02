import React from 'react';

class CarsDetail extends React.Component {

    render(){
        return(
            <div className='car-detail__main__base'>
                <div className='car-detail__main__base__picture'>
                    <img src='http://blog.caranddriver.com/wp-content/uploads/2015/11/BMW-2-series.jpg' alt=''/>
                </div>
                <div className='car-detail__main__base__description'>
                    <div className='car-detail__main__base__description__name'>
                        <h2>BMW some brand 2013</h2> <span><h2>880,000,000 d</h2></span>
                    </div>
                    <div className='car-detail__main__base__description__location'>
                        <p>Location, very long location</p>

                    </div>
                </div>
            </div>
        );
    }
}

export default CarsDetail;
