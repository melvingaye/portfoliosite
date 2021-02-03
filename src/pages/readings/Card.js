import React, { useState } from 'react'
import {CardContainer} from './styles'
import {MdExpandMore, MdExpandLess} from 'react-icons/md'
import './Readings.css'

export const Card =({book})=>{
    const [hideDetail, setHideDetail] = useState(true)   
    const handleClick = () => setHideDetail(!hideDetail)

    return(
        <CardContainer style={{display: 'flex', flexDirection: 'column'}} onClick={handleClick}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label style={{paddingRight: '5px', fontWeight: 'bold'}}>Title:</label> 
                <span>{book?.title}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label style={{paddingRight: '5px', fontWeight: 'bold'}}>Author:</label> 
                <span>{book?.author}</span>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <div>
                <label style={{paddingRight: '5px', fontWeight: 'bold'}}>Category:</label> 
                <span>{book?.category}</span>
                </div>
                {hideDetail ? (<MdExpandMore onClick={handleClick} className="hover"/>) : (<MdExpandLess onClick={handleClick} className="hover"/>)}              
            </div>
            <div style={{display: hideDetail ? 'none' : 'block', fontSize: '12px', marginTop: '4px'}}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{fontStyle: 'italic'}}><strong>Description - </strong>{book?.description}</p>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                <p style={{fontStyle: 'italic'}}><strong>Review - </strong>{book?.review}</p>
                </div>
            </div>
        </CardContainer>
    )
}

//isbn, title, author, description, review