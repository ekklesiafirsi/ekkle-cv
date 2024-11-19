

const Footer = () =>{
    return (
  <footer className="footer">
  <div className="footer__container container">
    <h1 className="footer__title">Ekei</h1>
    <ul className="footer__list">
      <li><a href="#about" className="footer__link">About</a></li>

   
    </ul>
    <ul className="footer__social">
      <a href="https://www.linkedin.com/in/alfaraby-indra-2084501b7/" target="_blank" className="footer__social-link"><i className="bx bxl-linkedin" /></a>
      <a href="https://instagram.com/alfarabyindra?igshid=NGExMml2YTkyZg==" target="_blank" className="footer__social-link"><i className="bx bxl-instagram" /></a>
      <a href="https://github.com/ekklesiafirsi" target="_blank" className="footer__social-link"><i className="bx bxl-github" /></a>
    </ul>
    <span className="footer__copy"> © 2024 Ekei. All rights reserved. </span>
  </div>
</footer>
    );
};
export default Footer;