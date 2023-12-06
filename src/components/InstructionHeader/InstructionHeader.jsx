import { useState, useContext, useEffect } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { RingContext } from "../../contexts/RingContext";

import { Language } from "../Language/Language";
import { Button } from "../Button/Button"

function InstructionHeader({ instructionIsOpen, switchInstructionIsOpen, executeBlackOut }) {
  const { languageContext } = useContext(LanguageContext);
  const { setRingContext } = useContext(RingContext);
  const [languageConfig, setLanguageConfig] = useState({
    instruction: "о проекте",
    rings: "кольца",
  });

  function learnInstruction() {
    switchInstructionIsOpen(true);
    executeBlackOut(true);
    setRingContext(true);
  }

  function closeInstruction() {
    switchInstructionIsOpen(false);
    executeBlackOut(false);
    setRingContext(false);
  }

  useEffect(() => {
    if (languageContext === "rus") {
      setLanguageConfig(prevConfig => ({
        ...prevConfig,
        instruction: "о проекте",
        rings: "кольца",
      }));
    } else if (languageContext === "eng") {
      setLanguageConfig(prevConfig => ({
        ...prevConfig,
        instruction: "about",
        rings: "rings",
      }));
    }
  }, [languageContext]);

  return (
    <header className="instruction-header">
      <Language />
      <Button
        instructionState={instructionIsOpen}
        learnInstruction={learnInstruction}
        closeInstruction={closeInstruction}
        languageConfig={languageConfig} />
    </header>
  )
};

export { InstructionHeader };