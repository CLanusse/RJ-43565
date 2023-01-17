import { memo } from "react"




const UnMemo = memo(() => {
    console.log('Soy el memo')

    return (
        <div>
            <h4>Soy un memo</h4>
        </div>
    )
})

export default UnMemo