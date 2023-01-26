import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'
import useForm from '../../hooks/useForm'
import './LoginScreen.scss'


const LoginScreen = () => {
    const { login, user, loading, googleLogin } = useLoginContext()
    
    const { values, handleInputChange } = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'> 
                <h2>Login</h2>
                <hr/>

                <form onSubmit={handleSubmit}>
                    <input 
                        className='form-control my-2' 
                        type='email'
                        value={values.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <input 
                        className='form-control my-2' 
                        type='password'
                        value={values.password}
                        onChange={handleInputChange}
                        name="password"
                    />
                    
                    <button className='btn btn-primary' disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>
                    {user.error && <p className='error'>{user.error}</p>}
                </form>
                <button className='btn btn-primary my-2' onClick={googleLogin}>Ingresar con google</button>
                <br/>
                <Link to="/register">Registrarme</Link>
            </div>
        </div>
    )
}

export default LoginScreen