
function Plug({ blackout }) {
  return (
    <div className={`blackout ${blackout && 'blackout_seen'}`}></div>
  )
};

export { Plug };
