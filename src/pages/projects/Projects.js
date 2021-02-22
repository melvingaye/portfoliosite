import React, { useEffect } from 'react'
// import {useLocation} from 'react-router-dom'
import {linkedInAuth} from '../../apis/requests'

function Projects(){
    // const [profile, setProfile] = useState({
    //     firstname: '',
    //     lastname: '',
    //     email: '',
    //     avatar: ''
    // })

    // const query = useQuery();

    const handleClick = async () => {
        const response = await linkedInAuth();
        // open the linkedin-social auth in the current window
        window.location.href = response.data;
    }
  
    useEffect(()=>{
        document.title='Software Engineer Resume Projects | Melvin Gaye'
        window.scrollTo(0, 0)
        const user = localStorage.getItem('user');
        console.log(user);

        // const makeRequest = async () => {
        //     const code = query.get('code')
        //     console.log(code);
        //     const profile = await linkedInLogin(code);
        //     setProfile(profile)
        // }

        // if(query.get('code') !== ''){
        //     makeRequest();
        //     <Redirect to='/'/>
        // }
    },[]);

    return(
        <div className="projects">
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>Projects</h1>
            <button className="btn" onClick={handleClick}>Login with LinkedIn</button>
            {/* <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><h4>First: </h4><h6>{profile?.firstname}</h6></div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><h4>Last: </h4><h6>{profile?.lastname}</h6></div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><h4>Email: </h4><h6>{profile?.email}</h6></div>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><img src={profile?.avatar} alt="linkedin user account"/></div> */}
            </div>
        </div>
    )
}

// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

export default Projects;