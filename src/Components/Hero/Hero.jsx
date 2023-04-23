import React from "react";
import "./hero.css";
const Hero = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div>
            <h1>Skills speak louder than words</h1>
            <div>
              <p>
                We help companies develop the strongest tech teams around. We
                help candidates sharpen their tech skills and pursue job
                opportunities.
              </p>
              <p>
                <a className="btn1" href="#">
                  Sign up
                </a>
                <a href="#">Request demo</a>
              </p>
              <p className="py">
                Over 40% of developers worldwide and 3,000 companies use
                HackerRank
              </p>
              <div className="logo">
                <img src="assets/1.png" />
                <img src="assets/2.png" />
                <img src="assets/3.png" />
                <img src="assets/4.png" />
                <img src="assets/5.png" />
                <img src="assets/6.png" />
                <img src="assets/8.png" />
                <img src="assets/9.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
