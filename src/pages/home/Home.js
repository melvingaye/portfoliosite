import React, {useEffect} from 'react'
import {Section} from '../../components/utilities/Section'
import {LandingPage} from '../../components/landingpage/LandingPage'

function Home(){
    useEffect(()=>{
        document.title='Melvin Gaye - Home'
        window.scrollTo(0, 0)
    },[])

    return(
        <>
        <LandingPage/>
        <Section topLineText={'CPower Energy Management'} headingText={'Software Developer'} descriptionText={'Worked on frontend and backend applications.'} btnText={'Learn More'}/>
        <Section isRowReversed topLineText={'AiRISTA Flow'} headingText={'Software Engineer'} descriptionText={'Worked on frontend and backend applications.'} btnText={'Learn More'}/>
        <Section topLineText={'Driven Media Group'} headingText={'Junior Developer'} descriptionText={'Worked on frontend and backend applications.'} btnText={'Learn More'}/>
        </>
    )
}

export default Home;