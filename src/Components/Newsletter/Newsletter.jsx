import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-wrapper">
            <div className="heading-container">
                <h3 className="subtitle">NEWS LETTER</h3>
                <h2 className="heading-v1">Subscribe Newsletter</h2>
            </div>
            <form className="newsletter-form">
              <input type="text" placeholder="Enter your email address" />
              <input type="submit" value="Subscribe" className="btn" />
            </form>
      </div>
    </section>
  )
}

export default Newsletter
