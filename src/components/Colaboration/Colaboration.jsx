import '../../css/colaboration.css'
import msi from '../../assets/imgs/bnr_msi_en.jpg'
import msiMobile from '../../assets/imgs/bnr_msi_en-sp.jpg'

export default function Colaboration() {
  return (
    <section className="project">
      <div className="project--msi">
        <h2>20th ANNIVERSARY PROJECT</h2>
        <p>New Anniversary Events and Items</p>
        <a href="#">
          <picture>
            <source className='project--imgPc' srcSet={msi} media='(width >= 768px)'/>
            <img src={msiMobile} alt="" />
          </picture>
        </a>
        <p>Plus, look out for other exciting campaigns planned for the 20th anniversary!</p>
      </div>
    </section>
  )
}