import React, { useState } from "react";

import { useSelector } from "react-redux";

import "./CommentBox.scss"

const CommentForm = React.lazy(() => import("../CommentForm/CommentForm"))
const AllComments = React.lazy(() => import("../AllComments/AllComments"))

const CommentBox = (props) => {

    const [loadComment, isLoadComment] = useState(false);

    const user = useSelector(state => state.auth.user);

    const showCommentBox = () => {
        if (loadComment === true) {
            isLoadComment(false);
        }
        else {
            isLoadComment(true)
        }
    }

    return <div className="commentbox">
        
        {user && <button className="commentbox__add" onClick={showCommentBox}>Agrega un comentario</button>}
        {!user && <h1 className="commentbox__addText">Inicia sesion para agregar comentarios</h1>}
        {loadComment && <CommentForm postId={props.postId} />}

        <h3 className="commentbox__head">Todos los comentarios</h3>
        <AllComments postId={props.postId} />
    </div>

};

export default CommentBox;
