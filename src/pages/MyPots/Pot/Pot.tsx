import Button from "components/Button/Button"
import { useNavigate, useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  potsSliceActions,
  potsSliceSelectors,
} from "store/redux/pots/potsSlice"
import {
  ButtonContainer,
  ButtonControl,
  Content,
  DayContainer,
  ImageContainer,
  PotContainer,
  PotWrapper,
  StyledH1,
  StyledP,
} from "./styles"
import { useEffect } from "react"
import DemoDay from "components/DemoDay/DemoDay"
import ReactMarkdown from "react-markdown";

function Pot() {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const pots = useAppSelector(potsSliceSelectors.potData)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(potsSliceActions.potProfile())
  }, [])

  useEffect(() => {
    dispatch(potsSliceActions.potProfile())
  }, [dispatch])

  const activatePot = (id: string) => {
    dispatch(potsSliceActions.activatePot(id))
  }

  const deActivatePot = (id: string) => {
    dispatch(potsSliceActions.deActivatePot(id))

    dispatch(potsSliceActions.potProfile())
    navigate(-1)
  }

  const getInstruction = (id: string) => {
    dispatch(potsSliceActions.instruction(id))
    console.log(pots.find(p => p.id == id)?.instruction)
    ;<Button
      name="INSTRUCTION"
      color="green"
      border
      onButtonClick={() => id && getInstruction(id)}
    />
  }

  const pot = pots.find(p => p.id == id)

  return (
    <PotWrapper key={id}>
      <ButtonContainer>
        {!pots.find(p => p.id == id)?.active && (
          <>
            <StyledP>
              Bevor du mit dem Cannabisanbau fortfährst, lies die Informationen
              <br /> zum ersten Tag und aktivierte deinen Topf, wenn du bereit
              bist.
            </StyledP>
            <ButtonControl>
              <Button
                name="Topf activieren"
                bgColorIsRed
                onButtonClick={() => id && activatePot(id)}
              />
            </ButtonControl>
          </>
        )}
      </ButtonContainer>
      <PotContainer>
        {pots.find(p => p.id == id)?.active ? (
          <DayContainer>
            <ImageContainer
              //src={`http://localhost:8080/images/tag${pot?.instruction?.day}.jpg`}
              src={`https://leafgrow-app-foign.ondigitalocean.app/#/images/tag${pot?.instruction?.day}.jpg`}
              alt={`Day${pot?.instruction?.day}`}
            />
            <StyledH1>{`Tag ${pots.find(p => p.id == id)?.instruction?.day}`}</StyledH1>
            <Content>
              <ReactMarkdown>
                {pots.find(p => p.id == id)?.instruction?.content}
              </ReactMarkdown>
            </Content>
          </DayContainer>
        ) : (
          <DayContainer>
            <ImageContainer
              //src={`http://localhost:8080/images/tag1.jpg`}
              src={`https://leafgrow-app-foign.ondigitalocean.app/#/images/tag1.jpg`}
              alt={`Day1`}
            />
            <StyledH1>{`Tag 1`}</StyledH1>
            <DemoDay />
          </DayContainer>
        )}
        <ButtonContainer>
          {pots.find(p => p.id == id)?.active && (
            <>
              <StyledP>
                Hast du Probleme beim Cannabisanbau? Möchtest du deinen <br />{" "}
                Topf entfernen?
              </StyledP>
              <ButtonControl>
                <Button
                  name="Topf entfernen"
                  bgColorIsRed
                  onButtonClick={() => id && deActivatePot(id)}
                />
              </ButtonControl>
            </>
          )}
        </ButtonContainer>
      </PotContainer>
    </PotWrapper>
  )
}

export default Pot
