import React, {useEffect, useState} from 'react'
import {ColumnContainer, ColumnTitle} from './styles'
import {Card} from './Card'
import './Readings.css'
import {FcAlphabeticalSortingAz, FcAlphabeticalSortingZa} from 'react-icons/fc'
import {AddNewSuggestion} from "./AddSuggestion";
import {useReading} from './ReadingContext'


export const Column = ({content, index, query}) =>{
    const {state, dispatch} = useReading()
    const [sorted, setSorted] = useState(false)

    

    const handleSorting = () =>{
        setSorted(!sorted)
        dispatch({type: 'SORT', payload: {position: index, ascending: sorted}})
    }

    useEffect(()=>{
        document.title='Melvin Gaye - Reading List'
    },[state])

    return index !== 3 ?
    (
        <ColumnContainer>       
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                <ColumnTitle>{content}</ColumnTitle>
                {sorted ? (<FcAlphabeticalSortingAz onClick={handleSorting} className="hover"/>) : (<FcAlphabeticalSortingZa onClick={handleSorting} className="hover"/>)}
            </div>
            <div style={{maxHeight: '500px', overflow: 'auto'}}>
                {state[index].books.filter(book => Object.keys(book).some(key=>book[key].toLowerCase().includes(query.toLowerCase()))).map(book=>(
                    <Card key={book.isbn} book={book}/>
                ))}            
            </div>
      </ColumnContainer>
    ) : 
    (<ColumnContainer >
        <ColumnTitle>{index} - {content}</ColumnTitle>
        <div style={{maxHeight: '560px', overflow: 'auto'}}>       
            {state[index].books.filter(book => Object.keys(book).some(key=>book[key].toLowerCase().includes(query.toLowerCase()))).map(book=>(
                <Card key={book.isbn} book={book}/>
            ))}   
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-start'}}><AddNewSuggestion/></div>
       
    </ColumnContainer>
    )
}

