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
  PotContainer,
  PotWrapper,
  StyledP,
} from "./styles"
import DayCard from "components/DayCard/DayCard"
import { useEffect } from "react"
import DemoDay from "components/DemoDay/DemoDay";

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

  return (
    <PotWrapper key={id}>
      <PotContainer>
        <ButtonContainer>
          <StyledP>
            Bevor du mit dem Cannabisanbau fortfährst, lies die Informationen
            <br /> zum ersten Tag und aktivierte deinen Topf, wenn du bereit
            bist.
          </StyledP>
          <ButtonControl>
            {!pots.find(p=>p.id == id)?.active && (
              <Button 
                name="Topf activieren"
                bgColorIsRed
                onButtonClick={() => id && activatePot(id)}
              />
            )}
          </ButtonControl>
        </ButtonContainer>
        <DemoDay/>
        {/* <DayCard /> */}
        <ButtonContainer>
          {pots.find(p=>p.id == id)?.active && (
         <>
          <StyledP>
            Hast du Probleme beim Cannabisanbau? Möchtest du deinen <br /> Topf
            entfernen?
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
