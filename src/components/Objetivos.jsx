import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const objetivos = [
  {
    titulo: "Crescimento Profissional",
    descricao:
      "Aprimorar constantemente minhas habilidades técnicas em desenvolvimento web, buscando especialização em tecnologias modernas de Front-End e, futuramente, atuar também como Full Stack.",
    icone: "🚀",
  },
  {
    titulo: "Contribuição em Equipe",
    descricao:
      "Participar de projetos colaborativos, agregando valor com minhas soft skills desenvolvidas no RH e aprendendo com profissionais experientes da área de tecnologia.",
    icone: "🤝",
  },
  {
    titulo: "Impacto Positivo",
    descricao:
      "Utilizar a tecnologia para criar soluções que facilitem a vida das pessoas, promovendo acessibilidade, inclusão e inovação.",
    icone: "🌎",
  },
  {
    titulo: "Aprendizado Contínuo",
    descricao:
      "Manter o compromisso com o aprendizado contínuo, acompanhando tendências do mercado e buscando certificações relevantes.",
    icone: "📚",
  },
];

const ObjetivoCard = ({ objetivo, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.8)}
    className="bg-tertiary p-6 rounded-2xl shadow-card flex flex-col items-start gap-3 w-full sm:w-[350px] min-h-[180px]"
  >
    <span className="text-3xl">{objetivo.icone}</span>
    <h3 className="text-white font-bold text-[22px]">{objetivo.titulo}</h3>
    <p className="text-secondary text-[15px]">{objetivo.descricao}</p>
  </motion.div>
);

const Objetivos = () => (
  <section className="w-full">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Conheça meus</p>
      <h2 className={styles.sectionHeadText}>Objetivos.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      Aqui compartilho meus principais objetivos profissionais e pessoais, que me motivam diariamente a evoluir na área de tecnologia.
    </motion.p>
    <div className="mt-12 flex flex-wrap gap-8 justify-center">
      {objetivos.map((objetivo, idx) => (
        <ObjetivoCard key={objetivo.titulo} objetivo={objetivo} index={idx} />
      ))}
    </div>
  </section>
);

export default SectionWrapper(Objetivos, "objetivos");