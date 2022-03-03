import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import CovidPage from './pages/CovidPage'
import LandingPage from './pages/LandingPage'
import PersonalInfoPage from './pages/PersonalInfo'
// import rdbrInsightPage from './pages/rdbrInsightPage'
// import SubmitPage from './pages/SubmitPage'
// import TechSkillPage from './pages/TechSkillPage'
// import ThanksPage from './pages/ThanksPage'



const Routing = () => {
    return <Switch>
        <Route path='/' component={LandingPage} exact />
        <Route path='/personalinfo' component={PersonalInfoPage} exact />
        {/* <Route path='/techskill' component={TechSkillPage} exact/>
        <Route path='/covid' component={CovidPage} exact/>
        <Route path='/rdbrinsight' component={rdbrInsightPage} exact/>
        <Route path='/submit' component={SubmitPage} exact/>
        <Route path='/thanks' component={ThanksPage} exact/>  */}
    </Switch>
}
export default Routing