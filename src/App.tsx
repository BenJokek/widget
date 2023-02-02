import "./App.css";
import Title from "./components/Title";
import ResetSettings from "./components/ResetSettings";
import AccordionContainer from "./components/AccordionContainer";
import Accordion from "./components/Accordion";
// Profiles
import Ceguera from "./components/categories/perfiles-de-accesibilidad/Ceguera";
import TDAH from "./components/categories/perfiles-de-accesibilidad/TDAH";
import Dislexia from "./components/categories/perfiles-de-accesibilidad/Dislexia";
import Daltonismo from "./components/categories/perfiles-de-accesibilidad/Daltonismo";
import DificultadesVisuales from "./components/categories/perfiles-de-accesibilidad/DificultadesVisuales";
import CognitivoYAprendizaje from "./components/categories/perfiles-de-accesibilidad/CognitivoYAprendizaje";
import ConvulsionesYEpilepticos from "./components/categories/perfiles-de-accesibilidad/ConvulsionesYEpilepticos";
import DeterioroMotor from "./components/categories/perfiles-de-accesibilidad/DeterioroMotor";
// Color
import Contraste from "./components/categories/color/Contraste";
import Saturacion from "./components/categories/color/Saturacion";
import ColorTexto from "./components/categories/color/ColorTexto";
// Contenido
import TextoMasGrande from "./components/categories/contenido/TextoMasGrande";
import EspaciadoDeTexto from "./components/categories/contenido/EspaciadoDeTexto";
import DislexiaFriendly from "./components/categories/contenido/DislexiaFriendly";
import ResaltarTexto from "./components/categories/contenido/ResaltarTexto";
import DetenerAnimaciones from "./components/categories/contenido/DetenerAnimaciones";
// Navegación
import Cursor from "./components/categories/navegacion/Cursor";
import ReglaDeLectura from "./components/categories/navegacion/ReglaDeLectura";
import DestacarEnlaces from "./components/categories/navegacion/DestacarEnlaces";

function App() {
  return (
    <div className="App">
      <Title />
      <ResetSettings />
      <AccordionContainer>
        <Accordion name="Perfiles de accesibilidad">
          <Ceguera />
          <TDAH />
          <Dislexia />
          <Daltonismo />
          <DificultadesVisuales />
          <CognitivoYAprendizaje />
          <ConvulsionesYEpilepticos />
          <DeterioroMotor />
        </Accordion>
        <Accordion name="Color">
          <Contraste />
          <Saturacion />
          <ColorTexto />
        </Accordion>
        <Accordion name="Contenido">
          <TextoMasGrande />
          <EspaciadoDeTexto />
          <DislexiaFriendly />
          <ResaltarTexto />
          <DetenerAnimaciones />
        </Accordion>
        <Accordion name="Navegación">
          <Cursor />
          <ReglaDeLectura />
          <DestacarEnlaces />
        </Accordion>
      </AccordionContainer>
    </div>
  );
}

export default App;
