import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import about from "../../src/images/Sharan.jpg.jpg";
import "./About.css";

const About = () => {
  return (
    <section class="about">
      <div class="container my-5">
        <h1 className="text-primary">About Me</h1>
        <div class="row my-5 d-flex align-items-center">
          <div
            class="col-lg-4"
            data-aos="flip-left"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img
              src={about}
              class="img-fluidx img-thumbnail w-50 my-3"
              alt=""
            />
          </div>
          <div
            class="col-lg-8  content"
            data-aos="flip-right"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            {/* <h3>Web Developer</h3> */}
            <h5 className="text-light">
              I am Tasnimul Alam. I am studying Electronics and Communication
              Engineering at the Institute of Science and Technology. I am a
              very simple, positive, and honest web developer.I have always been
              interested in web development. I take my work as a Web Developer
              seriously and this means I always ensure my skills are kept up to
              date within this rapidly changing industry. I am always hungry to
              learn new things in web development.I always try to implement and
              develope new and different things in web development.My hobby is
              in my free time i like to do watch movies.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
