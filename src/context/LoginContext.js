import { createContext, useContext, useState } from "react";

const MOCK_USERS = [
    {
        email: 'profe@coder.com',
        password: 'admin'
    },
    {
        email: 'tutor@coder.com',
        password: 'coder'
    },
    {
        email: 'john@doe.com',
        password: 'coder'
    },
]

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null
    })

    console.log(user)

    const login = (values) => {
        const match = MOCK_USERS.find(user => user.email === values.email)

        if (!match) {
            setUser({
                email: null,
                logged: false,
                error: 'No se encuentra ese usuario'
            })

            return
        }

        if (match.password === values.password) {
            setUser({
                email: match.email,
                logged: true,
                error: null
            })
        } else {
            setUser({
                email: null,
                logged: false,
                error: 'Password inválido'
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false,
            error: null
        })
    }

    return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}