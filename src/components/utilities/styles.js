import styled from 'styled-components'

export const HeroSection = styled.div
`
background-color: ${props => props.isBackgroundDark ? '#111' : '#fff'};
padding: 160px 0;
`

export const HeroRow = styled.div
`
display: flex;
align-items: center;
flex-direction: ${props => props.isRowReversed ? 'row-reverse' : 'row'};
margin-right: -15px;
margin-left: -15px;
margin-bottom: -15px;
flex-wrap: wrap;
align-content: stretch;
`

export const HeroColumn = styled.div
`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;
max-width: 50%;
flex-basis: 50%;

@media(max-width: 768px){
    max-width: 100%;
    flex-basis: 100%;
};
`
export const Wrapper = styled.div
`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media(max-width: 768px){
    padding-bottom: 65px;
};
`

export const TopLine = styled.div
`
color: #f00946;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1
`
margin-bottom: ${props => props.marginSize || "24px"};
font-size: ${props => props.fontSize || "48px"};
line-height: ${props => props.lineHeight || "1.1"};
font-weight: ${props => props.fontWeight || "600"};
color: ${props => props.isDarkHeading ?  '#fff' : '#111'};
`

export const Description = styled.p
`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${props => props.isDarkDescription ? '#fff' : '#111'};
`

export const HeroButton = styled.button
`

`