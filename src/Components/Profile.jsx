import React, {useContext} from "react";
import userContext from "../context/userContext";
const Profile=()=>{
    const{user}=useContext(userContext)
    if(!user) return <h1 className="text-center">Please Login</h1>
    return(
        <h1 className="text-center">Welcome {user.name}</h1> 
    )
}
export default Profile;