const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer">
      <div className="top-div">
        <a
          href="#hero"
          className="link top-div w-inline-block">
          <img
            src="/assets/arrow.png"
            loading="lazy"
            alt="icon of up arrow"
            className="footer-icon"
          />
          <p className="footer-text">Take me to the top</p>
        </a>
      </div>
      <div className="credit-div">
        <p className="paragraph">
          Made for <span className="footer-span">LNMHacks 6.0</span> by&nbsp;
        </p>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/alok-shukla-059ab8253/"
            target="_blank"
            className="link linkedin">
            Alok,&nbsp;
          </a>
          <a
            href="https://www.linkedin.com/in/manik-jasrai-39a060256/"
            target="_blank"
            className="link linkedin">
            Manik,&nbsp;
          </a>
          <a
            href="https://www.linkedin.com/in/nikhilsaini08/"
            target="_blank"
            className="link linkedin">
            Nikhil,&nbsp;
          </a>
          <a
            href="https://www.linkedin.com/in/suyash-mittal/"
            target="_blank"
            className="link linkedin">
            Suyash
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
