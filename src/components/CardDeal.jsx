import React from 'react'
import styles,{layout} from '../style'
import {card} from '../assets/assets'
import Button from './Button'
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const CardDeal = () => {
  const {ref, inView} = useInView({ threshold: 0.3 });
  const animation = useAnimation()
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity:1,
        transition: {
         
          duration: 1.5,
          // bounce: 0.3,
          // damping: 10,
        },
      });
    } else {
      animation.start({
      scale: 0.5,
    opacity:1,
    transition:{
      duration:1,
    }
      });
    }
  }, [inView, animation]);
  return (
   <section className={layout.section}>
<div className={`${layout.sectionInfo} pt-10 lg:pt-20`}>
<h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden'/>in few easy steps.</h2>
<p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
</p>
<Button styles="mt-10"/>
</div>
<div className={layout.sectionImg}>
  <motion.div
  ref={ref}
  animate={animation}
  initial={{opacity: 0, scale: 0.8}}>
<img src={card} alt='card' className='w-[100%] h-[100%]'/>
</motion.div>
</div>
   </section>
  )
}

export default CardDeal