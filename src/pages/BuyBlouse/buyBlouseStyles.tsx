// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  height: calc(100vh - 200px);
`;

export const DivSC = styled.div`
  gap: 1rem;
  display: flex;
  width: 60rem;

  margin: 0 auto;
`;

export const ImgSC = styled.img`
  width: 30rem;
`;

export const DivTwoSC = styled.div``;

export const ParagraphSC = styled.p<{
  Inactive?: boolean;
  Installments?: boolean;
  InstallmentsTwo?: boolean;
  Info?: boolean;
  Title?: boolean;
}>`
  color: black;

  span {
    color: ${({ theme }) => theme.color.secondary};
    font-weight: bold;
  }

  text-decoration: ${({ Inactive }) =>
    Inactive &&
    'font-weight: 100; text-decoration: line-through; color: #8c8c8c;'};

  ${({ Installments }) =>
    Installments &&
    'color: #90caf9; font-size: 2rem; font-weight: 700; line-height: 24px; margin: 0'};

  ${({ InstallmentsTwo }) =>
    InstallmentsTwo &&
    'color: #90caf9; font-size: 1.2rem; font-weight: 700; line-height: 24px; margin-top: 1rem'};

  ${({ Info: info }) =>
    info &&
    'color: #04d483;font-size: 1.4rem; font-weight: 600; text-transform: uppercase;padding: 0;'};

  ${({ Title: title }) =>
    title && 'color: #383838;font-size: 1.2rem; font-weight: 700;'};
`;

export const DivFourSC = styled.div`
  margin-top: 30px;
`;

export const DivThreeSC = styled.div`
  margin-top: 40px;
`;

export const SizeSC = styled.span`
  display: flex;
  padding: 0 7px;
  height: 28px;
  min-width: 28px;
  text-align: center;
  font-size: 0.6875rem;
  line-height: 26px;
  border-radius: 20px;
  font-weight: 700;
  text-decoration: none;
  border: 1px solid #ccc;
  width: 1rem;
  margin-top: 5px;
`;
