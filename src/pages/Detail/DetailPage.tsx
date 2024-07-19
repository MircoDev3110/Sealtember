import { useParams, useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import jsonData from '../../assets/data.json';
import { useEffect, useState } from "react";
import { IPromptData } from "../../interfaces/DataInterface";
import './DetailPage.scss';

const DetailPage : React.FC = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [prompt, setPrompt] = useState<IPromptData | undefined>(undefined);

    useEffect(() => {

        if (!id) {
            navigate('/not-found');
            return;
        }

        let promptPos = parseInt(id);
        let promptIndex = jsonData.findIndex(f => f.position === promptPos);
        if (promptIndex < 0) {
            navigate('/not-found');
            return;
        }

        setPrompt(jsonData[promptIndex]);

    }, []);

    return (
        <>
            <Header />

            <section className='cover-container'>
                <img alt={prompt?.coverName} className='cover-image' src={process.env.PUBLIC_URL + prompt?.coverUrl} />
                <span className='cover-info'>{prompt?.coverName}</span>
            </section>

            <section className="movement-data-row">
                <div className="movement-data-col">
                    <h1 className="movement-name">{prompt?.name}</h1>
                    <Link className="back-arrow" to="/">
                        <span className="icon material-symbols-outlined">arrow_back</span>
                        <span className="back-arrow-text">Torna ai prompt</span>
                    </Link>
                    <p className="movement-description">{prompt?.description}</p>
                </div>
            </section>

            <section className="sources-row">
                <div className="sources-col">

                    <div className="sources-title">
                        <h1>Fonti</h1>
                        <p>Di seguito è riportato l'elenco delle fonti usate per immagini e informazioni presenti in questa pagina</p>
                    </div>

                    <ul className="sources-list">
                        {
                            prompt?.sources && prompt?.sources.map((source, index) => {

                                return (
                                    <li key={`source_${index}`} className="list-item">
                                        <a href={source.hyperlink} target="_blank" rel="noreferrer">{source.label}</a>
                                        <span className="material-symbols-outlined">open_in_new</span>
                                    </li>
                                )
                            })
                        }
                    </ul>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default DetailPage;