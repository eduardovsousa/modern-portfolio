import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Educação
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bacharelado em Sistemas de Informação"
            time="2021-2024"
            place="São Paulo, SP"
            info="Graduação presencial. Abrangendo todas as áreas de tecnologia de forma atual.
            Capacitando o raciocínio lógico, gestão de TI, redes/cloud, desenvolvimento de aplicações,
            banco de dados, desenvolvimento multiplataforma, entre outros."
          />
          <Details
            type="OneBitCode - Desenvolvedor Full Stack"
            time="80h"
            place="Remoto"
            info="Curso online de JavaScript, Git e GitHub, SASS, Bootstrap, React, Node.js, TypeScript, MongoDB e
            Sequelize."
          />
          <Details
            type="JStack - Desenvolvedor Full Stack JavaScript"
            time="Cursando"
            place="Remoto"
            info="Curso online de React, React Native, Node.js, TypeScript, Docker, com projetos e aplicações reais."
          />
          <Details
            type="Santander Becas - Santander Bootcamp Full Stack Developer 2022"
            time="120h"
            place="Remoto"
            info="Bootcamp voltado para desenvolvimento web com HTML, CSS, Java e Spring."
          />
          <Details
            type="DIO - Linux Experience"
            time="42h"
            place="Remoto"
            info="Bootcamp voltado para o uso do S.O Linux via linha de comando, sem a utilização de uma interface."
          />
          <Details
            type="Rosetta Stone - Inglês"
            time="Reconhecimento"
            place="Remoto"
            info="Certificado de inglês intermediário avançado (C1). Obtido em uma avaliação de processo seletivo. "
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
