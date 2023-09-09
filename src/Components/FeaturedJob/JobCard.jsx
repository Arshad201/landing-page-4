import './JobCard.css';
import location from '../../assets/icons/location-2.svg';

const JobCard = ({job}) => {

  const {logo, company, title} = job;

  return (
    <div className='JobCard'>
      <div className="card-header">
        <img src={logo} alt="" />
        <div>
            <span className="company-name">{company}</span>
            <span className="postedAt">5 days ago</span>
        </div>
      </div>
      <div className="card-body">{title}</div>
      <div className="card-footer">
        <div><img src={location} alt="" />Oslo, Norway</div>
        <div>Part-Time</div>
      </div>
    </div>
  )
}

export default JobCard
