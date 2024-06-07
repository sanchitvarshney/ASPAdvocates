import React, { useState } from "react";
import styled from "styled-components";
import OutLineBtn from "../components/Buttons/OutLineBtn";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import ServiceCard from "../components/Cards/ServiceCard";
import { expertiesCardDate } from "../data";
import AcoladsSlider from "../components/slider/AcoladsSlider";

const Homepage = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <div className="hero-section main_content">
        <div className="container">
          <div className="hero_content">
            <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
              ASP<span>ADVOCATES</span>
            </h1>
            <hr data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="50" />
            {/* <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="300">
              ASP Advocates is a full service law firm comprising of lawyers, company secretaries, chartered accountants and industry specific consultants.{" "}
            </p>
            <a href="#about">
              <OutLineBtn toggleState={setToggle} toggleValue={true} animation={"fade-right"} animationDelay={"4000"} animationDuration={"1000"}>
                About the firm
              </OutLineBtn>
            </a> */}
          </div>
        </div>
      </div>
      <div className="about_section" id="about">
        <div className="container">
          <div className="title">
            <h1>About the Firm</h1>
            <hr />
          </div>
          <div className="content">
            {/* <h3 data-aos="fade-right" data-aos-duration="500">
              ASP Advocates is a full service law firm comprising of lawyers, company secretaries, chartered accountants and industry specific consultants.
            </h3> */}
            <div className="description" data-aos="fade-up" data-aos-duration="500">
              <p>
                ASP Advocates is a full service law firm comprising of lawyers, company secretaries, chartered accountants and industry specific consultants. Based in New Delhi, ASP Advocates has a network of Associate Offices across India including at Mumbai, Kolkata, Chennai,
                Chandigarh, Bangalore, Lucknow, Hyderabad, Pune and Patna. Lawyers of ASP Advocates are licensed to practice throughout India.
              </p>
              <p>
                The core Practice Areas of the Firm include Mergers & Acquisitions; Anti - Trust; Banking & Finance; Aviation & Maritime Laws; Capital Markets & Securities; Dispute Resolution; General Corporate Commercial including Advisory and Transactional Support; Intellectual
                Property and Confidentiality including Protection & Enforcement of Intellectual Property; Private Equity: Projects; Labour & Employment law; Regulatory & Policy and Taxation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="acolads_section">
        <AcoladsSlider />
        
      </div>
      <div className="proficiency_section">
        <div className="container">
          <div className="content" data-aos="fade-right" data-aos-duration="500" data-aos-offset="200">
            <div className="title">
              <h1>PROFICIENCY</h1>
              <hr />
            </div>
            <div className="experties">
              <Link to={"/practice"}>
                {" "}
                <OutLineBtn>practices</OutLineBtn>
              </Link>
            </div>
          </div>
          <div className="image" data-aos="fade-left" data-aos-duration="500" data-aos-offset="200">
            <img src="/images/office2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="experties_section">
        <div className="container">
          <div className="title">
            <h1>OUR EXPERTISE</h1>
            <hr />
            <p data-aos="fade-in">
              ASP Advocates and its lawyers have represented and continue to represent many of the world's leading companies in complex litigation and other high-stakes disputes, cross-border and other strategic transactions, and crucial regulatory matters.
            </p>
          </div>
          <div className="cards" data-aos="fade-up">
            {expertiesCardDate.map((service) => (
              <Link to={service.path} key={service.path}>
                <ServiceCard title={service.title} img={service.img} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .main_content {
    position: relative;
    height: 600px;
    width: 100%;
    background: url("/images/office.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: center bottom;
    background-repeat: no-repeat;
    &::before {
      position: absolute;
      content: "";
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      height: 600px;
      z-index: 2;
      background: linear-gradient(to right, #030350bd, #0303502f, #03035013);
    }
  }
  .hero_content {
    display: flex;
    justify-content: center;
    position: absolute;
    z-index: 3;
    color: #fff;
    flex-direction: column;
    gap: 20px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0 100px;
    max-width: 800px;
    min-width: 300px;
    h1 {
      font-weight: 400;
      font-size: 35px;
      color: #fff;
      text-decoration: none;

      font-family: "Playfair Display", serif;
      span {
        text-transform: uppercase;
        font-size: 25px;
        font-family: "Playfair Display", serif;
      }
    }
    hr {
      height: 0;
      border: 2px solid #fff;
      width: 100px;
    }
    p {
      font-size: 17px;
      text-align: justify;
      color: #fff;
    }
  }

  .about_section {
    padding: 50px 0;
    background-color: #efefef;
    .container {
      padding: 50px 100px;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
    .content {
      .description {
        display: flex;
        flex-direction: column;
        gap: 20px;
        p {
          margin: 0 auto;
          display: block;
          text-align: justify;
          font-size: 20px;
        }
      }
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      h1 {
        font-size: 40px;
        color: #00204c;
        text-transform: uppercase;
      }
      hr {
        height: 0;
        border: 1px solid #00204c;
        width: 100px;
      }
    }
  }
  .proficiency_section {
    background: linear-gradient(0deg, #030350ad, #030350ad), url("/images/office3.png");
    background-size: cover;
    padding: 50px 0;
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
    }
    .image {
      width: 100%;
      height: 500px;
      overflow: hidden;
      border: 1px solid lightgray;
      img {
        width: 100%;
        height: 500px;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
    }
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      h1 {
        font-size: 40px;
        color: #fff;
      }
      hr {
        height: 0;
        border: 1px solid #fff;
        width: 100px;
      }
    }
    .experties {
      display: flex;
      gap: 5px;
      align-items: center;
      button {
        padding: 15px 50px;
      }
    }
  }
  .experties_section {
    padding: 50px 0;
    background-color: #efefef;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      h1 {
        font-size: 40px;
        color: #00204c;
      }
      hr {
        height: 0;
        border: 1px solid #00204c;
        width: 100px;
      }
      p {
        text-align: center;
        width: 600px;
        min-width: 300px;
        color: var(--text-color);
      }
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      margin: 50px 0;
      a {
        text-decoration: none;
        height: 100%;
      }
    }
  }
  .acolads_section {
    /* background: linear-gradient(to right, #fff, #ffffffdc, #ffffff10), url("/images/acolads.png"); */
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cards {
      width: 100%;
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      .card {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      a:last-child {
        img {
          width: 50%;
        }
      }

      .image {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      img {
        width: 60%;
        height: auto;
      }
      .forbes {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
  .consultation_section {
    padding: 100px 0;
    .card {
      display: grid;
      position: relative;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px;
      padding: 50px;
      border: 8px solid #00204c6c;
      z-index: 2;
    }
    .card::after {
      content: "";
      position: absolute;
      margin-left: 10px;
      margin-top: 10px;
      border: 8px solid #00204c37;
      bottom: -25px;
      left: 0;
      right: -25px;
      top: 0;
      z-index: -1;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 0 20px;
      h1 {
        font-size: 40px;
        color: #00204c;
        text-transform: capitalize;
        font-weight: 500;
      }
      p {
        font-size: 18px;
        color: #00204c;
        line-height: 25px;
        font-weight: 500;
        text-align: justify;
      }
    }
    .contact_form {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      form {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        justify-content: center;
        margin-top: 20px;
        input {
          padding: 10px;
          font-size: 18px;
          font-weight: 500;
          outline: none;
          border: 2px solid #00204cba;
          border-radius: 3px;
        }
        button {
          padding: 10px 30px;
          margin-top: 10px;
          border-radius: 3px;
          font-size: 18px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .about_section {
      .container {
        padding: 50px 10px;
      }
    }
    .proficiency_section {
      padding: 50px 0;
      .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }
      .image {
        width: 70%;
        min-width: 300px;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .experties_section {
      .cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .acolads_section {
      .cards {
        flex-wrap: wrap;
      }
      .container {
        padding: 0 50px;
      }
    }
    .consultation_section {
      padding: 100px 0;
      .card {
        gap: 20px;
        padding: 30px;
        border: 5px solid #00204c6c;
      }
      .card::after {
        border: 5px solid #00204c37;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about_section {
      .container {
        padding: 50px 10px;
      }
      .content {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
    .proficiency_section {
      padding: 50px 0;
      .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }
      .image {
        width: 70%;
        min-width: 300px;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .experties_section {
      .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      .title {
        p {
          display: none;
        }
      }
    }
    .acolads_section {
      .container {
        padding: 0;
      }
      .cards {
        flex-wrap: wrap;
      }
    }
    .consultation_section {
      padding: 100px 0;
      .card {
        gap: 20px;
        padding: 30px;
        border: 5px solid #00204c6c;
        grid-template-columns: 1fr;
      }
      .card::after {
        border: 5px solid #00204c37;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .main_content {
      background: url("/images/officev2.jpg");
      background-size: cover;
    }
    .hero_content {
      padding: 0 50px;
      align-items: center;
    }
    .about_section {
      .container {
        padding: 50px 10px;
      }
      .content {
        grid-template-columns: 1fr;
        gap: 20px;
      }
    }
    .proficiency_section {
      padding: 50px 0;
      overflow-x: hidden;
      max-width: 100%;
      .container {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
      }
      .image {
        width: 100%;
        min-width: 300px;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .experties_section {
      .cards {
        display: grid;
        grid-template-columns: 1fr;
      }
      .title {
        p {
          display: none;
        }
      }
    }
    .acolads_section {
      .cards {
        grid-template-columns: repeat(2, 1fr);
        img {
          width: 100%;
        }
      }
    }
    .consultation_section {
      display: none;
    }
  }
  @media only screen and (max-width: 426px) {
    .main_content {
    }
    .hero_content {
      h1 {
        font-size: 25px;
        font-weight: 400;
        span {
          font-size: 20px;
        }
      }
      p {
        font-size: 15px;
      }
    }
    .about_section,
    .proficiency_section,
    .experties_section {
      .title {
        h1 {
          font-size: 25px;
          font-weight: 400;
          span {
            font-size: 20px;
          }
        }
      }
      .content {
        h3 {
          font-size: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 414px) {
    .main_content {
    }
    .proficiency_section {
      .experties {
        flex-direction: column;
      }
    }
    .hero_content {
      padding: 0 10px;
    }
  }
  @media only screen and (max-width: 376px) {
    .main_content {
      background-position-y: center;
      background-repeat: no-repeat;
    }
    .proficiency_section {
      .experties {
        flex-direction: column;
      }
    }
    .hero_content {
      padding: 0 10px;
    }
  }
`;
export default Homepage;
