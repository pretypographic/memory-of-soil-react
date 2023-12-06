import { Outlet } from "react-router-dom";
import { InstructionHeader } from "../InstructionHeader/InstructionHeader";
import { Instruction } from "../Instruction/Instruction";
import { Sound } from "../Sound/Sound";

function MemoriesEcho({ instructionIsOpen, switchInstructionIsOpen, executeBlackOut }) {

  return (
    <div div className='memories-echo'>
      <InstructionHeader
        instructionIsOpen={instructionIsOpen}
        switchInstructionIsOpen={switchInstructionIsOpen}
        executeBlackOut={executeBlackOut} />
      <Instruction
        instructionIsOpen={instructionIsOpen} />

      <Outlet />

      <Sound />
    </div>
  );
}

export { MemoriesEcho }
