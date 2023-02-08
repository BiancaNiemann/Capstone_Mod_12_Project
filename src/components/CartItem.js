import React, { useContext, useState } from "react";
import { Context } from "../context";
import useHover from "../hooks/useHover";

function CartItem({item}){
    const {removeImageFromCart} = useContext(Context)
    const [hovered, ref] = useHover()

    const binIcon = hovered ? "fill" : "line"
               
    return (
        <div className="cart-item">
            <i className={`ri-delete-bin-${binIcon}` }
                onClick={()=> removeImageFromCart(item)}
                ref={ref}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem

