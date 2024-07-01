import styled from "@emotion/styled";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: Inter;
`;

export const StyledH2 = styled.h2`
  color: #38221d;
  font-size: 24px;
  font-weight: 600;
  font-family: Inter;
  text-align: center;
  margin-bottom: 60px;
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 30px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 45px;
  }
`;

export const StyledP = styled.div`
  color: #38221d;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  font-family: Inter;
  width: 100%;
  max-width: 1110px;
  margin-left: 20px;
  @media (max-width: 480px) {
    font-size: 10px;
    margin-left: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
    margin-left: 15px;
  }
`;

export const SubP = styled.p`
  color: #38221d;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  font-family: Inter;
  margin-left: 40px;
  margin-bottom: 10px;
  @media (max-width: 480px) {
    font-size: 10px;
    margin-left: 20px;
    margin-bottom: 5px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
    margin-left: 30px;
    margin-bottom: 7.5px;
  }
`;

export const Container1 = styled.div`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
  @media (max-width: 480px) {
    gap: 5px;
    margin-bottom: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 7.5px;
    margin-bottom: 30px;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
    margin-bottom: 30px;
  }
`;

export const Container3 = styled.div`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
  text-align: center;
  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
    margin-bottom: 30px;
  }
`;