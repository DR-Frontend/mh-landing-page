import '../../css/intro.css'
import logo20 from '../../assets/imgs/logo_mh20.png'
import downArrow from '../../assets/imgs/icon_arrow_scroll.png'

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro--container">
        <div className="intro--logo">
          <img src={logo20} alt="" />
          <p>March 2024 marks the 20th anniversary of the Monster Hunter series!</p>
        </div>

        <div className="scroll">
          <div className="scroll--text">
            <p>SCROLL</p>
          </div>
          <div className='scroll--arrow'>
            <img src={downArrow} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}