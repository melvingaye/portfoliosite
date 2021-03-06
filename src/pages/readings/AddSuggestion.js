import React, { useRef, useState } from 'react'
import '../readings/Readings.css'
import {useReading} from './ReadingContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddNewSuggestion = () =>{
    const titleRef = useRef();
    const authorRef = useRef();

    const {dispatch} = useReading()
    const [showForm, setForm] = useState(false)


    const handleSubmit = (e) =>{
        // if(titleRef.current.value === '' && authorRef.current.value === ''){
        //     toast.error('🚨 You missed some required fields!')       
        // }
        // else
        // {
            dispatch({type: 'ADD', payload: {title: titleRef.current.value, author: authorRef.current.value}})
            toast.success('🦄 Suggestion sumbitted for approval, here\'s a preview of it!')
            titleRef.current.value = ''
            authorRef.current.value = ''
            setForm(false); 
        // }
    }


    if(showForm){
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label style={{paddingRight: '5px'}}>Title:</label>
                    <input type="text" placeholder="Enter book title" ref={titleRef}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label style={{paddingRight: '5px'}}>Author:</label>
                    <input type="text" placeholder="Enter book author" ref={authorRef}/>
                </div>
                <button type="submit">Add Suggestion</button>
                </form>
            </div>
        )
    }
    return(
        <div className="hover" style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
           <h6 onClick={()=>setForm(true)}>+ Add a book suggestion</h6> 
           <ToastContainer 
           position="bottom-right"
           autoClose={5000}
           hideProgressBar={false}
           closeOnClick={true}
           pauseOnHover={true}
           draggable={true}
           progress={undefined}
           />
        </div>
    )
}

