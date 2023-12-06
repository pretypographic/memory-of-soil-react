
import SOUND_ON from "../../vendor/sound_bn443stqyjdr.svg";
// import SOUND_OFF from "../../vendor/no_sound_s3c0b3vd03i2.svg";
import WINDDOW from "../../vendor/share_1r3neaddirsq.svg";

function Blind({ blindOpen, handleStartClick }) {
  return (
    <div className={`blind ${blindOpen && "blind_opened"}`}>
      <section className="blind__section" id="first-step">
        <div className="blind__group">
          <button className="blind__button"><img src={SOUND_ON} alt="" /></button>
          <button className="blind__button"><img src={WINDDOW} alt="" /></button>
        </div>
        <p className="blind__text">For better immersion, we recommend using
          your laptop in full screen mode and your headphones. You can regulate
          sound in the bottom left corner.</p>
        <a className="blind__link" href="#second-step">Дальше</a>
      </section>

      <section className="blind__section" id="second-step">
        <div className="blind__image" />
        <p className="blind__text">Please rotate your device</p>
        <a className="blind__link" href="#third-step">Дальше</a>
      </section>

      <section className="blind__section" id="third-step">
        <p className="blind__text">Our story is nonlinear. You are free to
          explore the chapters (rings) in any order. Have a nice journey!</p>
        <button className="blind__link" onClick={handleStartClick}>Начать</button>
      </section>
    </div>
  )
};

export { Blind };