import React, { useEffect } from 'react'

function Projects(){
 

    useEffect(()=>{
        document.title='Software Engineer Resume Projects | Melvin Gaye'
        window.scrollTo(0, 0)
    },[])

    return(
        <div className="projects">
            <h1>Projects</h1>
        </div>
    )
}

export default Projects;