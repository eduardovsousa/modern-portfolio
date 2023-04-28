import Head from "next/head";
import React from "react";
import { titleHead } from ".";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

import project1 from "../../public/images/projects/project1.png";
import project2 from "../../public/images/projects/project2.png";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.jpg";
import project5 from "../../public/images/projects/project5.png";
import project6 from "../../public/images/projects/project6.png";
import project7 from "../../public/images/projects/project7.png";
import project8 from "../../public/images/projects/project8.png";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <div className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
    ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[100.8%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="text-lg font-semibold underline md:text-base"
          >
            Demo
          </Link>
          <Link href={github} target={"_blank"} className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>{titleHead}Projetos</title>
        <meta name="EvS Developer" content="Projetos" />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="A imaginação supera o conhecimento!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Meu Portfólio"
                img={project1}
                summary="Site usado como portfólio. Visite!! :)"
                link="https://evsdeveloper.vercel.app/"
                github="/https://github.com/eduardovsousa"
                type="Projeto em destaque"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfólio Landing Page"
                img={project2}
                summary="Porfólio simples feito com React, TypeScript e styled-components."
                link="/"
                github="https://github.com/eduardovsousa/simple-portfolio"
                type="Projeto em destaque"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SpaceX Page"
                img={project3}
                summary="Site criado usando como inspiração a página do SpaceX, com HTML, CSS e Bootstrap."
                link="https://clone-spacex-by-evs.netlify.app/"
                github="https://github.com/eduardovsousa/Clone-SpaceX"
                type="Projeto em destaque"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="WaiterApp"
                img={project4}
                summary="Um projeto que tem como finalidade auxiliar restaurantes a controlar seus pedidos através de um app. Onde é possível realizar os pedidos e automaticamente serem enviados para um dashboard web, sendo tudo em tempo real."
                link="https://www.linkedin.com/posts/eduardovsousa_react-node-mongodb-activity-7036386325993861120-kodA?utm_source=share&utm_medium=member_desktop"
                github="https://github.com/eduardovsousa/WaiterApp"
                type="Projeto em destaque"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Gesture Controller"
                img={project5}
                summary="Projeto utilizando Machine Learning para página de filmes."
                link="https://eduardovsousa.github.io/gesture-controller/pages/titles/"
                github="https://github.com/eduardovsousa/gesture-controller"
                type="Projeto em destaque"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Clone do Evernote"
                img={project6}
                summary="Clone do sistema do Evernote, utilizando sistema de armazenamento e autenticação"
                link="https://js-note-client.herokuapp.com/"
                github="https://github.com/eduardovsousa/JavascriptNotesClient"
                type="Projeto em destaque"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Clone Netflix"
                img={project7}
                summary="Projeto clone da Netflix, onde você pode assistir os melhores cursos, estando sempre atualizado das maiores e melhores atualizações do mercado de TI."
                link="https://obt-evs-clone.herokuapp.com/"
                github="https://github.com/eduardovsousa/onebitflix_front-end_main"
                type="Projeto em destaque"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Sonic Toys"
                img={project8}
                summary="E-commerce criado para vendas de brinquedos"
                link="https://sonictoys.com.br"
                github="https://sonictoys.com.br"
                type="Projeto em destaque"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
