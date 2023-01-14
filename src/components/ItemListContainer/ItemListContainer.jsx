import React from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import Loading from "../Loading/Loading";

const ItemListContainer = () =>{
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const {id} = useParams();
   
    React.useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        getDocs(q).then((producto) =>{
            setItems(producto.docs.map((doc) =>(
                {id:doc.id, ...doc.data()}
            )));
            setLoading(false);
        });
    },[id]);

    return(
        <div className="container d-flex row mx-auto py-5">        
            {loading ? <Loading/> : <ItemList items={items}/>}
        </div>
    );
}

export default ItemListContainer;