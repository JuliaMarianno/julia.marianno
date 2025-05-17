import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';
// import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
// import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
  // index,
  name,
  institution,
  date,
  image,
}) => (
  <div /* replace motion.div to avoid animation hiding */>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary p-5 rounded-2xl w-full'
    >
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='certification_image'
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{institution}</p>
        <p className='mt-1 text-secondary text-[14px]'>Concluído em: {date}</p>
      </div>
    </Tilt>
  </div>
);

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certifications : certifications.slice(0, 3);

  console.log("showAll?", showAll, "– displayedCerts:", displayedCerts.length);

  return (
    <>
      {/* remove motion around header for simplicity */}
      <div>
        <p className={`${styles.sectionSubText}`}>Minhas conquistas</p>
        <h2 className={`${styles.sectionHeadText}`}>Certificações.</h2>
      </div>
      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Aqui estão algumas das certificações que obtive ao longo da minha
          jornada. Cada certificação reflete meu compromisso com o aprendizado
          contínuo e a busca por excelência em diferentes áreas da tecnologia.
        </p>
      </div>
      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 h-auto overflow-visible'>
        {displayedCerts.map((certification) => (
          <CertificationCard
            key={certification.name + certification.date}
            {...certification}
          />
        ))}
      </div>
      {certifications.length > 3 && (
        <div className="w-full flex justify-center mt-8">
          <button
            className="px-6 py-2 bg-primary text-white rounded-lg shadow-md hover:bg-secondary transition"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Mostrar menos" : "Ver todos os certificados"}
          </button>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certifications, "");
