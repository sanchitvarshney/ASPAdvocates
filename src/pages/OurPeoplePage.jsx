import { useState, useCallback } from "react";
import styled from "styled-components";
import ProfileCard from "../components/Cards/ProfileCard";
import PersonProfileModal from "../components/Cards/PersonProfileModal";
import peopleData from "../data/peopleData";

const PARTNER_IDS = new Set([1, 2]);

const OurPeoplePage = () => {
  const [modalPerson, setModalPerson] = useState(null);
  const openModal = useCallback((person) => setModalPerson(person), []);
  const closeModal = useCallback(() => setModalPerson(null), []);

  const partners = peopleData.filter((p) => PARTNER_IDS.has(p.id));
  const otherPeople = peopleData.filter((p) => !PARTNER_IDS.has(p.id));

  return (
    <Wrapper>
      <div className="people-directory">
        <div className="container">
          <hr data-aos="fade-in" data-aos-delay="300" />
          <div className="people-cards">
            <div className="partners-row">
              {partners.map((person) => (
                <div key={person.id} className="people-card-slot">
                  <ProfileCard person={person} onViewClick={openModal} />
                </div>
              ))}
            </div>
            {otherPeople.length > 0 ? (
              <div className="team-grid">
                {otherPeople.map((person) => (
                  <div key={person.id} className="people-card-slot">
                    <ProfileCard person={person} onViewClick={openModal} />
                  </div>
                ))}
              </div>
            ) : null}
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
      border: 1px solid #fff;
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
    .people-cards {
      width: 100%;
      margin-top: 80px;
      padding-top: 56px;
      display: flex;
      flex-direction: column;
      align-items: stretch;
    }

    .partners-row {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: stretch;
      gap: 60px;
      width: 100%;
    }

    .team-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      width: 100%;
      margin-top: clamp(100px, 15vw, 200px);
      gap: 60px;
      row-gap: clamp(100px, 15vw, 200px);
    }

    .people-card-slot {
      flex: 0 1 380px;
      max-width: min(380px, 100%);
      min-width: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1100px) {
    .people-directory {
      .people-cards {
        margin-top: 44px;
        padding-top: 32px;
      }
      .partners-row {
        gap: 24px;
      }
      .team-grid {
        margin-top: 120px;
        gap: 24px;
        row-gap: 120px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .people-directory {
      padding: 40px 0 60px;
      .container {
        padding: 0 16px;
      }
      .people-cards {
        margin-top: 32px;
        padding-top: 24px;
      }
      .partners-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        align-items: stretch;
      }
      .partners-row .people-card-slot {
        flex: none;
        max-width: none;
        min-width: 0;
      }
      .team-grid {
        margin-top: 88px;
        row-gap: 88px;
        column-gap: 0;
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
    background:
      linear-gradient(to right, #fff, #ffffffdc, #fff),
      url("/images/people2.png");
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
  @media only screen and (max-width: 1024px) {
    .about-info {
      .image {
        position: sticky;
        top: 100px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .about-info {
      width: 100%;
      .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .image {
        position: static;
      }
    }
  }
  @media only screen and (max-width: 426px) {
    .top {
      .container {
        padding: 0;
        h1 {
          font-size: 25px;
          text-align: center;
        }
        p {
          font-size: 15px;
          text-align: center;
        }
      }
    }
    .about-info {
      width: 100%;
      .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .image {
        position: static;
        height: 300px;
      }
      .content {
        padding: 0;
        p {
          text-align: justify;
        }
      }
    }
  }
`;
export default OurPeoplePage;
