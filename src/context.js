import React from "react";

const Context = React.createContext()

function UserContextProvider({children}){

    const [photos, setPhotos] = React.useState([])
    const [cartItems, setCartItems] = React.useState([])

    //FETCHS DATA FROM API
    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res =>res.json())
        .then(data => setPhotos(data))
    }, [])

    //UPDATES PHOTO STATE ISFAVORITE TO BE TRUE OR FALSE WHEN CLICKED
    function toggleFavorite(id){
        setPhotos(prevPhotos => {
            return prevPhotos.map(img => {
                return img.id === id 
                    ? {...img, isFavorite : !img.isFavorite}
                    :img
            })
        })
    }

    //ADDS IMAGE TO THE CART
    function addImageToCart(fullImgObj){
        setCartItems(prevCartItems => [...prevCartItems, fullImgObj])
    }
    //REMOVES IMAGES FROM THE CART
    function removeImageFromCart(fullImgObj){
        setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== fullImgObj.id))
    }

    //SETUP THE PROVIDER
    return (
        <Context.Provider value={  
                {photos, 
                toggleFavorite,
                cartItems, 
                setCartItems, 
                addImageToCart, 
                removeImageFromCart}
        }>
            {children}
        </Context.Provider>)
    
}

export {UserContextProvider, Context}

//use {children} instead of props so that you dont need to put {props.children} in the wrapped Context.Provider