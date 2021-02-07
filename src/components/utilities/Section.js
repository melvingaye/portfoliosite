import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../utilities/Button'
import * as Hero from './styles'

export const Section = (props) =>{
    return(
        <>
        <Hero.HeroSection isBackgroundDark={props.isBackgroundDark}>
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
                        <Hero.Description 
                        isDarkDescription={props.darkDescription}
                        >{props.descriptionText ? props.descriptionText : 'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime'}
                        </Hero.Description>
                        <Link to={ props.linkTexT ? props.linkTexT : '/'}>
                            <Button 
                            btnStyle='btn--outline'>
                            {props.btnText ? props.btnText : 'Learn More!'}
                            </Button>
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