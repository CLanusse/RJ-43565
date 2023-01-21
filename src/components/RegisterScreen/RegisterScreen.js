import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../../context/LoginContext'
import './RegisterScreen.scss'


const RegisterScreen = () => {
    const { user, loading, register } = useLoginContext()
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        register(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'> 
                <h2>Register</h2>
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
                <Link to="/login">Ya estoy registrado</Link>
            </div>
        </div>
    )
}

export default RegisterScreen