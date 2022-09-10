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
  flex-wrap: wrap;
  align-items: center;

  margin: 0rem 5rem;
`;

export const ImgSC = styled.img`
  width: 30rem;

  @media (max-width: 975px) {
    width: 100%;
  }
`;

export const DivOneSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const DivTwoSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  flex: 1 500px;
`;

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

  ${({ Info }) =>
    Info &&
    'color: #04d483;font-size: 1.4rem; font-weight: 600; text-transform: uppercase;padding: 0;'};

  ${({ Title }) =>
    Title && 'color: #383838;font-size: 1.2rem; font-weight: 700;'};
`;

export const DivFourSC = styled.div`
  margin-top: 30px;
`;

export const DivThreeSC = styled.div`
  margin-top: 40px;
`;

export const DivSizeSC = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const SizeButtonSC = styled.button<{ Background: boolean }>`
  display: flex;
  justify-content: center;
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
  width: fit-content;
  margin-top: 5px;
  transition: filter 0.2s;
  transition: 200ms linear;
  & + & {
    margin-left: 5px;
  }
  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
    border: 1px solid
      ${({ Background, theme }) =>
        Background ? theme.color.tertiary : theme.color.secondary};
  }

  ${({ Background }) =>
    Background && 'background-color: #383838; color: #f8f8f8'};
`;
