import React, {Component} from 'react';
import Header from './Header';
import './App.css';

class About extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <span>This is the about page</span>
            </div>
        )
    }
}

export default About