import React from 'react';
import {Component} from 'react';

class InputSearch extends Component {

    render(){
        return (
            <div className="search__main__base">
                <input type="text" placeholder="Filter by name"/>
            </div>
        );
    }
}


export default (InputSearch);