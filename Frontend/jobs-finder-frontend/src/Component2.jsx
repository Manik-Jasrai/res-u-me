import "./Component2.css";
import upload from "./assets/upload.svg";
import ai from "./assets/ai.svg";
import sc from "./assets/suitcase.svg";
export default function Component2() {
  return (
    <div>
      {/* <div className="center">
        <div className="outer-frame"></div>
      </div>
      <div className="inner-frame"></div> */}
      <div className="center">
        <div className="outer">
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "146px",
              marginTop: "50px",
              marginLeft: "128px",
              marginRight: "128px",
            }}
          >
            <div className="i1">
              <img src={upload}></img>
              <p className="i4">
                1<br></br>Upload Your Resume
              </p>
              <p>
                Start by sharing your professional journey with us. Upload a pdf
                or doc file of your resume.
              </p>
            </div>
            <div className="i2">
              <img src={ai}></img>
              <p className="i4" style={{ marginBottom: "80px" }}>
                2<br></br>Machine Learning
              </p>
              <p>
                Multi-Layered LLMs analyze every detail of your resume, from
                skills to experience, ensuring a comprehensive understanding of
                your unique qualifications.
              </p>
            </div>
            <div className="i3">
              <img src={sc}></img>
              <p className="i4" style={{ marginBottom: "80px" }}>
                3<br></br>Apply for Jobs
              </p>
              <p>
                Receive a curated list of job opportunities from various sources
                like LinkedIn that match your skills and aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
