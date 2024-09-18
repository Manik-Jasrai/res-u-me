import React from "react";

const Features = () => {
  return (
    <section
      id="features"
      className="features-section">
      <div className="features-div">
        <div className="feature-wrapper left hide-phone">
          <div className="feature-text">
            <h2 className="heading">Precision Matching</h2>
            <p className="para">
              Our algorithm goes beyond keyword matching. We understand the
              nuances of your experience, ensuring a more accurate and tailored
              job search.
            </p>
          </div>
          <img
            src="src/assets/Artboard_31.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 224px, (max-width: 991px) 288px, 320px"
            srcSet="
                src/assets/Artboard_31-p-500.png   500w,
                src/assets/Artboard_31-p-800.png   800w,
                src/assets/Artboard_31-p-1080.png 1080w,
                src/assets/Artboard_31-p-1600.png 1600w,
                src/assets/Artboard_31-p-2000.png 2000w,
                src/assets/Artboard_31.png        3710w
              "
            alt=""
            className="feature-image"
          />
        </div>
        <div className="feature-wrapper left hide-desktop">
          <img
            src="src/assets/Artboard_31.png"
            loading="eager"
            sizes="100vw"
            srcSet="
                src/assets/Artboard_31-p-500.png   500w,
                src/assets/Artboard_31-p-800.png   800w,
                src/assets/Artboard_31-p-1080.png 1080w,
                src/assets/Artboard_31-p-1600.png 1600w,
                src/assets/Artboard_31-p-2000.png 2000w,
                src/assets/Artboard_31.png        3710w
              "
            alt=""
            className="feature-image"
          />
          <div className="feature-text">
            <h2 className="heading">Precision Matching</h2>
            <p className="para">
              Our algorithm goes beyond keyword matching. We understand the
              nuances of your experience, ensuring a more accurate and tailored
              job search.
            </p>
          </div>
        </div>
        <div className="feature-wrapper right">
          <img
            src="src/assets/Artboard_30.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 224px, (max-width: 991px) 288px, 320px"
            srcSet="
                src/assets/Artboard_30-p-500.png   500w,
                src/assets/Artboard_30-p-800.png   800w,
                src/assets/Artboard_30-p-1080.png 1080w,
                src/assets/Artboard_30-p-1600.png 1600w,
                src/assets/Artboard_30.png        3710w
              "
            alt=""
            className="feature-image"
          />
          <div className="feature-text">
            <h2 className="heading">Stay Ahead of the Curve</h2>
            <p className="para">
              Our technology evolves with the job market, providing you with the
              most up-to-date and relevant opportunities.
            </p>
          </div>
        </div>
        <div className="feature-wrapper left hide-phone">
          <div className="feature-text">
            <h2 className="heading">Save Time</h2>
            <p className="para">
              No more scrolling through endless job listings. Focus on what
              matters – preparing for interviews and landing your dream job.
            </p>
          </div>
          <img
            src="src/assets/Artboard_17.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 336px, (max-width: 991px) 432px, 480px"
            srcSet="
                src/assets/Artboard_17-p-500.png   500w,
                src/assets/Artboard_17-p-800.png   800w,
                src/assets/Artboard_17-p-1080.png 1080w,
                src/assets/Artboard_17.png        2475w
              "
            alt=""
            className="feature-image"
          />
        </div>
        <div className="feature-wrapper left hide-desktop">
          <img
            src="src/assets/Artboard_17.png"
            loading="eager"
            sizes="100vw"
            srcSet="
                src/assets/Artboard_17-p-500.png   500w,
                src/assets/Artboard_17-p-800.png   800w,
                src/assets/Artboard_17-p-1080.png 1080w,
                src/assets/Artboard_17.png        2475w
              "
            alt=""
            className="feature-image"
          />
          <div className="feature-text">
            <h2 className="heading">Save Time</h2>
            <p className="para">
              No more scrolling through endless job listings. Focus on what
              matters – preparing for interviews and landing your dream job.
            </p>
          </div>
        </div>
        <div className="feature-wrapper right">
          <img
            src="src/assets/Artboard_39.png"
            loading="eager"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 224px, (max-width: 991px) 288px, 320px"
            srcSet="
                src/assets/Artboard_39-p-500.png   500w,
                src/assets/Artboard_39-p-800.png   800w,
                src/assets/Artboard_39-p-1080.png 1080w,
                src/assets/Artboard_39-p-1600.png 1600w,
                src/assets/Artboard_39.png        3710w
              "
            alt=""
            className="feature-image"
          />
          <div className="feature-text">
            <h2 className="heading">Confidential and Secure</h2>
            <p className="para">
              Your privacy is our priority. Rest assured, your personal
              information is handled with the utmost care and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
