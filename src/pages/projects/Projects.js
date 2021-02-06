import React, { useEffect } from 'react'

function Projects(){
 

    useEffect(()=>{
        document.title='Melvin Gaye - Projects'
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="projects">
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;