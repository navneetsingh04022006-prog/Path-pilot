import { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  return (
    <div
      className="flex flex-col items-center justify-center relative p-2 md:p-10 pt-4 md:pt-8"
      ref={containerRef}
    >
      <div
        className="w-full relative py-4 md:py-8"
        style={{
          perspective: '1000px',
        }}
      >
        <Header titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ titleComponent }) => {
  return (
    <div className="max-w-5xl mx-auto text-center relative z-10 mb-8 md:mb-12">
      {titleComponent}
    </div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000, 0 0 #0000, 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      }}
      className="max-w-5xl mx-auto h-[24rem] md:h-[36rem] w-full border-4 border-slate-300 dark:border-slate-700 p-2 md:p-4 bg-slate-900 rounded-[30px] shadow-2xl relative z-0"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-surface dark:bg-slate-900">
        {children}
      </div>
    </motion.div>
  );
};

export default ContainerScroll;
