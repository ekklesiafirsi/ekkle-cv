

const Footer = () =>{
    return (
  <footer className="footer">
  <div className="footer__container container">
    <h1 className="footer__title">Contact Me</h1>
    <ul className="footer__list">
      <li><a href="#about" className="footer__link">Ekklesia Firsi Dondokambey</a></li>

   
    </ul>
    <ul className="footer__social">
      <a href="#" target="_blank" className="footer__social-link"><i className="bx bxl-linkedin" /></a>
      <a href="https://www.instagram.com/eklesiadondokambey?igsh=MWt5a3UxMWw3ZG45dg==" target="_blank" className="footer__social-link"><i className="bx bxl-instagram" /></a>
      <a href="https://github.com/ekklesiafirsi" target="_blank" className="footer__social-link"><i className="bx bxl-github" /></a>
    </ul>
    <span className="footer__copy"> © 2024 Ekei. All rights reserved. </span>
  </div>
</footer>
    );
};
export default Footer;