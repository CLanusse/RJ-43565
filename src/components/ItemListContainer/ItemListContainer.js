import ItemList from "../ItemList/ItemList"
import useCollection from "../../hooks/useCollection"
import { useParams } from "react-router-dom"
import { where } from "firebase/firestore"


const ItemListContainer = () => {

    const { categoryId } = useParams()
    const { data, loading } = useCollection(
            "productos",
            [categoryId],
            categoryId && 
            [
                where("category", "==", categoryId)
            ]
        )

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={data}/>
            }
        </div>
    )
}

export default ItemListContainer