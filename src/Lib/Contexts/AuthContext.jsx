import React, { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthContextProvider(props){
    const [user] = React.useState({token: true, role: "user"});

    return(
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    return useContext(AuthContext)
}

export {AuthContextProvider, useAuth}