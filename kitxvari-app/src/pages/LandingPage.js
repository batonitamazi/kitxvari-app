import * as React from 'react';
import '../App.css';


const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <h1 className='landing-page-title'>
                Welcome Rocketeer !
            </h1>
            <div className='landing-page-button-container'>
                <button className='start-button'>
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
