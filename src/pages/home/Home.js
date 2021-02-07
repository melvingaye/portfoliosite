import React, {useEffect} from 'react'
import {Section} from '../../components/utilities/Section'
import {LandingPage} from '../../components/landingpage/LandingPage'

function Home(){
    useEffect(()=>{
        document.title='Fullstack Software Engineer | Melvin Gaye'
        window.scrollTo(0, 0)
    },[])

    return(
        <>
        <LandingPage/>
        <Section imageSource={'images/landing-4.svg'} scaleSize={0.9} topLineText={'CPower Energy Management'} headingText={'Software Developer'} descriptionText={'Worked on frontend and backend applications.'} btnText={'Learn More'}/>
        <Section imageSource={'images/landing-3.svg'} scaleSize={1.9} isBackgroundDark isRowReversed topLineText={'AiRISTA Flow'} headingText={'Software Engineer'} descriptionText={'Worked on frontend and backend applications.'} btnText={'Learn More'}/>
        <Section imageSource={'images/landing-2.svg'} scaleSize={1.9} topLineText={'Driven Media Group'} headingText={'Junior Developer'} descriptionText={'Worked on frontend and backend applications.'} btnText={'Learn More'}/>
        </>
    )
}

export default Home;