import React from 'react'
import {Link} from 'react-router-dom'
import * as Hero from './styles'
import {WorkDescription} from '../landingpage/WorkDescription'

export const Section = (props) =>{
    return(
        <>
        <Hero.HeroSection isBackgroundDark={props.isBackgroundDark} paddingHeight={props.paddingHeight}>
            <div className="container">
            <Hero.HeroRow isRowReversed={props.isRowReversed}>
                <Hero.HeroColumn>
                    <Hero.Wrapper>
                        <Hero.TopLine>{props.topLineText ? props.topLineText : '100% Secure'}</Hero.TopLine>
                        <Hero.Heading 
                            isDarkHeading={props.darkHeading}
                            marginSize={props.headingMargin}
                            fontSize={props.headingSize}
                            lineHeight={props.headingHeight}
                            fontWeight={props.headingWeight}
                            >{props.headingText ? props.headingText : 'Stay protected 24/7 anywhere anytime'}
                            </Hero.Heading>
                            <WorkDescription jobDescriptions={props.jobDescriptions} iconSources={props.iconSources}/>
                            <Link to={ props.linkText ? props.linkText : '/'}>
                            <Hero.HeroButton btnWidthPercent={"50%"}>
                            {props.btnText ? props.btnText : 'VIEW PROJECTS'}
                            </Hero.HeroButton>
                            {/* <Button 
                            btnStyle='btn--outline'>
                            {props.btnText ? props.btnText : 'VIEW PROJECTS'}
                            </Button> */}
                        </Link>
                    </Hero.Wrapper>
                </Hero.HeroColumn>
                <Hero.HeroColumn>
                    <Hero.ImageWrapper>
                        <Hero.ImageHolder imageSource={props.imageSource} scaleSize={props.scaleSize}/>
                    </Hero.ImageWrapper>
                </Hero.HeroColumn>
            </Hero.HeroRow>
            </div>
        </Hero.HeroSection>
        </>
    );
}