import Result from "./Result";

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
