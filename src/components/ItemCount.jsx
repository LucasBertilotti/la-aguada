import React from "react";
import {Link} from "react-router-dom";

const ItemCount = ({stockItems, onAdd}) => {
    const [count, setCount] =  React.useState(1);
    const [stock, setStock] = React.useState(stockItems);
    const [toCart, setToCart] = React.useState(false);

    React.useEffect(() => {
        setStock(stockItems);
    },[stockItems])


    const addCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    
    const reduceCount = () => { 
        if(count > 1) {
            setCount(count - 1)
        }
    }
    /* 
    const addElement = () =>{
        if((stock > 0) && (count <= stock) && (count !== 0)){ 
            console.log("agregaste " + count + " productos")
            setStock( stock - count)
            setCount(0)
        } else if((count === 0) && (count < stock)){ 
            console.log("Debe agregar al menos un producto para continuar")
        }else {
            console.log("no hay mas productos en stock")
        }
    }
    */

    const addToCart = (quantity) =>{
        if((stock > 0) && (quantity <= stock) && (quantity !== 0)){ 
            console.log("agregaste " + quantity + " productos")
            setStock( stock - quantity)
            setCount(0)
            setToCart(true)
            onAdd(quantity)
        } else if((quantity === 0) && (quantity < stock)){ 
            console.log("Debe agregar al menos un producto para continuar")
        }else {
            console.log("no hay mas productos en stock")
        }
    }

    return (
        <div className="quantity mx-2">
            <button className="itemsButton btn" onClick={reduceCount} >-</button>
            <p className="count mx-1">{count}</p>
            <button className="itemsButton btn" onClick={addCount} disabled={count == stock}>+</button>
            <button className="addButton mx-2 px-1 btn" onClick={() => {addToCart(count)}} >Agregar al carrito</button>
            { toCart ? <Link to={"/cart"} className="completeButton btn">Finalizar compra</Link> : ""}
        </div>
    )
}

export default ItemCount;