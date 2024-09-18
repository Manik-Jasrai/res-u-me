import { useState } from "react";
import Hero from "./Hero";
import Process from "./Process";
import Features from "./Features";
import Upload from "./Upload";
import Results from "./Results";
import Footer from "./Footer";

function App() {
  const [jobs, setJobs] = useState([]);

  return (
    <>
      <Hero></Hero>
      <Process></Process>
      <Features></Features>
      <Upload setJobs={setJobs}></Upload>
      {jobs.length ? <Results jobs={jobs}></Results> : <></>}
      <Footer></Footer>
    </>
  );
}

export default App;

