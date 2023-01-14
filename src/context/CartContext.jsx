import React from "react";

export const CartContext = React.createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = React.useState([]);

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            let pos = cart.findIndex(element => element.id === item.id);
            cart[pos].quantity += quantity;
            setCart([...cart]);
        } else {
            setCart([...cart, {...item, quantity:quantity}]);
        }
    }    

    const removeItem = (id) =>{
        const newCart = cart.filter(element => element.id !== id);
        setCart(newCart);
    }

    const clear = () =>{
        setCart([]);
    }
    const isInCart = (id) =>{
        return cart.some(element => element.id === id);
    }

    const cartTotal = () => {
        return cart.reduce((acc, cur) => acc += cur.quantity, 0);
    }

    const sumTotal = () => {
        return cart.reduce((acc, cur) => acc += cur.quantity * cur.price, 0);
    }

    const shipping =() => {
        return Math.floor((Math.random() * (1500 - 1000 + 1)) + 1000);
    }

    let shippingCost = shipping()

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cartTotal, sumTotal, cart, shippingCost}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;