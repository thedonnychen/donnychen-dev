const sections = [
    'portfolio',
    'skills',
    'about',
    'contact'
];

export const Navigation = () => {
    return (
        <header>
            <div className="stars stars1"></div>
            <nav className="navbar navbar-light navbar-expand-md font-family-h">
                <div className="container-fluid">
                    <strong><a className="navbar-brand pe-md-3 pe-lg-5 text-light" href="#top">Donny Chen</a></strong>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-hamburger"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            {sections.map(section =>
                                <li className="nav-item pe-md-3 pe-lg-5" key={section}>
                                    <a className="nav-link text-capitalize text-light" href={`#${section}`}>{section}</a>
                                </li>
                            )}
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/thedonnychen" target="_blank" rel="noreferrer">
                                    <i className="fab fa-github text-light"></i> 
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}