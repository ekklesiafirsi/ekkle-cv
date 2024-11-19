import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {

  const [about, setAbout] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about");

    setLoading(true);
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
      setLoading(false);
    });

  }, []);
    return (
        <section className="about section" id="about">
      
      <h2 className="section__title">{about.title}</h2>
      <div className="about__container container grid">
        <img src={`data:image/jpg;base64, ${about.image}`} alt className="about__img" />
        <div className="about__data">
          <div class="about__info">
        <div class="about__box">
          <i class="bx bx-award"></i>
          <h3 class="about__title">Graduate</h3>
          <span class="about__subtitle">in 2026</span>
        </div>
        <div class="about__box">
          <i class="bx bx-support"></i>
          <h3 class="about__title">Open to Work</h3>
          <span class="about__subtitle">Online 24/7</span>
        </div>
      </div> 
          <p className="about__description">{about.subtitle}</p>
          <a href="#contact" className="button">Contact Me</a>
        </div>
      </div>
    </section>
    );
};
export default About;