import "./Category.css";
import cardImage1 from "../../assets/icons/pen.svg";
import cardImage2 from "../../assets/icons/Work.svg";
import cardImage3 from "../../assets/icons/Setting.svg";
import cardImage4 from "../../assets/icons/Send.svg";

const Category = () => {
  return (
    <section className='category'>
      <div className="category-wrapper">
            <div className="heading-container">
                <h3 className="subtitle">99+ JOBS CATEGORY</h3>
                <h2 className="heading-v1">Choose by category</h2>
                <p className="para-v1">You do not have the right to remain silent… let us know what it takes to challenge you</p>
            </div>
            <div className="category-card-container">
              <div className="card">
                <div className="image-wrapper">
                  <img src={cardImage1} alt="design" />
                  <div className="animated-square green"></div>
                </div>
                <h3 className="card-title">Design</h3>
                <p className="card-desc">310 Vacancy</p>
              </div>
              <div className="card">
                <div className="image-wrapper">
                  <img src={cardImage2} alt="design" />
                  <div className="animated-square orange"></div>
                </div>
                <h3 className="card-title">Business</h3>
                <p className="card-desc">310 Vacancy</p>
              </div>
              <div className="card">
                <div className="image-wrapper">
                  <img src={cardImage3} alt="design" />
                  <div className="animated-square yellow"></div>
                </div>
                <h3 className="card-title">Development</h3>
                <p className="card-desc">310 Vacancy</p>
              </div>
              <div className="card">
                <div className="image-wrapper">
                  <img src={cardImage4} alt="design" />
                  <div className="animated-square purple"></div>
                </div>
                <h3 className="card-title">Communication</h3>
                <p className="card-desc">310 Vacancy</p>
              </div>
            </div>
      </div>
    </section>
  )
}

export default Category
