
function Plug({ blackOut }) {
  return (
    <div className={`blackout ${blackOut && 'blackout_seen'}`}></div>
  )
};

export { Plug };
