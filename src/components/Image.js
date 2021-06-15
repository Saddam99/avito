import React from 'react';
import {Link,} from "react-router-dom";

function Image(props) {

    return (
        <div>
            <Link to={`/${props.image.id}`}>
                <img src={props.image.url} alt="" className='image-width'/>
            </Link>
        </div>
    );
}

export default Image;