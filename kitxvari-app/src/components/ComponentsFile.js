import * as React from 'react';
import '../App.css';


export const personalInfoPageForm = () => {
    return (
        <>
            <h1 className='main-heading'>
                Hey, Rocketeer, what are your coordinates?
            </h1>
            <form className='personalInfo-form'>
                <input type="text" name="name" placeholder='First Name' />
                <input type="text" name="name" placeholder='Last Name' />
                <input type="Email" name="name" placeholder='Email' />
                <input type="Number" name="name" placeholder='+995 5_ _ _ _ ' />
            </form>
        </>

    )
}
export const PersonalInfoPageParagraph = () => {
    return (
        <>
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
        </>


    )
}


export const TechnicalSkillsForm = () => {
    return (
        <>
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
        </>


    )
}
export const TechnicalSkillsParagraph = () => {
    return (
        <>
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
        </>


    )
}


export const CovidPageForm = () => {
    return (
        <>
            <h1 className='main-heading'>
                Covid Stuff
            </h1>
            <p>
                how would you prefer to work?
            </p>
            <div >
                <input type="radio" value="office" name="choose-office" /> From Sairme Office
                <input type="radio" value="home" name="choose-office" /> From Home
                <input type="radio" value="hybrid" name="choose-office" /> Hybrid
            </div>
            <p>
                Did you contact covid 19? :(
            </p>
            <div >
                <input type="radio" value="yes" name="covid19" /> yes
                <input type="radio" value="no" name="covid19" /> no
            </div>
            <p>
                When?
            </p>
            <div>
                <input type="date" id="start" name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" />
            </div>
            <p>
                Have you been vaccinated?
            </p>
            <div >
                <input type="radio" value="yes" name="choose" /> yes
                <input type="radio" value="no" name="choose" /> no
            </div>
            <p>
                When did you get your last covid vaccine?
            </p>
            <div>
                <input type="date" id="start" name="trip-start"
                    value="2018-07-22"
                    min="2018-01-01" max="2018-12-31" />
            </div>


        </>


    )
}

export const CovidPageParagraph = () => {
    return (
        <>
            <h1 className='main-heading'>
                Redberry Covid Policies
            </h1>
            <p className='main-paragraph'>
                As this infamous pandemic took over the world, we
                adjusted our working practices so that our employees
                can be as safe and comfortable as possible. We have a
                hybrid work environment, so you can either work from
                home or visit our lovely office on Sairme Street. If
                it was up to us, we would love you to see us in the office
                because we think face-to-face communications {'>'} Zoom meetings.
                Both on the fun and productivity scales.
            </p>
        </>


    )
}


export const RedBerryInsightForm = () => {
    return (
        <>
            <h1 className='main-heading'>
                What about you?
            </h1>
            <p>
                Would you attend Devtalks and maybe also organize your own?
            </p>
            <div >
                <input type="radio" value="yes" name="choose" /> yes
                <input type="radio" value="no" name="choose" /> no
            </div>
            <p>
                What would you speak about at Devtalk?
            </p>
            <form >
                <input type="text" name="Devtalk" placeholder='I Would...' />
            </form>
            <p>
                Tell us something special
            </p>
            <form >
                <input type="text" name="special" placeholder='I...' />
            </form>
        </>


    )
}
export const RedBerryInsightParagraph = () => {
    return (
        <>
            <h1 className='main-heading'>
                Redberrian Insights
            </h1>
            <p className='main-paragraph'>
                We were soo much fun before the pandemic started!
                Parties almost every weekend and lavish employee
                birthday celebrations! Unfortunately, covid ruined
                that fun like it did almost everything else in the world.
                But we try our best to zhuzh it up a bit. For example,
                we host biweekly Devtalks where our senior and lead developers
                talk about topics they are passionate about. Previous topics
                have included Web3, NFT, Laravel 9, Kubernetes, etc. We hold
                these talks in the office but you can join our Zoom broadcast
                as well. Feel free to join either as an attendee or a speaker!
            </p>
        </>


    )
}

