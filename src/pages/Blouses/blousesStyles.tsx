// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  margin-top: 5rem;

  ul {
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: center;
  }

  li {
    text-align: center;
    list-style: none;
    width: 25rem;
    margin-bottom: 3rem;
  }
`;

export const ImgSC = styled.img`
  width: 20rem;

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const TituloSC = styled.h1`
  font-size: 18px;
  font-weight: 900;
`;

export const ParagraphSC = styled.p<{
  Inactive?: boolean;
  installments?: boolean;
  info?: boolean;
}>`
  text-align: initial;
  margin: 0 0 5px 3rem;

  text-decoration: ${({ Inactive }) =>
    Inactive &&
    'font-weight: 100; text-decoration: line-through; color: #8c8c8c;'};

  ${({ installments }) =>
    installments && 'font-size: 1.25rem; font-weight: 700; line-height: 24px;'};

  ${({ info }) =>
    info &&
    'color: #04d483;font-size: 1rem; font-weight: 600; text-transform: uppercase;padding: 0;'};
`;
