'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

import styles from '../styles';

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-40px leading-[36px] text-white">Rhiana</h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">Founder | MetaMadness</p>
        </div>
        <p className="mt-[24px] font-normal sm:text-[24px] text-[12px] sm:leading-[45px] leading-[39px] text-white">
          "The metaverse is here, and it's not only transforming how we see the world but how we participate in it
          – from the factory floor to the meeting room."
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="relative flex flex-1 justify-center items-center"
      >
        <img src="/planet-09.png" alt="planet-09" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <a href="#hero">
            <img src="/stamp.png" alt="stamp" className="w-[125px] h-[125px] object-contain" />
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
