import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const glow = keyframes`
  0% {
    filter: brightness(100%) contrast(100%);
  }
  50% {
    filter: brightness(200%) contrast(200%);
  }
  100% {
    filter: brightness(100%) contrast(100%);
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
  padding: 0;
  margin: 0;

  button {
    position: relative;
    z-index: 1;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background: transparent;
    border: 2px solid #0ea5e9;
    border-radius: 0.5rem;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
      border-color: transparent;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0ea5e9;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
      z-index: -1;
    }

    &:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  .glow {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(14,165,233,0.8) 0%, rgba(14,165,233,0) 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    animation: ${glow} 2s infinite;
  }

  &:hover .glow {
    opacity: 0.5;
  }

  .spinner {
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent 0%, rgba(14,165,233,0.2) 50%, transparent 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    animation: ${rotate} 4s linear infinite;
  }

  &:hover .spinner {
    opacity: 1;
  }
`;

const AnimatedButton = ({ children, onClick, className }) => {
  return (
    <ButtonWrapper className={className}>
      <div className="spinner" />
      <div className="glow" />
      <button onClick={onClick}>
        {children}
      </button>
    </ButtonWrapper>
  );
};

export default AnimatedButton; 