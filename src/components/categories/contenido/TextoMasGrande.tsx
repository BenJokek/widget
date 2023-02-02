import Button from "../../Button";
import { useState } from "react";

const TextoMasGrande = () => {
  let everything = Array.from(document.getElementsByTagName("div") as HTMLCollectionOf<HTMLElement>);
  console.log(everything)

  const clickHandle = () => {
    everything.forEach((element) => {
      console.log("DAAAA " + element)
      element.style.padding = "1000px"
      element.style.margin = "1000px"
      element.style.backgroundColor = "red"
    });
  }

  return (
    <Button
      image={require("../../../assets/img/texto-mas-grande.png")}
      name="Texto Más Grande"
      onClick={clickHandle}
    />
  );
};

export default TextoMasGrande;
