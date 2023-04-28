import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiência
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position=" Desenvolvedor Full Stack"
            company="RC Trade Marketing"
            companyLink="https://www.rctrademkt.com.br/"
            time="2022-Atualmente"
            address="São Paulo, SP"
            work="Criação de campanhas para redes varejistas, com as tecnologias: JavaScript, Bootstrap, PHP e
            MySQL. Atividades: Desenvolver campanhas web, Manutenção de API, Manipulação de dados com banco relacional"
          />

          <Details
            position="Analista de Sistemas em Automação"
            company="Inmetrics"
            companyLink="https://inmetrics.com.br/"
            time="2021-2022"
            address="São Paulo, SP"
            work="Trabalhei com testes automatizados para aplicações web e mobile (Android/iOS). Execução do trabalho era composta de: Automação de Testes (Java); Quality Assurance (QA);Selenium; BDD; Metodologia Ágil; Jira; Confluence; Kanban."
          />

          <Details
            position="Autônomo"
            company="MEI"
            companyLink="#"
            time="2027-2021"
            address="São Paulo, SP"
            work="Microempreendedor no ramo de transporte de carga, responsável pelo gerenciamento geral
            do próprio negócio, criação da logística e captação de clientes."
          />

          <Details
            position="Analista de Desenvolvimento de Sistemas"
            company="G&P Projetos e Sistemas"
            companyLink="https://www.gpnet.com.br/"
            time="2013-2016"
            address="São Paulo, SP"
            work="Realziava suporte de TI para a SME-SP, com as responsabilidades de: Gerenciamento e controle de chamado­; Organização estratégica; Manutenção de Hardware; Estoque de peças, Help e Service Desk"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
