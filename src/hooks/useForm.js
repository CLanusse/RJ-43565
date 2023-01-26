import { useState } from "react"


const useForm = (init) => {

    const [values, setValues] = useState(init)

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    return {
        values,
        handleInputChange
    }
}

export default useForm