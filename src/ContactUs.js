import React, {Component} from 'react';
import Header from './Header';
import './App.css';

class ContactUs extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <span>This is the contact us page</span>
            </div>
        )
    }
}

export default ContactUs