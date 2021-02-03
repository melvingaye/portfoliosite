import React, { useEffect } from 'react'

function Projects(){
 
    useEffect(()=>{
        document.title='Melvin Gaye - Projects'
    },[])

    return(
        <div className="projects">
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;