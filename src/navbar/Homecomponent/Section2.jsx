import React from "react";
import "../Homecomponent/Section2.css";

const Section2 = () => {
  return (
    <div>
      <div className="section2">
        <div className="sec-box1">
          <div className="content1">
            <span>WHO WE ARE</span>
          </div>
          <div className="content2">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              nihil iste, explicabo qui, magnam, reprehenderit modi maxime esse
              dicta ipsum nemo tempore sint. Nam aspernatur, libero repudiandae
              totam nesciunt at?
            </span>
          </div>
          <div className="content3">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
              nihil iste, explicabo qui, magnam, reprehenderit modi maxime esse
              dicta ipsum nemo tempore sint. Nam aspernatur, libero repudiandae
              totam nesciunt at?
            </span>
          </div>
        </div>
        <div className="sec-box2">
          <img className="sec-img"
            src="https://t4.ftcdn.net/jpg/03/40/66/19/360_F_340661941_ipsGHWVLICbAoRenSwC5s8UyfbxhKDrs.jpg"
            alt=""
          />
          <div className="blank-box"></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
