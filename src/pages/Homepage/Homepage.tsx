import Header from "../../components/Header/Header";
import bigheroImage from '../../assets/bighero.png';
import './Homepage.scss';
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import jsonData from '../../assets/data.json';
import { IPromptData } from "../../interfaces/DataInterface";

const Homepage : React.FC = () => {

    const promptRef = useRef<HTMLElement | null>(null);
    const [prompts, setPrompts] = useState<IPromptData[]>([]);

    const scrollToPrompts = () => {

        if (!promptRef.current) return;

        promptRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    useEffect(() => {
        
        let sortedList: IPromptData[] = jsonData.sort((a, b) => {
            return a.position - b.position
        });
        setPrompts(sortedList);
        
    }, []);

    return (
        
        <>
            <Header />

            <section className="bighero-row">
                <div className="home-bighero-container">
                    <div className="bighero-text">
                        <h1 className="bighero-title">È tornato il Sealtember!</h1>
                        <h3 className="bighero-subtitle">30 giorni, 30 foche e 30 movimenti artistici diversi per dare spazio alla creatività! Scorri per scoprire l'elenco dei temi e per trovare l'ispirazione con le schede dedicate a ciascun movimento artistico</h3>
                        <button onClick={() => scrollToPrompts()} className="default-btn">Vai ai Prompt</button>
                    </div>
                    <div className="bighero-image" style={{ backgroundImage: `url("${bigheroImage}")` }}></div>
                </div>                
            </section>
            
            <section className="about-row">
                <div className="about-text-column">
                    <h2 className="about-title">Cos'é il Sealtember</h2>
                    <p className="about-text">
                        Il Sealtember è una challenge di disegno ispirata all'Inktober nata nel 2023 sul <a className="twitch-link" rel="noreferrer" href='https://www.twitch.tv/AirmoonB' target="_blank">canale Twitch di AirMoonB</a>.
                        <br/><br/>
                        Le regole del Sealtember sono semplici: ogni giorno del mese è associato ad una tematica da cui lasciarsi ispirare, è possibile disegnare tutti i temi o solo alcuni; qualsiasi forma d'arte è accettata e valida, dal tradizionale al digitale, dal 3D alla scultura.
                        La regola principale, nonché la più importante, è la seguente: ogni disegno del Sealtember deve avere come soggetto una (o più) foche!
                        <br/><br/>
                        Esplorate l'elenco dei temi per questa edizione del Sealtember che trovate qui sotto e date sfogo alla fantasia, se prendete parte alla challenge e volete pubblicare i vostri disegni sui profili social ricordatevi di usare l'hashtag #Sealtember2024!
                    </p>
                </div>
            </section>

            <section className="prompt-row" ref={promptRef}>
                <div className='prompt-col'>

                    <div className='prompt-title-wrapper'>
                        <h2 className='prompt-title'>Elenco dei Temi</h2>
                        <p className='prompt-subtitle'>Qui sono elencati i 30 movimenti artistici per questa edizione del Sealtember, cliccando su ciascun tema potrai vedere una scheda dedicata al movimento artistico per scoprirne di più e trovare ispirazione</p>
                    </div>

                    <div className='prompt-list-container'>
                        <div className='prompt-column left-col'>

                            {
                                prompts && prompts.slice(0, prompts.length / 2).map((prompt, index) => {
                                    return (
                                        <div key={prompt.position} className='prompt-item'>
                                            <span className='prompt-item-pos'>{prompt.position}.</span>
                                            <Link className='prompt-item-name' to={`/prompt/${prompt.position}`}>{prompt.name}</Link>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <div className='prompt-column right-col'>

                            {
                                prompts && prompts.slice(prompts.length / 2, prompts.length).map((prompt, index) => {
                                    return (
                                        <div key={prompt.position} className='prompt-item'>
                                            <span className='prompt-item-pos'>{prompt.position}.</span>
                                            <Link className='prompt-item-name' to={`/prompt/${prompt.position}`}>{prompt.name}</Link>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>
            </section>

            <Footer />

        </>

    );

}

export default Homepage;