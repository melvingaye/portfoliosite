import { v4 as uuidv4 } from 'uuid';

export const appData = {
    lists: [
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
}

export const appStateReducer = (state, action)=>{
  switch(action.type){
  case 'SEARCH':
    const {index, search} = action.payload
    const updatedSearch = searchBooks(state, index, search)
    return updatedSearch
  case 'SORT':
    const {position, ascending} = action.payload
    const updatedSort = sortBooks(state, position, ascending)
    return updatedSort
  case 'ADD':
    const {title, author} = action.payload
    const updatedAdd = addNewBook(state, title, author)
    return updatedAdd
  default:
    return state
  }
}

function searchBooks(state, index, search){
  return state[index].books.filter(book => Object.keys(book).some(key=>book[key].toLowerCase().includes(search.toLowerCase())))
}

function sortBooks(state, index, ascending){
  let sortedList = []
  state.forEach((element, i)=>{
      if(i !== index){
          sortedList.push(element)
      } 
      else if (i === index && ascending)
      {
        element.books.sort((a,b) => a.title.localeCompare(b.title))
        sortedList.push(element)
      }
      else if(i === index && !ascending){
        element.books.sort((a,b) => b.title.localeCompare(b.title))
        sortedList.push(element)
      }
     
  })

  return sortedList
}

function addNewBook(state, title, author){
  debugger
  const rec = {isbn: uuidv4(), title: title, author: author, description: '', review: '', link: ''}
  console.log(`${JSON.stringify(rec)}`)
  state[3].books.push(rec)
  console.log(`${JSON.stringify(state[3].books)}`)
 return state
}