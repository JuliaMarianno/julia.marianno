import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { journeys } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const JourneyCard = ({ journey }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={journey.date}
      iconStyle={{
        background: journey.iconBg,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%", // Garante que o contêiner seja circular
        overflow: "hidden", // Evita que a imagem ultrapasse os limites do círculo
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={journey.icon}
            alt={journey.company_name}
            style={{
          width: "70%",
          height: "70%",
          objectFit: "cover",
          borderRadius: "50%",
          }}
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{journey.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {journey.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {journey.points.map((point, index) => (
          <li
            key={`journey-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Journey = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Conheça a minha
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
           Trajetoria.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {journeys.map((journey, index) => (
            <JourneyCard
              key={`journey-${index}`}
              journey={journey}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Journey, "work");