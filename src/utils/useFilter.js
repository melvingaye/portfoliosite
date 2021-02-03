import {useState, useEffect} from 'react';

function useCustomHook(query) {

  const [filteredList,setList] = useState('');

  useEffect(()=>{
    
  },[filteredList]);

  return([
    filteredList,
    setList
  ]);
}
