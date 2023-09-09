import './HowItWorks.css';
import cardImage1 from '../../assets/icons/register.svg';
import cardImage2 from '../../assets/icons/resume.svg';
import cardImage3 from '../../assets/icons/apply.svg';

const HowItWorks = () => {
  return (
    <section className='howItWorks'>
        <div className="howItWorks-wrapper">
            <div className="heading-container">
                <h3 className="subtitle">HOW IT WORKS</h3>
                <h2 className="heading-v1">Simple steps to get your next job</h2>
            </div>
            <div className="card-container">
                <div className="card">
                    <div className="image-wrapper">
                        <img src={cardImage1} alt="register" />
                        <div className="animated-circle purple"></div>
                    </div>
                    <h4 className="card-heading">Register Your Account</h4>
                    <p className="card-desc">Capitalize on low hanging fruit to identify added Override the digital.</p>
                </div>
                <div className="card">
                    <div className="image-wrapper">
                        <img src={cardImage2} alt="register" />
                        <div className="animated-circle yellow"></div>
                    </div>
                    <h4 className="card-heading">Update Resume</h4>
                    <p className="card-desc">Capitalize on low hanging fruit to identify added Override the digital.</p>
                </div>
                <div className="card">
                    <div className="image-wrapper">
                        <img src={cardImage3} alt="register" />
                        <div className="animated-circle orange"></div>
                    </div>
                    <h4 className="card-heading">Apply for News Jobs</h4>
                    <p className="card-desc">Capitalize on low hanging fruit to identify added Override the digital.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
