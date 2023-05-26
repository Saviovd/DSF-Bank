import { GlobalStyle } from '@/styles/globals'
import Head from 'next/head';
import Navbar from '@/components/Navbar/Navbar';
import Header from '@/components/Header/Header';
import Experience from '@/components/Experience/Experience';
import Resources from '@/components/Resources/Resources';
import Rewards from '@/components/Rewards/Rewards';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export default function Home() {
   return (<>
      <GlobalStyle />
      <Head>
         <title>DSF Bank | Home</title>
         <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Navbar />
      <Header />
      <main>
         <Experience />
         <Resources />
         <Rewards /> 
         <Testimonials /> 
      </main>
      <Footer />
   </>)
}
