import React from 'react'
import "./spot.css";
import  {BsArrowRight} from 'react-icons/bs'
const Spotligth = () => {
  return (
    <>
        <section>
        <div className="container">
          <div className="home-hiring-content">
            <h2 className="home-hiring-title">Its not a pipline problem</h2>
            <span>its a spotlight problem</span>
          </div>
          <div className="home-hiring-text">
            <p>
              Tech hiring needs a reset. From prepping for jobs and practicing
              coding to running a world-class technical interview, give
              developers the tools they need to showcase their skills, passion,
              and potential.
            </p>
          </div>
        </div>
        <div className="nav-container">
          <div className="home-hiring-nav">
            <a href="/">prep</a>
            <a href="/">screen</a>
            <a href="/">interview</a>
          </div>

          <div className="home-community-content">
            <div className="row row-container dis-flex">
              <div className="col">
                <div className="label">
                  coding practice
                  <h3 className="home-community-title">
                    Explore and Expand your skills
                  </h3>
                  <div className="home-community-title">
                    <p>
                      Every idea has a first line of code. Prep for jobs and
                      sharpen your skills alongside a global community of
                      developers. Access the content you need to develop new
                      skills – and land the job you’ve dreamed of.
                    </p>
                    <p>
                      <a href="/"> <button>signup and practice <BsArrowRight/> </button>  </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="home-community-image">
                  <img
                    src="https://www.hackerrank.com/wp-content/uploads/2022/09/community.jpg"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Spotligth