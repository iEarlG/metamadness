'use client';

import { motion } from 'framer-motion';

import { staggerContainer, fadeIn } from '../utils/motion';
import { TitleText, TypingText } from '../components';

import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="world">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="People around you" textStyles="text-center" />
      <TitleText title={(
        <>Track friends around you and invite them to
          play together in the same world.
        </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people-01" className="w-full h-full" />
        </div>
        <div className="absolute top-20 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-02.png" alt="people-02" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people-03" className="w-full h-full" />
        </div>
        <div className="absolute left-[65%] bottom-[65%] right-[20%] w-[10vh] h-[10vh] p-[6px] rounded-lg bg-[#5D6680]">
          <img src="Map1.png" alt="map1" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[20%] right-[10%] w-[10vh] h-[10vh] p-[6px] rounded-lg bg-[#5D6680]">
          <img src="Map2.png" alt="map2" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
