import { useEffect } from "react"



const Nosotros = () => {

    const clickear = (e) => {
        console.log(e)
        // e.preventDefault()
        // e.stopPropagation()
    }

    // useEffect(() => {
    //     window.addEventListener('click', clickear)

    //     return () => {
    //         window.removeEventListener('click', clickear)
    //     }
    // }, [])

    return (
        <div className="container my-5">
            <h2>Nosotros</h2>
            <hr/>

            <button className="btn btn-primary" onClick={clickear}>Click me</button>
        </div>
    )
}

export default Nosotros

