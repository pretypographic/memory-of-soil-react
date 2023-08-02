/* eslint-disable jsx-a11y/anchor-is-valid */
function Popup() {
  return (
    <section className="popup">
      <div className="language language_disabled">
        <a href="#" className="language__option language__option_active">Rus</a>
        <a href="#" className="language__option">Eng</a>
      </div>
      {/* <!-- опции языка --> */}
      <template id="videoTemplate">
        <video controls className="popup__video">
          <source src="" type="video/mp4" id="source" />
          Ваш браузер не поддерживает встроенные видео :(
        </video>
      </template>
      {/* <!-- медиа --> */}
      <div className="popup__image"></div>
      <p className="popup__text"></p>
    </section>
    // {/* <!-- попап --> */ }
  )
};

export { Popup };
