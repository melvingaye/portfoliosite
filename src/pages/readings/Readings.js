import React, {useEffect, useState} from 'react'
import {ReadingContainer, OuterContainer} from './styles'
import {Column} from './Column'
import './Readings.css'
import {useReading, ReadingProvider} from './ReadingContext'

function Readings(){
    const {state} = useReading()
    const [search, setSearch] = useState('')


    useEffect(()=>{
        document.title='Melvin - Reading List'
    })

    return(
        <ReadingProvider>
        <OuterContainer>
          <div className="search-container">
              <div className="filter-inputs">
                    <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Enter search term"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                        className="filter-input"
                    />
                </div>
          </div>
          <ReadingContainer>
              {state.map((list, i)=>(
              <Column key={list.id} content={list.text} index={i} query={search}/>
              ))}
          </ReadingContainer>
        </OuterContainer>
        </ReadingProvider>
    )
}

export default Readings;