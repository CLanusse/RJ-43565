import { useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, writeBatch, documentId, getDocs, query, where, addDoc, doc, updateDoc, getDoc } from "firebase/firestore"

const Checkout = () => {
    const { cart, totalCart, emptycart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // validacion
        if (values.nombre.length < 2) {
            alert("Nombre inválido")
            return
        }
        if (values.direccion.length < 2) {
            alert("Dirección inválida")
            return
        }
        if (values.email.length < 5) {
            alert("Email inválido")
            return
        }
        
        const orden = {
            cliente: values,
            items: cart,
            total: totalCart()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productosRef = collection(db, 'productos')
        
        const outOfStock = []
        
        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map(prod => prod.id) ) )
  
        const productos = await getDocs(itemsRef)
        
        productos.docs.forEach(doc => {
                const item = cart.find(item => item.id === doc.id)

                if (doc.data().stock >= item.cantidad) {
                    batch.update(doc.ref, {
                        stock: doc.data().stock - item.cantidad
                    })
                } else {
                    outOfStock.push(item)
                }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            emptycart()
                        })
                        .catch((error) => console.log(error) )
                })
        } else {
            alert("Hay items sin stock")
        }
        
    }


    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu compra ha sido exitosa</h2>
                <hr/>
                <p>Tu código de orden es: {orderId}</p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
            <h2>Terminar mi compra</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="nombre"
                    value={values.nombre}
                    placeholder="Tu nombre"
                />

                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="text"
                    name="direccion"
                    value={values.direccion}
                    placeholder="Tu dirección"
                />

                <input
                    className="form-control my-2"
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    value={values.email}
                    placeholder="Tu email"
                />

                <button className="btn btn-primary">Enviar</button>
            </form>
            
        </div>
    )
}

export default Checkout

// cart.forEach(prod => {
        //     const docRef = doc(productosRef, prod.id)
        //     getDoc(docRef)
        //         .then((doc) => {
        //             if (doc.data().stock - prod.cantidad >= 0) {
        //                 updateDoc(docRef, { stock: doc.data().stock - prod.cantidad})
                    
        //             } else {
        //                 alert("No hay stock disponible")
        //             }
        //         })
        // })