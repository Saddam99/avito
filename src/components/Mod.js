import React, {useEffect, useState} from 'react';
import {useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addComments, loadBigImage} from "../redux/actions";

function Mod(props) {
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams().id

    const bigImage = useSelector(state => state.bigImage.item)
    const loading = useSelector(state => state.bigImage.loading)

    const [text, setText] = useState('')
    const [comment, setComment] =useState([])

    const now = new Date()


    useEffect(() =>{
        if (params !== undefined) {
            dispatch(loadBigImage(params))
            // dispatch(addComments(params, comment))
        }
    }, [dispatch, params])

    const handleClose = () => {
        history.push('/')
    }
    const handleAddComment = () => {
        setComment([
                ...comment,
                text
            ]
        )
        setText('')

    }

    if (bigImage.comments === undefined || loading === true) {
        return <div></div>
    }

    return (
        params === undefined ? null : (
            <div className='fon'>

            <div className='mod'>
                <div className='mod-form'>
                        <img src={bigImage.url} alt="" className='mod-image'/>
                  <input
                      type="text"
                      placeholder='Ваше имя'
                  />
                  <input
                      type="text"
                      placeholder='Ваш комментарий'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                  />
                  <button className='mod-button' onClick={handleAddComment}>
                    Оставить комментарий
                  </button>
                </div>
                <div className='comments'>
                    {bigImage.comments.map(com => {
                        return (
                            <div>
                                <div>{}</div>
                                {com.text}
                            </div>
                        )
                    })}
                    {comment.map(comm => {
                        return (
                            <div> {comm}</div>)
                    })}
                </div>
                <div onClick={handleClose} className='close-mod'>
                    x
                </div>
            </div></div>
        )
    );
}

export default Mod;