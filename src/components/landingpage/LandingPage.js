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
                        <Hero.Heading>Looking for a Full stack engineer?</Hero.Heading>
                        <Hero.Description>Look no further. Specialized in .Net ecosystem and Javascript applications.</Hero.Description>
                        <form onSubmit={handleSubmit}>
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly'}}>
                                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                <input 
                                style={{flexBasis: '1', width: '80%', borderRadius: '4px', paddingLeft: '10px', border: '1px solid #dadada', marginBottom: '15px', lineHeight: '35px'}}
                                placeholder="Enter your First and Last name"
                                />
                                <input 
                                style={{flexBasis: '1', width: '80%', borderRadius: '4px', paddingLeft: '10px', border: '1px solid #dadada', marginBottom: '15px', lineHeight: '35px'}}
                                placeholder="Enter your email"
                                />
                                </div>
                                <div>
                                    <input                                 
                                    style={{flexBasis: '1', width: '55%', borderRadius: '4px', paddingLeft: '10px', border: '1px solid #dadada', lineHeight: '35px', marginRight: '15px'}}
                                    placeholder="Brief message for getting in touch"/>
                                    <button style={{width: '22%', borderRadius: '4px', padding: '8px 10px'}}>Contact</button>
                                </div>
                            </div>
                        </form>
                    </Hero.HeroColumn>
                    <Hero.HeroColumn>
                       <img src="images/landing-page.svg" alt="fullstack engineer" style={{maxWidth: '100%', border: 0, verticalAlign: 'middle', display: 'inline-block'}}/>
                    </Hero.HeroColumn>                                           
                </Hero.HeroRow>
            </div>
        </Hero.HeroSection>
        </>
    )
}
