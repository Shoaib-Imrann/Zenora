import { motion } from 'framer-motion';

const transition = (OgComponent) => {
    return () => (
      <>
        <OgComponent />
        <motion.div
          className='fixed top-0 left-0 w-full h-screen bg-black origin-right md:origin-top flex justify-center items-center z-50'
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1.7, ease: [0.42, 1, 0.56, 1] }}
        >
          <div className="text-white text-center text-2xl">
            <img src='/apple-touch-icon.png' alt="Favicon" className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </motion.div>
        <motion.div
          className='fixed top-0 left-0 w-full h-screen bg-black origin-left md:origin-bottom flex justify-center items-center z-50'
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1.7, ease: [0.42, 1, 0.56, 1] }}
        >
          <div className="text-white text-center text-2xl">
            <img src='/apple-touch-icon.png' alt="Favicon" className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </motion.div>
      </>
    );
};

export default transition;
