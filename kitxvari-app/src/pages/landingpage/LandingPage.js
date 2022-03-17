import * as React from 'react';
import './LandingPage.css';
import { useHistory } from "react-router-dom";

const LandingPage = () => {
    const history = useHistory();
    return (
        <div className='landing-page-container'>
            <h1 className='landing-page-title'>
                Welcome Rocketeer !
            </h1>
            <div className='landing-page-button-container'>
                <button className='start-button' onClick={() => { 
                    history.push(`/MainPage`);
                }}>
                    Start Questionnaire
                </button>
                <a className='submit-application-button'>
                    Submitted Applications
                </a>
            </div>

            <img className='rocketman'src='rocketman.png'></img>
        </div>
    );
}
export default LandingPage;
