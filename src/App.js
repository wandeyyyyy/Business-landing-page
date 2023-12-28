import React from 'react'
import styles from './style'
import {NavBar, Hero, Stats,Clients,Business, Billing,CardDeal,Testimonials,CTA,Footer } from './components';
const App = () => (
    <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
<NavBar/>
</div>
    </div>
    <div className={`bg-primary ${styles.flexCenter}`}>
<div className={`${styles.boxWidth}`}>
   <Hero/>
</div>
    </div>
    <div className={`bg-primary ${styles.flexCenter} ${styles.paddingX}`}>
<div className={`${styles.boxWidth}`}>
<Stats/>
<Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Clients/>
<CTA/>
<Footer/>

</div>
    </div>
    </div>
  )

export default App