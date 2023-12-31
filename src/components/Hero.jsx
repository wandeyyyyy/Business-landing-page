import React from 'react'
import styles from '../style'
import GetStarted from './GetStarted';
import { discount, robot } from '../assets/assets'
import {motion, useAnimation} from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const Hero = () => {
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
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
<div className={`flex-1 h-[100%]  flex-col xl:px-0 lg:pt-10 sm:px-16 px-6`}>
<div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-12'>
<img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
<p className={`${styles.paragraph} ml-2`}>
<span className='text-white'>20% </span>
Discount For {' '}
<span className='text-white'>1 Month </span>
Account
</p>
</div>
<div className='flex flex-row justify-between items-center w-full'>
<h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white'>The Next <br className='sm:block hidden'/> {" "}
<span  className='text-gradient'>
Generation
</span> {" "}
</h1>
 <div className='ss:flex hidden md:mr-4 mr-0'>
  <GetStarted/>
 </div>
</div>

<h1 className='flex-1 font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-white w-full'>
Payment Method. 
</h1>
<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
We examine annual percentage rates, annual fees. 
</p>
</div>
<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative `}>
  <motion.div
     ref={ref}
     animate={animation}
initial={{opacity:0,scale:0.8}}
  >
  <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]'/>
  </motion.div>
   <div className='absolute z-0 w-[40%] h-[35%] bottom-40 pink__gradient'/>
  {/*<div className='absolute z-[1] w-[80%] h-[80%] rounded-full top-0 white__gradient'/>*/}
<div className='absolute z-0 w-[50%] h-[50%] right-20 blue__gradient'/> 
</div>

<div className={`ss:hidden ${styles.flexCenter}`}>
<GetStarted/>
</div>
    </section>
  )

}
export default Hero