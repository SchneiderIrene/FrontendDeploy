import styled from "@emotion/styled"
import { Link, NavLink } from "react-router-dom"
import ReactMarkdown from "react-markdown"

interface PotCardProps {
  activ: boolean
}

export const MyPotsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`
export const PotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1284px;
  height: 420px;
  gap: 36px;
`
export const PotCard = styled.div<PotCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(242, 242, 242, 1);
  width: 340px;
  height: 356px;
  box-shadow: 4px 10px 4px rgba(55, 62, 58, 0.2);
  padding: 40px;
  background-color: rgba(255, 240, 212, 1);
  cursor: pointer;
  filter: ${({ activ }) => (activ ? "none" : "grayscale(100%)")};
`
export const LinkTopf = styled(Link)`
  text-decoration: none;
  color: rgba(56, 34, 29, 1);
`
export const PotTitle = styled.h3`
  position: relative;
  font-family: "Inter";
  font-weight: 600;
  font-size: 36px;
  color: rgba(56, 34, 29, 1);
`
export const PotImage = styled.img`
  position: relative;
  width: 124px;
  height: 175px;
`

export const StyledLink = styled(NavLink)``

export const ButtonControl = styled.div`
  position: relative;
  filter: grayscale(100%);
  width: 100%;
  position: relative;
  height: 48px;
  width: 200px;

  :hover {
    transform: scale(1.1);
  }
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
`

export const ModalTextWrapper = styled.div`
  width: 444px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
  gap: 36px;
`

export const ArrowIcon = styled.span`
  margin-left: 10px;
`

export const ModalText = styled.p`
  font-family: "Inter";
  font-weight: 600;
  font-size: 24px;
  color: rgba(55, 62, 58, 1);
`

export const AdminButtonControl = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`

export const AdminPotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 1110px;
  gap: 40px;
  min-height: 1100px;
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`

export const AdminContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

export const ImgPotAdmin = styled.img`
  width: 100%;
  height: 625px;
`

export const TitleContent = styled.h2`
  font-family: "Inter";
  font-weight: 600;
  font-size: 28px;
  color: rgba(55, 62, 58, 1);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 35px;
  font-family: "Inter";
  color: rgba(55, 62, 58, 1);
   line-height: 3;
   text-align: left;
  `

  export const StyledReactMarkdown = styled(ReactMarkdown)`

   h1, h2, h3, h4, h5, h6{
    font-size: 28px ;
    font-weight: 900;
    
      
  }
  p{
    /* text-indent: 30px; */
    font-size: 24px;
    font-weight: 600;
    padding: 0px;
    /* text-align: 0px; */
  
  }
  ul, ol, dl {
    /* padding: 50px; */
    font-size: 24px;
    font-weight: 600;
    margin-left: 20px;
    text-align: left;
    
  } 
li {
  margin: 0px;
  padding: 0px;
}
strong {
  font-style: normal;
}
`
