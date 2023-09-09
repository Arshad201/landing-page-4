import './Testimonials.css';
import Slider from './Slider.jsx';
import image from '../../assets/images/testimonial-image.png';


const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className="testimonial-wrapper">
        <div className="heading-container">
            <h3 className="subtitle">TESTIMONIALS</h3>
            <h2 className="heading-v1">What our customer say</h2>
        </div>
        <div className="testimonial">
            <div className="image-wrappper">
                <img src={image} alt="testimonial" />
            </div>
            <Slider/>
        </div>
      </div>
      
    </section>
  )
}

export default Testimonials
