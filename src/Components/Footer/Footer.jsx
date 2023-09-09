import './Footer.css';
import logo from '../../assets/images/logo.svg';
import twitter from '../../assets/icons/twitter.svg';
import fb from '../../assets/icons/fb.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-wrapper">
            <div className="footer-widgets">
            <div className="widget">
                <a href="/">
                    <img src={logo} alt="logo" />
                </a>
                <div className="social-icon-wrapper">
                    <a href="/"><img src={twitter} alt="twitter" /></a>
                    <a href="/"><img src={fb} alt="facebook" /></a>
                    <a href="/"><img src={linkedin} alt="linkedin" /></a>
                </div>
                <span className="first-widget-text">Follow our social media.</span>
            </div>
            <div className="widget">
                <h3 className="widget-heading">Support</h3>
                <a href="/">FAQ</a>
                <a href="/">How it Works</a>
                <a href="/">Features</a>
                <a href="/">Conact</a>
            </div>
            <div className="widget">
                <h3 className="widget-heading">Links</h3>
                <a href="/">Facebook</a>
                <a href="/">Instagram</a>
                <a href="/">Youtube</a>
                <a href="/">Twitter</a>
            </div>
            <div className="widget">
                <h3 className="widget-heading">Get in Touch</h3>
                <p className="last-widget-text">
                    123 456 7789 10
                    <br/>007 popie, New City, USA
                </p>
            </div>
            </div>
            <div className="bottom-footer">
                <span>Design with by UI hut. All Rights Reserved</span>
                <span>Besnik.com 2021</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer
