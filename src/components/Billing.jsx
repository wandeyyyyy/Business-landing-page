import React from 'react'
import styles, {layout} from '../style'
import { apple, bill, google } from '../assets/assets'
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

  
const Billing = () => {

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
   <section id='product' className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
  <motion.div
  ref={ref}
  animate={animation}
  initial={{opacity:0,scale:0.8}}>
    
<img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
</motion.div>
<div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
<div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>

</div>
<div className={`${layout.sectionInfo} w-full pt-10 lg:pt-20`} >
  <h2 className={`${styles.heading2}`}>Easily control your <br className='sm:block hodden'/> billing & invoicing.

  </h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

<div className='flex  flex-row flex-wrap sm:mt-10 mt-6'>
<img src={apple} alt='apple_play' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
<img src={google} alt='google_play' className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
</div>
</div>
   </section>
  )
}

export default Billing