import React, {useState, useEffect} from "react"
import { Profile } from "../profile/profile"
import { SwitchThemeMode } from "../switchMode"
export function App(){
    const [userData, setUserData] = useState({})
    useEffect(()=>{
        const apiGitHubUrl = 'https://api.github.com/users/MicaelaPinheiroDS'
        fetch(apiGitHubUrl).then(response => response.json().then(data => {
            setUserData(
                {
                    name: data.name,
                    atavarUrl: data.avatar_url,
            }
            )
        }))
    },[])
    return (
        <div className="container m-auto mt-14">
            <Profile userName={userData.name} userAvatar={userData.atavarUrl}/>
            <SwitchThemeMode />
        </div>
    )
}