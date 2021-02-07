import styled from 'styled-components'


export const HeroSection = styled.div
`
background-color: ${props => props.isBackgroundDark ? '#f5f5f5' : '#fff'};
padding: ${props => `${props.paddingWidth || 100}px ${props.paddingHeight || 0}px`};
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
color: ${props => props.topLineColor || '#f00946'};
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
color: ${props => props.isDarkDescription || '#111'};
`

export const ImageWrapper = styled.div
`
max-width: 555px;
`

export const ImageHolder = styled.img.attrs(props=>({
    src: props.imageSource || '/images/img-1.svg'
}))
`
margin-top: 0;
margin: auto;
padding-right: 0;
border: 0;
max-width: 100%;
display: inline-block;

@media(min-width: 1300px){
    transform: ${props => `scale(${props.scaleSize})` || 'scale(1)'};
    margin-left: 25px;
}
`

export const LandingInput = styled.input
`
flex-basis: 1;
width: 100%;
border-radius: 4px;
padding-left: 10px;
border: 1px solid #dadada;
margin-bottom: 15px;
line-height: 45px;
outline: none;

&:focus{
    border-color: #111;
    box-shadow: 0 0 8px 0 #111;
}
`
export const HeroButton = styled.button
`
padding: 14px 20px;
border-radius: 4px;
width: 100%;
text-decoration: none;
font-size: 20px;
outline: none;
background: #111;
color: #fff;
border: #111 solid 1px;
cursor: pointer;
white-space: nowrap;

&:hover{
    background: rgb(235, 52, 82);
    border: #fff solid 1px;
    color: #fff;
}

@media(max-width: 960px){
    text-align: center;
    border-radius: 4px;
    width: 80%;
    text-decoration: none;
    font-size: 24px;
    background-color: transparent;
    color: #fff;
    padding: 14px 20px;
    border: 1px solid #fff;
    transition: all 0.3s ease-out;
};
`