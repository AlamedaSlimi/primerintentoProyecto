import pc from "./frases.jpg"
import React, { useState, useEffect} from 'react';
import "./Sidebar.scss"

const Sidebar = (props) => {

    const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  // http://api.quotable.io/random
  
  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  },[]);

  let fetchNewQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (quote) => {
          setQuote(quote.content);  
          setAuthor(quote.author);
        }
      )
  }


    return <div className={`sidebar ${props.className}`}>
        <div className="sidebar__titleBox">
            <h2 className="sidebar__title">Frases celebres</h2>
        </div>

        <img src={pc} alt="" className="sidebar__image" />

        <p className="sidebar__paragraph">¡Explora algunas de las frases celebres de muchos autores y personajes a lo largo de la historia!</p>
        <div className="quoteApi">
        <div className="quote">
          <h2>{quote}</h2>
          <small>-{author}-</small>
        </div><br />
        <button className="btn" onClick={fetchNewQuote}>Generate New Quote</button>
      </div>
    </div>;
}

export default Sidebar;
