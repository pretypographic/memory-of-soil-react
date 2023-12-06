import { Pensieve } from "../Pensieve/Pensieve";
import { Plug } from "../Plug/Plug";

function MemoryRings({ generateAnimationStyles, clearAnimationStyles, executeBlackOut, blackOut }) {

  return (
    <>
      <Pensieve
        generateAnimationStyles={generateAnimationStyles}
        clearAnimationStyles={clearAnimationStyles}
        executeBlackOut={executeBlackOut} />

      <Plug
        blackOut={blackOut} />
    </>
  )
};

export { MemoryRings }