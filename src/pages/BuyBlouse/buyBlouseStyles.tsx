// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const ContainerSC = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const DivSC = styled.div`
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 0rem 3rem;
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

  @media (max-width: 1520px) {
    margin: 0 auto;
  }
`;

export const DivOneButtonSC = styled.button<{ Disabled: boolean }>`
  border: none;
  font-size: 2rem;
  background-color: transparent;

  &:hover {
    cursor: ${({ Disabled }) => (Disabled ? 'default' : 'pointer')};
  }

  filter: brightness(0.7);

  svg {
    color: ${({ theme }) => theme.color.quinary};
  }
`;

export const DivTwoSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  flex: 1 500px;

  position: relative;
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
    'color: #04d483;font-size: 1.4rem; font-weight: 600; text-transform: uppercase;padding: 0; margin-top: 0;'};

  ${({ Title }) =>
    Title && 'color: #383838;font-size: 1.2rem; font-weight: 700;'};
`;

export const DivFourSC = styled.div`
  margin-top: 0px;
`;

export const DivThreeSC = styled.div`
  margin-top: 0px;
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

export const DivShieldSC = styled.div`
  position: absolute;
  right: 1rem;
  top: -1rem;

  @media (max-width: 975px) {
    display: none;
  }
`;

export const ImgShieldSC = styled.img`
  width: 15rem;

  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;

  &:hover {
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
  }
`;

export const DivBuySC = styled.div`
  gap: 5rem;
  display: flex;
  align-items: end;

  @media (max-width: 975px) {
    gap: 1rem;
    display: flex;
    align-items: center;
  }

  section {
    margin-right: 6rem;
  }
`;

export const ButtonBuySC = styled.button`
  width: 40rem;
  height: 4rem;
  background-color: ${({ theme }) => theme.color.quinary};

  border: none;
  font-weight: 700;
  border-radius: 5px;
  text-transform: uppercase;

  box-shadow: ${({ theme }) => theme.boxShadow.secondary};
  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }

  @media (max-width: 975px) {
    width: fit-content;
  }
`;
