


export const MiComponente = ( { titulo, text, tel = 555666 } ) => {
    // const { titulo, text: contenido, tel } = props

    return (
        <div>
            <h2>{ titulo }</h2>
            <p>{ text }</p>
            <small>{ tel }</small>
            <hr/>
        </div>
    )
}
