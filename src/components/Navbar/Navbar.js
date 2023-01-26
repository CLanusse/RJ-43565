import './Navbar.scss'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useLoginContext } from '../../context/LoginContext'

export const Navbar = ({bg = '#78ccb0'}) => {
    const { user, logout } = useLoginContext()

    return (
        <header className="header" style={{background: bg}}>
            <div className='header__container'>
                <h1 className="header__logo">LOGO</h1>

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/limpieza">Limpieza</Link>
                    <Link className="header__link" to="/productos/verduleria">Verduleria</Link>
                    <Link className="header__link" to="/productos/carniceria">Carniceria</Link>
                    <Link className="header__link" to="/productos/panaderia">Panaderia</Link>
                    <Link className="header__link" to="/productos/perfumeria">Perfumeria</Link>
                    <Link className="header__link" to="/contacto">Contacto</Link>
                    <CartWidget />
                </nav>
            </div>
            <div className='header__container'>
                <p>Bienvenido: {user.email}</p>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}