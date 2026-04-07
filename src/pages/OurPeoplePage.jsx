import { useState, useCallback } from "react";
import styled from "styled-components";
import ProfileCard from "../components/Cards/ProfileCard";
import PersonProfileModal from "../components/Cards/PersonProfileModal";
import peopleData from "../data/peopleData";

const OurPeoplePage = () => {
  const [modalPerson, setModalPerson] = useState(null);
  const openModal = useCallback((person) => setModalPerson(person), []);
  const closeModal = useCallback(() => setModalPerson(null), []);

  return (
    <Wrapper>
      <div className="top">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our People
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our firm stands at the forefront of legal excellence in India, renowned for our unwavering commitment to service excellence and client fulfillment.
          </p>
        </div>
      </div>
      <div className="about-info">
        <div className="container">
          <div className="image" >
            <img src="/images/people2.png" alt="lawwomwn" data-aos-duration="1000" />
          </div>
          <div className="content" >
            <p>
              ASP Advocates is a full-service law firm comprising lawyers, company secretaries, chartered accountants, and industry-specific consultants.
            </p>
            <p>
              Headquartered in New Delhi with associate offices across India including Mumbai, Kolkata, Chennai, Chandigarh, Bangalore, Lucknow, Hyderabad, Pune, and Patna.
            </p>
            <p>
             Lawyers of ASP Advocates are licensed to practice across all courts and jurisdictions in India.
            </p>
            <p>
               Core practice areas include Mergers & Acquisitions, Anti-Trust, Banking & Finance, Aviation & Maritime, Capital Markets, Dispute Resolution, and Corporate Commercial advisory.
            </p>
            <p>
              Expertise also includes Intellectual Property protection & enforcement, Private Equity, Projects, Labour & Employment, Regulatory & Policy, and Taxation.
            </p>
            <p>  Partners bring extensive transactional and litigation experience across sectors including Financial Institutions, Telecom, Construction, Energy, IT/ITES, Pharma, Media, Real Estate, and Infrastructure.</p>
          </div>
        </div>
      </div>
      <div className="people-directory">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our People
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            Our firm stands at the forefront of legal excellence in India, renowned for our unwavering commitment to service excellence and client fulfillment.
          </p>
          <div className="cards-container">
            {peopleData.map((person) => (
              <div key={person.id} className="people-card-slot">
                <ProfileCard person={person} onViewClick={openModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalPerson ? (
        <PersonProfileModal person={modalPerson} onClose={closeModal} />
      ) : null}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    position: relative;
    height: 500px;
    width: 100%;
    background: url("/images/people.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    &::before {
      position: absolute;
      content: "";
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      height: 500px;
      z-index: 2;
      background-color: #0303507b;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      h1 {
        color: white;
        font-weight: 400;
        font-size: 40px;
        text-transform: uppercase;
        z-index: 3;
      }
      hr {
        height: 0;
        border: 1px solid #fff;
        width: 100px;
        z-index: 3;
        margin: 10px 0;
      }
      p {
        text-align: center;
        color: #fff;
        z-index: 3;
        font-size: 20px;
        margin-top: 20px;
        max-width: 800px;
        min-width: 300px;
      }
    }
  }

  .people-directory {
    background: #fff;
    padding: 60px 0 80px;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 1320px;
      margin: 0 auto;
      padding: 0 24px;
    }
    h1 {
      color: var(--title-color);
      font-weight: 400;
      font-size: 40px;
      text-transform: uppercase;
      text-align: center;
    }
    hr {
      height: 0;
      border: 1px solid #00204c;
      width: 100px;
      margin: 10px 0 0;
    }
    p {
      text-align: center;
      color: #00204c;
      font-size: 18px;
      line-height: 1.6;
      margin-top: 20px;
      max-width: 800px;
    }
    .cards-container {
      display: grid;
      width: 100%;
      margin-top: 80px;
      padding-top: 56px;
      grid-template-columns: repeat(3, minmax(0, 1fr));
  
      row-gap: clamp(0px, 10vw, 160px);
     
    }



    .cards-container > .people-card-slot:nth-child(-n + 1) {
      grid-column: span 2;
      
  
    }
  }

  @media only screen and (max-width: 1100px) {
    .people-directory {
      .cards-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
      .cards-container > .people-card-slot:nth-child(-n + 1) {
        grid-column: span 1;
            margin-top: 80px;
      padding-top: 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .people-directory {
      padding: 40px 0 60px;
      .cards-container {
        grid-template-columns: 1fr;
        margin-top: 32px;
        padding-top: 16px;
        row-gap: 88px;
        column-gap: 0;
      }
      .cards-container > .people-card-slot:nth-child(-n + 1) {
        grid-column: span 1;
      }
      h1 {
        font-size: 28px;
      }
      p {
        font-size: 16px;
      }
    }
  }

  .about-info {
    z-index: 99;
    background: linear-gradient(to right, #fff, #ffffffdc, #fff), url("/images/people2.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background-color: #ffffffc4;
      gap: 50px;
      padding: 50px 0;
      position: relative;
      z-index: 5;
    }
    .image {
      width: 100%;
      height: auto;
      overflow: hidden;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: sticky;
      top: 150px;
      left: 50px;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-position: center;
      }
    }

    h1 {
      color: var(--title-color);
      font-weight: 400;
      font-size: 40px;
      text-transform: capitalize;
      z-index: 3;
    }
    hr {
      height: 0;
      border: 1px solid #00204c;
      width: 100px;
      z-index: 3;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      padding: 20px;
      p {
        color: #00204c;
        font-size: 17px;
        line-height: 30px;
        word-spacing: 3px;
        letter-spacing: 0.5px;
        text-align: justify;
        font-weight: 500;
      }
    }
  }
  @media only screen and (max-width: 1024px){
    .about-info {
    .image {
      position: sticky;
      top: 100px;
    }
  }
  
  }
  @media only screen and (max-width: 768px){
    .about-info {
      width: 100%;
      .container{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .image{
        position: static;
      }
     
  }
  
  }
  @media only screen and (max-width: 426px) {
    .top {
      .container {
        padding: 0;
        h1{
          font-size: 25px;
          text-align: center;
        }
        p{
          font-size: 15px;
          text-align: center;
        }
      }
    }
    .about-info {
      width: 100%;
      .container{
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .image{
        position: static;
        height: 300px;
      }
     .content{
      padding: 0;
      p{
        text-align: justify;
        
      }
     }
  }


  
  }
`;
export default OurPeoplePage;
