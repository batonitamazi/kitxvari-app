import * as React from 'react';
import '../App.css';




const PersonalInfoPage = () => {
    return (
        <div className='white-black-screen'>
            <div className='white-screen'>
                <h1 className='main-heading'>
                    Hey, Rocketeer, what are your coordinates?
                </h1>
                <form className='personalInfo-form' >
                    <input type="text" name="name" placeholder='First Name' />
                    <input type="text" name="name" placeholder='Last Name' />
                    <input type="Email" name="name" placeholder='Email' />
                    <input type="Number" name="name" placeholder='+995 5_ _ _ _ ' />
                </form>
                <div className='paginator'>
                    <div className='back-step-bubble'>
                        <div className='stepper-button'></div>
                    </div>
                    <div className='bubbles active'></div>
                    <div className='bubbles'></div>
                    <div className='bubbles'></div>
                    <div className='bubbles'></div>
                    <div className='bubbles'></div>
                    <div className='next-step-bubble'>
                        <div className='stepper-button'></div>
                    </div>
                </div>
            </div>

            <div className='black-screen'>
                <h1 className='main-heading'>
                    Redberry Origins
                </h1>
                <p className='main-paragraph'>
                    You watch “What? Where? When?” Yeah. Our founders used to play it.
                    That’s where they got a question about a famous American author and
                    screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
                    exact name and he answered Ray Redberry. And at that moment, a name
                    for a yet to be born company was inspired - Redberry 😇
                </p>
            </div>
        </div>

    )
}


export default PersonalInfoPage;



