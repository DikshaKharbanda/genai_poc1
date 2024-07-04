import './Hero.css'
import arrow_btn from '../../../../assets/arrow_btn.png'
import play_icon from '../../../../assets/play_icon.png'
import pause_icon from  '../../../../assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  function scrollControl(){
    window.scrollTo({
      top:500,
      behavior:'smooth'
    })
  }
    return (
      <div className='hero'>
        <div className="hero-text">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
      <div className="hero-explore">
        <p>Fill out your details</p>
        <img src={arrow_btn} alt="" onClick={scrollControl}/>
      </div>
      </div>
    )
  }
  
  export default Hero