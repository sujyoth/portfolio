import React from 'react';
import { AnimatePresence } from 'framer-motion';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}