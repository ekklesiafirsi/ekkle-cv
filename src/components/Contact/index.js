const Contact = () => {
    return (
        <header className="header" id="header">
    <nav className="nav container">
      <a href="#" className="nav__logo"></a>
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
        </ul>
      </div>
    
    </nav>
  </header>
    );
};
export default Contact;