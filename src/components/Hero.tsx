export const Hero = () => {
    return (
        <section className="text-light text-center" id="hero">
            <div className="stars stars1"></div>
            <div className="stars stars2"></div>
            <div className="stars stars3"></div>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h1 className="display-3">Hello, I'm Donny.
                        </h1>
                        <div className="d-inline-block">
                            <p className="typewriter display-4">I'm a web developer.</p>
                        </div>
                        <div className="mt-4 mb-5">
                            <h3 className="lead font-family-p">I specialize in WordPress and WooCommerce.</h3>
                            <h3 className="lead font-family-p">I also create web apps using React and PHP.</h3>
                        </div>
                        <a href="#contact" className="btn btn-lg btn-primary btn-shadow text-shadow-none" data-aos="fade-up" data-aos-delay="1200">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    )
}