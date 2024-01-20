import logo1 from "./assets/logo1.svg";
import "./Component1.css";
export default function Component1() {
  return (
    <div>
      <div className="div1">
        <img className="asset" alt="Asset" src={logo1} />
      </div>
      <p className="text-1">
        The perfect job for <br></br>
        <br></br>your rés-u-mé
      </p>
      <p className="text-2">
        Apply for jobs from trusted sources<br></br>that perfectly match your
        résumé
      </p>
      <div className="center">
        <div className="b1">
        {/* <a href="#top" className="text-3">
          
        </a> */}
          <div className="text-3"><a href="#sv1" className="text-3">
            Find Jobs
          </a></div>
        </div>
      </div>
    </div>
  );
}
