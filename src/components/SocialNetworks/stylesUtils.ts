// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled, { css } from 'styled-components';

export const SpanSC = styled.span`
  position: absolute;
  transition: transform 0.5s;

  &:nth-child(1),
  &:nth-child(3) {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.color.primary};
  }
  &:nth-child(1) {
    top: 0;
    left: 0;
    transform-origin: right;
  }

  &:nth-child(3) {
    bottom: 0;
    left: 0;
    transform-origin: left;
  }

  &:nth-child(2),
  &:nth-child(4) {
    width: 3px;
    height: 100%;
    background: ${({ theme }) => theme.color.primary};
  }

  &:nth-child(2) {
    top: 0;
    left: 0;
    transform: scale(0);
    transform-origin: bottom;
  }

  &:nth-child(4) {
    top: 0;
    right: 0;
    transform: scale(0);
    transform-origin: top;
  }
`;

export const STYLES_DEFAULT = css`
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-size: 40px;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  margin: 0 30px;
  transition: 0.5s;

  &:hover ${SpanSC} {
    &:nth-child(1) {
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.5s;
    }
  }

  &:hover ${SpanSC} {
    &:nth-child(3) {
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }
  }

  &:hover ${SpanSC} {
    &:nth-child(2) {
      transform: scale(1);
      transform-origin: top;
      transition: transform 0.5s;
    }
  }

  &:hover ${SpanSC} {
    &:nth-child(4) {
      transform: scale(1);
      transform-origin: bottom;
      transition: transform 0.5s;
    }
  }
`;
