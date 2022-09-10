import './main.scss';
import promo_bg from '../../assets/img/traveling.svg';

function Promo() {
  return (
    <section className="promo">
      <div className="container">
        <div className="promo-wrap">
          <div className="promo-info">
            <h1 className="title-h1">
              Travel <span className="txt--blue">news</span>
            </h1>
            <h3 className="title-h3">
              Read and stay up to date with the latest travel news
            </h3>
          </div>
          <div className="promo-img">
            <img src={promo_bg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
