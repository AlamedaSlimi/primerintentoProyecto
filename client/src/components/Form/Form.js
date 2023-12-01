import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import "./Form.scss"

import write from "./logintowrite.jpg"

const Write = (props) => {

    const [picture, setPicture] = useState("")

    const titleRef = useRef();
    const textRef = useRef();
    const dateRef = useRef();
    const catRef = useRef();
    const imageRef = useRef();

    const user = useSelector(state => state.auth.user);

    const onChangePicture = () => {
        setPicture(imageRef.current.value)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const image = imageRef.current.value;
        const title = titleRef.current.value;
        const desc = textRef.current.value;
        const date = dateRef.current.value;
        const cat = catRef.current.value;

        const submitData = {
            image,
            title,
            desc,
            date,
            cat,
        }

        props.onOrder(submitData)
    }

    if(user) {
        return ( 
            <div className="write">
            <h2 className="write__heading">Escribe tu articulo</h2>
              <form onSubmit={formSubmitHandler} className="write__form">
                  <div className="write__inputbox">
                    {/* <div className="write__showBox">
                    <label htmlFor="fileInput" className="write__file">+ Add a image</label>
                  <input onChange={onChangePicture} type="file" id="fileInput" style={{display: "none"}} />
                  <img className="write__showImg" src={picture && picture} alt="" />
                    </div> */}
                    {picture && <img className="write__showImg" src={picture} alt="blog" />}
                    <label>Imagen</label>
                <input ref={imageRef} onChange={onChangePicture} type="text" className="write__imageLink" placeholder="URL de la imagen" required />
                    <label>Categoria:</label>
                      <input ref={catRef} type="text" className="write__cat" placeholder="Categoria del articulo" required />
                      
                      <label>Titulo:</label>
                      <input type="text" className="write__text" placeholder="Titulo del articulo" ref={titleRef} required />
                      
                      <label>Contenido:</label>
                      <textarea ref={textRef} rows="4" type="text" className="write__words" placeholder="Contenido del blog" required />

                      <label>Fecha:</label>
                      <input ref={dateRef} type="date" className="write__date" />
                  </div>
                  <button className="write__submit">Publicar</button>
        
              </form>  
            </div>
            );
    }
    else {
        return <div className="notLog">
            <p className="notLog__message">Inicia sesion para escribir un articulo</p>
            <img src={write} alt="" className="notLog__img" />
        </div>
    }

    
};

export default Write;
