import './main.scss';
import instagram from '../../assets/img/instagram.svg';
import facebook from '../../assets/img/facebook.svg';
import twitter from '../../assets/img/twitter.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <div className="footer-social__item">
          <img className="footer-social__item--icon" src={instagram} />
        </div>
        <div className="footer-social__item">
          <img className="footer-social__item--icon" src={facebook} />
        </div>
        <div className="footer-social__item">
          <img className="footer-social__item--icon" src={twitter} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
