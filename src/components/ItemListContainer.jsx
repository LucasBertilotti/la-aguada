import React from "react";
//import productos from "../API/data.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () =>{
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const {id} = useParams();
    
    /* 
    React.useEffect(()=> {
        const promise = new Promise((res) => {
            setTimeout(() =>{
                res(id ? productos.filter(item => item.category === id) : productos)
            },2000)
        });

        promise.then((data) => {
            setItems(data); 
        })
    },[id])*/

    //Inserto los productos de mi JSON a firestore
    /* React.useEffect(()=> {
        const db = getFirestore(); //nos conectamos al firestore
        const itemsCollection = collection(db, "items"); 
        //con la función "collection" usamos la conexión "db" y llamamos a la coleccion de datos "items". 
        productos.forEach((item) => {
            addDoc(itemsCollection, item)
            //utilizo la función "addDoc" para agregar todos los productos al firestore
        })
        //esta función se tiene que ejecutar 1 vez y luego la tengo que comentar para que no se este intentando
        // cargar cada vez que actualizo la app de React
    },[]);*/

    //Consultar la collection de mis productos
    React.useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        //filtros opción 1:
            //esto me filtra por los el precio de los productos mayores a 4500
        //const q = query(itemsCollection, where("price", ">", 4500))
        
        //filtros opción 2:
            //es el filtro que tengo por categorias
        const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

        //uso la funcion "getDocs" para traer todos los productos. Se comporta como una promise
        getDocs(q).then((producto) =>{
            //el metodo "docs" tiene toda la info del producto entonces con el map puedo crear mis items
            setItems(producto.docs.map((doc) =>(
                //el "id" esta en otra parte por eso lo busco en otro lado, despues traigo todo lo de data.
                {id:doc.id, ...doc.data()}
            )));
            setLoading(false);
        });
    },[id]); //se actualiza el efecto cada vez que cambia el "id" 


    return(
        <div className="container d-flex row mx-auto py-5">        
            {loading ? <Loading/> : <ItemList items={items}/>}
        </div>
    );
}

export default ItemListContainer;