import Images from "./Images";
import Mod from "./Mod";
import {Route,} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadImage} from "../redux/actions";

function Main() {
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(loadImage())
    }, [dispatch])

    return (
        <div className='main'>
            <Route path='/'>
            <Images />
            </Route>
            <Route exact path='/:id?'>
                <Mod />
            </Route>
        </div>
    );
}

export default Main;