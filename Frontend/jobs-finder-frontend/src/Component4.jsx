import logo1 from "./assets/logo1.svg";
import upload from "./assets/upload2.svg";
import "./Component4.css";
import { useState, useRef } from "react";
import { FileUploader } from "react-drag-drop-files";
const fileTypes = ["PDF", "DOCX"];
let index=0;
const ListLinks = ({ links }) => (
  <div className="d1">
    {links.map((link) => (
      <div className="d2" key={index++}>
        <a href={link.jobUrl} className="l1" target="_blank">
        <div className="d3">
          <p className="d4">{link.position}</p>
        </div>
        <p className="d5">{link.company}</p>
        {/* <img className="i1" src={i1}></img>
        <p className="t1">Location</p>
        <br></br>
        <img className="i2" src={i2}></img>
        <br></br>
        <img className="i3" src={i3}></img> */}
        <p className="t1">{link.location}</p>
        {/* <p className="t1">{link.salary?link.salary:""}</p>
        <a href={link.jobUrl} className="t1">""</a> */}
        </a>
      </div>
    ))}
  </div>
);

export default function Component4() {
  const [file, setFile] = useState(null);
  const handleChange = async (file) => {
      const formData = new FormData();
      formData.append('pdfFile', file);
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body : formData 
      });
      const responseBody = await response.json();
      // console.log(responseBody); 
      // setSharedState(responseBody);
      // console.log(sharedState);
      localStorage.setItem("data", JSON.stringify(responseBody));
      setFile(file);
      if (!response.ok) {
        throw new Error(responseBody.message);
      }
    };
  // if (files)
  //   return (
  //     <div className="uploads">
  //       <ul>
  //         {Array.from(files).map((file, idx) => (
  //           <li key={idx}>{file.name}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  return (
    <div>
      {!file && (
        <div className="center">
         <section id="sv1"></section>
          <div className="border">
          
            <div className="">
              <p className="text-1">Upload Your Resume</p>
        
              <p className="text-2">and take the next step in your career</p>
              <center>
                <img src={upload} className="img1"></img>
                <br></br>
                <br></br>
                <br></br>
                <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                />
              </center>
              <div className="center">
                {/* <input
                  type="file"
                  multiple
                  onChange={(event) => setFiles(event.target.files)}
                  hidden
                  ref={inputRef}
                ></input> */}
                {/* <div className="d1">
                  <p className="text-3">Scan Resume</p>
                </div> */}
              </div>
              {/* <div className="center">
                <p className="text-4">Drag and Drop a .pdf or .docx file</p>
              </div> */}
            </div>
          </div>
        </div>
      )}
      <div>
      <section id="bottom"></section>
      {localStorage.getItem('data') ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ListLinks links={JSON.parse(localStorage.getItem('data'))} />
        </div>
      ) : (
        <div></div>
      )}
      <center>
        <br></br>
        <br></br>
        <br></br>
        <a href="#top" className="x5">
          Take me to the Top
        </a>
      </center>
      <div className="x1">
        <p className="x2">
          Made for LNMHacks 6.0 by <a className='ref' href="https://www.linkedin.com/in/alok-shukla-059ab8253/" target='_blank'>Alok</a>, <a className='ref' href="https://www.linkedin.com/in/nikhilsaini08/" target='_blank'>Nikhil</a>, <a className='ref' href="https://www.linkedin.com/in/manik-jasrai-39a060256/" target='_blank'>Manik</a> and <a className='ref' href="https://www.linkedin.com/in/suyash-mittal-777b4616b" target='_blank'>Suyash</a>
        </p>
      </div>
    </div>
    </div>
  );
}
