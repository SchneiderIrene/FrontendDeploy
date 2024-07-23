import styled from "@emotion/styled"

export const GuidePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3.125vw;
  width: 100%;
  gap: 5.73vw;
  padding: 3.125vw;
  counter-reset: item;
  @media (max-width: 480px) {
    margin: 0;
    padding: 0;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    margin: 45px;
    padding: 0 44px;
  } */
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 2.6vw;
  box-sizing: border-box;
  border: 0.1vw solid green;
  position: relative;

  &:first-of-type {
    margin-top: -3.125vw;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    height: 0.1vw;
    width: calc(100vw - 100%);
    background-color: green;
    right: 100%;
    top: calc(50% - 0.05vw);
  }
  &::before {
    transform: translateY(-1.56vw);
  }
  &::after {
    transform: translateY(1.56vw);
    content: counter(item) "0";
    counter-increment: item;
    position: limk;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 25px;
    &:first-of-type {
      margin-top: -30px;
      /* padding: 0 40px; */
    }
    &::before {
      transform: translateY(-15px);
    }
    &::after {
      transform: translateY(15px);
    }
  }

  /* @media (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 35px;
    &:first-of-type {
      margin-top: -45px;
      padding: 0 50px;
    }
    &::before {
      transform: translateY(-20px);
    }
    &::after {
      transform: translateY(20px);
    }
  } */
`

export const StyledPCont2 = styled.p<{ isLogin: boolean }>`
  text-align: center;
  font-size: 1.145vw;
  margin-top: 1.04vw;
  max-width: 100%;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  visibility: ${props => (props.isLogin ? "visible" : "hidden")};
  @media (max-width: 480px) {
    font-size: 12px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
  } */
`

export const Image = styled.img`
  width: 100%;
  object-fit: contain;
  /* margin-top: 20px; */
  /* @media (max-width: 480px) {
    padding: 7px;
  } */
  /* @media (min-width: 481px) and (max-width: 768px) {
    padding: 10px;
  } */
`

export const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.97vw;
  font-family: "DM Sans";
  max-width: 100%;
  margin-top: 1.04vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  position: relative;
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 30px;
    margin-top: 15px;
  } */
`

export const StyledH3 = styled.h3<{ isLogin: boolean }>`
  text-align: center;
  font-size: 1.458vw;
  font-family: "DM Sans";
  margin-top: 1.04vw;
  word-wrap: break-word;
  overflow: hidden;
  display: ${props => (props.isLogin ? "block" : "none")};

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: left;
    margin-top: 10px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 22px;
    margin-top: 15px;
  } */
`

export const StyledP = styled.p<{ isLogin: boolean }>`
  text-align: left;
  font-size: 1.145vw;
  font-family: "DM Sans";
  max-width: 100%;
  margin-top: 1.04vw;
  width: 100%;
  word-wrap: break-word;
  overflow: hidden;
  display: ${props => (props.isLogin ? "block" : "none")};
  padding: 0.83vw;
  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 10px ;
    /* margin-top: 10px; */
    /* padding: 8px 8px 0 8px; */
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 18px;
    margin-top: 15px;
    padding: 12px 12px 0 12px;
  } */
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 80px 40px 80px;
  width: 660px;
  height: 280px;
  max-width: 80%;
  border: 2px solid rgba(2, 88, 41, 1);
  background-color: rgba(255, 254, 239, 1);
  text-align: center;
  @media (max-width: 480px) {
    width: 300px;
    height: 250px;
    transform: translate(-50%, -75%);
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    padding: 20px 40px 20px 40px;
    max-width: 100%;
  } */
`

export const ModalTextWrapper = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  gap: 36px;
  @media (max-width: 480px) {
    width: 200px;
    gap: 18px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    width: 333px;
    gap: 27px;
  } */
`

export const ArrowIcon = styled.span`
  margin-left: 10px;
  @media (max-width: 480px) {
    margin-left: 5px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    margin-left: 7.5px;
  }
`

export const ModalText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 1.25vw;
  color: rgba(55, 62, 58, 1);
  @media (max-width: 480px) {
     font-size: 12px;
  }
  /* @media (min-width: 481px) and (max-width: 768px) {
    font-size: 20px;
  } */
`
