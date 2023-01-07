import React from "react"
import { useParams } from "react-router-dom";
//import productos from "../API/data.json";
import ItemDetail from "./ItemDetail";
import {doc, getDoc, getFirestore} from "firebase/firestore";
import Loading from "./Loading";

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const {id} = useParams();

    //Promesa que accede a un JSON con un array de objetos
    /*React.useEffect(() => {
        const promise = new Promise((res) => {
            setTimeout(() => {
                res(productos.find( item => item.id === parseInt(id)));
            }, 2000);
        });

        promise.then((data) => {
            setItem(data);
        });

    }, [id]);*/

    //Consulta a firestore por un ID
    React.useEffect(() => {
        const db = getFirestore(); //conextion a la bsae de datos
        //const products = doc(db, "items","xCNHqKpIBC2rqytuJSZe"); //conextion estatica a mi producto mediante el id
        const products = doc(db, "items",id);
        //con "useParams" estoy capturando el "id" de la URL. al pasarlo como parametro en "products" me queda dinamico
        
        getDoc(products).then((producto)=>{ //uso la función "getDoc" para buscar mi producto. Se comporta como una promise
            if(producto.exists()){  //uso el metodo "exists" para chequear que exista
                setItem({id:producto.id, ...producto.data()});  
                //uso "setItem" para pasarle un objeto con el id que esta por fuera de los datos que me trae el metodo data()
                setLoading(false);
            } else {
                console.log("Error! no se encontró el documento.")
            }
        })

    }, []);

    return (
        <div className="container text-center py-5">  
            {loading ? <Loading/> : <ItemDetail item={item}/>}
        </div>
    )
}

export default ItemDetailContainer;