import React, {createContext} from 'react';

export const AuthContext = createContext();

export const AuthProvide = ({children}) => {
    return(
        <AuthContext.Provider value="Test value changed">{children}</AuthContext.Provider>
    )
}