import EarthComponent from './Earth';
import { RewardStyle } from './RewardsStyles';
import { rewards } from '@/constants';
import { motion } from 'framer-motion';

const Rewards = () => {

   const { title, list } = rewards

   const motionProps = (initialX: number, finalX: number) => ({
      initial: { opacity: 0, x: initialX },
      whileInView: { opacity: 1, x: finalX },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 1,
         delay: 0.2
      },
   });

   return (
      <RewardStyle id='rewards'>
         <div className='content'>
            <motion.h2 {...motionProps(-100, 0)} className='title'>{title}</motion.h2>

            {list.map((item, i) => (
               <motion.div {...motionProps(-100, 0)} className='item' key={i}>
                  <h3 className='item_title'>{item.title}</h3>
                  <p className='light'>{item.subtitle}</p>
               </motion.div>
            ))}
         </div>
         <motion.div {...motionProps(100, 0)} className="planet_3d">
            <EarthComponent />
         </motion.div>
      </RewardStyle>
   )
}

export default Rewards;
