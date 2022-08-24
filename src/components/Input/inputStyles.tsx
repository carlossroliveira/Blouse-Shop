// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  svg {
    color: white;
    font-size: 25px;
    position: absolute;
    right: 0px;
    top: 10px;
    cursor: pointer;
  }
`;

export const DivGroupSC = styled.div`
  position: relative;
  margin-bottom: 45px;
`;

export const SpanOneSC = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`;

export const LabelSC = styled.label`
  color: ${({ theme }) => theme.color.primary};
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const SpanTwoSC = styled.span`
  position: relative;
  display: block;
  width: 300px;

  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background-color: ${({ theme }) => theme.color.tertiary};
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
`;

export const InputSC = styled.input`
  font-size: 18px;
  display: block;
  width: 300px;
  border: none;
  padding: 10px 10px 10px 5px;
  border-bottom: 0.1px solid ${({ theme }) => theme.background.secondary};

  background-color: transparent;
  color: ${({ theme }) => theme.color.primary};

  &:focus {
    outline: none;
    border-bottom: 1px solid transparent;
  }

  &:focus ~ ${LabelSC}, &:valid ~ ${LabelSC} {
    top: -20px;
    font-size: 14px;
    color: ${({ theme }) => theme.color.tertiary};
  }

  &:focus ~ ${SpanTwoSC}:before, &:focus ~ ${SpanTwoSC}:after {
    width: 50%;
  }
`;
