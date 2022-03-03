import * as React from 'react';




const TechSkillPage = () => {
    return (
        <div className='white-black-screen'>
            <div className='white-screen'>
                <h1 className='main-heading'>
                    Tell us about your skills
                </h1>
                <form className='personalInfo-form' >
                    <select name="skills" id="cars" form="skillsform">
                        <option value="" disabled selected >skills</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input type="text" name="name" placeholder='Experience Duration in Years' />
                    <button>
                        Add Programming Language
                    </button>
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
                    A bit about our battles
                </h1>
                <p className='main-paragraph'>
                    As we said, Redberry has been on the field for quite some time now,
                    and we have touched and embraced a variety of programming languages,
                    technologies, philosophies, and frameworks. We are battle-tested in
                    PHP Laravel Stack with Vue.js, refined in React, and allies with Serverside
                    technologies like Docker and Kubernetes, and now we have set foot in the web3 industry.
                </p>
            </div>
        </div>
    )
}












export default TechSkillPage;