import Image from 'next/image';
import { TestimonialStyle } from  './TestimonialsStyles';
import { testimonials } from '@/constants';
import { motion } from 'framer-motion';

const Testimonials = () => {

   const { title, list } = testimonials

   const motionProps = (initialX: number, finalX: number, index: number) => ({
      initial: { opacity: 0, x: initialX },
      whileInView: { opacity: 1, x: finalX },
      viewport: { once: true },
      transition: {
         type: 'spring',
         bounce: 0.4,
         duration: 1,
         delay: 0.2 * index
      },
   });

   return (
      <TestimonialStyle id='testimonials'> 
         <motion.h2 {...motionProps(100, 0, 1)} className='title'>{title}</motion.h2>
         <ul className='list'>
            {list.map((item, i) => (
               <motion.li {...motionProps(-100, 0, i)} key={i}className='item'>
                  <div className='heading'>
                     <Image className='avatar' src={item.avatar} alt={item.name} width={74} height={74}/>
                     <div className='about'>
                        <h3 className="name">{item.name}</h3>
                        <span className="role">{item.role}</span>
                     </div>
                  </div>
                  <p className='comment'>{item.comment}</p>
               </motion.li>
            ))}
         </ul>
      </TestimonialStyle>
   )
}

export default Testimonials;
