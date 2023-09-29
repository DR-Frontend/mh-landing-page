import "../../css/message.css";
import arrowDown from '../../assets/imgs/icon_arrow_scroll.png'

export default function Message() {
  return (
    <section className="message">
      <div className="message--container">
        <h2>MESSAGE</h2>
        <p className="text">
          Counting Down to the Monster Hunter Series 20th Anniversary<br /> Dear
          intrepid hunters, <br className='hide--mb'/>The Monster Hunter series will celebrate its 20th
          anniversary in March 2024. <br />
          We on the Monster Hunter team would like to extend our heartfelt
          gratitude to each and every one of our players. <br />
          We have only been able to reach this significant milestone thanks to
          your support.
        </p>
        <p className="text">
          In the first installment in 2004, players could wield five different
          weapons and set out from two settlements: Kokoto and Minegarde. Since
          then, the long journey over the past two decades has seen hunters
          traverse snowy mountains, the deep sea floor, ancient ruins, and
          undiscovered continents. <br />
          We are absolutely overwhelmed by the love and enthusiasm you have all
          poured into the series over the years. <br />
          Your valuable feedback and contributions have consistently aided us in
          adding user-tailored updates and developing even better gaming
          experiences with each new title.
        </p>
        <p className="text">
          Monster Hunter: World managed to resonate with people all over the
          world. <br />
          Even though the pandemic prevented us from meeting with many of you
          directly, <br className='hide--mb'/>you have sent us so many warm messages online. <br />
          We cannot thank all of you enough for all that you have given to the
          series.
        </p>
        <p className="text">
          With these 20 years of success behind us, we hope to ride this
          momentum and bring you bigger, better, and even more exciting hunting
          experiences that will thrill and surprise you. <br />
          We invite you, dear hunters, to join us on the journey ahead.
        </p>
        <p className="text">Happy Hunting!</p>
        <p className="text">The Monster Hunter Team</p>
      </div>
      <div className="message--arrow">
        <img src={arrowDown} alt="" />
      </div>
    </section>
  );
}
