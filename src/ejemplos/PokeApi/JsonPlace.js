


//   | protoclo |     dominio      | endpoints | params
// url:  https://www.coderhouse.com/api/alumnos

import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"

// query params
// GET: id = number
// url:  https://www.coderhouse.com/api/alumno?id=12334

// GET: curso = string, limit = number
// url:  https://www.coderhouse.com/api/alumnos?limit=50&curso=javascript

// url/segment params
// GET:  https://www.coderhouse.com/api/cursos/{nombre}/{comision}
// url:  https://www.coderhouse.com/api/cursos/reactjs/43565



const JsonPlaceholder = () => {

    const { data } = useFetch(`https://jsonplaceholder.typicode.com/posts`)

    return (
        <div className="container my-5">
            <h2>JsonPlaceholder</h2>
            <hr/>

            {
                data && data.map(post => (
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <hr/>
                    </div>)
                )
            }

        </div>
    )
}

export default JsonPlaceholder