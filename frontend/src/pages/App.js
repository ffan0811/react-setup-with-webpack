import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import SecondPage from './SecondPage'

import 'styles/bootstrap.css';
import 'styles/main.scss';
import 'styles/styles.scss';
import 'styles/test.css';

const App = () => {
    return (
        <div>
            asdf
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/next" component={SecondPage} />
            </BrowserRouter>
        </div>
    )
}

export default App