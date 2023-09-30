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
        <div className="sm--wrapp">
          <div className="sm--text">
            <h2>FOLLOW US</h2>
            <p>Sign up to catch the latest information!</p>
          </div>
          <div className="sm--span">
            <ul className="sm--icons">
              <li><p>Official SNS</p></li>
              <li><img src={youtube} alt="" /></li>
              <li><img src={twitter} alt="" /></li>
              <li><img src={facebook} alt="" /></li>
              <li><img src={instagram} alt="" /></li>
            </ul>
          </div>
        </div>
        <a href="#" className='sm--portal'>
          <img src={portal} alt="" />
        </a>
      </div>
    </section>
  )
}
