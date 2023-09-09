import './FeaturedJob.css';
import JobCard from './JobCard.jsx';

import previousArrow from '../../assets/icons/previous.svg';
import nextArrow from '../../assets/icons/next.svg';
import longArrow from '../../assets/icons/long-arrow.svg';

import gucciLogo from '../../assets/icons/gucci.svg';
import adidasLogo from '../../assets/icons/adidas.svg';
import fordLogo from '../../assets/icons/ford.svg';
import microsoftLogo from '../../assets/icons/microsoft.svg';
import nikeLogo from '../../assets/icons/nike.svg';


const FeaturedJob = () => {

  const featuredJobs = [
    {
      logo: gucciLogo,
      company: "Gucci",
      title: "Senior UX/UI Developer with strong Designer skills"
    },
    {
      logo: adidasLogo,
      company: "Adidas",
      title: "Junior analytic person with social skills"
    },
    {
      logo: fordLogo,
      company: "Ford",
      title: "Graphic designer with wordpress experience"
    },

    {
      logo: microsoftLogo,
      company: "Microsoft",
      title: "Frontend developer for growing marketplace"
    },
    {
      logo: nikeLogo,
      company: "Nike",
      title: "Senior UX/UI Developer with strong Designer skills"
    },
    {
      logo: gucciLogo,
      company: "Gucci",
      title: "Fontend developer for gucci pro"
    }
  ];

  return (
    <section className="featuredJob">
      <div className="featuredJob-wrapper">
        <div className="heading-container">
            <h3 className="subtitle">JOBS NEAR ME</h3>
            <h2 className="heading-v1">Featured Jobs</h2>
            <p className="para-v1">Employee and Employment Company.</p>
        </div>
        <div className="jobs-container">
          {featuredJobs && featuredJobs.map((i)=><JobCard job={i}/>)}
        </div>
        <div>
            <button>See all <img src={longArrow} alt="See all" /></button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedJob
