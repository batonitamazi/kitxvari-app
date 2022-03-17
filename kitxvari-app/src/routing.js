import React from "react"
import {Switch, Route } from "react-router-dom"
import LandingPage from "./pages/landingpage/LandingPage"
import MainPage from "./pages/mainpage/MainPage"
import SubmitPage from "./pages/submitpage/SubmitPage"
import ThanksPage from "./pages/thankspage/ThanksPage"


const Routing = () => {
    return <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/MainPage' component={MainPage} exact />
        <Route path='/submit' component={SubmitPage} exact/>
        <Route path='/thankspage' component={ThanksPage}/>
    </Switch>
}
export default Routing