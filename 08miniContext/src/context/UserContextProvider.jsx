import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(   //pass the values(here passing object) whose context you wish to pass to children
        <UserContext.Provider value={{user, setUser}}> 
        {children} 
        </UserContext.Provider>
    )
}

export default UserContextProvider  