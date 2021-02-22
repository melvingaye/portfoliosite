import React, { useEffect, useState } from 'react';
import {linkedInAuth} from '../../apis/requests';

function Projects(){
    const [auth, setAuth] = useState(false);
    const [profile, setProfile] = useState({
        firstname: '',
        lastname: '',
        email: '',
        avatar: ''
    });

    const handleClick = async () => {
        const response = await linkedInAuth();
        // open the linkedin-social auth in the current window
        window.location.href = response.data;
    };
  
    useEffect(()=>{
        document.title='Software Engineer Resume Projects | Melvin Gaye'
        window.scrollTo(0, 0)
        const userstr = localStorage.getItem('user');
        if(userstr){
            const profile = JSON.parse(userstr);
            setProfile(profile);
            setAuth(true);
        }

    },[]);

    return auth ? (
        <div className="projects">
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <h1>User Dashboard</h1>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><h4>First: </h4><h6>{profile?.firstname}</h6></div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><h4>Last: </h4><h6>{profile?.lastname}</h6></div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><h4>Email: </h4><h6>{profile?.email}</h6></div>
                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}><img src={profile?.avatar} alt="linkedin user account"/></div>
            </div>
        </div>
    ) : (
        <div className="projects">
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>Sign In</h1>
        <button className="btn" onClick={handleClick}>Login with LinkedIn</button>
        </div>
        </div>
    )
}

export default Projects;