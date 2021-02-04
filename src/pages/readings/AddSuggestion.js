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

    const notify = () => toast.success('🦄 Suggestion sumbitted for approval, Enjoy the preview of it!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    const handleSubmit = (e) =>{
        if(titleRef.current.value !== '' && authorRef.current.value !== ''){
            dispatch({type: 'ADD', payload: {title: titleRef.current.value, author: authorRef.current.value}})
        }
        else
        {
        
        }
        
        notify()
        titleRef.current.value = ''
        authorRef.current.value = ''
        setForm(false);     
        
    }


    if(showForm){
        return(
            <div>
                <form onSubmit={handleSubmit}>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label style={{paddingRight: '5px'}}>Title:</label>
                    <input type="text" placeholder="Enter book title" ref={titleRef}/>
                    <span>Title is a required field</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <label style={{paddingRight: '5px'}}>Author:</label>
                    <input type="text" placeholder="Enter book author" ref={authorRef}/>
                    <span>Author is a required field</span>
                </div>
                <button type="submit">Add Suggestion</button>
                </form>
            </div>
        )
    }
    return(
        <div className="hover" style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
           <h6 onClick={()=>setForm(true)}>+ Add a book suggestion</h6> 
           <ToastContainer />
        </div>
    )
}