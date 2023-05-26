import { header } from '@/constants';
import { HeaderStyle } from './HeaderStyles';
import CreditCardComponent from './CreditCard';
import { motion } from 'framer-motion';

const Header = () => {

   const { caption, title, subtitle } = header


   const motionProps = (initialX: number, finalX: number) => ({
      initial: { opacity: 0, x: initialX },
      whileInView: { opacity: 1, x: finalX },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 1,
      },
   });

   return (
      <HeaderStyle>
         <div className="container">
            <motion.div {...motionProps(-100, 0)} className="content">
               <span className="caption">{caption}</span>
               <h1 className='title'>{title}</h1>
               <p className="subtitle">{subtitle}</p>
            </motion.div>
            <motion.div {...motionProps(100, 0)} className="card_3d">
               <CreditCardComponent />
            </motion.div>
         </div>
      </HeaderStyle>
   )
}

export default Header;
