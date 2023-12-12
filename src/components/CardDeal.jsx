import styles, { layout } from "../style";
import Button from './Button';
import { card } from '../assets';

const CardDeal = () => {
  return (
    <div className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal
        <br className="sm:block hidden" />in few easy steps</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi tenetur earum, vitae maiores laborum odio voluptatem sapiente? Officiis, veniam.
        </p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="" className="w-[100%] 
        h-[100%]" />
      </div>
    </div>
  )
}

export default CardDeal