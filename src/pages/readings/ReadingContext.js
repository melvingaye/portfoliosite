import { createContext, useContext, useReducer } from "react"
import { v4 as uuidv4 } from 'uuid';
import {sendBookSuggestion} from '../../apis/requests'

const ReadingCollection = [
  {
  id: "0",
  text: "Currently Reading",
  books: [
      { isbn: "c2", title: "Head First Design", author: "", description: "", review: "", link:"" },
      { isbn: "c0", title: "C# 7 Pro", author: "McGinni", description: "Book for C# beginners to experienced users", review: "Great book, enjoyed the content", link:""}, 
      { isbn: "c1", title: "Code Complete", author: "", description: "", review: "", link:"" }
   ]
  },
  {
  id: "1",
  text: "Read",
  books: [{ isbn: "c2", title: "Learn Typescript",author: "", description: "", review: "", link:"" },
  { isbn: "c3", title: "GoLang Architect",author: "", description: "", review: "", link:"" },
  { isbn: "c4", title: "Animal Farm",author: "", description: "", review: "", link:"" }]
  },
  {
  id: "2",
  text: "Wish List",
  books: [{ isbn: "c3", title: "Cracking the Coding Interview",author: "", description: "", review: "", link:"" }]
  },
  {
      id: "3",
      text: "Suggestions",
      books: [{ isbn: "c4", title: "Begin to use static typing",author: "", description: "", review: "", link:"" }]
  }
]

function sortBooks(state, index, ascending){ 
  if(!ascending){
    state[index].books.sort((a, b)=> a.title.localeCompare(b.title))
  }else{
    state[index].books.sort((a, b)=> b.title.localeCompare(a.title))
  }
  //return ascending ? state[index].books.sort((a, b)=> a.title.localeCompare(b.title)) : state[index].books.sort((a, b)=> b.title.localeCompare(a.title))
  return state
}

///use this for submitting new books and contact out reaches https://functions-playground.netlify.app/
//include in work experience https://www.airistaflow.com/industries/government/social-distancing-and-contact-tracing/
function addNewBook(state, title, author) {
  const rec = {
    isbn: uuidv4(),
    title: title,
    author: author,
    description: "",
    review: "",
    link: "",
  };
  debugger
  sendBookSuggestion(JSON.stringify(rec))
  return state.map((item, i) => i === 3 ? { ...item, books: item.books.concat(rec) } : item);
}

const readingReducer = (state, action)=>{
  //debugger
  switch(action.type){
  case 'SORT':
    const {position, ascending} = action.payload
    return sortBooks(state, position, ascending)
  case 'ADD':
    const {title, author} = action.payload
    return addNewBook(state, title, author)
  default:
    return state
  }
}

const ReadingContext = createContext({state: ReadingCollection, dispatch: action => readingReducer(ReadingCollection, action)});

export const ReadingProvider = ({children}) =>{
  const [state, dispatch] = useReducer(readingReducer, ReadingCollection)

  return(
    <ReadingContext.Provider value={{state, dispatch}}>
      {children}
    </ReadingContext.Provider>
  )
}

export const useReading = () => {
  const context = useContext(ReadingContext)
  if(context === undefined){
    throw new Error('usReading must be used within a ReadingProvider')
  }
  return context
}