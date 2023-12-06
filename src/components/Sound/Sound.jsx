function Sound({ audio }) {
  return (
    <audio
      className="sound"
      src={audio}
      controls
      loop />
  )
};

export { Sound };