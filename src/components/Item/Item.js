import { Link } from "react-router-dom"

const Item = ( {name, image, description, price, category, id} ) => {

    return (
        <div className="col-3 m-3">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            {/* <p>{description}</p> */}
            <p>Precio: <b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</b></p>
            <small>Categoría: {category}</small>
            <Link to={`/detail/${id}`} className="btn btn-outline-primary">Ver más</Link>
        </div>
    )
}

export default Item