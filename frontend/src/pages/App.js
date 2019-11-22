import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Home = lazy(() => import(/* webpackChunkName: "Home" */'./Home'));
const SecondPage = lazy(() => import(/* webpackChunkName: "SecondPage" */'./SecondPage'));

import 'styles/main.scss';

const App = () => {
    return (
        <div>
            asdf
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/next" component={SecondPage} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    )
}

export default App