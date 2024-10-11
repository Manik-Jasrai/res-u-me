import React, { useState } from "react";

const Upload = ({ setJobs }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError("");
    } else {
      setError("Please upload a valid file (PDF, DOC, DOCX)");
      setFile(null);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("No file selected.");
      return;
    }
    setJobs([]);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("pdfFile", file);

    try {
      const response = await fetch("https://res-u-me.onrender.com/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully!");
        const responseBody = await response.json();
        console.log(responseBody);
        setIsLoading(false);
        setJobs(responseBody);
      } else {
        setError("File upload failed. Please try again.");
      }
    } catch (error) {
      setError("There was an error uploading your file.");
    }
  };

  return (
    <section
      id="upload"
      className="upload-section">
      <div className="upload-div">
        <h2 className="heading">Upload Your Resume</h2>
        <p className="para">and take the next step in your career</p>
        <img
          src="/assets/file.png"
          loading="lazy"
          alt="icon of file"
          className="img"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          id="file-upload"
          style={{ display: "none" }}
        />
        <label
          htmlFor="file-upload"
          className="cta w-button cursor">
          Choose File
        </label>

        {file && (
          <div>
            <p
              className="para"
              style={{ paddingLeft: "5px" }}>
              {file.name}
            </p>
          </div>
        )}

        {error && (
          <p
            className="para"
            style={{ color: "red" }}>
            {error}
          </p>
        )}
        {file && (
          <a
            onClick={handleSubmit}
            className="cta w-button cursor">
            Submit Resume
          </a>
        )}
        {!error && isLoading && <p className="para">Fetching Jobs...</p>}
      </div>
    </section>
  );
};

export default Upload;
