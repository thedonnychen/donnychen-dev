export const About = () => {
    return (
        <section className="bg-cream bg-rounded section-shadow" id="about">
            <div className="container">
                <h2 className="display-5 text-center mb-5" data-aos="fade-up">About Me</h2>
                <div className="row justify-content-center text-center mb-6">
                    <div className="col-xl-8 col-lg-9">
                        <div className="position-relative" data-aos="fade-up">
                            <img src="/img/me_thumbnail.jpg" className="rounded-circle mx-auto mb-5 d-block" alt="Donny Chen" />
                            <div className="img-shadow"></div>
                        </div>
                        <p className="lead" data-aos="fade-up">
                            There are a lot of reasons that I like web development. Properly formatted code, getting a layout just right with a designer, and problem solving efficiently are only some of the reasons.
                            The best part is knowing the client is happy with the result.
                        </p>
                        <p className="lead" data-aos="fade-up">
                            In my free time, I enjoy long walks on the beach. I also enjoy cooking and gaming.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}