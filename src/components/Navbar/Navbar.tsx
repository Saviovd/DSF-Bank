import React from 'react'
import { NavBarStyle } from './NavbarStyles';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/constants';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {

   const [toggleMenu, setToggleMenu] = React.useState(false);

   const listMotionProps = {
      open: { opacity: 1, x: '-80%' },
      closed: { opacity: 0, x: '70%' },
   };
   const itemMotionProps = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: 50, duration: 1 }
   }

   return (
      <NavBarStyle>
         <div className='logo'>
            <Link href='/'>
               <Image src='/logo.svg' alt='DSF Bank Logo' width={70} height={35} />
            </Link>
         </div>
         <nav className='navbar'>
            {!toggleMenu ?
               <AiOutlineMenuFold className='menu_button' onClick={() => setToggleMenu(!toggleMenu)} /> :
               <AiOutlineMenuUnfold className='menu_button' onClick={() => setToggleMenu(!toggleMenu)} />}
            <motion.ul
               variants={listMotionProps}
               animate={toggleMenu ? 'open' : 'closed'}
               transition={{
                  when: 'beforeChildren',
                  staggerChildren: 0.2,
                  type: 'just',
                  duration: 0.3
               }}
               className={toggleMenu ? 'links' : 'links isMenuNotVisible'}>
               {
                  navLinks.map((link, i) => {
                     return (
                        <motion.li
                           variants={itemMotionProps}
                           onClick={() => setToggleMenu(!toggleMenu)} key={i}><a className='link_item' href={link.url}>{link.name}</a></motion.li>
                     )
                  })
               }
            </motion.ul>
         </nav>
      </NavBarStyle>
   )
}

export default Navbar;
