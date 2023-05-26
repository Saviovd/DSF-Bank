import { ResourcesStyles } from './ResourcesStyles';
import { resources } from '@/constants';
import { motion } from 'framer-motion';

const Resources = () => {

   const { title, subtitle, list } = resources

   const motionProps = (initialY: number, finalY: number) => ({
      initial: { opacity: 0, y: initialY },
      whileInView: { opacity: 1, y: finalY },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 0.8,
         delay: 0.2
      },
   });

   return (
      <ResourcesStyles id='resources'>
         <motion.div {...motionProps(100, 0)} className='container'>
            <h2 className='title'>{title}</h2>
            <h4 className='subtitle light'>{subtitle}</h4>

            <ul className="list">
               {list.map((item, i) => (
                  <li key={i} className='item'>
                     {item.icon}
                     <h2 className='item_title'>{item.title}</h2>
                     <h3 className='item_subtitle light'>{item.subtitle}</h3>
                  </li>
               )
               )}
            </ul>
         </motion.div>
      </ResourcesStyles>
   )
}

export default Resources;
