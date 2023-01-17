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
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: 'profe@coder.com',
        logged: true,
        error: null
    })


    const login = (values) => {
        setLoading(true)

        setTimeout(() => {
            const match = MOCK_USERS.find(user => user.email === values.email)

            if (!match) {
                setUser({
                    email: null,
                    logged: false,
                    error: 'No se encuentra ese usuario'
                })
                setLoading(false)
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
            setLoading(false)
        }, 1500)
        
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false,
            error: null
        })
    }

    return (
        <LoginContext.Provider value={{user, login, logout, loading}}>
            {children}
        </LoginContext.Provider>
    )
}