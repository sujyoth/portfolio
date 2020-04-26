import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Splash from '../components/Splash';
import { useRouter } from 'next/router';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyApp = ({ Component, pageProps }) => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const router = useRouter();

  console.log("Currently on page: " + router.pathname);
  setTimeout(() => setIsSplashVisible(false), 3300);

  return (
    <AnimatePresence exitBeforeEnter>
      {router.pathname === "/" && isSplashVisible && <Splash />}
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;