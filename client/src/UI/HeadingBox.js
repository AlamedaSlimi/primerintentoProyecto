import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./HeadingBox.scss"
// import photo1 from "./photo1.jpg";
// import photo2 from "./photo2.jpg";
// import photo3 from "./photo3.jpg";

function HeadingBox() {

    const user = useSelector(state => state.auth.user);

    return <div className="headingbox">

        <div className="headingbox__titlebox">
            <h1 className="headingbox__title">Reflexiones sin límites,<br/> pensamientos sin fronteras.</h1>
            {!user && <Link to="/signup" className="headingbox__btn">Registrate</Link>}
        </div>
    </div>;
}

export default HeadingBox;
