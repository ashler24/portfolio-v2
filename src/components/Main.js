import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'

const Main = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route to="/" exact>
                    <Home />
                </Route>
            </Switch>
        </>
    )
}

export default Main
