import '../../css/intro.css'
import logo20 from '../../assets/imgs/logo_mh20.png'

export default function Intro() {
  return (
    <section className="intro">
      <div className="intro--logo">
        <img src={logo20} alt="" />
        <p>March 2024 marks the 20th anniversary of the Monster Hunter series!</p>
      </div>
      
    </section>
  )
}