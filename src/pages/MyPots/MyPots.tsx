import {
  AdminButtonControl,
  AdminPotContainer,
  ArrowIcon,
  LinkTopf,
  ModalContainer,
  ModalText,
  ModalTextWrapper,
  MyPotsWrapper,
  PotCard,
  PotImage,
  PotTitle,
  PotsContainer,
} from "./styles"
import { PotImg } from "assets"
import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"

import { Pot } from "store/redux/pots/types"

import { useEffect, useState } from "react"
import {
  potsSliceActions,
  potsSliceSelectors,
} from "store/redux/pots/potsSlice"
import { authSliceSelectors } from "store/redux/auth/authSlice"
import Modal from "components/Modal/Modal"
import {  useNavigate } from "react-router-dom"


function MyPots() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(authSliceSelectors.userData)
  const pots = useAppSelector(potsSliceSelectors.potData)
  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (!isLogin) {
      handleOpenModal()
    }
  }, [])

  useEffect(() => {
    dispatch(potsSliceActions.potProfile())
  }, [])

  // const getInstruction = (id: string)=>{
  //   dispatch(potsSliceActions.instruction(id))
  //   console.log(pots.find(p=>p.id == id)?.instruction);
 
  //    }

  const createPot =()=>{
    dispatch(potsSliceActions.createPot())
  }

  const scrollPot = (id: string)=>{
    dispatch(potsSliceActions.scrollPot(id))
  }


  return (
    <MyPotsWrapper>
      {(user && user.email == "leafgrow.project@gmail.com") ? (
        <AdminPotContainer>
          <AdminButtonControl>
        <Button name="Entwickeln Topf" color="green" border onButtonClick={createPot}/>
        <Button name="Nächster Tag" color="green" border 
        onButtonClick={()=>{scrollPot(pots[0].id)}}/>
        </AdminButtonControl>
        </AdminPotContainer>
        
      
      ) : (

     
      <PotsContainer >
        {pots.map((pot: Pot, index: number) => (
          <LinkTopf to={`/mypots/pot/${pot.id}`}>
          <PotCard activ={pot.active} key={pot.id}>
            <PotTitle key={pot.id}>{`Topf ${index + 1}`}</PotTitle>
            <PotImage src={PotImg} alt="pot" />
          </PotCard>
          </LinkTopf>
        ))}
      </PotsContainer>
       )}
      {!isLogin && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <ModalContainer>
            <ModalTextWrapper>
              <ModalText>
                Diese Seite ist nur für registrierte und eingeloggte
                Benutzer/innen verfügbar
              </ModalText>
              <Button
                name={
                  <span>
                    Zurück zum Homepage <ArrowIcon>→</ArrowIcon>
                  </span>
                }
                bgColorIsRed
                onButtonClick={() => navigate("/")}
              />
            </ModalTextWrapper>
          </ModalContainer>
        </Modal>
      )}
    </MyPotsWrapper>
  )
}

export default MyPots
