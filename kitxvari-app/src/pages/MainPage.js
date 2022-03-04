import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as components from '../components/ComponentsFile';

const steps = [
    {
        active: true,
        componentform: <components.personalInfoPageForm />,
        componentparagraph: <components.PersonalInfoPageParagraph />,
        canNavigateBack: false
    },
    {
        active: true,
        componentform: <components.TechnicalSkillsForm/>,
        componentparagraph: <components.TechnicalSkillsParagraph/>,
        canNavigateBack: true
    },
    {
        active: false,
        componentform: <components.CovidPageForm/>,
        componentparagraph: <components.CovidPageParagraph/>,
        canNavigateBack: true
    },
    {
        active: false,
        canNavigateBack: true
    },
    {
        active: false,
        canNavigateBack: true
    },

]



const MainPage = () => {
    const history = useHistory()
    let [activeIndex, setActiveIndex] = useState(0);
    console.log(activeIndex)
    const nextStep = () => {
        if (activeIndex <= 3) {
            setActiveIndex(activeIndex + 1)
        }
        // let Ai = steps.findIndex(item => item.active)


    }
    const backStep = () => {
        if (activeIndex) {
            setActiveIndex(activeIndex - 1)
        }if(activeIndex === 0 ) {
            history.push('/');
        }

    }
    return (
        <div className='white-black-screen'>
            <div className='white-screen'>
                {/* {steps.map((item, index) =>{
                    
                })} */}
                {steps[activeIndex].componentform}
                <div className='paginator'>
                    <div className='back-step-bubble' onClick={backStep}>
                        <div className='stepper-button'></div>
                    </div>

                    {steps.map((item, index) => {

                        return <div key={index} className={'bubbles ' + (activeIndex === index ? 'active' : undefined)}></div>

                    })}
                    <div className='next-step-bubble' onClick={nextStep}>
                        <div className='stepper-button'></div>
                    </div>
                </div>
            </div>

            <div className='black-screen'>
                {steps[activeIndex].componentparagraph}

            </div>
        </div>
    )
}

export default MainPage;


