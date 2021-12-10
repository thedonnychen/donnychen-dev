export const Footer = () => {
    return (
        <footer className="text-white py-3 section-shadow bg-teal font-family-h">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <span>© {new Date().getFullYear()} Donny Chen</span>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <a className="nav-link text-white" href="https://github.com/thedonnychen" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="nav-link text-white" href="mailto:donny@donnychen.dev">
                            <i className="far fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}