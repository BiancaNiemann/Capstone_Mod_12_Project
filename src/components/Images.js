import React, {useContext} from "react";
import { Context } from "../context";
import PropTypes from 'prop-types'

function Image({className, img}){

    const [hovered, setHovered] = React.useState(false)
    const {toggleFavorite, cartItems, addImageToCart, removeImageFromCart} = useContext(Context)
    
    const heartIcon = ()=>{
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
        } else if(hovered){
            return <i className="ri-heart-line favorite" onClick={()=> toggleFavorite(img.id)}></i>
        }
    }

    const plusIcon =()=> {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" 
                    onClick={()=> removeImageFromCart(img)}
                    ></i>
        }else if(hovered){
            return <i className="ri-add-circle-line cart" 
                    onClick={()=> addImageToCart(img)}
                    ></i>
        }     
    }

    return(
        <div 
            className={`${className} image-container`} 
            onMouseOver={() =>setHovered(true)} 
            onMouseLeave={() =>setHovered(false)}
        >
            {heartIcon()}
            {plusIcon()}
            <img 
                src={img.url} 
                className="image-grid"
                
            />
        </div>
    )
}

Image.propTypes = {
    className : PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image