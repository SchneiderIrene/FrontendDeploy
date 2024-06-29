import {
  AdminButtonControl,
  AdminContentContainer,
  AdminPotContainer,
  ArrowIcon,
  ButtonBox,
  Content,
  ImgPotAdmin,
  LinkTopf,
  ModalContainer,
  ModalText,
  ModalTextWrapper,
  MyPotsWrapper,
  PotCard,
  PotImage,
  PotTitle,
  PotsContainer,
  StyledReactMarkdown,
  TitleContent,
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
import { useNavigate } from "react-router-dom"
import Spinner from "components/Spinner/Spinner";
import rehypeRaw from 'rehype-raw';


function MyPots() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(authSliceSelectors.userData)
  const pots = useAppSelector(potsSliceSelectors.potData)
  const isLogin = useAppSelector(authSliceSelectors.isLogin)
  const status = useAppSelector(authSliceSelectors.status)
  const statusPot = useAppSelector(potsSliceSelectors.status)
  const content = useAppSelector(potsSliceSelectors.content)
  const navigate = useNavigate()


  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (!isLogin) {
      handleOpenModal()
    }
  }, [])

  // useEffect(() => {
  //   dispatch(potsSliceActions.potProfile())
  // }, [dispatch])

  useEffect(() => {
    if (isLogin) {
      dispatch(potsSliceActions.potProfile());
    }
  }, [dispatch, isLogin]);



  useEffect(() => {
    if (pots.length>0 && pots[0]?.instruction?.id !== undefined){
      dispatch(potsSliceActions.potContent(pots[0].instruction?.id))
    }
  }, [dispatch, pots])

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

  const deActivePot = (id: string)=> {
    dispatch(potsSliceActions.deActivatePot(id))
  }

  const scrollPot = (id: string) => {
    //dispatch(potsSliceActions.potProfile())
    console.log("Scrolling to Pot with ID:", id);
    dispatch(potsSliceActions.scrollPot(id))
    //dispatch(potsSliceActions.potProfile())
  }

  const deletePot = (id: string)=>{
    dispatch(potsSliceActions.deletePot(id))
  }

  useEffect(() => {
    console.log('Updated content:', content);
  }, [content]);

  return (
    <MyPotsWrapper>
      {status === "loading" || statusPot === 'loading' && <Spinner/>}
      {user && user.email == "leafgrow.project@gmail.com" ? (
        <AdminPotContainer>
          {status === "loading" && <Spinner/>}
          <ButtonBox>
            <AdminButtonControl>
              {pots.length > 0 ? (
               <Button name="Entfernen Topf" color="red"  border onButtonClick={() => pots[0] && deletePot(pots[0].id)}/> 
              ) : (
                <Button name="Entwickeln Topf" color="green" border onButtonClick={createPot}/>
              )}
          </AdminButtonControl>
          <AdminButtonControl>
            {pots.length > 0 && pots[0].active ? (
              <Button name="Deaktivieren Topf" color="red" border onButtonClick={() => pots[0] && deActivePot(pots[0].id)}/>
            ) : (
              <Button name="Aktivieren Topf" 
              color="green" 
              border 
              onButtonClick={() => pots[0] && activePot(pots[0].id)}
              disabled={!(pots.length>0)}
              />
            )}
          </AdminButtonControl>
          <AdminButtonControl>
            <Button name="Nächster Tag" 
            color="green" 
            border 
            onButtonClick={() => pots[0] && scrollPot(pots[0].id)}
            disabled={!(pots.length>0) || !pots[0].active}
            />
          </AdminButtonControl>
          </ButtonBox>
            {pots[0]?.active &&  pots[0]?.instruction?.id !== undefined &&(
              <AdminContentContainer>
                <ImgPotAdmin
                  src={`https://leaf-grow.fra1.cdn.digitaloceanspaces.com/images/tag${pots[0]?.instruction?.day}.jpg`}
                  alt={`Day${pots[0]?.instruction?.day}`}
                />
                <TitleContent>{`Tag ${pots[0]?.instruction?.day}`}</TitleContent>
                <Content>
                  <StyledReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</StyledReactMarkdown>
                </Content>
              </AdminContentContainer>
            )}
        </AdminPotContainer>
      ) : (
        <PotsContainer>
          {pots.map((pot: Pot, index: number) => (
            <LinkTopf to={`/mypots/pot/${pot.id}`} key={pot.id}>
              <PotCard activ={pot.active}>
                <PotTitle>{`Topf ${index + 1}`}</PotTitle>
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
