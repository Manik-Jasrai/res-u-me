import i1 from "./assets/i1.svg";
import i2 from "./assets/i2.svg";
import i3 from "./assets/i3.svg";
import "./Component5.css";
import React, { useState, useEffect } from "react";
const ListLinks = ({ links }) => (
  <div className="d1">
    {links.map((link) => (
      <div className="d2">
        <div className="d3">
          <p className="d4">Job Title</p>
        </div>
        <p className="d5">Company Name</p>
        {/* <img className="i1" src={i1}></img>
        <p className="t1">Location</p>
        <br></br>
        <img className="i2" src={i2}></img>
        <br></br>
        <img className="i3" src={i3}></img> */}
        <p className="t1">Location</p>
        <p className="t1">Salary</p>
        <p className="t1">URL</p>
      </div>
    ))}
  </div>
);
export default function Component5() {
  
  // const [links, setLinks] = useState(null);
  // useEffect(() => {
  //   const data =localStorage.getItem("data")
  //   if(data){
  //     set(data);
  //   }
  //   if (links) {
  //     window.location.hash = "#bottom";
  //   }
  // }, [links]);
  return (
    <div>
      <section id="bottom"></section>
      {links ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ListLinks links={sharedState} />
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
  );
}
