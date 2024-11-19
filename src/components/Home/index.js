import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const Home = () =>{


  const [home, setHome] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home");

    setLoading(true);
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setHome(data);
      setLoading(false);
    });

  }, []);
    return(
        <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">{home.title}</span>
            <h1 className="home__name">{home.subtitle}</h1>  
            <div className="home__buttons">
            
              <a href="#about" className="button">About me</a>
            </div>
          </div>
          <div className="home__handle">
            <img src="assets/img/alby.png" alt className="home__img" />
          </div>
          <div className="home__social">
            <a href="#" target="_blank" className="home__social-link"><i className="bx bxl-linkedin" /></a>
            <a href="https://github.com/ekklesiafirsi" target="_blank" className="home__social-link"><i className="bx bxl-github" /></a>
            <a href="https://www.instagram.com/eklesiadondokambey?igsh=MWt5a3UxMWw3ZG45dg==" target="_blank" className="home__social-link"><i className="bx bxl-instagram" /></a>
          </div>
          <a href="#about" className="home__scroll">
            <i className="bx bxs-mouse home__scroll-icon" />
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>
    )
}
export default Home;