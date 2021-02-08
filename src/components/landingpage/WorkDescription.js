import React from 'react'
import {Description} from '../utilities/styles'

export const WorkDescription = (props)=>{

return(
    <>
    <ul>
        {props.jobDescriptions?.map((item, i)=>(
            <li style={{marginLeft: '12px'}}  key={i}><Description>{item}</Description></li>
        ))}
    </ul>
    <div style={{display: 'flex', alignContent: 'center', maxWidth: '50%', marginBottom: '15px', marginTop: '-15px'}}>
        {props.iconSources?.map((item, i)=>(
            <img key={i} src={item || "images/facebook.svg"} alt="technologie stack used" style={{maxWidth: '15%', marginRight: i !== 3 ? '10px' : '0px'}}/>
        ))}
    </div> 
    </>
)}
