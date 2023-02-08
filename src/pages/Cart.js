import React, {useContext, useState} from "react"
import { Context } from "../context"
import CartItem from "../components/CartItem"
import PropTypes from "prop-types"


function Cart() {
    const [buttonText, setButtonText] = useState(false)
    const {cartItems, setCartItems} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const totalPrice = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function placeOrder(){
        setButtonText(true)
        setTimeout(()=> {
        console.log('Order placed!')
        setCartItems([])
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalPrice} </p>
            <div className="order-button">
                {cartItems.length > 0 && <button onClick={placeOrder}>{buttonText ? "Ordering..." : "Place Order"}</button>}
            </div>
        </main>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default Cart