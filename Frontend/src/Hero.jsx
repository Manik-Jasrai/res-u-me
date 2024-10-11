const Hero = () => {
  return (
    <main
      id="hero"
      className="hero-section">
      <div className="hero-div">
        <img
          src="/assets/logo.png"
          loading="eager"
          alt="logo"
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
          src="/assets/line.png"
          loading="eager"
          alt="decorative line"
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
