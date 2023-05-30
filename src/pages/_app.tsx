import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';


export default function MyApp({ Component, pageProps }: AppProps) {
   return (<>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
         <Component {...pageProps} />;
      </motion.div>
   </>)
}
