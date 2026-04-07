import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const PersonProfileModal = ({ person, onClose }) => {
  useEffect(() => {
    if (!person) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [person, onClose]);

  if (!person) return null;

  const paragraphs = String(person.description || "")
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);
  const emailValue = String(person.email || "").trim();
  const mobileValue = String(person.mobile || "").trim();
  const emailHref = emailValue
    ? emailValue.startsWith("mailto:")
      ? emailValue
      : `mailto:${emailValue}`
    : "";
  const mobileHref = mobileValue
    ? `tel:${mobileValue.replace(/\s+/g, "")}`
    : "";

  const modal = (
    <Overlay role="presentation" onClick={onClose}>
      <Dialog
        role="dialog"
        aria-modal="true"
        aria-labelledby="profile-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="close"
          onClick={onClose}
          aria-label="Close profile"
        >
          <IoClose size={28} />
        </button>
        <div className="hero">
          <div className="img-wrap">
            <img
              src={person.image}
              alt={person.name}
              style={{
                objectPosition:
                  person.id === 9
                    ? "0% 0%"
                    : person.id === 6
                      ? "0% 0%"
                      : "center",
              }}
            />
          </div>
          <div className="intro">
            <h2 id="profile-modal-title">{person.name}</h2>
            <p className="role">{person.bio}</p>
            <div className="contact-list">
              {emailValue ? (
                <a
                  href={emailHref}
                  className="contact-link"
                  title={emailValue}
                  aria-label="Email"
                >
                  <MdOutlineEmail />
                  <span>{emailValue}</span>
                </a>
              ) : null}
              {mobileValue ? (
                <a
                  href={mobileHref}
                  className="contact-link"
                  title={mobileValue}
                  aria-label="Call"
                >
                  <MdOutlinePhone />
                  <span>{mobileValue}</span>
                </a>
              ) : null}
            </div>
            <div className="social">
              {person.linkedin ? (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title={person.linkedin}
                >
                  <FaLinkedinIn />
                </a>
              ) : null}
            </div>
          </div>
        </div>
        <div className="body">
          {paragraphs.length > 0 ? (
            paragraphs.map((block, i) => <p key={i}>{block}</p>)
          ) : (
            <p className="muted">Further biography will be added soon.</p>
          )}
        </div>
      </Dialog>
    </Overlay>
  );

  return createPortal(modal, document.body);
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(3, 3, 40, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  overflow-y: auto;
`;

const Dialog = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  max-height: min(90vh, 880px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.25);

  .close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.95);
    color: #00204c;
    cursor: pointer;
    box-shadow: 0 2px 12px rgba(0, 32, 76, 0.12);
    transition:
      background 0.2s ease,
      transform 0.2s ease;

    &:hover {
      background: #00204c;
      color: #fff;
      transform: scale(1.05);
    }
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(140px, 200px) 1fr;
    gap: 24px;
    padding: 28px 28px 20px;
    background: linear-gradient(145deg, #f4f7fb 0%, #fff 55%);
    border-bottom: 1px solid rgba(0, 32, 76, 0.1);
    align-items: start;

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 56px 20px 20px;
    }
  }

  .img-wrap {
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 8px 28px rgba(0, 32, 76, 0.15);

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 5;
      object-fit: cover;
    }

    @media (max-width: 560px) {
      max-width: 200px;
      margin: 0 auto;
    }
  }

  .intro {
    min-width: 0;
    padding-top: 4px;

    h2 {
      margin: 0 0 8px;
      font-size: 1.5rem;
      font-weight: 600;
      color: #00204c;
      line-height: 1.25;
    }

    .role {
      margin: 0 0 16px;
      font-size: 1rem;
      color: #00204c;
      opacity: 0.9;
    }

    .contact-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 0 0 14px;
    }

    .contact-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #00204c;
      text-decoration: none;
      width: fit-content;
      max-width: 100%;
      font-size: 0.95rem;

      span {
        overflow-wrap: anywhere;
      }

      svg {
        flex-shrink: 0;
        font-size: 18px;
      }

      &:hover {
        text-decoration: underline;
      }
    }

    .social {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      @media (max-width: 560px) {
        justify-content: center;
      }

      a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #00204c;
        background: rgba(0, 32, 76, 0.08);
        font-size: 18px;
        transition:
          background 0.2s ease,
          color 0.2s ease;

        &:hover {
          background: #00204c;
          color: #fff;
        }
      }
    }
  }

  .body {
    padding: 24px 28px 28px;
    overflow-y: auto;
    flex: 1;

    p {
      margin: 0 0 16px;
      font-size: 1rem;
      line-height: 1.65;
      color: #00204c;
      text-align: justify;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .muted {
      color: rgba(0, 32, 76, 0.55);
      font-style: italic;
      text-align: left;
    }
  }
`;

export default PersonProfileModal;
