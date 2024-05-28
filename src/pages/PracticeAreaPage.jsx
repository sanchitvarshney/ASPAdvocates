import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { practiceAreasLinks } from "../data";
import { FaAnglesRight } from "react-icons/fa6";
import ScrollIntoView from "react-scroll-into-view";

const PracticeAreaPage = () => {
  const [activeLink, setActiveLink] = useState("");
  const scrolledRef = useRef(null);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    window.scrollTo({
      top: 500,
    });
  };

  useEffect(() => {
    setActiveLink(practiceAreasLinks[0].path);
  }, []);
  return (
    <Wrapper>
      <div className="top">
        <div className="container">
          <h1 data-aos="flip-down" data-aos-duration="1000" data-aos-offset="100">
            PRACTICE - AREAS
          </h1>
          <hr data-aos="fade-in" data-aos-delay="300" />
          <p>We know a lot about different industries and have worked in them for a long time. This helps us think about big-picture strategies and come up with personalized solutions that fit our clients perfectly.</p>
        </div>
      </div>
      <div className="practices">
        <div className="container">
          <div className="sidebar">
            <ul>
              {practiceAreasLinks.map((links) => (
                <li key={links.path}>
                  <ScrollIntoView selector={`#${links.path}`} onClick={() => handleLinkClick(links.path)}>
                    <a href={`#${links.path}`} className={activeLink === links.path ? "active" : ""}>
                      <span>{links.label}</span>
                      <FaAnglesRight size={10} />
                    </a>
                  </ScrollIntoView>
                </li>
              ))}
            </ul>
          </div>
          <div className="service_details">
            <div class="boxes">
              <h1>Practice Areas</h1>
              <p id="audit-and-secretarial">
                <strong>Audit &amp; Secretarial -</strong> Secretarial Audit of Companies including listed and public unlisted companies; Corporate maintenance for compliance with provisions of Companies Act, 1956; Authentication &amp; Certification of Documents.
                <br />
                <br />
              </p>
              <p id="aviation" ref={scrolledRef}>
                <strong>Aviation -</strong> The Aviation Practice Group's legal work includes work on aircraft purchase contracts; aircraft financing transactions; syndicated loan agreements; maintenance contracts; restructuring of airline companies; airport modernization;
                repossession and foreclosure of pledged aircraft and aircraft components.
                <br />
                <br />
              </p>
              <p id="admiralty-and-maritime" ref={scrolledRef}>
                <strong>Admiralty &amp; Maritime -</strong> The Firm advises on disputes arising out of bill of lading, charter-parties, short landing of cargoes, cargo liens, and arrest and release of vessels; vessel acquisition and lease, ship building contracts, pollution
                liabilities, UNCLOS and International Conventions on the law of Seas.
                <br />
                <br />
              </p>
              <p id="banking-and-finance">
                <strong>Banking &amp; Finance -</strong> The Firms proficiency in Banking and Finance covers acquisition &amp; leverage finance, structured finance, asset finance, project finance, global loans, restructuring, external commercial borrowings, asset securitisation
                and related regulatory issues including regulatory and risk management advice.
                <br />
                <br />
              </p>
              <p id="capital-markets">
                <strong>Capital Markets -</strong> The Firm's Capital markets team is well equipped to advice on the entire gamut of public offerings scheme, initial public offerings, further public offerings, rights issues, qualified institutions placements, ADR and GDR
                offerings and debt offerings including pre-offering due diligence, advising on regulatory compliance, offer document and all required ancillary documentation.
                <br />
                <br />
              </p>
              <p id="competition-and-anti-trust">
                <strong>Competition &amp; Anti-Trust -</strong> The Competition Law team of the Firm specializes in all aspects of competition law including cartels, leniency applications, concession arrangements, anti-competitive agreements, abuse of a dominant position, joint
                ventures, distribution systems, merger control, subsidy and consumer law, representations in the Competition Commission of India and Competition Appellate Tribunal. The Firm advises on legal, strategic and compliance issues related to the Competition Act and
                undertakes drafting and review of term sheets, definitive agreements, non-compete agreements, non-disclosure agreements, franchise agreements, escrow agreements, stock swap agreements, employment agreements from the standpoint of their compliance with Competition
                laws.
                <br />
                <br />
              </p>
              <p id="corporate-and-commercial">
                <strong>Corporate &amp; Commercial -</strong> The Firm advises on legal issues concerning inbound and outbound investments, strategic alliances and collaborations, structuring of investment routes, transaction due diligence, subsidiaries &amp; joint ventures,
                franchising, technology transfers &amp; licensing; technical assistance &amp; services. The Firm also advises on corporate transactional matters, commercial contracts and documentation, equipment purchase/ supply agreements, distribution arrangements, trademark
                licenses, master service agreements, consultancy and employments contracts.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p id="energy-and-power">
                <strong>Energy &amp; Power -</strong> &nbsp;Advocates of the Firm have extensively worked 'in the Energy &amp; Power Sector including bidding, project development, financing M&amp;A, conducting due diligence and drafting and negotiation of power purchase
                agreements, EPC contracts, O&amp;M contracts, state support agreements, fuel supply contracts, production sharing contracts, gas sale and purchase agreements and financing and security documentation.
                <br />
                <br />
              </p>
              <p id="environment">
                <strong>Environment -</strong> Advocates of the Firm have advised on the issues involved with the introduction of GM food in India and regulatory approvals in respect thereof; advise on compliances and liabilities under environment legislations including the
                Environment Protection Act, 1986 and substantive areas of environment laws, including air, water, hazardous waste, greenhouse gas issues, solid waste, chemicals management, pesticides, right-to-information laws and commercial property transactions to a wide range
                industries, including mining, metals &amp; minerals, oil &amp; gas, power, renewable &amp; clean energy, manufacturing, chemicals, health care, pharmaceutical, commercial property, waste management, and food processing sectors.
                <br />
                <br />
              </p>
              <p id="employment-and-labour">
                <strong>Employment &amp; Labour -</strong> Lawyers of the Firm have advised several multinational companies on employment and labour related issues including drafting of employment agreements, employee handbook, consultancy agreements, service bonds, deputation
                agreements, grievance settlement procedures, policies to prevent sexual harassment, leave policies, rules &amp; regulations, certification of standing orders, and memoranda of settlement with trade unions, amongst others.
                <br />
                <br />
              </p>
              <p id="food-and-beverage">
                <strong>Food &amp; Beverage -</strong> Lawyers of the Firm have in depth knowledge and specialization in regulatory issues and legislations impacting the Food &amp; Beverage industry and have extensively advised national and multinational companies on matters
                relating to product labeling, permissibility of ingredients, legal metrology and weights and measures. Lawyers of the Firm have extensively represented Clients before the Food Safety &amp; Standards Authority in relation to obtaining product approvals, formulation
                of product standards and have been instrumental in obtaining precedent setting judgments from the State High Courts and the Supreme Court of India with regard to interpretation of provisions of food laws including the Prevention of Food Adulteration Act, 1954 and
                Food Safety &amp; Standards Act, 2006.
                <br />
                <br />
              </p>
              <p id="intellectual-property">
                <strong>Intellectual Property -</strong> The Intellectual Property Practice Group of the Firm has significant experience in IP based transactional and regulatory matters in addition to cross border litigation for protection and enforcement of Intellectual Property
                rights. The Firm advises and represents Clients in relation to Prosecution and Registration of Trademark, Parent, Copyright&amp; Designs, assists and advises on IP audits and due diligence, enforcement litigation including anti piracy, counterfeiting and passing
                off litigation. Lawyers of the Firm have extensively assisted in negotiating contractual arrangements from the standpoint of protection of intellectual property including post termination restriction on use of intellectual property, joint ownership and
                assignments.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p id="litigation-and-arbitration">
                <strong>Litigation &amp; Arbitration -</strong> The Firm's Dispute Resolution Practice Group focuses on commercial litigation, company and insolvency litigation, debt recovery, criminal law, joint venture disputes, public and administrative law, disputes relating
                to commercial contracts including project contracts, licensing, construction contracts, technology transfer agreements and real estate contracts. Litigators of the Firm have significant experience in arguing before the Supreme Court of India, State High Courts,
                District Courts, Company Law Board, Competition Commission, quasi judicial authorities and tribunals including income tax appellate tribunals, competition appellate tribunals, banking tribunals, environment tribunal, Telecom &amp; Electricity Regulatory
                Authorities and consumer protection fora. The Firm is also actively engaged in Alternate Dispute Resolution processes such as international &amp; domestic arbitrations and conciliations. Lawyers of the Firm are recognized for their representations in the area of
                dispute resolution and have obtained several precedent setting orders in complex legal issues from various Indian legal fora including the State High Courts and the Supreme Court of India.
                <br />
                <br />
              </p>
              <p id="media-and-entertainment">
                <strong>Media &amp; Entertainment -</strong> The Firm advises on issues arising out of regulatory, technological, legal and tax changes in the media, entertainment and sports industries. Lawyers of the Firm have assisted with strategies and policies for clients'
                operations both within India and internationally, from the standpoint of broadcasting, publication, intellectual property and taxation. The Firm advises on issues impacting both print &amp; the electronic media, issues relating to Casino and online gaming laws,
                sports laws and incidental regulatory matters.
                <br />
                <br />
              </p>
              <p id="mergers-and-acquisitions">
                <strong>Mergers &amp; Acquisitions -</strong> The pan India sector focused team of the Firm handles a full range of M&amp;A transactions including (i) Mergers &amp; Amalgamations; (ii) Schemes of Arrangement, Reconstructions and Demergers; (iii) Acquisitions &amp;
                Divestments - of shares, assets and businesses (private, public and listed entities); (iv) Leveraged Buy-outs; (v) Distressed Transactions; and (vi) Restructuring (for listed &amp; unlisted entities), including Capital &amp; Debt restructuring, buy-back of
                securities &amp; reduction of capital. The Firm's client base includes multinational corporations including fortune 500 companies and large national corporations. The Firm closely works with in house counsels, accounting firms, and investment banks to effectively
                implement transactions to achieve the client's objectives.
                <br />
                <br />
              </p>
              <p id="pharma-and-life-sciences">
                <strong>Pharma &amp; Life Sciences -</strong> The Pharma and Life Sciences Practice Group of the Firm advises international and Indian companies from legal, IP, regulatory and tax compliance perspective. Lawyers of the Firm advise on regulatory issues and
                compliances related to clinical trials, research and development, manufacturing activities marketing and distribution, medical devices and stem cell research in India. Lawyers of the Firm also assist and advise in the drafting, structuring and negotiation of
                clinical trial, master service, non-disclosure, sponsored research, material transfer, and confidentiality disclosure agreements, informed consent forms and related documents.
                <br />
                <br />
              </p>
              <p id="private-equity-investments">
                <strong>Private Equity Investments -</strong> The Firm advises in the areas of Fund formation; Onshore &amp; Offshore structuring, drafting offer documents for the raising of funds; Tax &amp; Securities registration issues in India; registration with regulatory
                authorities in; Due Diligence of prospective investee companies; negotiation assistance from term sheet stage till closing; documentation &amp; overall transactional support and structuring.
              </p>
              <p>
                <strong>&nbsp;</strong>
              </p>
              <p id="real-estate">
                <strong>Real Estate -</strong> Lawyers of the Real Estate Practice Group of the Firm advise Clients including developers, investors, funds and owners on diverse legal and regulatory issues including Indian property related laws including the Transfer of Property
                Act, Stamp &amp; Registration laws, Land Revenue laws and Tenancy laws in Indian states. Lawyers of the Firm have vast experience in Due Diligence, drafting, reviewing &amp; negotiating various types of transactional documentation including Memorandums of
                Understanding, Term sheets, Shareholders Subscription and Share Purchase Agreements, Development Agreements, Joint Development Agreements, Joint Venture Agreement, Agreements for Sale, Conveyance Deeds, Mortgage Deeds, Re-conveyances, Leases, Leave &amp; License
                Agreements, Business Centre Agreements, Powers of Attorney, Declarations &amp; Undertakings, Indemnity Deeds and related documentation.
                <br />
                <br />
              </p>
              <p id="taxation">
                <strong>Taxation -</strong> The Tax Practice Group of the Firm advises clients in structuring complex transactions and developing unique business models. The Firm advises on a variety of complex cross-border and domestic transactions including structuring
                cross-border mergers and acquisitions, financing transactions, restructuring of investments, advising on transnational joint ventures and collaborations, India entry and exit strategies, permanent establishment issues and advise on issues arising out of Double
                Taxation Avoidance Agreement and Transfer pricing issues. The Firm assists and advises Clients in identification of key tax controversy issues and provides the best suited mode of redressal. The Firm extensively represents Clients before the tax authorities and
                the administrative appellate authorities, Authority for Advance Ruling, Income Tax Appellate Tribunals, State High Courts and the Supreme Court of India.
              </p>
            </div>
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
    background: url("/images/practice.png");
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
    margin-top: 60px;
    &::before {
      position: absolute;
      content: "";
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      height: 500px;
      z-index: 2;
      background-color: #03035085;
    }
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 200px;
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
        font-size: 18px;
        margin-top: 20px;
        max-width: 800px;
        min-width: 300px;
      }
    }
  }
  .practices {
    padding: 0px;
    .container {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 50px;
      width: 100%;
      position: relative;
      z-index: 5;
      .sidebar {
        position: relative;
        top: 0;
        height: 100%;
        width: 100%;
        padding: 0;
        border-right: 1px solid lightgray;
        padding-top: 50px;
        ul {
          position: sticky;
          top: 80px;
          left: 0;
          list-style: none;
          overflow-y: scroll;
          max-height: calc(100vh - 100px);
          width: 100%;
          &::-webkit-scrollbar {
            width: 5px;
          }
          &::-webkit-scrollbar-thumb {
            background: #e8e7e7;
          }
          li {
            a {
              color: black;
              text-decoration: none;
              padding: 10px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              width: 100%;
              border-radius: 3px;
              &.active {
                background-color: #00204c;
                color: #fff;
              }
              &:hover {
                background-color: #00204c;
                color: #fff;
              }
            }
          }
        }
      }
      .service_details {
        padding: 20px 100px 50px 20px;
        position: sticky;
        top: 100px;
        p {
          line-height: 25px;
          color: #262626;
          text-align: justify;
        }
        h1 {
          font-size: 40px;
          color: #00204c;
          text-transform: capitalize;
          margin: 20px 0;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .top {
      .container {
        padding: 0;
      }
    }
    .practices {
      padding: 0;
      background-color: #efefef;
      .container {
        padding: 0px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .top {
      .container {
        padding: 0;
      }
    }
    .practices {
      padding: 0px;
      position: relative;
      .container {
        grid-template-columns: 1fr;

        .sidebar {
          padding: 0;
          position: absolute;
          height: 100%;
          background-color: #fff;
          top: 0;
          left: 0;
          z-index: 10;
          width: -100px;
          display: none;
          ul{
            position: static;
            background-color: #fff;
          }
        }
        .service_details {
          padding: 20px;
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .top {
      .container {
        h1 {
          text-align: center;
        }
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
        }
      }
    }
    .practices {
      .container {
        .service_details {
          h1 {
            font-size: 25px;
          }
          p {
            font-size: 15px;
          }
        }
      }
    }
  }
`;
export default PracticeAreaPage;
