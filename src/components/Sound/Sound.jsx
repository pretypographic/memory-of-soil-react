function Sound({ audio }) {
  return (
    <audio
      className="sound"
      src={audio}
      loop />
  )
};

export { Sound };