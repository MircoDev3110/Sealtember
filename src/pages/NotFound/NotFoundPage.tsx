import { Link } from "react-router-dom";
import './NotFoundPage.scss';

const NotFoundPage = () => {

    return (

        <div className="not-found-cont">
            <span className="material-symbols-outlined">sentiment_very_dissatisfied</span>
            <h1 className="title">404 - Pagina non trovata</h1>
            <Link className="default-btn" to="/">Torna alla homepage</Link>
        </div>

    );
}

export default NotFoundPage;