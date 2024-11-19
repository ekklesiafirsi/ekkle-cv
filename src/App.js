import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <head> 
    <title>Personal Portfolio</title>
   </head>
  <div>
  <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo">Indra</a>
      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link active-link">
              <i className="bx bx-home-alt nav__icon" />
              <span className="nav__name">Home</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="bx bx-user nav__icon" />
              <span className="nav__name">About</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="bx bx-book-alt nav__icon" />
              <span className="nav__name">Skills</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#certificate" className="nav__link">
              <i className="bx bx-certification nav__icon" />
              <span className="nav__name">Certificates</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#portfolio" className="nav__link">
              <i className="bx bx-briefcase-alt nav__icon" />
              <span className="nav__name">Portfolio</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="bx bx-message-square-detail nav__icon" />
              <span className="nav__name">Contact</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <img src="assets/img/icon.png" alt="" class="nav__img" /> */}
      {/* theme change light and dark */}
      <i className="bx bx-moon change-theme" id="theme-button" />
    </nav>
  </header>
  {/*=============== MAIN ===============*/}
  <main className="main">
    {/*=============== HOME ===============*/}
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Hello, I'm</span>
          <h1 className="home__name">Alfaraby Indra</h1>
          <h3 className="home__education">Junior Software Engineering</h3>
          <div className="home__buttons">
            <a href="#" target="_blank" className="button button--ghost">DOWNLOAD CV</a>
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
    {/*=============== ABOUT ===============*/}
    <section className="about section" id="about">
      <span className="section__subtitle">My Intro</span>
      <h2 className="section__title">About Me</h2>
      <div className="about__container container grid">
        <img src="assets/img/profil.jpg" alt className="about__img" />
        <div className="about__data">
          {/* <div class="about__info">
        <div class="about__box">
          <i class="bx bx-award"></i>
          <h3 class="about__title">Graduated</h3>
          <span class="about__subtitle">Less 1 year experience</span>
        </div>
        <div class="about__box">
          <i class="bx bx-briefcase"></i>
          <h3 class="about__title">Projects</h3>
          <span class="about__subtitle">6 Project</span>
        </div>
        <div class="about__box">
          <i class="bx bx-support"></i>
          <h3 class="about__title">Open to Work</h3>
          <span class="about__subtitle">Online 24/7</span>
        </div>
      </div> */}
          <p className="about__description">
            I am Alfaraby Indra, Bachelor of Informatics Engineering STMIK AMIK RIAU in 2020. I have an interest in a career as Software Engineering and proficient in creating mobile, web and game applications.
          </p>
          <a href="#contact" className="button">Contact Me</a>
        </div>
      </div>
    </section>
    {/*=============== SKILLS ===============*/}
    {/* <section class="container section section__height" id="skills">
  <h2 class="section__title">Skills</h2>
</section> */}
    <section className="skills section" id="skills">
      <span className="section__subtitle">My abilities</span>
      <h2 className="section__title">SKILLS</h2>
      <div className="skills__container container grid">
        <div className="skills__content">
          <h3 className="skills__title">Programming Language</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">HTML</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">CSS</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Javascript</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">C#</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Golang</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Java</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">C++</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">PHP</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Dart</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">TypeScript</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__title">Framework / IDE</h3>
          <div className="skills__box">
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">VS Code</h3>
                  {/* <span class="skills__level">Intermediate</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Android Studio</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Laravel</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">JQuery</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
            </div>
            <div className="skills__group">
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Flutter</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">MySQL</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Construct 2</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
              <div className="skills__data">
                <i className="bx bx-badge-check" />
                <div>
                  <h3 className="skills__name">Bootstrap</h3>
                  {/* <span class="skills__level">Basic</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*=============== CERTIFICATES ===============*/}
    {/* <section class="container section section__height" id="certificate">
  <h2 class="section__title">Certificates</h2>
</section> */}
    <section className="work section" id="certificate">
      <h2 className="section__title">Certificates</h2>
      <div className="certificate__container bd-grid">
        {/* <a href="assets/Sertifikasi/sertifikat_akreditasi_ti.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_akreditasi_ti.png" alt="" />
    </a> */}
        <a href="assets/Sertifikasi/Java Fundamentals.page1.png" className="certificate__img">
          <img src="assets/Sertifikasi/Java Fundamentals.page1.png" alt />
        </a>
        {/* <a href="assets/Sertifikasi/sertifikat_course_51_463492_171020113958.page1.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_51_463492_171020113958.page1.png" alt="" />
    </a>
    <a href="assets/Sertifikasi/sertifikat_course_58_463492_171020114055.page1.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_58_463492_171020114055.page1.png" alt="" />
    </a> */}
        <a href="assets/Sertifikasi/Sertifikat Complation_001.png" className="certificate__img">
          <img src="assets/Sertifikasi/Sertifikat Complation_001.png" alt />
        </a>
        {/* <a href="assets/Sertifikasi/sertifikat_course_237_463492_210221121744_001.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_237_463492_210221121744_001.png" alt="" />
    </a> */}
        <a href="assets/Sertifikasi/Git.png" className="certificate__img">
          <img src="assets/Sertifikasi/Git.png" alt />
        </a>
        {/* <a href="assets/Sertifikasi/CLI.png" class="certificate__img">
      <img src="assets/Sertifikasi/CLI.png" alt="" />
    </a> */}
        <a href="assets/Sertifikasi/Csharp.png" className="certificate__img">
          <img src="assets/Sertifikasi/Csharp.png" alt />
        </a>
        <a href="assets/Sertifikasi/Javascript.png" className="certificate__img">
          <img src="assets/Sertifikasi/Javascript.png" alt />
        </a>
        {/* <a href="assets/Sertifikasi/bitdegree-certificate-82637810_001.png" class="certificate__img">
      <img src="assets/Sertifikasi/bitdegree-certificate-82637810_001.png" alt="" />
    </a> */}
        {/* <a href="assets/Sertifikasi/sertifikat_course_68_463492_171020113854.page1.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_68_463492_171020113854.page1.png" alt="" />
    </a>
    <a href="assets/Sertifikasi/sertifikat_course_86_463492_171020180309.page1.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_86_463492_171020180309.page1.png" alt="" />
    </a>
    <a href="assets/Sertifikasi/sertifikat_course_169_463492_111020115507.page1.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_169_463492_111020115507.page1.png" alt="" />
    </a>
    <a href="assets/Sertifikasi/sertifikat_course_177_463492_131020110558_001.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_177_463492_131020110558_001.png" alt="" />
    </a>
    <a href="assets/Sertifikasi/sertifikat_course_237_463492_210221121744_001.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_237_463492_210221121744_001.png" alt="" />
    </a>
    <a href="assets/Sertifikasi/sertifikat_course_292_463492_210221121934_001.png" class="certificate__img">
      <img src="assets/Sertifikasi/sertifikat_course_292_463492_210221121934_001.png" alt="" />
    </a> */}
        <a href="assets/Sertifikasi/HTML.png" className="certificate__img">
          <img src="assets/Sertifikasi/HTML.png" alt />
        </a>
        <a href="assets/Sertifikasi/CSS.png" className="certificate__img">
          <img src="assets/Sertifikasi/CSS.png" alt />
        </a>
        <a href="assets/Sertifikasi/C++.png" className="certificate__img">
          <img src="assets/Sertifikasi/C++.png" alt />
        </a>
        <a href="assets/Sertifikasi/C.png" className="certificate__img">
          <img src="assets/Sertifikasi/C.png" alt />
        </a>
      </div>
    </section>
    {/*=============== PORTFOLIO ===============*/}
    <section className="work section" id="portfolio">
      <span className="section__subtitle">My Portfolio</span>
      <h3 className="section__title">Recent Works</h3>
      <div className="work__filters">
        <span className="work__items active-work" data-filter="all">All</span>
        <span className="work__items" data-filter=".web">Web</span>
        <span className="work__items" data-filter=".mobile">Mobile</span>
        <span className="work__items" data-filter=".game">Game</span>
      </div>
      <div className="work__container container grid">
        <div className="work__card mix web">
          <img src="assets/img/calculator web.PNG" alt className="work__img" />
          <h3 className="work__title">Web Calculator</h3>
          <a href="https://alfarabygit.github.io/calculator-web/" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix web">
          <img src="assets/img/Web CV.PNG" alt className="work__img" />
          <h3 className="work__title">Web CV</h3>
          <a href="https://alfarabygit.github.io/cv-responsive/" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix web">
          <img src="assets/img/music player.PNG" alt className="work__img" />
          <h3 className="work__title">Music Player</h3>
          <a href="https://alfarabygit.github.io/music-web/" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix web">
          <img src="assets/img/todo list.PNG" alt className="work__img" />
          <h3 className="work__title">Web Todolist</h3>
          <a href="https://alfarabygit.github.io/todolist-web/" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix mobile">
          <img src="assets/img/Todo App Design.PNG" alt className="work__img" />
          <h3 className="work__title">Todo App Design</h3>
          <a href="https://www.figma.com/file/E5MZdxFLMiQiI7pXLnrLFX/Todo-list-app?type=design&node-id=0%3A1&mode=design&t=ZkGZhIXUegmn9Ts1-1" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix game">
          <img src="assets/img/hangman game.PNG" alt className="work__img" />
          <h3 className="work__title">Hangman Game</h3>
          <a href="https://alfarabygit.github.io/game-hangman/" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix game">
          <img src="assets/img/GEFYS.PNG" alt className="work__img" />
          <h3 className="work__title">GEFYS</h3>
          <a href="https://indracode.itch.io/gefys" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix web">
          <img src="assets/img/color switcher.PNG" alt className="work__img" />
          <h3 className="work__title">Color Switcher</h3>
          <a href="https://alfarabygit.github.io/color-switcher/" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
        <div className="work__card mix web">
          <img src="assets/img/e-commerce.PNG" alt className="work__img" />
          <h3 className="work__title">Distro E-Commerce</h3>
          <a href="https://alfarabygit.github.io/e-commerce/" target="_blank" className="work__button"> Demo<i className="bx bx-right-arrow-alt work__icon" /> </a>
        </div>
      </div>
    </section>
    {/*=============== CONTACT ===============*/}
    <section className="contact section" id="contact">
      <span className="section__subtitle">Get in touch</span>
      <h3 className="section__title">Contact Me</h3>
      <div className="contact__container container grid">
        {/* <div class="contact__content">
      <h3 class="contact__title">Talk to me</h3>
      <div class="contact__info">
        <div class="contact__card">
          <i class="bx bx-mail-send contact__card-icon"></i>
          <h3 class="contact__card-title">Email</h3>
          <span class="contact__card-data">alfarabyindra@gmail.com</span>
          <a href="mailto:examplemail@correo.com" target="_blank" class="contact__button">
            Write me
            <i class="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
        <div class="contact__card">
          <i class="bx bxl-whatsapp contact__card-icon"></i>
          <h3 class="contact__card-title">Whatsapp</h3>
          <span class="contact__card-data">085363939486</span>
          <a href="https://wa.me/6285363939486" target="_blank" class="contact__button">
            Write me
            <i class="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
        <div class="contact__card">
          <i class="bx bxl-instagram contact__card-icon"></i>
          <h3 class="contact__card-title">Instagram</h3>
          <span class="contact__card-data">alfarabyindra</span>
          <a href="https://instagram.com/alfarabyindra?igshid=NGExMml2YTkyZg==" target="_blank" class="contact__button">
            Write me
            <i class="bx bx-right-arrow-alt contact__button-icon"></i>
          </a>
        </div>
      </div>
    </div> */}
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form action className="contact__form" id="contact-form">
            <div className="contact__form-div">
              <label htmlFor className="contact__form-tag">Name</label>
              <input type="text" name="user_name" placeholder="Insert Your Name!" className="contact__form-input" id="contact-name" />
            </div>
            <div className="contact__form-div">
              <label htmlFor className="contact__form-tag">Email</label>
              <input type="text" name="user_email" placeholder="Insert Your Email!" className="contact__form-input" id="contact-email" />
            </div>
            <div className="contact__form-div contact__form-area">
              <label htmlFor className="contact__form-tag">Project</label>
              <textarea cols={30} rows={10} name="user_project" placeholder="Insert Your Project!" className="contact__form-input" id="contact-project" defaultValue={""} />
            </div>
            <p className="contact__message" id="contact-message" />
            <button className="button">Send Message!</button>
          </form>
        </div>
      </div>
    </section>
  </main>
  {/*=============== FOOTER ===============*/}
  <footer className="footer">
    <div className="footer__container container">
      <h1 className="footer__title">Indra</h1>
      <ul className="footer__list">
        <li><a href="#about" className="footer__link">About</a></li>
        <li><a href="#portfolio" className="footer__link">Projects</a></li>
        {/* <li><a href="#testimonial" class="footer__link">Testimonials</a></li> */}
      </ul>
      <ul className="footer__social">
        <a href="https://www.linkedin.com/in/alfaraby-indra-2084501b7/" target="_blank" className="footer__social-link"><i className="bx bxl-linkedin" /></a>
        <a href="https://instagram.com/alfarabyindra?igshid=NGExMml2YTkyZg==" target="_blank" className="footer__social-link"><i className="bx bxl-instagram" /></a>
        <a href="https://github.com/alfarabygit?tab=repositories" target="_blank" className="footer__social-link"><i className="bx bxl-github" /></a>
      </ul>
      <span className="footer__copy"> © 2023. All rights reserved. </span>
    </div>
  </footer>
</div>
  </div>
  );
};

export default App;
