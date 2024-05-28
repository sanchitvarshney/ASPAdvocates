import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SolidBtn from "../Buttons/SolidBtn";
import { useCookies } from "react-cookie";

const Disclaimer = ({ setShowPopup, showPopup }) => {
  const [cookies, setCookie] = useCookies(["userConsent"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookies.userConsent) {
      setIsVisible(true);
    }
  }, [cookies]);
  const handleAccept = () => {
    setCookie("userConsent", true, { path: "/", maxAge: 365 * 24 * 60 * 60 }); // 1 year expiry
    setIsVisible(false);
  };
  return (
    <Warpper className={isVisible ? "open" : ""}>
      <div className="card">
        <h1>Disclaimer & Confirmation</h1>
        <hr />
       <div className="content">
       <p>As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise.</p>
        <p>
          If you wish to gain more information about us for your own information and use, you can contact us at <a href="mailto:info@asplaw.in">info@asplaw.in</a>. By contacting us the user acknowledges the following:
        </p>
        <p>There has been no advertisement, personal communication, solicitation, invitation or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;</p>
        <p>The user wishes to gain more information about us for his/her own information and use;</p>
        <p>
          The information about us is provided to the user only on his/her specific request and any information obtained through this website is completely at the user's volition and any transmission, receipt or use of this site would not create any lawyer-client relationship
        </p>
        <p>
          The information provided under this website is solely available at your request for informational purposes only, should not be interpreted as soliciting or advertisement. We are not liable for any consequence of any action taken by the user relying on material /
          information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
        </p>
       </div>
        <hr />
        <SolidBtn toggleState={handleAccept} toggleValue={false}>
          Continue
        </SolidBtn>
      </div>
    </Warpper>
  );
};
const Warpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: -1000px;
  right: 0;
  z-index: 999;

  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  transition: all 0.6s;
  background-color: #efefef;
  &.open {
    top: 0;
    transition: all 1.5s;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-height: max-content;
    min-height: 300px;
    min-width: 300px;
    padding: 20px;
  }
  .content{
    max-height: 300px;
    overflow-y: scroll;
  }
  hr {
    height: 0;
    border: 1/3spx solid #00204c;
  }
  h1 {
    color: #00204c;
  }
  p {
    color: #00204c;
    font-size: 16px;
    line-height: 25px;
    word-spacing: 3px;
    letter-spacing: 0.5px;
    text-align: start;
  }
  @media only screen and (max-width: 426px){
    h1{
      font-size: 25px;
    }
  } 
`;
export default Disclaimer;
