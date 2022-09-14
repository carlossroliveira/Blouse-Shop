// -------------------------------------------------
// Packages
// -------------------------------------------------
import styled from 'styled-components';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70rem',
  },
};

export const ContainerSC = styled.section`
  display: flex;
`;

export const DivOneSC = styled.div`
  flex: 1 900px;
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const TitleSC = styled.h2`
  padding: 0px;
  font-size: 24px;
  color: ${({ theme }) => theme.color.secondary};
`;

export const DivInfoSC = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`;

export const DivInfoTwoSC = styled.div`
  display: flex;
`;

export const ParagraphInfoSC = styled.p`
  font-weight: 600;
  line-height: 16px;
  text-align: center;
  flex: 1 1px;
  color: ${({ theme }) => theme.color.secondary};
`;

export const ImgSC = styled.img`
  width: 10rem;
`;

//===================== DivTwoSC

export const DivTwoSC = styled.div`
  flex: 1 500px;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.background.secondary};
`;

export const DivContentOneSC = styled.div`
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
`;

export const DivContentSubSC = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ParagraphSC = styled.p`
  margin: 5px 0;
  color: ${({ theme }) => theme.color.secondary};
`;

export const DivContentTwoSC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: self-end;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary};

  p {
    color: #008000;
  }
`;

export const ButtonSC = styled.button`
  margin-top: 20px;
  width: 100%;
  border-radius: 0.5rem;
  padding: 5px;

  background-color: #f80032;
  font-size: 18px;
  border: 2px solid #f80032;
  color: ${({ theme }) => theme.color.primary};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
    cursor: pointer;
  }
`;
