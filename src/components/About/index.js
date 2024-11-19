const About = () => {
    return (
        <section className="about section" id="about">
      
      <h2 className="section__title">About Me</h2>
      <div className="about__container container grid">
        <img src="assets/img/profil.jpg" alt className="about__img" />
        <div className="about__data">
          <div class="about__info">
        <div class="about__box">
          <i class="bx bx-award"></i>
          <h3 class="about__title">Graduated</h3>
          <span class="about__subtitle">In 2026</span>
        </div>
        <div class="about__box">
          <i class="bx bx-support"></i>
          <h3 class="about__title">Open to Work</h3>
          <span class="about__subtitle">Online 24/7</span>
        </div>
      </div> 
          <p className="about__description">
          Saya Ekklesia firsi Dondokambey, Biasa dipanggil Ekley. Saya Anak Kedua
dari 2 bersaudara. Saya dibesarkan oleh keluarga sederhana dan suka
melayani. Orang Tua saya bekerja sebagai Pendeta Saya mempunyai 1 orang
saudara kandung laki-laki.

          </p>
          <a href="#contact" className="button">Contact Me</a>
        </div>
      </div>
    </section>
    );
};
export default About;