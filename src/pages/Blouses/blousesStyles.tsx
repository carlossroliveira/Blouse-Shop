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
    align-items: center;
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

export const ParagraphSC = styled.p`
  text-align: initial;
  font-weight: 600;
  margin: 0 0 5px 3rem;
`;
