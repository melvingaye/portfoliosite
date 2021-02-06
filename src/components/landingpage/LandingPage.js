import React from 'react'
import * as Hero from '../utilities/styles'


export const LandingPage = (props)=>{

    const handleSubmit = e =>{
        console.log();
    }
    return(
        <>
        <Hero.HeroSection style={{display: 'flex',justifyContent: 'flex-start', background: 'linear-gradient(90deg, rgb(39, 176, 255) 0%,rgb(0, 232, 236) 100%)', minHeight: '740px', marginTop: '-40px'}}>
            <div className="container">
                <Hero.HeroRow>
                    <Hero.HeroColumn>
                        <Hero.TopLine topLineColor={'#111'}>Fullstack Software Engineer</Hero.TopLine>
                        <Hero.Heading>Filling an open position or hiring a contractor?</Hero.Heading>
                        <Hero.Description>Look no further, this engineer is jam packed with features.</Hero.Description>
                        <form onSubmit={handleSubmit}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                               <div>
                                    <Hero.LandingInput placeholder="Enter Name"/>
                                </div>
                                <div>
                                    <Hero.LandingInput placeholder="Enter Contact Information"/>
                                </div>
                                <div>
                                    <Hero.LandingInput placeholder="Additional Comments"/>
                                </div>
                                <div>
                                    <Hero.HeroButton>Get In Touch 📧</Hero.HeroButton>
                                </div>
                            </div>
                        </form>
                    </Hero.HeroColumn>
                    <Hero.HeroColumn>
                        <Hero.ImageWrapper>
                            <Hero.ImageHolder imageSource="images/landing-page.svg" scaleSize={1.6}/>
                        </Hero.ImageWrapper>
                    </Hero.HeroColumn>                                           
                </Hero.HeroRow>
            </div>
        </Hero.HeroSection>
        </>
    )
}