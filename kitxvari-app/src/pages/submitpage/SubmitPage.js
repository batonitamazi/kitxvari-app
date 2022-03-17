import * as React from 'react';
import '../../App.css';
import { useHistory, useLocation } from "react-router-dom";


const SubmitPage = () => {
    
    const history = useHistory();
    return (
        <div className='landing-page-container'>
            <div className='landing-page-button-container'>
                <button className='start-button' onClick={() => {
                    history.push("/thankspage");
                }}>
                    Submit
                </button>
                <a className='submit-application-button' onClick={() => {
                    history.push(`/MainPage/`);
                }}>
                    go Back
                </a>
            </div>

            <img className='rocketman' src='rocketman.png'></img>
        </div>
    )
}












export default SubmitPage;