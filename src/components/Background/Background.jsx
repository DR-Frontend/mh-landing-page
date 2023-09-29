import '../../css/background.css'
import warriors from '../../assets/imgs/mv.jpg'
import warriorsMobile from '../../assets/imgs/mv-sp.jpg'

export default function Background() {
  return (
    <div className="bkg--picture">
      <picture>
        <source srcSet={warriors} media="(width >= 768px)"/>
        <img src={warriorsMobile} alt="" />
      </picture>
    </div>
  )
}
