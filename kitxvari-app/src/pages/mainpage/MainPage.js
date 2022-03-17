import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as components from '../../components/ComponentsFile';
import '../../App.css';

const steps = [
    {
        active: true,
        componentform: <components.personalInfoPageForm />,
        componentparagraph: <components.PersonalInfoPageParagraph />,
        canNavigateBack: false
    },
    {
        active: true,
        componentform: <components.TechnicalSkillsForm />,
        componentparagraph: <components.TechnicalSkillsParagraph />,
        canNavigateBack: true
    },
    {
        active: false,
        componentform: <components.CovidPageForm />,
        componentparagraph: <components.CovidPageParagraph />,
        canNavigateBack: true
    },
    {
        active: false,
        componentform: <components.RedBerryInsightForm />,
        componentparagraph: <components.RedBerryInsightParagraph />,
        canNavigateBack: true
    },
    {
        active: false,
        canNavigateBack: true
    },

]



const MainPage = () => {
    // let index = 0
    // let { search } = useLocation();
    const history = useHistory()
    const [activeIndex, setActiveIndex] = useState(0);
    // console.log(activeIndex)
    // const query = new URLSearchParams(search);
    // const activeIndex = query.get('form');
    const nextStep = () => {
        if (activeIndex === 3) {   
            history.push('/submit')
        } else if (activeIndex <= 3) {
            // index +=1
            setActiveIndex(activeIndex + 1)
            // history.push(`/MainPage?form=${activeIndex + 1}`);
            // history.push(`/MainPage/${activeIndex}`);
            history.push(`/MainPage`);

        }


    }
    const backStep = () => {
        if (activeIndex) {
            setActiveIndex(activeIndex - 1)
        } if (activeIndex === 0) {
            history.push(`/`);
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


