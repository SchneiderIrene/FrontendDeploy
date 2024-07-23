import styled from '@emotion/styled';

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px;
  width: 100%;
  @media (max-width: 480px) {
    padding: 40px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 60px;
  }
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 480px;
  height: 888px;
  @media (max-width: 480px) {
    width: 240px;
    height: 444px;
    gap: 8px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    width: 360px;
    height: 666px;
    gap: 12px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const InputButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 24px;
  @media (max-width: 480px) {
    gap: 12px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 18px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  @media (max-width: 480px) {
    gap: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 15px;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 16px;
  @media (max-width: 480px) {
    gap: 2px;
    margin-bottom: 25px;
    /* margin-top: 35px;  */
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 12px;
  }
`;

export const ChecboxContainer = styled.div`
  display: flex;
`;

export const Checkbox = styled.input`
  border: 1.97px solid rgba(55, 62, 58, 1);
  width: 18px;
  height: 18px;
`;

export const LabelCheckBox = styled.label`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 600;
  margin-bottom: 4px;
  @media (max-width: 480px) {
    font-size: 9px;
    margin-bottom: 2px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
    margin-bottom: 3px;
  }
`;

export const PasswordForget = styled.a`
  color: rgba(55, 62, 58, 1);
  font-size: 18px;
  font-family: "DM Sans";
  font-weight: 700;
  margin-top: 4px;
  @media (max-width: 480px) {
    font-size: 9px;
    margin-top: 2px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
    margin-top: 3px;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 87px;
  gap: 10px;
  @media (max-width: 480px) {
    height: 43.5px;
    gap: 5px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    height: 65.25px;
    gap: 7.5px;
  }
`;

export const TitleLogin = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 28px;
  color: #373e3a;
  @media (max-width: 480px) {
    font-size: 14px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const TextError = styled.p`
  color: rgba(186, 45, 0, 1);
  font-size: 0.93vw;
  font-family: "DM Sans";
  font-weight: 500;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 8px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 13.5px;
  } */
`;

export const TextErrorServer = styled.p`
  color: rgba(186, 45, 0, 1);
  font-size: 0.93vw;
  font-family: "DM Sans";
  font-weight: 500;
  position: absolute;
  @media (max-width: 480px) {
    font-size: 12px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 15px;
  } */
`;

export const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 480px;
  margin-top: -300px;
  @media (max-width: 480px) {
    padding: 10px 0;
    width: 240px;
    margin-top: -150px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 15px 0;
    width: 360px;
    margin-top: -225px;
  }
`;

export const TitleRegister = styled.div`
  font-family: "Inter";
  font-weight: 600;
  font-size: 28px;
  color: #373e3a;
  margin-bottom: 10px;
  margin-top: 10px; 
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 5px;
    margin-top: 15px; 
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 7.5px;
    margin-top: 7.5px; 
  }
`;