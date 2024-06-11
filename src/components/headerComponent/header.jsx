import React from "react";
import "./header.css";
import { MdMailOutline } from "react-icons/md";
import { FaLongArrowAltDown } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // @ animation function in header
  let handleIconMovement = () => {
    let iconElement = document.getElementById("headerIcon");

    if (window.innerWidth < 768) {
      iconElement.classList.remove("animate__bounceInRight");
      iconElement.classList.add("animate__rotateIn");
      return;
    }

    iconElement.classList.remove("animate__rotateIn");
    iconElement.classList.add("animate__bounceInRight");
  };

  // scrolling function
  let scrollEffect = () => {
    const checkedScroll = 1;
    if (window.scrollY > checkedScroll) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", scrollEffect);

  useEffect(() => {
    handleIconMovement();
  }, []);

  return (
    <div className="headerComponent">
      <div className="headerComponentDiv1">
        <h1 className={scrolled ? "innovate" : ""}>INNOVATE</h1>
      </div>
      <div className="headerComponentDiv2">
        <h1
          style={{ fontSize: "5rem", color: "white" }}
          className="animate__animated"
          id="headerIcon"
        >
          <MdOutlineAlternateEmail />
        </h1>
        &nbsp;&nbsp;
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
