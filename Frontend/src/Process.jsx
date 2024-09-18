const Process = () => {
  return (
    <section
      id="process"
      className="process-section">
      <div className="process-div">
        <div className="process-step">
          <img
            src="src/assets/file.png"
            loading="lazy"
            sizes="(max-width: 767px) 60px, (max-width: 991px) 70px, 80px"
            srcSet="src/assets/file-p-500.png 500w, src/assets/file.png 512w"
            alt="icon of file"
            className="process-img"
          />
          <h3 className="process-heading">
            1<br />
            Upload Your
            <br />
            Resume
          </h3>
          <p className="process-text">
            Start by sharing your professional journey with us. Upload a pdf or
            doc file of your resume.
          </p>
        </div>
        <div className="process-step">
          <img
            src="src/assets/ai.png"
            loading="lazy"
            sizes="(max-width: 767px) 60px, (max-width: 991px) 70px, 80px"
            srcSet="src/assets/ai-p-500.png 500w, src/assets/ai.png 512w"
            alt="icon of ai"
            className="process-img"
          />
          <h3 className="process-heading">
            2<br />
            Machine
            <br />
            Learning
          </h3>
          <p className="process-text">
            Multi-Layered LLMs analyze every detail of your resume, from skills
            to experience, ensuring a comprehensive understanding of your unique
            qualifications.
          </p>
        </div>
        <div className="process-step">
          <img
            src="src/assets/suitcase.png"
            loading="lazy"
            sizes="(max-width: 767px) 60px, (max-width: 991px) 70px, 80px"
            srcSet="src/assets/suitcase-p-500.png 500w, src/assets/suitcase.png 512w"
            alt="icon of job"
            className="process-img"
          />
          <h3 className="process-heading">
            3<br />
            Apply for
            <br />
            Jobs
          </h3>
          <p className="process-text">
            Receive a curated list of job opportunities from various sources
            like LinkedIn that match your skills and aspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
