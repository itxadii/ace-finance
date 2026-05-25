"use client";

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    href: string;
    icon: React.ReactNode;
}

const ServiceCard = ({ title, description, href, icon }: ServiceCardProps) => {
    return (
        <StyledWrapper>
            <div className="card">
                <Link className="card1" href={href}>
                    <div className="icon-wrapper">{icon}</div>
                    <h3>{title}</h3>
                    <p className="small">{description}</p>
                    <div className="go-corner">
                        <div className="go-arrow">
                            →
                        </div>
                    </div>
                </Link>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  height: 100%;

  .card {
    height: 100%;
  }

  .card h3 {
    font-size: 20px;
    font-weight: 800;
    color: #0f172a;
    margin-bottom: 12px;
    margin-top: 16px;
    letter-spacing: -0.3px;
    position: relative;
    z-index: 1;
  }

  .card p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
    color: #475569;
    position: relative;
    z-index: 1;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
    background: rgba(16, 185, 129, 0.1);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    border: 1px solid rgba(16, 185, 129, 0.2);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease-out;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #10B981; /* Emerald Green */
    border-radius: 0 24px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans-serif;
    font-weight: bold;
  }

  .card1 {
    display: block;
    position: relative;
    height: 100%;
    background-color: #ffffff;
    border-radius: 24px;
    padding: 36px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  }

  .card1:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #10B981; /* Emerald Green Hover Fill */
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .card1:hover:before {
    transform: scale(35); /* Increased scale to cover the wider card */
  }

  /* Hover States for Text and Icon */
  .card1:hover p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.9);
  }

  .card1:hover h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
  }

  .card1:hover .icon-wrapper {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`;

export default ServiceCard;