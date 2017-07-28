import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import ContactUs from './ContactUs';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    (<BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contactus" component={ContactUs} />
        </Switch>
     </BrowserRouter>
     ), document.getElementById('root')
);
registerServiceWorker();
