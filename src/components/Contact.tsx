import { ContactForm } from './ContactForm';

export const Contact = () => {
    return (
        <section className="text-light" id="contact">
            <div className="stars stars1"></div>
            <div className="stars stars2"></div>
            <div className="stars stars3"></div>
            <div className="container">
                <h2 className="display-5 text-center mb-5">Contact</h2>
                <div className="row justify-content-center mb-6">
                    <div className="col-xl-8 col-lg-9">
                        <p className="lead text-center mb-5">
                            Let's build something together. Send me a message! 
                        </p>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}