import React from "react";

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

export default Result;
