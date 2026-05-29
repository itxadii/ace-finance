"use client";

import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

// This interface allows the button to accept standard properties like onClick, disabled, type, etc.
interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const PrimaryButton = ({ children = "APPLY NOW", className = "", ...props }: PrimaryButtonProps) => {
    const isFullWidth = className.includes("w-full");
    return (
        <StyledWrapper style={isFullWidth ? { width: '100%', display: 'block' } : { display: 'inline-block' }}>
            <div className="button-borders" style={isFullWidth ? { width: '100%' } : {}}>
                {/* We spread {...props} here so things like onClick are passed down to the HTML button */}
                <button {...props} className={`primary-button ${className}`}>
                    {children}
                </button>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .primary-button {
    font-family: 'Ropa Sans', sans-serif;
    color: white;
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 0.05rem;
    border: 1px solid #0E1822;
    padding: 0.8rem 2.1rem;
    
    /* 1. Changed the SVG fill from %23FF4655 to %2310B981 (URL encoded #10B981) */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %2310B981 %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    
    background-color: #0E1822;
    background-size: 200%;
    background-position: 200%;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: background-position, border, color;
    position: relative;
    z-index: 1;
  }

  .primary-button:hover {
    /* 2. Changed hover border color */
    border: 1px solid #10B981; 
    color: white;
    background-position: 40%;
  }

  .primary-button:before {
    content: "";
    position: absolute;
    background-color: #0E1822;
    width: 0.2rem;
    height: 0.2rem;
    top: -1px;
    left: -1px;
    transition: background-color 0.15s ease-in-out;
  }

  .primary-button:hover:before {
    background-color: white;
  }

  .primary-button:hover:after {
    background-color: white;
  }

  .primary-button:after {
    content: "";
    position: absolute;
    /* 3. Changed bottom right accent square color */
    background-color: #10B981; 
    width: 0.3rem;
    height: 0.3rem;
    bottom: -1px;
    right: -1px;
    transition: background-color 0.15s ease-in-out;
  }

  .button-borders {
    position: relative;
    width: fit-content;
    height: fit-content;
  }

  .button-borders:before {
    content: "";
    position: absolute;
    width: calc(100% + 0.5em);
    height: 50%;
    left: -0.3em;
    top: -0.3em;
    border: 1px solid #0E1822;
    border-bottom: 0px;
  }

  .button-borders:after {
    content: "";
    position: absolute;
    width: calc(100% + 0.5em);
    height: 50%;
    left: -0.3em;
    bottom: -0.3em;
    border: 1px solid #0E1822;
    border-top: 0px;
    z-index: 0;
  }

  .shape {
    fill: #0E1822;
  }
`;

export default PrimaryButton;