import Link from 'next/link';
import { FooterStyle } from './FooterStyles';
import { footer } from '@/constants';
import Image from 'next/image';

const Footer = () => {

   const { contact, copy, description, links, social } = footer

   return (
      <FooterStyle>
         <div className="container1">
            <div >
               <Link href="/">
                  <Image src='/logo.svg' alt='DSF BAnk Logo' width={50} height={50} />
               </Link>
               <p className='slogan'>
                  {description}
               </p>
            </div>
            <ul className='list'>
               <p className='links'>Links úteis</p>
               {links.map((link, i) => (
                  <li key={i} className="item">
                     <Link href={link.url}> {link.name}</Link>
                  </li>
               ))}
            </ul>
            <ul className='list'>
               <p className='links'>Contato</p>

               {contact.map((item, i) => (
                  <li key={i} className="item">
                     {item}
                  </li>
               ))}
            </ul>
         </div>
         <div className="container2">
            <span className='copy'>
               {copy}
            </span>
            <ul className='contact_list'>
               {social.map((item, i) => (
                  <li key={i} className="item">
                     <Link href={item.url}> {item.component}</Link>
                  </li>
               ))}
            </ul>
         </div>
      </FooterStyle>
   )
}

export default Footer;
