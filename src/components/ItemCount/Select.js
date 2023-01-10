// [{value: '', text: ''}]

const Select = ({options, set}) => {

    const handleChange = (e) => {
        set(e.target.value)
    }

    return (
        <select onChange={handleChange}>
            {options.map( (opt) => <option value={opt.value}>{opt.text}</option> )}
        </select>
    )
}

export default Select