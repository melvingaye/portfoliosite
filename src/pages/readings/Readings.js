import React, {useEffect, useState} from 'react'
import {ReadingContainer, OuterContainer} from './styles'
import {Column} from './Column'
import './Readings.css'
import {useReading, ReadingProvider} from './ReadingContext'

function Readings(){
    const {state} = useReading()
    const [search, setSearch] = useState('')


    useEffect(()=>{
        document.title='Reading List | Melvin Gaye'
        window.scrollTo(0, 0)
    },[])

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

//additional features ---add calendar compoenent for tracking amount of books read a month, maybe even pages read a week
//color tracker for currently read book
//or by category to show which type I'm reading more of
// add pop up side menu for items - calendar, suggestion page, dashboard.....vintage libray like
//add other search fields to drill down into searching
export default Readings;