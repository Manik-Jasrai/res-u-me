const Result = ({ job }) => {
  return job ? (
    <a
      href={job.jobUrl}
      target="_blank"
      className="result-wrapper link w-inline-block">
      <h4 className="heading smalll">{job.position}</h4>
      <p className="para">{job.company}</p>
      <p className="para">{job.location}</p>
    </a>
  ) : null;
};

const Results = ({ jobs, setJobs }) => {
  let index = 0;
  return (
    <section
      id="results"
      className="result-section">
      <div className="result-div">
        {jobs.map((job) => (
          <Result
            job={job}
            key={index++}></Result>
        ))}
      </div>
    </section>
  );
};

export default Results;
