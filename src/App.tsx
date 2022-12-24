import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import ResetSettings from "./components/ResetSettings";
import AccordionContainer from "./components/AccordionContainer";
import Accordion from "./components/Accordion";
import AccordionContent from "./components/AccordionContent";
import Ceguera from "./components/categories/perfiles-de-accesibilidad/Ceguera";
import TDAH from "./components/categories/perfiles-de-accesibilidad/TDAH";
// import BiggerText from "./components/categories/contenido/BiggerText";
import Dislexia from "./components/categories/perfiles-de-accesibilidad/Dislexia";
import Daltonismo from "./components/categories/perfiles-de-accesibilidad/Daltonismo";
import DificultadesVisuales from "./components/categories/perfiles-de-accesibilidad/DificultadesVisuales";
import CognitivoYAprendizaje from "./components/categories/perfiles-de-accesibilidad/CognitivoYAprendizaje";
import ConvulsionesYEpilepticos from "./components/categories/perfiles-de-accesibilidad/ConvulsionesYEpilepticos";
import DeterioroMotor from "./components/categories/perfiles-de-accesibilidad/DeterioroMotor";

function App() {
  const [showAccordion, setShowAccordion] = useState(false);

  const handleClick = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className="App">
      <Title />
      <ResetSettings />
      <AccordionContainer>
        <Accordion
          name="Perfiles de accesibilidad"
          className={showAccordion}
          onClick={handleClick}
        />

        <AccordionContent showAccordionProp={showAccordion}>
          <Ceguera />
          <TDAH />
          <Dislexia />
          <Daltonismo />
          <DificultadesVisuales />
          <CognitivoYAprendizaje />
          <ConvulsionesYEpilepticos />
          <DeterioroMotor />
        </AccordionContent>

        <Accordion
          name="Color"
          className={showAccordion}
          onClick={handleClick}
        />

        <AccordionContent showAccordionProp={showAccordion}>
          <Ceguera />
          <TDAH />
          <Dislexia />
          <Daltonismo />
          <DificultadesVisuales />
          <CognitivoYAprendizaje />
          <ConvulsionesYEpilepticos />
          <DeterioroMotor />
        </AccordionContent>
      </AccordionContainer>
    </div>
  );
}

export default App;
