import { SkillsData } from '../data/SkillsData';

export const Skills = () => {
    return (
        <section className="text-light text-center" id="skills">
            <div className="stars stars1"></div>
            <div className="stars stars2"></div>
            <div className="stars stars3"></div>
            <div className="container">
                <h2 className="display-5 text-center mb-5" data-aos="fade-up">SKILLS</h2>
                <div className="row">
                    {SkillsData.map((skill, index) =>
                        <div className="col-lg-4 py-lg-3" key={`${index}`} data-aos="fade-up" data-aos-delay={`${(index+1)*200}`}>
                            {skill.map(s =>
                                <h4 className="pb-3" key={`${s.name}`}><i className={`${s.icon}`}></i> {s.name}</h4>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}