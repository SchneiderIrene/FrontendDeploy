import {
  AdminButtonControl,
  AdminPotContainer,
  ArrowIcon,
  ButtonBox,
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
import { useNavigate, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import { v4 } from "uuid"

function MyPots() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(authSliceSelectors.userData)
  const pots = useAppSelector(potsSliceSelectors.potData)
  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const navigate = useNavigate()
  //  const { id } = useParams()

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

  const createPot = () => {
    dispatch(potsSliceActions.createPot())
  }

  const activePot = (id: string) => {
    console.log(id)

    dispatch(potsSliceActions.activatePot(id))
  }

  const scrollPot = (id: string) => {
    dispatch(potsSliceActions.scrollPot(id))
  }

  const idAd = pots.map(p => p.id)

  return (
    <MyPotsWrapper>
      {user && user.email == "leafgrow.project@gmail.com" ? (
        <AdminPotContainer key={v4()}>
          <ButtonBox>

            <AdminButtonControl>
          <Button name="Entwickeln Topf" color="green" border onButtonClick={createPot}/>
          <Button name="Entfernen Topf" color="green" border onButtonClick={() => {}}/>
          </AdminButtonControl>
          <AdminButtonControl>
            <Button name="Aktivieren Topf" color="green" border onButtonClick={() => pots[0] && activePot(pots[0].id)}/>
          <Button name="Deaktivieren Topf" color="green" border onButtonClick={() => {}}/>
          </AdminButtonControl>
          <AdminButtonControl>
            <Button name="Nächster Tag" color="green" border onButtonClick={() => {}}/>
          </AdminButtonControl>
          </ButtonBox>
          <div>
            {pots[0]?.active && (
              <div>
                <img
                  //src={`http://localhost:8080/images/tag${pots[0]?.instruction?.day}.jpg`}
                  src={`https://leafgrow-app-foign.ondigitalocean.app/#/images/tag${pot?.instruction?.day}.jpg`}
                  alt={`Day${pots[0]?.instruction?.day}`}
                />
                <h1>{`Tag ${pots[0]?.instruction?.day}`}</h1>
                <div>
                  <ReactMarkdown>{pots[0]?.instruction?.content}</ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        </AdminPotContainer>
      ) : (
        <PotsContainer>
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
