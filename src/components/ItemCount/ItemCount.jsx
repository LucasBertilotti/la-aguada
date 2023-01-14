import React from "react";
import {Link} from "react-router-dom";
import useNotify from "../../hooks/useNotify";
import './itemCount.css'

const ItemCount = ({stockItems, onAdd}) => {
    const {successNotif, infoNotif, errorNotif} = useNotify()
    const [count, setCount] =  React.useState(1);
    const [stock, setStock] = React.useState(stockItems);
    const [toCart, setToCart] = React.useState(false);

    React.useEffect(() => {
        setStock(stockItems);
    },[stockItems]);

    const addCount = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }
    
    const reduceCount = () => { 
        if(count > 1) {
            setCount(count - 1);
        }
    }

    const addToCart = (quantity) =>{
        if((stock > 0) && (quantity <= stock) && (quantity !== 0)){ 
            setStock( stock - quantity);
            setCount(0);
            setToCart(true);
            onAdd(quantity);
            successNotif("Agregaste " + quantity + " producto/s");
        } else if((quantity === 0) && (quantity < stock)){ 

            infoNotif("Debe agregar al menos un producto para continuar");
        } else {
            errorNotif("Producto sin stock");
        }
    }

    return (
        <div className="quantity mx-2">
            <button className="itemsCountBtn" onClick={reduceCount} >-</button>
            <p className="count mx-1">{count}</p>
            <button className="itemsCountBtn" onClick={addCount} disabled={count === stock}>+</button>
            <button className="itemsCountBtn mx-2 px-2" onClick={() => {addToCart(count)}} >Agregar al carrito</button>
            { toCart ? <Link to={"/cart"} className="itemsCountBtn">Finalizar compra</Link> : ""}
        </div>
    )
}

export default ItemCount;