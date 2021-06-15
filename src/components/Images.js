import React from 'react';
import {useSelector} from "react-redux";
import Image from "./Image";

function Images() {
    const images = useSelector(state => state.image.item)
    return (
        <div className='image'>
            {images.map(image => {
                return <Image key={image.id} image={image} />
            })}
        </div>
    );
}

export default Images;