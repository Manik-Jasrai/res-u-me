import logo1 from "./assets/logo1.svg";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import "./Component3.css";
export default function Component3() {
  return (
    <div className="section">
      <div className="sectionone grid container">
        <img src={img1} alt="" className="sectionone__left responsive-image" />
        <div className="section__right flex">
          <div className="text-8">Precision Matching</div>
          <div className="text-9">
            Our algorithm goes beyond keyword matching. We understand the
            nuances of your experience, ensuring a more accurate and tailored
            job search.
          </div>
        </div>
      </div>
      <div className="sectiontwo grid container">
        <div className="sectiontwo__left flex">
          <div className="text-8">Stay Ahead of the Curve</div>
          <div className="text-9">
            Our technology evolves with the job market, providing you with the
            most up-to-date and relevant opportunities.
          </div>
        </div>
        <img src={img2} alt="" className="sectiontwo__right responsive-image" />
      </div>
      <div className="sectionthree grid container">
        <img
          src={img3}
          alt=""
          className="sectionthree__left responsive-image"
        />
        <div className="sectionthree__right flex">
          <div className="text-8">Save Time</div>
          <div className="text-9">
            Your privacy is our priority. Rest assured, your personal
            information is handled with the utmost care and security.
          </div>
        </div>
      </div>
      <div className="sectionfour grid container">
        <div className="sectionfour__left flex">
          <div className="text-8">Confidential and Secure</div>
          <div className="text-9">
            Your privacy is our priority. Rest assured, your personal
            information is handled with the utmost care and security.
          </div>
        </div>
        <img
          src={img4}
          alt=""
          className="sectionfour__right responsive-image"
        />
      </div>
    </div>
  );
}
