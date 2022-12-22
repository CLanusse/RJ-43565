


const Item = ( {name, image, description, price, id} ) => {

    return (
        <div className="col-3 m-3">
            <img src={image} alt={name}/>
            <h4>{name}</h4>
            <p>{description}</p>
            <p>Precio: <b>{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)}</b></p>
            <button className="btn btn-outline-primary">Ver más</button>
        </div>
    )
}

export default Item