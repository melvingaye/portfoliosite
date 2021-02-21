import React, { useEffect } from 'react'
import {linkedInAuth} from '../../apis/requests'

function Projects({match}){
    // const [profile, setProfile] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     avatar: ''
    // })

    // const query = useQuery();

    const handleClick = async () => {
        const uri = await linkedInAuth().data;
        console.log(uri)
        window.open(uri)
    }

    // const makeRequest = async () => {
    //     if(query.get('code') !== '')
    //     {
    //         const code = query.get('code')
    //         console.log(code);
    //         const profile = await linkedInLogin(code);
    //         setProfile(profile)
    //     }
    // }
    
    useEffect(()=>{
        document.title='Software Engineer Resume Projects | Melvin Gaye'
        window.scrollTo(0, 0)
        // makeRequest()
    })

    return(
        <div className="projects">
            <h1>Projects</h1>
            <button className="btn" onClick={handleClick}>Login with LinkedIn</button>
            {/* <h4>{profile.firstname}</h4>
            <h4>{profile.lastname}</h4>
            <img src={profile.avatar} alt="linkedin user account"/> */}
        </div>
    )
}

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

export default Projects;