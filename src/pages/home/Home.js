import React, {useEffect} from 'react'

function Home(){
    useEffect(()=>{
        document.title='Melvin Gaye - Home'
    },[])

    return(
        <div className="home">
            <h1>Home</h1>
        </div>
    )
}

export default Home;