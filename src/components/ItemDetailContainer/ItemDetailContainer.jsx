import React from "react"
import { Navigate, useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";

const statusEnum = {loading: 'loading', success: 'success',error:'error'}

const ItemDetailContainer = () => {
    const [status, setStatus] = React.useState(statusEnum.loading);
    const [item, setItem] = React.useState({});
    const isLoading = status === statusEnum.loading
    const isError = status === statusEnum.error
    const {id} = useParams();

    React.useEffect(() => {
        const db = getFirestore(); 
        const products = doc(db, "items", id);
       
        getDoc(products).then((producto)=>{ 
            if(producto.exists()){
                setItem({id:producto.id, ...producto.data()});
                setStatus(statusEnum.success);
            } else {
                setStatus(statusEnum.error);
            }
        });
    }, [id]);

    if(isError) {
        return <Navigate to="/Error404"/>
    }

    return (
        <div className="container text-center py-5">
            {isLoading ? <Loading/> : <ItemDetail item={item}/>}
        </div>
    );
}

export default ItemDetailContainer;