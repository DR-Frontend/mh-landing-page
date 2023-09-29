import '../../css/socialmedia.css'
import youtube from '../../assets/imgs/youtube_w.svg'
import twitter from '../../assets/imgs/twitter_w.svg'
import facebook from '../../assets/imgs/facebook_w.svg'
import instagram from '../../assets/imgs/instagram_w.svg'
import portal from '../../assets/imgs/bnr_portal-en.jpg'

export default function Socialmedia() {
  return (
    <section className="sm">
      <div className="sm--container">
        <h2>FOLLOW US</h2>
        <p>Sign up to catch the latest information!</p>
        <div className="sm--span">
          <p>Official SNS</p>
          <div className="sm--icons">
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <a href="#" className='sm--portal'>
          <img src={portal} alt="" />
        </a>
      </div>
    </section>
  )
}
