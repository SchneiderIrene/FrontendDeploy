import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  width: 100%;
  @media (max-width: 480px) {
    padding: 40px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding: 60px;
  }
`;

export const RegisterFormContainer = styled.form`
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 480px) {
    font-size: 11px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16.5px;
  }
`;

export const TitleRegister = styled.h3`
  font-family: "Inter";
  font-weight: 600;
  font-size: 32px;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const TitleText = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 22px;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 480px) {
    font-size: 11px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 16.5px;
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

export const EmailMessage = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
justify-content: center;
align-items: center;
width: 520px;
height: 275px;
@media (max-width: 480px) {
  width: 260px;
  height: 137.5px;
  gap: 10px;
}
@media (min-width: 481px) and (max-width: 768px) {
  width: 390px;
  height: 206.25px;
  gap: 15px;
}
`;

export const TextMessage = styled.h1`
font-size: 32px;
@media (max-width: 480px) {
  font-size: 16px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 24px;
}
`;

export const TextQustion = styled.p`
font-size: 24px;
@media (max-width: 480px) {
  font-size: 12px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 18px;
}
`;

export const BackToRegister = styled.a`
font-size: 20px;
text-decoration: underline;
cursor: pointer;
@media (max-width: 480px) {
  font-size: 10px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 15px;
}
`;

export const MessageError = styled.p`
color: red;
@media (max-width: 480px) {
  font-size: 10px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 15px;
}
`;

export const CheckBoxContainer = styled.div`
@media (max-width: 480px) {
  font-size: 10px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 15px;
}
`;

export const CheckboxError = styled.div`
position: absolute;
@media (max-width: 480px) {
  font-size: 10px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 15px;
}
`;

export const TextError = styled.p`
color: rgba(186, 45, 0, 1);
font-size: 20px;
font-family: "DM Sans";
font-weight: 500;
@media (max-width: 480px) {
  font-size: 10px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 15px;
}
`;

export const ErrorBox = styled.div`
position: absolute;
display: flex;
justify-content: center;
top: 300px;
@media (max-width: 480px) {
  top: 150px;
}
@media (min-width: 481px) and (max-width: 768px) {
  top: 225px;
}
`;

export const StyledP = styled.span`
text-align: left;
font-size: 12px;
color: #007132;
font-family: "DM Sans";
@media (max-width: 480px) {
  font-size: 6px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 9px;
}
`;

export const StyledH5 = styled.h5`
text-align: left;
font-size: 12px;
color: #373e3a;
font-family: "DM Sans";
@media (max-width: 480px) {
  font-size: 6px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 9px;
}
`;

export const Label = styled.label`
font-family: "DM Sans";
font-size: 12px;
color: #373e3a;
cursor: pointer;
&::after {
  content: " ";
}
& a {
  text-decoration: underline;
  color: #373e3a;
}
@media (max-width: 480px) {
  font-size: 6px;
}
@media (min-width: 481px) and (max-width: 768px) {
  font-size: 9px;
}
`;