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


// export const personalInfoPageForm = () => {
//     return (
//         <>
//             <h1 className='main-heading'>
//                 Hey, Rocketeer, what are your coordinates?
//             </h1>
//             <form className='personalInfo-form'>
//                 <input type="text" name="name" placeholder='First Name' />
//                 <input type="text" name="name" placeholder='Last Name' />
//                 <input type="Email" name="name" placeholder='Email' />
//                 <input type="Number" name="name" placeholder='+995 5_ _ _ _ ' />
//             </form>
//         </>


//     )
// }
// export const PersonalInfoPageParagraph = () => {
//     return (
//         <>
//             <h1 className='main-heading'>
//                 Redberry Origins
//             </h1>
//             <p className='main-paragraph'>
//                 You watch “What? Where? When?” Yeah. Our founders used to play it.
//                 That’s where they got a question about a famous American author and
//                 screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
//                 exact name and he answered Ray Redberry. And at that moment, a name
//                 for a yet to be born company was inspired - Redberry 😇
//             </p>
//         </>


//     )
// }


// export const personalInfoPageForm = () => {
//     return (
//         <>
//             <h1 className='main-heading'>
//                 Hey, Rocketeer, what are your coordinates?
//             </h1>
//             <form className='personalInfo-form'>
//                 <input type="text" name="name" placeholder='First Name' />
//                 <input type="text" name="name" placeholder='Last Name' />
//                 <input type="Email" name="name" placeholder='Email' />
//                 <input type="Number" name="name" placeholder='+995 5_ _ _ _ ' />
//             </form>
//         </>


//     )
// }
// export const PersonalInfoPageParagraph = () => {
//     return (
//         <>
//             <h1 className='main-heading'>
//                 Redberry Origins
//             </h1>
//             <p className='main-paragraph'>
//                 You watch “What? Where? When?” Yeah. Our founders used to play it.
//                 That’s where they got a question about a famous American author and
//                 screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the
//                 exact name and he answered Ray Redberry. And at that moment, a name
//                 for a yet to be born company was inspired - Redberry 😇
//             </p>
//         </>


//     )
// }

