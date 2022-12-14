import React from "react";

const ItemCount = ({stockItems, initial}) => {
    const [count, setCount] =  React.useState(1)
    const [stock, setStock] = React.useState(stockItems)

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
    return (
        <div className="quantity">
            <button className="itemsButton" onClick={reduceCount}>-</button>
            <p className="count mx-1">{count}</p>
            <button className="itemsButton" onClick={addCount}>+</button>
            <button className="addButton mx-2 px-1" onClick={addElement}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;