
import styled from "styled-components";
const AboutPage = () => {
  return (
    <Wrapper>
      <div className="top">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            About us
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            ASP Advocates stands at the forefront of legal excellence in India, renowned for our unwavering commitment to service excellence and client fulfillment.
          </p>
        </div>
      </div>
      <div className="about-info">
        <div className="container">
          <div className="image" >
            <img src="/images/about1.png" alt="lawwomwn" data-aos-duration="1000" />
          </div>
          <div className="content" >
            <p>
              ASP Advocates is a full service law firm comprising of lawyers, company secretaries, chartered accountants and industry specific consultants. Based in New Delhi, ASP Advocates has a network of Associate Offices across India including at Mumbai, Kolkata,
              Chennai, Chandigarh, Bangalore, Lucknow, Hyderabad, Pune and Patna. Lawyers of ASP Advocates are licensed to practice throughout India.
            </p>
            <p>
              The core Practice Areas of the Firm include Mergers & Acquisitions; Anti - Trust; Banking & Finance; Aviation & Maritime Laws; Capital Markets & Securities; Dispute Resolution; General Corporate Commercial including Advisory and Transactional Support; Intellectual
              Property and Confidentiality including Protection & Enforcement of Intellectual Property; Private Equity: Projects; Labour & Employment law; Regulatory & Policy and Taxation.
            </p>
            <p>
              Partners of the Firm have been recognized for their unique experience in both transactional and litigation practice including in the Sectors of Asset Management & Financial Institutions; Advertising, Telecommunication; Construction & Engineering; Education; Energy
              including Power and Oil & Gas; Hospitality & Leisure; Insurance; Knowledge Based Industries including IT / ITES/ LifeSciences; Pharmaceuticals; Food & Beverages; Manufacturing, Media, Entertainment & Sports; Mining; Real Estate; Retail & Franchising; Service and
              Infrastructure Project.
            </p>
            <p>
              ASP Advocates and its lawyers have represented and continue to represent many of the world's leading companies in complex litigation and other high-stakes disputes, cross-border and other strategic transactions, and crucial regulatory matters. Lawyers of the Firm
              have obtained precedent setting orders from State High Courts and the Supreme Court of India in several landmark cases of intellectual property infringement, contracts, business torts, joint venture disputes and other commercial litigation.
            </p>
            <p>
              The Firm extensively advises both Indian and Multinational Corporations including Fortune Global 500 Companies. ASP Advocates has grown and continues to grow largely because of its singular commitment to delivering high-quality service and developing long-term
              client relationships. Our lawyers approach to service begins by understanding clients' business goals and objectives and then applying the resources necessary to facilitate its achievement. The Firm has an uncommon understanding of middle market clients and insight
              into the issues facing both large clients and those seeking to establish a foothold in India.
            </p>
            <p>The Firm also closely works with International law and consulting firms in translating and implementing the Client's objectives in the Indian legal and regulatory regime.</p>
          </div>
        </div>
      </div>
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
    background: url("/images/aboutbg.png");
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

  .about-info {
    z-index: 99;
    background: linear-gradient(to right, #fff, #ffffffdc, #fff), url("/images/aboutbg.png");
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
export default AboutPage;
