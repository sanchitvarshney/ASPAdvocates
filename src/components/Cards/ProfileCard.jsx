import React from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";

const ProfileCard = ({ person, onViewClick, className }) => {
  if (!person) return null;

  const {
    id,
    name,
    bio: role,
    image,
    email: emailHref,
    mobile,
  } = person;
  const emailValue = String(emailHref || "").trim();
  const mobileValue = String(mobile || "").trim();
  const emailLink = emailValue
    ? emailValue.startsWith("mailto:")
      ? emailValue
      : `mailto:${emailValue}`
    : "";

  return (
    <Card className={className}>
      <div className="image">
        <img
          src={image}
          alt={`${name}`}
          style={{
            objectPosition: id === 9 ? "0% 0%" : id === 6 ? "0% 0%" : "center",
          }}
        />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p className="bio">{role.length > 50 ? role.slice(0, 36) + "...." : role}</p>
        <div className="actions">
          <div className="social">
      
            {emailHref ? (
              <a
                href={emailLink}
                aria-label={`Contact ${name}`}
                title={emailValue}
              >
                <MdOutlineEmail />
              </a>
            ) : null}
            {mobileValue ? (
              <a
                href={`tel:${mobileValue.replace(/\s+/g, "")}`}
                aria-label={`Call ${name}`}
                title={mobileValue}
              >
                <MdOutlinePhone />
              </a>
            ) : null}
          </div>
          <button
            type="button"
            className="view-btn"
            onClick={() => onViewClick?.(person)}
          >
            View
          </button>
        </div>
      </div>
    </Card>
  );
};

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 380px;

  padding: 88px 20px 20px;
  min-height: 280px;
  background: #fff;
  border: 1px solid rgba(0, 32, 76, 0.1);
  border-radius: 4px;
  box-shadow: rgba(0, 32, 76, 0.08) 0 4px 24px;
  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.25s ease,
    transform 0.25s ease;

  &:hover {
    box-shadow: rgba(0, 32, 76, 0.14) 0 12px 32px;
    transform: translateY(-2px);
  }

  .image {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    display: flex;
    justify-content: center;
    pointer-events: none;

    img {
      pointer-events: auto;
      width: 200px;
      max-width: min(200px, 75vw);
      height: 220px;
      object-fit: cover;
      border: 0;
      border-bottom: 8px solid transparent;
      border-image: linear-gradient(to left, #00204c 50%, transparent 50%) 1;
    }
  }

  .content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    justify-content: flex-end;
    text-align: left;
    margin-top: auto;
    padding-top: 8px;

    h3 {
      margin: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: #00204c;
      line-height: 1.3;
    }

    .bio {
      margin: 0;
      font-size: 15px;
      color: #00204c;
      opacity: 0.9;
      text-align: left;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 12px;
      padding-top: 14px;
      border-top: 1px solid rgba(0, 32, 76, 0.1);
    }

    .social {
      display: flex;
      gap: 8px;
      align-items: center;

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        color: #00204c;
        background: rgba(0, 32, 76, 0.06);
        font-size: 18px;
        transition:
          background 0.2s ease,
          color 0.2s ease,
          transform 0.2s ease;

        &:hover {
          background: #00204c;
          color: #fff;
          transform: translateY(-1px);
        }
      }
    }

    .view-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 8px 18px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      cursor: pointer;
      color: #fff;
      background: #00204c;
      border: 1px solid #00204c;
      border-radius: 2px;
      transition:
        background 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease;
      font-family: inherit;

      &:hover {
        background: #fff;
        color: #00204c;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 72px 16px 18px;
    max-width: 100%;

    .image {
      transform: translate(-50%, -36%);

      img {
        height: 200px;
      }
    }
  }
`;

export default ProfileCard;
