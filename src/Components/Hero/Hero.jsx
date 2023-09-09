import "./Hero.css";
import creativeO from '../../assets/icons/creativeO.svg';
import searchIcon from '../../assets/icons/search.svg';
import locationIcon from '../../assets/icons/location.svg';
import carotIcon from '../../assets/icons/carot.svg';
import { useState } from "react";


const Hero = () => {

  const [jobType, setJobType] = useState("Remotely")
  const [list, setList] = useState(false);

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-text-content">
            <h1>The home of your dream j<span><img src={creativeO} alt="" /></span>b</h1>
            <p className="para-v1">You do not have the right to remain silent… let us know what it takes to challenge you</p>
        </div>
        <div className="search-bar-wrapper">
          <div className="search-bar">
            <div className="input-group">
              <div><img src={searchIcon} alt="search icon" /></div>
              <input type="search" placeholder="Job Title or keyword" />
            </div>
            <div className="input-group">
              <div><img src={locationIcon} alt="search icon" /></div>
              <input type="search" placeholder="Location" />
            </div>
            <div className="select-wrapper">
              <span className="selected-text" onClick={()=>setList(!list)} > {jobType} <img src={carotIcon} alt="bottom-arrow" /></span>
              {list && <ul className="option-list">
                <li className={`option ${jobType === 'Remotely' && 'active-option'}`} onClick={()=>setJobType("Remotely")}>Remotely</li>
                <li className={`option ${jobType === 'Hybrid' && 'active-option'}`} onClick={()=>setJobType("Hybrid")}>Hybrid</li>
                <li className={`option ${jobType === 'In Office' && 'active-option'}`} onClick={()=>setJobType("In Office")}>In Office</li>
              </ul>}
            </div>
          </div>
          <button>Search job</button>
        </div>
        <div className="trending-searches-wrapper">
          <h2>Trending searches</h2>
          <div className="trending-searches">
            <a href="/">Remote job</a>
            <a href="/">UI/UX Design</a>
            <a href="/">Product Design</a>
            <a href="/">Development</a>
            <a href="/">Work From Home</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
