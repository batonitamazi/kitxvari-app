import  React, { useState } from 'react';
import * as components from '../components/ComponentsFile';

const steps = [
    {
        active: false,
        componentform: components.personalInfoPageForm,
        componentparagraph: components.PersonalInfoPageParagraph,
        canNavigateBack: false
    },
    {
        active: true,
        componentform: components.TechnicalSkillsForm,
        componentparagraph: components.TechnicalSkillsParagraph,
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
    {
        active: false,
        canNavigateBack: true
    },

]





const MainPage = () => {
    console.log(steps.findIndex(item => item.active))
    const [activeIndex, setActiveIndex] = useState(0);
    const nextStep = () => {
        // let Ai = steps.findIndex(item => item.active)
        // console.log(activeIndex);
        setActiveIndex(activeIndex+ 1)
        console.log(activeIndex) 
        
        

    }
    return (
        <div className='white-black-screen'>
            <div className='white-screen'>

                    <components.personalInfoPageForm/>
                <div className='paginator'>
                    <div className='back-step-bubble'>
                        <div className='stepper-button'></div>
                    </div>
                    {steps.map((item, index) => {
                        return <div key={index} className={'bubbles ' + (activeIndex === index ? 'active' : undefined)}></div>
                    })}
                    {/* <div className='bubbles active'></div>
                    <div className='bubbles'></div>
                    <div className='bubbles'></div>
                    <div className='bubbles'></div>
                    <div className='bubbles'></div> */}
                    <div className='next-step-bubble' onClick={nextStep}>
                        <div className='stepper-button'></div>
                    </div>
                </div>
            </div>

            <div className='black-screen'>
                <components.PersonalInfoPageParagraph />
                
            </div>
        </div>
    )
}

export default MainPage;


{/* <h1 className='main-heading'>
                    Hey, Rocketeer, what are your coordinates?
                </h1>
                <form className='personalInfo-form' >
                    <input type="text" name="name" placeholder='First Name' />
                    <input type="text" name="name" placeholder='Last Name' />
                    <input type="Email" name="name" placeholder='Email' />
                    <input type="Number" name="name" placeholder='+995 5_ _ _ _ ' />
                </form> */}

                // <h1 className='main-heading'>
                //     Redberry Origins
                // </h1>
                // <p className='main-paragraph'>
                //     You watch “What? Where? When?” Yeah. Our founders used to play it.
                //     That’s where they got a question about a famous American author and
                //     screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
                //     exact name and he answered Ray Redberry. And at that moment, a name
                //     for a yet to be born company was inspired - Redberry 😇
                // </p>