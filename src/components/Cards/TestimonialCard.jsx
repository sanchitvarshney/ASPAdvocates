import React from "react";
import styled from "styled-components";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <Card>
      <div className="user">
        <div className="image">
          <img src="/images/ceo.png" alt="" />
        </div>
      </div>
      <div className="quote">
        <FaQuoteLeft size={30} />
      </div>
      <div className="review">
        <p>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          odio dolor optio molestias eum cupiditate ea officia accusantium ipsam
          dicta earum dolorem, adipisci commodi aliquam totam, quaerat culpa
          minus eaque.
        </p>
      </div>
      <div className="name">
        sachin maurya
        <span>frontend developer</span>
      </div>
    </Card>
  );
};
const Card = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 50px 50px 50px;
  .image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    background-color: #41411b;
    border: 2px solid #71712aa2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-position: center;
    }
  }
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
  }
  .quote {
    color: #e8b529;
  }
  .review {
    p {
      color: var(--title-color);
      text-align: center;
      font-size: 18px;
    }
  }
  .name {
    color: #e8b529;
    text-align: center;
    text-transform: uppercase;
    font-size: 25px;
    font-family: var(--title-font);
    display: flex;
    flex-direction: column;
    span{
      font-size: 15px;
      color: var(--text-color);
      text-transform: capitalize;
    }
  }
`;
export default TestimonialCard;
