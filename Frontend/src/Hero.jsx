const Hero = () => {
  return (
    <main
      id="hero"
      className="hero-section">
      <div className="hero-div">
        <img
          src="src/assets/logo.png"
          loading="eager"
          alt=""
          className="hero-logo"
        />
        <h1 className="hero-heading">
          The perfect job
          <br />
          for your
          <br />
          rés-u-mé
        </h1>
        <img
          src="./assets/line.png"
          loading="eager"
          sizes="(max-width: 479px) 100vw, (max-width: 767px) 168px, (max-width: 991px) 196px, 224px"
          srcSet="src/assets/line-p-500.png 500w, src/assets/line.png 1857w"
          alt=""
          className="hero-decor"
        />
        <p className="hero-para">
          Apply for jobs from trusted sources
          <br />
          that perfectly match your résumé
        </p>
        <a
          href="#upload"
          className="cta w-button">
          Find Jobs
        </a>
      </div>
    </main>
  );
};

export default Hero;
