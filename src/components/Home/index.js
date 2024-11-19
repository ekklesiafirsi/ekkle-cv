const Home = () =>{
    return(
        <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <span className="home__greeting">Hello, I'm</span>
            <h1 className="home__name">Ekklesia Firsi Dondokambey</h1>  
            <div className="home__buttons">
            
              <a href="#about" className="button">About me</a>
            </div>
          </div>
          <div className="home__handle">
            <img src="assets/img/alby.png" alt className="home__img" />
          </div>
          <div className="home__social">
            <a href="https://www.linkedin.com/in/alfaraby-indra-2084501b7/" target="_blank" className="home__social-link"><i className="bx bxl-linkedin" /></a>
            <a href="https://github.com/alfarabygit?tab=repositories" target="_blank" className="home__social-link"><i className="bx bxl-github" /></a>
            <a href="https://instagram.com/alfarabyindra?igshid=NGExMml2YTkyZg==" target="_blank" className="home__social-link"><i className="bx bxl-instagram" /></a>
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