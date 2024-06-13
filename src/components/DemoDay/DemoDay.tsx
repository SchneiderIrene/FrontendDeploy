import { DemoDay1 } from "assets"
import {
  CardContainer,
  ImageContainer,
  StyledH1,
  StyledH2,
  StyledP,
  Container1,
  Container2,
  Container3,
  ButtonContainer,
  ButtonControl,
  SubP,
} from "./styles"
import Button from "components/Button/Button"

function DemoDay() {
  return (
    <CardContainer>
      <ImageContainer src={DemoDay1} alt="Demo Day Image" />
      <StyledH1>TAG 1</StyledH1>
      <Container1>
        <StyledH2> Benötigte Materialien</StyledH2>
        <StyledP>• 3%-iges Wasserstoffperoxid</StyledP>
        <StyledP>• Wasser (ohne Kohlensäure)</StyledP>
        <StyledP>• Ein Becher (Plastik oder Glas)</StyledP>
      </Container1>
      <Container2>
        <StyledH2>Vorbereitung</StyledH2>
        <StyledP>
          1. Wasser:
          <SubP>
            • verwende normales Trinkwasser ohne Kohlensäure (vorzugsweise aus
            dem Laden).
          </SubP>
          <SubP>
            • vermeide Mineralwasser und Leitungswasser, da sie Verunreinigungen
            enthalten können.
          </SubP>
        </StyledP>
        <StyledP>
          2. Mischung:
          <SubP>• gieße 50 ml Wasser in den Becher,</SubP>
          <SubP>• füge 10 Tropfen 3%-iges Wasserstoffperoxid hinzu</SubP>
          <SubP>• rühre die Mischung gründlich um.</SubP>
        </StyledP>
        <StyledP>
          3. Sameneinlegung:
          <SubP>• lege die Samen in die vorbereitete Lösung und</SubP>
          <SubP>
            • stelle den Becher an einen dunklen, warmen Ort (z.B. in einen
            Schrank oder eine Schublade).
          </SubP>
        </StyledP>
        <StyledP>
          4. Wartezeit:
          <SubP>• warte 48 Stunden.</SubP>
          <SubP>
            • sobald die Wurzeln eine Länge von 5-10 mm erreicht haben (etwas
            länger als die Samen selbst), können sie eingepflanzt werden.
          </SubP>
        </StyledP>
      </Container2>
      <Container3>
        <StyledH2>Wichtige Hinweise</StyledH2>
        <StyledP>
          1. Halte die Raumtemperatur zwischen 22-28°C. Eine nächtliche
          Absenkung um 5-6 Grad ist vorteilhaft und fördert das Wachstum und die
          Blüte.
        </StyledP>
        <StyledP>
          2. Die Luftfeuchtigkeit sollte zwischen 60-70 % liegen.
        </StyledP>
        <StyledP>
          Diese Anleitung hilft dir dabei, deine Samen optimal auf die Keimung
          vorzubereiten und ein gesundes Wachstum sicherzustellen.
        </StyledP>
      </Container3>
    </CardContainer>
  )
}

export default DemoDay