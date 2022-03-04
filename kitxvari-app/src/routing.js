import React from "react"
import {Switch, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import SubmitPage from './pages/SubmitPage'
import MainPage  from "./pages/MainPage"
import ThanksPage from "./pages/ThanksPage"



const Routing = () => {
    return <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/MainPage' component={MainPage} exact />
        <Route path='/submit' component={SubmitPage} exact/>
        <Route path='/thankspage' component={ThanksPage}/>
    </Switch>
}
export default Routing