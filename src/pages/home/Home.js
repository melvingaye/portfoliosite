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
        <Section linkText={"/projects"} iconSources={["images/dotnet.svg","images/oracle.svg","images/c-sharp.svg"]} paddingHeight={50} jobDescriptions={["Work closely with Development, Infrastructure and Product Management teams to build and implement new applications or features","Develop software solutions by translating business requirements into functional applications","Troubleshoot and resolve database, code related technical issues as they arise","Improve business operations by identifying bottlenecks and bugs, and recommending / developing solutions to these problems"]} imageSource={'images/landing-4.svg'} scaleSize={0.9} topLineText={'CPower Energy Management'} headingText={'Software Developer'}/>
        <Section linkText={"/projects"} iconSources={["images/nodejs.svg","images/kafka.svg","images/angular-icon.svg"]} paddingHeight={120} jobDescriptions={["Involved in design, development, coding, configuring, testing and deployment of Enterprise Grade RFID and RTLS solutions","Utilized established development guidelines and tools including but not limited to .net, SQL Server, C#/VB.NET, JavaScript, CSS, and HTML","Development, testing, and maintainenance of multiple applications across various platforms","Compile timely, comprehensive and accurate documentation"]} imageSource={'images/landing-3.svg'} scaleSize={1.9} isBackgroundDark isRowReversed topLineText={'AiRISTA Flow'} headingText={'Software Engineer'} />
        <Section linkText={"/projects"} iconSources={["images/javascript.svg","images/c-sharp.svg","images/postman.svg"]} paddingHeight={110} jobDescriptions={["Integrations with multiple marketing platforms through Web APIs and Webhooks","Work with stakeholders on understanding scope of work to be completed","Adhere to project deadlines in an efficient and effective manner","Database Design and Development"]} imageSource={'images/landing-2.svg'} scaleSize={1.9} topLineText={'Driven Media Group'} headingText={'Junior Developer'} descriptionText={'Worked on frontend and backend applications.'}/>
        </>
    )
}

export default Home;

