import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (login, password) => {
    },
    onLogout: () => {
    }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginHandler = (username, password) => {
        //send login request
        setIsLoggedIn(true);

    }

    const logoutHandler = () => {
        setIsLoggedIn(false);
    }

    useEffect(() => {
        //use effect runs function when [] params has changed
        //send request to the server and pass the value
        setIsLoggedIn(true);
    }, []);

    return <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogin: loginHandler,
            onLogout: logoutHandler
        }}
    >
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;