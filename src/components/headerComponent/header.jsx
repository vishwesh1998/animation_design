import React from "react";
import "./header.css";
import { MdMailOutline } from "react-icons/md";
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className="headerComponent">
      <div className="headerComponentDiv1">
        <h1>INNOVATE</h1>
      </div>
      <div className="headerComponentDiv2">
        <h1
          style={{ fontSize: "5rem", color: "white" }}
          className="animate__animated animate__bounceInRight "
        >
          <MdOutlineAlternateEmail />
        </h1>{" "}
        &nbsp;&nbsp;{" "}
        <h1 className="animate__animated animate__bounceInDown">
          KLS Pitch Day
        </h1>
      </div>
      <div className="headerComponentDiv3">
        <p>June 1st 2024, Mountain View CA</p>
      </div>
      <div className="headerComponentDiv4">
        <MdMailOutline />
      </div>
      <div className="headerComponentDiv5">
        <button>Register Now !</button>
      </div>
      <div className="headerComponentDiv6">
        <FaLongArrowAltDown />
      </div>
    </div>
  );
}
