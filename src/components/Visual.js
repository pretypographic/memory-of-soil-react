import { Journals } from './Journals';

function Visual({ frameSource }) {


  return (
    <div className="main">
      <section class="visual">
        {
          frameSource.images && frameSource.images.map((image, index) => (
            <div class="visual__block" key={index}>
              <div class="visual__image" style={image} />
            </div>
          ))
        }
        {/* <!-- визуальная часть --> */}
        <Journals />
        {/* <!-- журналы --> */}
      </section>
    </div>
  )
};

export { Visual };
