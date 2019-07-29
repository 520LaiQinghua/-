import React, { Component } from 'react';
import Header from '../../../components/app-header/index'
import Banner from './children/home_banner/banner'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Banner/>
            </div>
        );
    }
}

export default Home;