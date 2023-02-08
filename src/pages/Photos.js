import React from "react"
import { Context } from "../context"
import {getClass} from "../utils"
import Images from "../components/Images"

function Photos() {

    const {photos} = React.useContext(Context)
    

    const imageRender = photos.map((photo, index) => {
        return (
            <Images 
                key={photo.id} 
                img={photo} 
                className={getClass(index)} 
            />
        )
    })

    return (
        <main className="photos">
            {imageRender}
        </main>
    )
}

export default Photos