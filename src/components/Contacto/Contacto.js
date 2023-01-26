import { useState } from "react"
import useForm from "../../hooks/useForm"



const Contacto = () => {
    const { values, handleInputChange } = useForm({
        nombre: '',
        email: '',
        cel: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Submit", values)
    }

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleInputChange}
                    value={values.nombre}
                    name='nombre'
                    type="text" 
                    className="form-control my-2" 
                    placeholder="Nombre"
                />

                <input 
                    onChange={handleInputChange}
                    value={values.email}
                    name='email'
                    type="email" 
                    className="form-control my-2" 
                    placeholder="Email"
                />
                <input 
                    onChange={handleInputChange}
                    value={values.cel}
                    name='cel'
                    type="phone" 
                    className="form-control my-2" 
                    placeholder="Teléfono"
                />

                <button className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto