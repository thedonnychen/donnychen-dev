import { PortfolioData } from '../data/PortfolioData';

export const Portfolio = () => {
    return (
        <section className="bg-cream section-shadow" id="portfolio">
            <div className="container text-center">
                <h2 className="display-5 mb-5" data-aos="fade-up">Portfolio</h2>
                <div className="row">
                    {PortfolioData.map((p,index) =>
                        <div className="col-lg-6 mb-4" key={`${p.name}`} data-aos="fade-up" data-aos-duration="900">
                            <a href={`${p.url}`} target="_blank" rel="noreferrer">
                                <img src={`${'img/' + p.img}`} alt={`${p.name}`} className="rounded border mb-3" />
                            </a>
                            <h4 className="mb-1">{p.name} {p.github && <a href={`${p.github}`}><i className="fab fa-github text-dark"></i></a>}</h4>
                            <p className="text-small">{p.skills}</p>
                            
                            <p className="my-1">{p.description}</p>
                            
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}